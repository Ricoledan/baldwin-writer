# Baldwin Writer

AI-Powered Content & Article Production Platform

## Overview

Baldwin Writer is an intelligent content creation platform that leverages the BMAD-METHOD (Breakthrough Method of Agile AI-driven Development) to produce high-quality articles, essays, and creative content through structured AI agent workflows.

Built on the bmad framework, Baldwin Writer orchestrates specialized AI agents to guide you through the entire content creation lifecycle—from ideation and research to drafting, editing, and quality assurance.

## How It Works

Baldwin Writer uses the bmad methodology to structure content production:

1. **Planning Phase** - Define content requirements, audience, and structure
2. **Research & Ideation** - Gather information and develop content strategy
3. **Development Phase** - Draft content with specialized writing agents
4. **Quality Assurance** - Review, edit, and fact-check
5. **Publication Ready** - Finalize content for distribution

Each phase is handled by specialized AI agents working in coordinated workflows, ensuring consistent, high-quality output.

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

Baldwin Writer employs specialized AI agents to handle different aspects of content creation:

- **analyst** - Content requirements and audience analysis
- **architect** - Content structure and information architecture
- **bmad-master** - Master content orchestrator
- **bmad-orchestrator** - Writing workflow coordination
- **dev** - Content development and drafting
- **pm** - Editorial project management
- **po** - Content owner and vision keeper
- **qa** - Quality assurance and fact-checking
- **sm** - Writing sprint facilitation
- **ux-expert** - Reader experience optimization

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

## Project Structure

```
.
├── bmad-core/         # Core BMAD framework (agents, workflows, templates)
├── common/            # Shared utilities and tasks
├── docs/              # Content templates and documentation
├── dist/              # Built agent distributions
├── expansion-packs/   # Writing domain extensions (creative, technical, etc.)
│   └── bmad-creative-writing/  # Creative writing workflows
├── tools/             # CLI and build tooling
├── flake.nix          # Nix development environment
└── package.json       # Project configuration
```

### Key Directories

- **bmad-core/**: Contains the AI agent system, content templates, and workflow definitions
- **expansion-packs/**: Domain-specific writing extensions (creative writing, technical docs, etc.)
- **docs/**: Contains PRDs, architecture docs, and content planning materials
- **dist/**: Compiled agent bundles ready for deployment

## License

MIT
