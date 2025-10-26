/**
 * Output Manager - Baldwin Writer
 * Manages content output organization, collections, and storage backends
 */

const fs = require('fs-extra');
const path = require('node:path');
const yaml = require('js-yaml');

class OutputManager {
  /**
   * @param {Object} options
   * @param {string} options.rootDir - Project root directory
   * @param {string} options.outputDir - Base output directory (default: 'output')
   */
  constructor(options = {}) {
    this.rootDir = options.rootDir || process.cwd();
    this.outputDir = path.join(this.rootDir, options.outputDir || 'output');
    this.collectionsDir = path.join(this.outputDir, 'collections');
    this.archiveDir = path.join(this.outputDir, 'archive');
  }

  /**
   * Initialize output directory structure
   */
  async initialize() {
    await fs.ensureDir(this.collectionsDir);
    await fs.ensureDir(this.archiveDir);
    console.log(`✓ Initialized output directories at ${this.outputDir}`);
  }

  /**
   * Create a new content collection
   * @param {string} collectionName - Name of the collection
   * @param {Object} metadata - Collection metadata
   * @returns {Promise<string>} - Path to the created collection
   */
  async createCollection(collectionName, metadata = {}) {
    const collectionPath = path.join(this.collectionsDir, collectionName);

    // Check if collection already exists
    if (await fs.pathExists(collectionPath)) {
      throw new Error(`Collection '${collectionName}' already exists`);
    }

    // Create collection structure
    await fs.ensureDir(path.join(collectionPath, 'drafts'));
    await fs.ensureDir(path.join(collectionPath, 'final'));
    await fs.ensureDir(path.join(collectionPath, 'research'));

    // Create metadata file
    const collectionMetadata = {
      name: collectionName,
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
      ...metadata,
    };

    await fs.writeJson(path.join(collectionPath, 'collection.json'), collectionMetadata, {
      spaces: 2,
    });

    console.log(`✓ Created collection: ${collectionName}`);
    console.log(`  Location: ${collectionPath}`);
    console.log(`  Structure: drafts/ | final/ | research/`);

    return collectionPath;
  }

  /**
   * Save content to a collection
   * @param {string} collectionName - Name of the collection
   * @param {string} stage - Stage: 'drafts', 'final', or 'research'
   * @param {string} fileName - File name
   * @param {string} content - Content to save
   * @param {Object} metadata - Optional content metadata
   */
  async saveContent(collectionName, stage, fileName, content, metadata = {}) {
    const validStages = ['drafts', 'final', 'research'];
    if (!validStages.includes(stage)) {
      throw new Error(`Invalid stage: ${stage}. Must be one of: ${validStages.join(', ')}`);
    }

    const collectionPath = path.join(this.collectionsDir, collectionName);

    // Ensure collection exists
    if (!(await fs.pathExists(collectionPath))) {
      throw new Error(`Collection '${collectionName}' does not exist`);
    }

    const stagePath = path.join(collectionPath, stage);
    const filePath = path.join(stagePath, fileName);

    // Save content
    await fs.writeFile(filePath, content, 'utf8');

    // Save metadata if provided
    if (Object.keys(metadata).length > 0) {
      const metadataPath = path.join(stagePath, `${fileName}.meta.json`);
      const fullMetadata = {
        fileName,
        stage,
        collection: collectionName,
        created: new Date().toISOString(),
        ...metadata,
      };
      await fs.writeJson(metadataPath, fullMetadata, { spaces: 2 });
    }

    // Update collection metadata
    await this._updateCollectionTimestamp(collectionName);

    console.log(`✓ Saved: ${collectionName}/${stage}/${fileName}`);
    return filePath;
  }

  /**
   * List all collections
   * @returns {Promise<Array>} - Array of collection info objects
   */
  async listCollections() {
    const collections = [];
    const collectionDirs = await fs.readdir(this.collectionsDir);

    for (const dir of collectionDirs) {
      const collectionPath = path.join(this.collectionsDir, dir);
      const stats = await fs.stat(collectionPath);

      if (stats.isDirectory()) {
        const metadataPath = path.join(collectionPath, 'collection.json');
        let metadata = { name: dir };

        if (await fs.pathExists(metadataPath)) {
          metadata = await fs.readJson(metadataPath);
        }

        // Count files in each stage
        const draftsCount = await this._countFiles(path.join(collectionPath, 'drafts'));
        const finalCount = await this._countFiles(path.join(collectionPath, 'final'));
        const researchCount = await this._countFiles(path.join(collectionPath, 'research'));

        collections.push({
          ...metadata,
          path: collectionPath,
          counts: {
            drafts: draftsCount,
            final: finalCount,
            research: researchCount,
          },
        });
      }
    }

    return collections;
  }

  /**
   * Archive a collection
   * @param {string} collectionName - Name of the collection to archive
   */
  async archiveCollection(collectionName) {
    const collectionPath = path.join(this.collectionsDir, collectionName);

    if (!(await fs.pathExists(collectionPath))) {
      throw new Error(`Collection '${collectionName}' does not exist`);
    }

    const timestamp = new Date().toISOString().replaceAll(':', '-').split('.')[0];
    const archivePath = path.join(this.archiveDir, `${collectionName}-${timestamp}`);

    await fs.move(collectionPath, archivePath);

    console.log(`✓ Archived collection: ${collectionName}`);
    console.log(`  Location: ${archivePath}`);

    return archivePath;
  }

  /**
   * Get collection info
   * @param {string} collectionName - Name of the collection
   * @returns {Promise<Object>} - Collection information
   */
  async getCollectionInfo(collectionName) {
    const collectionPath = path.join(this.collectionsDir, collectionName);

    if (!(await fs.pathExists(collectionPath))) {
      throw new Error(`Collection '${collectionName}' does not exist`);
    }

    const metadataPath = path.join(collectionPath, 'collection.json');
    let metadata = { name: collectionName };

    if (await fs.pathExists(metadataPath)) {
      metadata = await fs.readJson(metadataPath);
    }

    // Count files in each stage
    const draftsCount = await this._countFiles(path.join(collectionPath, 'drafts'));
    const finalCount = await this._countFiles(path.join(collectionPath, 'final'));
    const researchCount = await this._countFiles(path.join(collectionPath, 'research'));

    return {
      ...metadata,
      path: collectionPath,
      counts: {
        drafts: draftsCount,
        final: finalCount,
        research: researchCount,
      },
    };
  }

  /**
   * Update collection timestamp
   * @private
   */
  async _updateCollectionTimestamp(collectionName) {
    const metadataPath = path.join(this.collectionsDir, collectionName, 'collection.json');

    if (await fs.pathExists(metadataPath)) {
      const metadata = await fs.readJson(metadataPath);
      metadata.updated = new Date().toISOString();
      await fs.writeJson(metadataPath, metadata, { spaces: 2 });
    }
  }

  /**
   * Count non-metadata files in a directory
   * @private
   */
  async _countFiles(dirPath) {
    if (!(await fs.pathExists(dirPath))) {
      return 0;
    }

    const files = await fs.readdir(dirPath);
    // Exclude .meta.json files from count
    return files.filter((f) => !f.endsWith('.meta.json')).length;
  }
}

module.exports = OutputManager;
