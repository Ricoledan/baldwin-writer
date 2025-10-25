# Baldwin Writer

**Your AI Content Studio, Orchestrated**

## Overview

Baldwin Writer is a professional AI content studio that transforms content creation from chaotic iteration into a systematic, quality-driven process. Built on the proven [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) framework, Baldwin Writer orchestrates specialized AI agents through structured workflows—bringing software engineering rigor to the art of writing.

Unlike generic AI chat tools, Baldwin Writer provides:
- **Structured Workflows**: Repeatable processes from ideation through publication
- **Multi-Agent Collaboration**: Specialized AI personas working together like a professional content team
- **Quality Gates**: Built-in checklists and review processes ensuring excellence
- **Domain Expertise**: Expansion packs for creative writing, technical documentation, content marketing, and academic writing

**Stop prompting. Start producing.**

## How It Works

Baldwin Writer guides you through complete content project lifecycles with specialized AI agents:

### The Baldwin Writer Process

```
Planning → Content Architecture → Writing → Editorial Review → Publication
    ↓              ↓                  ↓            ↓              ↓
Strategist → Architect → Writer → Copy Editor → Sprint Lead
```

1. **Content Planning** - Content Strategist analyzes audience and defines requirements
2. **Architecture** - Content Architect designs structure and information hierarchy
3. **Creation** - Writer develops content following proven workflows
4. **Editorial Review** - Copy Editor ensures quality, consistency, and correctness
5. **Publication** - Content Sprint Lead coordinates final preparation and release

Each workflow includes quality gates, checklists, and iterative refinement—ensuring professional results every time.

## Prerequisites

- Node.js v20.10.0 or higher
- npm
- Nix (optional, for reproducible development environment)

## Setup

### Using Nix (Recommended)

If you have Nix with flakes enabled:

```bash
# Enter the development environment
nix develop

# Or use direnv (if .envrc is present)
direnv allow
```

### Manual Setup

```bash
# Install dependencies
npm install

# Validate installation
npm run validate
```

## AI Writing Agents

Baldwin Writer employs specialized AI agents working together like a professional content team:

### Core Content Team
- **Content Strategist** - Audience analysis, content requirements, and strategic planning
- **Content Architect** - Information architecture, structure design, and content blueprints
- **Writer** - Content creation, drafting, and development
- **Copy Editor** - Quality assurance, consistency checking, and editorial review
- **Content Sprint Lead** - Workflow facilitation and project coordination

### Orchestration Agents
- **Baldwin Master** - Master orchestrator coordinating all agents
- **Baldwin Orchestrator** - Workflow guidance and process management
- **Content Owner** - Vision keeper and strategic alignment
- **Editorial PM** - Content calendar and prioritization
- **Reader Experience Specialist** - Engagement optimization and clarity

### Expansion Pack Agents
Additional specialized agents available through domain-specific expansion packs:
- **Creative Writing**: Plot Architect, Character Psychologist, World Builder, Beta Reader
- **Technical Writing**: API Documentation Specialist, Tutorial Designer, Code Example Curator
- **Content Marketing**: SEO Specialist, Brand Voice Guardian, Campaign Strategist
- **Academic Writing**: Research Analyst, Citation Manager, Argument Architect

## Available Scripts

```bash
npm run build              # Build all agents and teams
npm run build:agents       # Build agents only
npm run build:teams        # Build teams only
npm run list:agents        # List available agents
npm run validate           # Validate configurations
npm run lint               # Lint code
npm run format             # Format code
```

## Who Should Use Baldwin Writer?

### 📚 Professional Fiction Writers
Write novels, screenplays, and creative fiction with specialized agents for plot structure, character development, and narrative pacing.

### 📝 Content Marketers & Bloggers
Produce consistent, high-quality content at scale with SEO optimization, brand voice consistency, and campaign workflows.

### 🔧 Technical Writers
Create accurate documentation with information architecture design, version tracking, and multiple document type support.

### 🎓 Academic & Researchers
Develop papers, theses, and research content with argument structure, citation management, and publication formatting.

## Project Structure

```
.
├── node_modules/
│   └── bmad-method/        # BMAD-METHOD framework (npm dependency)
├── baldwin-core/           # Baldwin Writer extensions
│   ├── agents/            # Content-focused agents extending BMAD
│   ├── workflows/         # Content project workflows
│   ├── templates/         # Content briefs, outlines, specifications
│   ├── checklists/        # Quality assurance checklists
│   ├── tasks/             # Content-specific tasks
│   └── core-config.yaml   # Extension configuration
├── expansion-packs/        # Domain-specific extensions
│   ├── bmad-creative-writing/      # Fiction, screenwriting, storytelling
│   ├── bmad-content-marketing/     # Blogs, articles, campaigns (coming soon)
│   ├── bmad-technical-writing/     # Documentation, tutorials, API docs (coming soon)
│   └── bmad-academic-writing/      # Papers, research, citations (coming soon)
├── docs/                   # Documentation and guides
│   ├── POSITIONING.md     # Brand identity and differentiation
│   ├── TERMINOLOGY.md     # Content creation terminology guide
│   └── user-guide.md      # Getting started guide
├── tools/                  # CLI and build tooling
└── dist/                   # Built agent bundles (generated by npm run build)
```

### Key Directories

- **node_modules/bmad-method/**: Base BMAD-METHOD framework (installed via npm)
- **baldwin-core/**: Baldwin Writer's content-focused extensions to BMAD
- **expansion-packs/**: Domain-specific agents and workflows for specialized content types
- **docs/**: Strategic positioning, terminology guides, and user documentation
- **dist/**: Generated agent bundles ready for deployment (run `npm run build`)

## What Makes Baldwin Writer Different?

### vs. Generic AI Chat (ChatGPT, Claude)
- ❌ **Generic AI**: Blank slate, undefined process, single AI personality
- ✅ **Baldwin Writer**: Structured workflows, multi-agent team, quality gates

### vs. Marketing AI Tools (Jasper, Copy.ai)
- ❌ **Marketing Tools**: Template-based snippets, marketing-only, single-shot generation
- ✅ **Baldwin Writer**: Complete project workflows, all content types, iterative refinement

### vs. Writing Software (Scrivener, Atticus)
- ❌ **Writing Software**: Organization tools, manual process, no AI assistance
- ✅ **Baldwin Writer**: AI-powered creation AND organization, guided workflows, automated quality checks

## Expansion Packs

Baldwin Writer's power comes from domain-specific expansion packs that provide deep expertise:

### Available Now
- **Creative Writing Studio** - Complete novel/screenplay workflows with 10 specialized agents

### Coming Soon
- **Content Marketing Suite** - SEO-optimized article production with campaign management
- **Technical Documentation** - API docs, tutorials, and technical content workflows
- **Academic Writing Lab** - Research papers, theses, and academic formatting

[Learn more about expansion packs →](expansion-packs/README.md)

## Documentation

- [Positioning & Identity](docs/POSITIONING.md) - Core messaging and differentiation
- [Terminology Guide](docs/TERMINOLOGY.md) - Content creation terminology reference
- [User Guide](docs/user-guide.md) - Getting started with Baldwin Writer
- [Core Architecture](docs/core-architecture.md) - Technical architecture overview
- [Expansion Pack Guide](docs/expansion-packs.md) - Creating domain-specific extensions

## Contributing

Baldwin Writer is built on BMAD-METHOD and welcomes contributions:

1. Agent improvements and new agents
2. Workflow refinements
3. Domain-specific expansion packs
4. Templates and checklists
5. Documentation enhancements

See [Contributing Guide](docs/how-to-contribute-with-pull-requests.md) for details.

## Acknowledgments

Baldwin Writer extends the [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) framework (v4.44.1) created by Brian (BMad). Baldwin Writer is installed via npm and layers content-creation expertise on top of BMAD's orchestration foundation. Special thanks to the BMAD community for creating a powerful natural language AI orchestration system.

---

**Process Over Prompts. Team Over Tool. Quality Built-In.**
