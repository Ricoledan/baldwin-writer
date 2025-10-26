const { program } = require('commander');
const path = require('node:path');
const fs = require('fs-extra');
const yaml = require('js-yaml');
const chalk = require('chalk');
const inquirer = require('inquirer');

// Get package version
let version;
try {
  version = require('../../../package.json').version;
} catch {
  version = '0.1.0';
}

program
  .version(version)
  .description(
    'Baldwin Writer - Initialize content creation workspace with Claude Code integration',
  );

program
  .command('init')
  .description('Initialize Baldwin Writer in current directory for Claude Code')
  .option('-d, --directory <path>', 'Target directory (default: current directory)', '.')
  .option('-m, --minimal', 'Install minimal agent set (writer, editor, strategist only)')
  .option('--no-context', 'Skip creating project context file')
  .option('-y, --yes', 'Skip confirmation prompts')
  .action(async (options) => {
    try {
      await initializeBaldwinWriter(options);
    } catch (error) {
      console.error(chalk.red('\n✗ Initialization failed:'), error.message);
      console.error(chalk.gray(error.stack));
      process.exit(1);
    }
  });

async function initializeBaldwinWriter(options) {
  const targetDir = path.resolve(options.directory);

  console.log(chalk.cyan('\n🎨 Baldwin Writer Initialization\n'));
  console.log(chalk.gray(`Target directory: ${targetDir}`));

  // Check if directory exists
  if (!(await fs.pathExists(targetDir))) {
    console.error(chalk.red(`\n✗ Directory does not exist: ${targetDir}`));
    process.exit(1);
  }

  // Check if already initialized
  const claudeDir = path.join(targetDir, '.claude', 'commands', 'Baldwin');
  if ((await fs.pathExists(claudeDir)) && !options.yes) {
    const { proceed } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'proceed',
        message: 'Baldwin Writer appears to be already initialized. Overwrite?',
        default: false,
      },
    ]);
    if (!proceed) {
      console.log(chalk.yellow('\n✓ Initialization cancelled'));
      process.exit(0);
    }
  }

  // Confirm with user (unless --yes flag)
  if (!options.yes) {
    console.log(chalk.white('\nThis will create:'));
    console.log(chalk.gray('  • .claude/commands/Baldwin/agents/ - Agent slash commands'));
    console.log(chalk.gray('  • .claude/commands/Baldwin/tasks/ - Task commands'));
    if (options.context !== false) {
      console.log(chalk.gray('  • .claude/project-context.md - Project awareness'));
    }
    console.log(chalk.gray('  • baldwin.config.yaml - Optional project configuration\n'));

    const { confirm } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Initialize Baldwin Writer for Claude Code?',
        default: true,
      },
    ]);

    if (!confirm) {
      console.log(chalk.yellow('\n✓ Initialization cancelled'));
      process.exit(0);
    }
  }

  console.log(chalk.cyan('\n⚙️  Setting up Baldwin Writer...\n'));

  // Load IDE configuration
  const baldwinRoot = path.join(__dirname, '../../..');
  const ideConfigPath = path.join(baldwinRoot, 'baldwin-core', 'ide-config.yaml');
  let ideConfig;

  try {
    const configContent = await fs.readFile(ideConfigPath, 'utf8');
    ideConfig = yaml.load(configContent);
  } catch (error) {
    console.error(chalk.red('✗ Could not load IDE configuration'));
    throw error;
  }

  // Determine which agents to install
  const agentsToInstall = options.minimal
    ? ideConfig['claude-code'].minimal_agents
    : Object.keys(ideConfig.agents);

  // Create directory structure
  const agentsDir = path.join(targetDir, '.claude', 'commands', 'Baldwin', 'agents');
  const tasksDir = path.join(targetDir, '.claude', 'commands', 'Baldwin', 'tasks');

  await fs.ensureDir(agentsDir);
  await fs.ensureDir(tasksDir);

  // Install agents
  console.log(chalk.white('📦 Installing agents...\n'));
  const baldwinAgentsDir = path.join(baldwinRoot, 'baldwin-core', 'agents');

  for (const agentId of agentsToInstall) {
    const agentFilePath = path.join(baldwinAgentsDir, `${agentId}.md`);
    const commandPath = path.join(agentsDir, `${agentId}.md`);

    if (await fs.pathExists(agentFilePath)) {
      let agentContent = await fs.readFile(agentFilePath, 'utf8');

      // Replace {root} placeholder with baldwin-core path
      agentContent = agentContent.replaceAll('{root}', 'baldwin-core');

      // Add command header
      const agentConfig = ideConfig.agents[agentId];
      const commandContent =
        `# ${agentConfig.command} Command\n\n` +
        `${agentConfig.description}\n\n` +
        `When this command is used, adopt the following agent persona:\n\n` +
        agentContent;

      await fs.writeFile(commandPath, commandContent);
      console.log(
        chalk.green(
          `  ✓ ${agentConfig.icon}  ${agentConfig.command.padEnd(25)} ${agentConfig.description}`,
        ),
      );
    } else {
      console.log(chalk.yellow(`  ⚠ Skipped ${agentId} (file not found)`));
    }
  }

  // Install key tasks
  console.log(chalk.white('\n📋 Installing tasks...\n'));
  const baldwinTasksDir = path.join(baldwinRoot, 'baldwin-core', 'tasks');
  const taskIds = Object.keys(ideConfig.tasks || {});

  for (const taskId of taskIds) {
    const taskFilePath = path.join(baldwinTasksDir, `${taskId}.md`);
    const commandPath = path.join(tasksDir, `${taskId}.md`);

    if (await fs.pathExists(taskFilePath)) {
      const taskContent = await fs.readFile(taskFilePath, 'utf8');
      const taskConfig = ideConfig.tasks[taskId];

      const commandContent =
        `# ${taskConfig.command} Command\n\n` + `${taskConfig.description}\n\n` + taskContent;

      await fs.writeFile(commandPath, commandContent);
      console.log(chalk.green(`  ✓ ${taskConfig.command.padEnd(25)} ${taskConfig.description}`));
    }
  }

  // Create project context file
  if (options.context !== false) {
    console.log(chalk.white('\n📄 Creating project context...\n'));
    const contextPath = path.join(targetDir, '.claude', 'project-context.md');
    const contextContent = generateProjectContext(ideConfig, agentsToInstall, options.minimal);
    await fs.writeFile(contextPath, contextContent);
    console.log(chalk.green('  ✓ .claude/project-context.md'));
  }

  // Create optional project configuration file
  const configPath = path.join(targetDir, 'baldwin.config.yaml');
  if (!(await fs.pathExists(configPath))) {
    const projectConfig = {
      name: path.basename(targetDir),
      type: 'content-project',
      version: '1.0.0',
      baldwin: {
        version: version,
        agents: agentsToInstall,
      },
      directories: {
        docs: 'docs',
        content: 'content',
        output: 'output',
      },
      output: {
        structure: 'collections',
        stages: ['drafts', 'final', 'research'],
        integrations: {
          obsidian: {
            enabled: false,
            vault_path: null,
          },
        },
      },
    };

    await fs.writeFile(configPath, yaml.dump(projectConfig));
    console.log(chalk.white('\n⚙️  Created configuration:\n'));
    console.log(chalk.green('  ✓ baldwin.config.yaml'));
  }

  // Success message
  console.log(chalk.green.bold('\n✓ Baldwin Writer initialized successfully!\n'));
  console.log(chalk.white('Next steps:\n'));
  console.log(chalk.gray('  1. Open this directory in Claude Code'));
  console.log(chalk.gray('  2. Use slash commands like /writer or /content-strategist'));
  console.log(chalk.gray('  3. Type /help in any agent to see available commands\n'));

  console.log(chalk.cyan('Available agents:'));
  for (const agentId of agentsToInstall) {
    const agent = ideConfig.agents[agentId];
    if (agent) {
      console.log(chalk.gray(`  ${agent.command} - ${agent.description}`));
    }
  }

  console.log(chalk.white('\n📚 Documentation: https://github.com/your-repo/baldwin-writer\n'));
}

function generateProjectContext(ideConfig, installedAgents, minimal) {
  let content = `# Baldwin Writer Content Project

This is a Baldwin Writer content creation project.

## About Baldwin Writer

Baldwin Writer is your AI-powered content studio. It provides specialized AI agents
that work together like a professional content team, guiding you through structured
workflows from ideation to publication.

## Available Agents

`;

  // List installed agents
  for (const agentId of installedAgents) {
    const agent = ideConfig.agents[agentId];
    if (agent) {
      content += `- **${agent.command}** ${agent.icon} - ${agent.description}\n`;
    }
  }

  content += `
## Getting Started

1. **Content Planning**: Start with \`/content-strategist\` to analyze your audience and plan content
2. **Content Architecture**: Use \`/content-architect\` to design structure and information hierarchy
3. **Writing**: Activate \`/writer\` to create content from outlines and briefs
4. **Quality Review**: Run \`/copy-editor\` for editorial review and quality assurance
5. **Coordination**: Use \`/content-sprint-lead\` for workflow facilitation

## Project Configuration

- Config: \`baldwin.config.yaml\`
- Core: \`baldwin-core/core-config.yaml\`
- Docs: \`docs/\` directory

## Workflows

Baldwin Writer guides you through complete content lifecycles with structured
workflows, quality gates, and iterative refinement.

---

**Process Over Prompts. Team Over Tool. Quality Built-In.**
`;

  return content;
}

// If run directly
if (require.main === module) {
  program.parse(process.argv);

  // Show help if no command provided
  if (process.argv.slice(2).length === 0) {
    program.outputHelp();
  }
}

module.exports = { initializeBaldwinWriter };
