/**
 * Build Core - Merges BMAD-METHOD core with Baldwin Writer extensions
 *
 * This script creates a merged core that combines:
 * 1. BMAD-METHOD base framework (from node_modules/bmad-method/bmad-core)
 * 2. Baldwin Writer extensions (from baldwin-core/)
 *
 * Output: dist/baldwin-core/ (ready for npm distribution)
 */

const fs = require('fs-extra');
const path = require('node:path');
const chalk = require('chalk');

const ROOT_DIR = path.join(__dirname, '..');
const BMAD_CORE_SOURCE = path.join(ROOT_DIR, 'node_modules', 'bmad-method', 'bmad-core');
const BALDWIN_CORE_SOURCE = path.join(ROOT_DIR, 'baldwin-core');
const OUTPUT_DIR = path.join(ROOT_DIR, 'dist', '.baldwin', 'core');

async function buildCore() {
  console.log(chalk.bold.cyan('\n🔨 Building Baldwin Writer Core\n'));

  try {
    // Step 1: Validate sources exist
    console.log(chalk.gray('Validating sources...'));
    if (!(await fs.pathExists(BMAD_CORE_SOURCE))) {
      throw new Error(`BMAD core not found at: ${BMAD_CORE_SOURCE}\nRun: npm install`);
    }
    if (!(await fs.pathExists(BALDWIN_CORE_SOURCE))) {
      throw new Error(`Baldwin core not found at: ${BALDWIN_CORE_SOURCE}`);
    }
    console.log(chalk.green('✓ Sources validated\n'));

    // Step 2: Clean output directory
    console.log(chalk.gray('Cleaning output directory...'));
    await fs.remove(OUTPUT_DIR);
    await fs.ensureDir(OUTPUT_DIR);
    console.log(chalk.green('✓ Output directory ready\n'));

    // Step 3: Copy BMAD core as base (excluding redundant agents)
    console.log(chalk.gray('Copying BMAD-METHOD core as base layer...'));
    const excludedAgents = [
      'analyst',
      'architect',
      'dev',
      'pm',
      'po',
      'qa',
      'sm',
      'ux-expert',
      'bmad-master',
      'bmad-orchestrator',
    ];

    await fs.copy(BMAD_CORE_SOURCE, OUTPUT_DIR, {
      filter: (src) => {
        const relativePath = path.relative(BMAD_CORE_SOURCE, src);

        // Skip node_modules, git, and other non-essential files
        if (relativePath.includes('node_modules')) return false;
        if (relativePath.includes('.git')) return false;

        // Skip redundant BMAD agents (Baldwin has content-specific equivalents)
        const pathParts = relativePath.split(path.sep);
        if (pathParts[0] === 'agents' && pathParts.length > 1) {
          const agentName = pathParts[1].replace(/\.md$/, '');
          if (excludedAgents.includes(agentName)) {
            return false;
          }
        }

        return true;
      },
    });
    console.log(
      chalk.green(`✓ BMAD core copied (excluded ${excludedAgents.length} redundant agents)\n`),
    );

    // Step 4: Overlay Baldwin extensions
    console.log(chalk.gray('Overlaying Baldwin Writer extensions...'));
    const baldwinFiles = await copyBaldwinExtensions(BALDWIN_CORE_SOURCE, OUTPUT_DIR);
    console.log(chalk.green(`✓ ${baldwinFiles.length} Baldwin files overlaid\n`));

    // Step 5: Update core-config.yaml to remove node_modules reference
    console.log(chalk.gray('Updating core configuration...'));
    await updateCoreConfig(OUTPUT_DIR);
    console.log(chalk.green('✓ Configuration updated\n'));

    // Summary
    console.log(chalk.bold.green('✨ Build complete!\n'));
    console.log(chalk.gray(`Output: ${OUTPUT_DIR}`));
    console.log(chalk.gray(`Ready for: npm publish\n`));
  } catch (error) {
    console.error(chalk.red('\n❌ Build failed:'), error.message);
    process.exit(1);
  }
}

/**
 * Copy Baldwin extensions, overlaying on top of BMAD core
 */
async function copyBaldwinExtensions(source, dest) {
  const copiedFiles = [];

  async function copyRecursive(srcDir, destDir) {
    const entries = await fs.readdir(srcDir, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(srcDir, entry.name);
      const destPath = path.join(destDir, entry.name);

      if (entry.isDirectory()) {
        await fs.ensureDir(destPath);
        await copyRecursive(srcPath, destPath);
      } else {
        await fs.copy(srcPath, destPath, { overwrite: true });
        copiedFiles.push(path.relative(source, srcPath));
      }
    }
  }

  await copyRecursive(source, dest);
  return copiedFiles;
}

/**
 * Update core-config.yaml to remove node_modules reference
 * since everything is now merged
 */
async function updateCoreConfig(outputDir) {
  const configPath = path.join(outputDir, 'core-config.yaml');
  if (await fs.pathExists(configPath)) {
    let config = await fs.readFile(configPath, 'utf8');

    // Remove the "extends: node_modules/bmad-method/bmad-core" line
    // since we've already merged it
    config = config.replace(/extends:\s*node_modules\/bmad-method\/bmad-core\n?/, '');

    // Update comment to reflect merged state
    config = config.replace(
      /# Extends BMAD-METHOD with content creation focus/,
      '# Baldwin Writer Core - Merged with BMAD-METHOD framework',
    );

    await fs.writeFile(configPath, config, 'utf8');
  }
}

// Run the build
buildCore();
