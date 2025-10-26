/**
 * Diagram Generator - Baldwin Writer
 * Generate diagrams for content visualization using Mermaid and Excalidraw
 */

const fs = require('fs-extra');
const path = require('node:path');
const {
  parseMermaid,
  MermaidToExcalidrawLibAdapter,
} = require('@excalidraw/mermaid-to-excalidraw');

class DiagramGenerator {
  /**
   * @param {Object} options
   * @param {string} options.outputDir - Directory for diagram output
   */
  constructor(options = {}) {
    this.outputDir = options.outputDir || path.join(process.cwd(), 'diagrams');
  }

  /**
   * Generate a Mermaid diagram from text description
   * @param {string} description - Text description of the diagram
   * @param {string} diagramType - Type of diagram (flowchart, sequence, class, etc.)
   * @returns {Promise<string>} - Mermaid diagram syntax
   */
  async generateMermaidFromDescription(description, diagramType = 'flowchart') {
    // This is a placeholder that would integrate with an LLM to convert
    // description to Mermaid syntax. For now, we'll return a template.
    const templates = {
      flowchart: `graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E`,
      sequence: `sequenceDiagram
    participant User
    participant System
    User->>System: Request
    System-->>User: Response`,
      class: `classDiagram
    class Article {
        +String title
        +String content
        +Date publishDate
        +publish()
    }`,
    };

    return (
      templates[diagramType] ||
      `graph TD
    A[${description}]`
    );
  }

  /**
   * Validate Mermaid syntax
   * @param {string} mermaidCode - Mermaid diagram code
   * @returns {boolean} - Whether the syntax is valid
   */
  validateMermaid(mermaidCode) {
    // Basic validation - check for diagram type keywords
    const validTypes = [
      'graph',
      'flowchart',
      'sequenceDiagram',
      'classDiagram',
      'stateDiagram',
      'erDiagram',
      'gantt',
      'pie',
      'journey',
    ];

    return validTypes.some((type) => mermaidCode.trim().startsWith(type));
  }

  /**
   * Convert Mermaid diagram to Excalidraw format
   * @param {string} mermaidCode - Mermaid diagram code
   * @returns {Promise<Object>} - Excalidraw diagram data
   */
  async convertToExcalidraw(mermaidCode) {
    try {
      // Parse Mermaid syntax
      const { elements, files } = await parseMermaid({
        definition: mermaidCode,
        config: {},
      });

      // Convert to Excalidraw format using the adapter
      const excalidrawData = MermaidToExcalidrawLibAdapter(elements, files);

      return excalidrawData;
    } catch (error) {
      throw new Error(`Failed to convert Mermaid to Excalidraw: ${error.message}`);
    }
  }

  /**
   * Save diagram to file
   * @param {string} fileName - File name (without extension)
   * @param {string} content - Diagram content
   * @param {string} format - File format ('mermaid', 'excalidraw', 'json')
   * @returns {Promise<string>} - Path to saved file
   */
  async saveDiagram(fileName, content, format = 'mermaid') {
    await fs.ensureDir(this.outputDir);

    const extensions = {
      mermaid: '.mmd',
      excalidraw: '.excalidraw',
      json: '.json',
    };

    const extension = extensions[format] || '.txt';
    const filePath = path.join(this.outputDir, `${fileName}${extension}`);

    if (typeof content === 'object') {
      await fs.writeJson(filePath, content, { spaces: 2 });
    } else {
      await fs.writeFile(filePath, content, 'utf8');
    }

    return filePath;
  }

  /**
   * Generate and save a complete diagram workflow
   * @param {Object} options
   * @param {string} options.name - Diagram name
   * @param {string} options.mermaidCode - Mermaid diagram code
   * @param {boolean} options.saveExcalidraw - Also save Excalidraw version
   * @returns {Promise<Object>} - Paths to saved diagrams
   */
  async generateDiagram(options) {
    const { name, mermaidCode, saveExcalidraw = true } = options;

    if (!this.validateMermaid(mermaidCode)) {
      throw new Error('Invalid Mermaid syntax');
    }

    const results = {};

    // Save Mermaid version
    results.mermaid = await this.saveDiagram(name, mermaidCode, 'mermaid');

    // Convert and save Excalidraw version if requested
    if (saveExcalidraw) {
      try {
        const excalidrawData = await this.convertToExcalidraw(mermaidCode);
        results.excalidraw = await this.saveDiagram(name, excalidrawData, 'excalidraw');
      } catch (error) {
        console.warn(`Warning: Could not generate Excalidraw version: ${error.message}`);
      }
    }

    return results;
  }

  /**
   * Get common diagram templates for content workflows
   * @returns {Object} - Map of template names to Mermaid code
   */
  getContentTemplates() {
    return {
      // Content Strategy & General Templates
      'content-workflow': `graph TD
    A[Content Brief] --> B[Research]
    B --> C[Outline]
    C --> D[Draft]
    D --> E[Review]
    E --> F{Approved?}
    F -->|Yes| G[Publish]
    F -->|No| D
    G --> H[Distribute]`,

      'article-structure': `graph TD
    A[Article] --> B[Introduction]
    A --> C[Body]
    A --> D[Conclusion]
    B --> E[Hook]
    B --> F[Context]
    C --> G[Section 1]
    C --> H[Section 2]
    C --> I[Section 3]
    D --> J[Summary]
    D --> K[Call to Action]`,

      'content-sprint': `gantt
    title Content Sprint Timeline
    dateFormat YYYY-MM-DD
    section Planning
    Content Brief      :2024-01-01, 2d
    Research          :2024-01-03, 3d
    section Development
    Outlining         :2024-01-06, 1d
    Drafting          :2024-01-07, 5d
    section Review
    Editorial Review  :2024-01-12, 2d
    Revisions        :2024-01-14, 2d
    section Publication
    Final Approval    :2024-01-16, 1d
    Publishing        :2024-01-17, 1d`,

      'agent-collaboration': `sequenceDiagram
    participant CS as Content Strategist
    participant CA as Content Architect
    participant W as Writer
    participant CE as Copy Editor
    CS->>CA: Content Brief
    CA->>W: Content Outline
    W->>CE: Draft Content
    CE->>W: Feedback
    W->>CE: Revised Draft
    CE->>CS: Final Content`,

      'content-hierarchy': `graph TD
    A[Content Hub] --> B[Pillar Article 1]
    A --> C[Pillar Article 2]
    A --> D[Pillar Article 3]
    B --> E[Supporting Post 1.1]
    B --> F[Supporting Post 1.2]
    C --> G[Supporting Post 2.1]
    C --> H[Supporting Post 2.2]
    D --> I[Supporting Post 3.1]
    D --> J[Supporting Post 3.2]`,

      // Content Strategy Specific
      'content-funnel': `graph TD
    A[Awareness: Blog Posts, Social] --> B[Interest: Guides, Webinars]
    B --> C[Consideration: Case Studies, Comparisons]
    C --> D[Intent: Product Pages, Demos]
    D --> E[Conversion: Free Trial, Purchase]
    E --> F[Retention: Onboarding, Support Content]`,

      'topic-cluster': `graph TD
    P[Pillar Topic Page] --> S1[Subtopic Cluster 1]
    P --> S2[Subtopic Cluster 2]
    P --> S3[Subtopic Cluster 3]
    S1 --> A1[Supporting Article 1.1]
    S1 --> A2[Supporting Article 1.2]
    S1 --> A3[Supporting Article 1.3]
    S2 --> A4[Supporting Article 2.1]
    S2 --> A5[Supporting Article 2.2]
    S3 --> A6[Supporting Article 3.1]
    S3 --> A7[Supporting Article 3.2]`,

      'audience-journey': `sequenceDiagram
    participant V as Visitor
    participant C as Content
    participant S as System
    participant U as User
    V->>C: Discovers via Search
    C->>V: Provides Initial Value
    V->>C: Explores Related Content
    C->>S: Captures Email
    S->>U: Sends Nurture Sequence
    U->>C: Returns for More Content
    U->>S: Becomes Customer`,

      // Creative Writing Templates
      'story-structure-three-act': `graph TD
    A1[Act I: Setup] --> B[Inciting Incident]
    B --> C[Plot Point 1: Break into Act 2]
    C --> A2[Act II: Confrontation]
    A2 --> D[Rising Action]
    D --> E[Midpoint: Shift]
    E --> F[Complications]
    F --> G[Plot Point 2: Break into Act 3]
    G --> A3[Act III: Resolution]
    A3 --> H[Climax: Confrontation]
    H --> I[Falling Action]
    I --> J[Denouement: Resolution]`,

      'heros-journey': `graph LR
    OW[Ordinary World] --> CTA[Call to Adventure]
    CTA --> RC[Refusal of Call]
    RC --> MM[Meeting Mentor]
    MM --> CT[Crossing Threshold]
    CT --> TAR[Tests Allies Enemies]
    TAR --> AIM[Approach Inmost Cave]
    AIM --> O[Ordeal]
    O --> R[Reward Seizing Sword]
    R --> RJ[The Road Back]
    RJ --> RES[Resurrection]
    RES --> RTW[Return with Elixir]`,

      'character-relationships': `graph TD
    P[Protagonist] -->|Loves| L[Love Interest]
    P -->|Opposes| A[Antagonist]
    P -->|Mentored by| M[Mentor]
    P -->|Supports| S[Sidekick]
    A -->|Controls| M2[Minion]
    A -->|Manipulates| L
    M -->|Guides| P
    S -->|Befriends| L
    L -->|Trusts| P
    M2 -->|Serves| A`,

      'character-arc': `gantt
    title Character Development Arc
    dateFormat YYYY-MM-DD
    section Identity
    Ordinary World          :2024-01-01, 10d
    Disruption & Catalyst   :2024-01-11, 5d
    section Growth
    Struggle & Resistance   :2024-01-16, 10d
    Learning & Adapting     :2024-01-26, 10d
    section Transformation
    Dark Night of Soul      :2024-02-05, 5d
    Breakthrough            :2024-02-10, 5d
    New Identity Emerges    :2024-02-15, 5d`,

      'plot-timeline': `timeline
    title Story Plot Timeline
    Setup : Introduce protagonist : Establish ordinary world : Present the problem : Meet key characters
    Rising Action : First attempt fails : Stakes increase : New ally appears : Secrets revealed
    Midpoint : Major revelation : Point of no return : Shift in power dynamics : New goal emerges
    Complications : Plans go wrong : Betrayal or loss : Pressure mounts : Dark moment approaches
    Climax : Final confrontation : All is lost moment : Ultimate choice : Victory or defeat
    Resolution : New normal established : Loose ends tied : Character growth shown : Theme reinforced`,

      'world-hierarchy': `graph TD
    W[Story World] --> G[Geography]
    W --> S[Society]
    W --> M[Magic/Technology]
    W --> H[History]
    G --> R[Regions/Kingdoms]
    G --> C[Climate/Terrain]
    G --> L[Landmarks]
    S --> CU[Culture/Customs]
    S --> P[Politics/Power]
    S --> E[Economy/Trade]
    S --> SO[Social Structure]
    M --> RU[Rules/Laws]
    M --> LI[Limitations]
    M --> SO2[Sources]
    H --> ER[Historical Eras]
    H --> EV[Key Events]
    H --> MY[Myths/Legends]`,
    };
  }

  /**
   * Generate a diagram from a template
   * @param {string} templateName - Name of the template
   * @param {string} outputName - Output file name
   * @returns {Promise<Object>} - Paths to saved diagrams
   */
  async generateFromTemplate(templateName, outputName) {
    const templates = this.getContentTemplates();
    const mermaidCode = templates[templateName];

    if (!mermaidCode) {
      throw new Error(
        `Template '${templateName}' not found. Available: ${Object.keys(templates).join(', ')}`,
      );
    }

    return await this.generateDiagram({
      name: outputName || templateName,
      mermaidCode,
      saveExcalidraw: true,
    });
  }
}

module.exports = DiagramGenerator;
