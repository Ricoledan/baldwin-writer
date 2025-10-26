const { Command } = require('commander');
const WebBuilder = require('./builders/web-builder');
const V3ToV4Upgrader = require('./upgraders/v3-to-v4-upgrader');
const IdeSetup = require('./installer/lib/ide-setup');
const OutputManager = require('./lib/output-manager');
const DiagramGenerator = require('./lib/diagram-generator');
const path = require('node:path');
const chalk = require('chalk');
const inquirer = require('inquirer').default || require('inquirer');

const program = new Command();

program
  .name('baldwin')
  .description('Baldwin Writer - AI-Powered Content Studio build tool')
  .version('4.0.0');

program
  .command('build')
  .description('Build Baldwin Writer agents and content workflows')
  .option('-a, --agents-only', 'Build only content agent bundles')
  .option('-t, --teams-only', 'Build only content team bundles')
  .option('-e, --expansions-only', 'Build only expansion pack bundles')
  .option('--no-expansions', 'Skip building expansion packs')
  .option('--no-clean', 'Skip cleaning output directories')
  .action(async (options) => {
    const builder = new WebBuilder({
      rootDir: process.cwd(),
    });

    try {
      if (options.clean) {
        console.log('Cleaning output directories...');
        await builder.cleanOutputDirs();
      }

      if (options.expansionsOnly) {
        console.log('Building expansion pack bundles...');
        await builder.buildAllExpansionPacks({ clean: false });
      } else {
        if (!options.teamsOnly) {
          console.log('Building agent bundles...');
          await builder.buildAgents();
        }

        if (!options.agentsOnly) {
          console.log('Building team bundles...');
          await builder.buildTeams();
        }

        if (!options.noExpansions) {
          console.log('Building expansion pack bundles...');
          await builder.buildAllExpansionPacks({ clean: false });
        }
      }

      console.log('Build completed successfully!');
    } catch (error) {
      console.error('Build failed:', error.message);
      process.exit(1);
    }
  });

program
  .command('build:expansions')
  .description('Build web bundles for all expansion packs')
  .option('--expansion <name>', 'Build specific expansion pack only')
  .option('--no-clean', 'Skip cleaning output directories')
  .action(async (options) => {
    const builder = new WebBuilder({
      rootDir: process.cwd(),
    });

    try {
      if (options.expansion) {
        console.log(`Building expansion pack: ${options.expansion}`);
        await builder.buildExpansionPack(options.expansion, { clean: options.clean });
      } else {
        console.log('Building all expansion packs...');
        await builder.buildAllExpansionPacks({ clean: options.clean });
      }

      console.log('Expansion pack build completed successfully!');
    } catch (error) {
      console.error('Expansion pack build failed:', error.message);
      process.exit(1);
    }
  });

program
  .command('list:agents')
  .description('List all available content agents')
  .action(async () => {
    const builder = new WebBuilder({ rootDir: process.cwd() });
    const agents = await builder.resolver.listAgents();
    console.log('Available content agents:');
    for (const agent of agents) console.log(`  - ${agent}`);
    process.exit(0);
  });

program
  .command('list:expansions')
  .description('List all available expansion packs')
  .action(async () => {
    const builder = new WebBuilder({ rootDir: process.cwd() });
    const expansions = await builder.listExpansionPacks();
    console.log('Available expansion packs:');
    for (const expansion of expansions) console.log(`  - ${expansion}`);
    process.exit(0);
  });

program
  .command('validate')
  .description('Validate Baldwin Writer agent and workflow configurations')
  .action(async () => {
    const builder = new WebBuilder({ rootDir: process.cwd() });
    try {
      // Validate by attempting to build all agents and teams
      const agents = await builder.resolver.listAgents();
      const teams = await builder.resolver.listTeams();

      console.log('Validating content agents...');
      for (const agent of agents) {
        await builder.resolver.resolveAgentDependencies(agent);
        console.log(`  ✓ ${agent}`);
      }

      console.log('\nValidating content teams...');
      for (const team of teams) {
        await builder.resolver.resolveTeamDependencies(team);
        console.log(`  ✓ ${team}`);
      }

      console.log('\nAll Baldwin Writer configurations are valid!');
    } catch (error) {
      console.error('Validation failed:', error.message);
      process.exit(1);
    }
  });

program
  .command('upgrade', { hidden: true }) // Hidden: internal BMAD compatibility command
  .description('Upgrade a BMAD-METHOD™ V3 project to V4')
  .option('-p, --project <path>', 'Path to V3 project (defaults to current directory)')
  .option('--dry-run', 'Show what would be changed without making changes')
  .option('--no-backup', 'Skip creating backup (not recommended)')
  .action(async (options) => {
    const upgrader = new V3ToV4Upgrader();
    await upgrader.upgrade({
      projectPath: options.project,
      dryRun: options.dryRun,
      backup: options.backup,
    });
  });

// Output Management Commands
program
  .command('output:init')
  .description('Initialize output directory structure')
  .option('-d, --directory <path>', 'Output directory (default: output)')
  .action(async (options) => {
    try {
      const outputManager = new OutputManager({
        rootDir: process.cwd(),
        outputDir: options.directory,
      });
      await outputManager.initialize();
      console.log(chalk.green('\n✓ Output structure initialized!'));
      console.log(
        chalk.gray(`\nYou can now create collections with: baldwin output:create <name>`),
      );
    } catch (error) {
      console.error(chalk.red('Failed to initialize output:'), error.message);
      process.exit(1);
    }
  });

program
  .command('output:create <collection-name>')
  .description('Create a new content collection')
  .option('-d, --description <text>', 'Collection description')
  .option('-t, --tags <tags>', 'Comma-separated tags')
  .action(async (collectionName, options) => {
    try {
      const outputManager = new OutputManager({ rootDir: process.cwd() });

      const metadata = {};
      if (options.description) metadata.description = options.description;
      if (options.tags) metadata.tags = options.tags.split(',').map((t) => t.trim());

      await outputManager.createCollection(collectionName, metadata);
      console.log(chalk.green('\n✓ Collection ready for content!'));
    } catch (error) {
      console.error(chalk.red('Failed to create collection:'), error.message);
      process.exit(1);
    }
  });

program
  .command('output:list')
  .description('List all content collections')
  .action(async () => {
    try {
      const outputManager = new OutputManager({ rootDir: process.cwd() });
      const collections = await outputManager.listCollections();

      if (collections.length === 0) {
        console.log(chalk.yellow('No collections found.'));
        console.log(chalk.gray('Create one with: baldwin output:create <name>'));
        return;
      }

      console.log(chalk.bold.cyan('\n📚 Content Collections:\n'));
      for (const collection of collections) {
        console.log(chalk.bold(`${collection.name}`));
        if (collection.description) {
          console.log(chalk.gray(`  ${collection.description}`));
        }
        console.log(
          chalk.white(
            `  Drafts: ${collection.counts.drafts} | Final: ${collection.counts.final} | Research: ${collection.counts.research}`,
          ),
        );
        console.log(chalk.dim(`  Updated: ${new Date(collection.updated).toLocaleString()}`));
        console.log();
      }
    } catch (error) {
      console.error(chalk.red('Failed to list collections:'), error.message);
      process.exit(1);
    }
  });

program
  .command('output:archive <collection-name>')
  .description('Archive a content collection')
  .action(async (collectionName) => {
    try {
      const outputManager = new OutputManager({ rootDir: process.cwd() });
      await outputManager.archiveCollection(collectionName);
      console.log(chalk.green('\n✓ Collection archived successfully!'));
    } catch (error) {
      console.error(chalk.red('Failed to archive collection:'), error.message);
      process.exit(1);
    }
  });

program
  .command('output:info <collection-name>')
  .description('Show detailed information about a collection')
  .action(async (collectionName) => {
    try {
      const outputManager = new OutputManager({ rootDir: process.cwd() });
      const info = await outputManager.getCollectionInfo(collectionName);

      console.log(chalk.bold.cyan(`\n📖 Collection: ${info.name}\n`));
      if (info.description) {
        console.log(chalk.white(`Description: ${info.description}`));
      }
      if (info.tags && info.tags.length > 0) {
        console.log(chalk.white(`Tags: ${info.tags.join(', ')}`));
      }
      console.log(chalk.white(`Created: ${new Date(info.created).toLocaleString()}`));
      console.log(chalk.white(`Updated: ${new Date(info.updated).toLocaleString()}`));
      console.log(chalk.white(`Path: ${info.path}`));
      console.log(
        chalk.white(
          `\nContent: ${info.counts.drafts} drafts | ${info.counts.final} final | ${info.counts.research} research\n`,
        ),
      );
    } catch (error) {
      console.error(chalk.red('Failed to get collection info:'), error.message);
      process.exit(1);
    }
  });

// Diagram Generation Commands
program
  .command('diagram')
  .description('Generate content visualization diagrams')
  .option('-n, --name <name>', 'Diagram name')
  .option('-t, --template <template>', 'Use a template (content-workflow, article-structure, etc.)')
  .option('-m, --mermaid <code>', 'Mermaid diagram code')
  .option('-o, --output <dir>', 'Output directory', 'diagrams')
  .option('--list-templates', 'List available templates')
  .action(async (options) => {
    try {
      const diagramGenerator = new DiagramGenerator({ outputDir: options.output });

      // List templates if requested
      if (options.listTemplates) {
        const templates = diagramGenerator.getContentTemplates();
        console.log(chalk.bold.cyan('\n📊 Available Diagram Templates:\n'));
        for (const [name, code] of Object.entries(templates)) {
          console.log(chalk.bold(`  ${name}`));
          console.log(chalk.gray(`    ${code.split('\n')[0]}...`));
          console.log();
        }
        return;
      }

      // Interactive mode if no options provided
      if (!options.template && !options.mermaid) {
        console.log(chalk.cyan('\n📊 Baldwin Writer Diagram Generator\n'));

        const answers = await inquirer.prompt([
          {
            type: 'list',
            name: 'mode',
            message: 'How would you like to create your diagram?',
            choices: [
              { name: 'Use a template', value: 'template' },
              { name: 'Enter Mermaid code', value: 'custom' },
            ],
          },
        ]);

        if (answers.mode === 'template') {
          const templates = Object.keys(diagramGenerator.getContentTemplates());
          const { template, name } = await inquirer.prompt([
            {
              type: 'list',
              name: 'template',
              message: 'Select a template:',
              choices: templates,
            },
            {
              type: 'input',
              name: 'name',
              message: 'Enter diagram name:',
              default: (answers) => answers.template,
            },
          ]);

          const results = await diagramGenerator.generateFromTemplate(template, name);
          console.log(chalk.green('\n✓ Diagram generated successfully!'));
          console.log(chalk.white(`  Mermaid: ${results.mermaid}`));
          if (results.excalidraw) {
            console.log(chalk.white(`  Excalidraw: ${results.excalidraw}`));
          }
        } else {
          const { name, mermaidCode } = await inquirer.prompt([
            {
              type: 'input',
              name: 'name',
              message: 'Enter diagram name:',
              validate: (input) => input.trim().length > 0,
            },
            {
              type: 'editor',
              name: 'mermaidCode',
              message: 'Enter Mermaid code (editor will open):',
            },
          ]);

          const results = await diagramGenerator.generateDiagram({ name, mermaidCode });
          console.log(chalk.green('\n✓ Diagram generated successfully!'));
          console.log(chalk.white(`  Mermaid: ${results.mermaid}`));
          if (results.excalidraw) {
            console.log(chalk.white(`  Excalidraw: ${results.excalidraw}`));
          }
        }
        return;
      }

      // Template mode
      if (options.template) {
        const name = options.name || options.template;
        const results = await diagramGenerator.generateFromTemplate(options.template, name);
        console.log(chalk.green('\n✓ Diagram generated from template!'));
        console.log(chalk.white(`  Mermaid: ${results.mermaid}`));
        if (results.excalidraw) {
          console.log(chalk.white(`  Excalidraw: ${results.excalidraw}`));
        }
        return;
      }

      // Custom Mermaid code mode
      if (options.mermaid) {
        if (!options.name) {
          console.error(chalk.red('Error: --name is required when using --mermaid'));
          process.exit(1);
        }
        const results = await diagramGenerator.generateDiagram({
          name: options.name,
          mermaidCode: options.mermaid,
        });
        console.log(chalk.green('\n✓ Diagram generated!'));
        console.log(chalk.white(`  Mermaid: ${results.mermaid}`));
        if (results.excalidraw) {
          console.log(chalk.white(`  Excalidraw: ${results.excalidraw}`));
        }
      }
    } catch (error) {
      console.error(chalk.red('Failed to generate diagram:'), error.message);
      process.exit(1);
    }
  });

program.parse();
