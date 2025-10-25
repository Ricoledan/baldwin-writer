# Claude Code Integration Guide

This guide explains how to use Baldwin Writer with Claude Code for AI-powered content creation.

## Overview

Baldwin Writer integrates with Claude Code through project-specific slash commands and context awareness. This keeps your content projects separate from code projects while providing powerful AI agents when you need them.

## Quick Start

### 1. Install Baldwin Writer

```bash
# If published to npm (future)
npm install -g baldwin-writer

# Or clone and install locally
git clone <repo-url>
cd baldwin-writer
npm install
npm link  # Makes baldwin-init available globally
```

### 2. Create a Content Project

```bash
# Create your content directory
mkdir ~/writing/my-novel
cd ~/writing/my-novel

# Initialize Baldwin Writer for Claude Code
npx baldwin-init init

# Or for minimal installation (writer, editor, strategist only)
npx baldwin-init init --minimal
```

### 3. Open in Claude Code

```bash
# Open the directory in Claude Code
code .  # If using VS Code with Claude Code extension
# Or open via your preferred method
```

### 4. Use Baldwin Agents

In Claude Code, you now have access to Baldwin agents via slash commands:

```
/writer - Content creation and drafting
/content-strategist - Audience analysis and planning
/copy-editor - Editorial review and quality
/content-architect - Information architecture
```

## Available Agents

### Core Content Team

| Command | Icon | Description | Use When |
|---------|------|-------------|----------|
| `/content-strategist` | 📊 | Content planning and audience analysis | Starting a new project, defining strategy |
| `/content-architect` | 🏗️ | Information architecture and structure | Designing content organization |
| `/writer` | ✍️ | Content creation and drafting | Creating content from outlines |
| `/copy-editor` | ✏️ | Editorial review and quality assurance | Polishing and quality checking |
| `/content-sprint-lead` | 🎯 | Workflow facilitation | Managing content production workflow |

### Orchestration Agents

| Command | Icon | Description | Use When |
|---------|------|-------------|----------|
| `/baldwin-master` | 🎭 | Master orchestrator | Complex multi-agent workflows |
| `/baldwin-orchestrator` | 🎼 | Workflow guidance | Process management |
| `/content-owner` | 👑 | Content vision and strategy | Strategic planning |
| `/editorial-pm` | 📅 | Content calendar and prioritization | Managing editorial schedule |
| `/reader-experience` | 👥 | Audience engagement optimization | Improving reader engagement |

## Example Workflows

### Writing a Blog Post

```bash
# 1. Plan the content
/content-strategist
> I want to write a blog post about AI agents
[Agent guides you through audience analysis and brief creation]

# 2. Design the structure
/content-architect
> Create an outline for the blog post
[Agent creates information architecture]

# 3. Write the content
/writer
> *write-from-outline
[Agent transforms outline into full content]

# 4. Polish and review
/copy-editor
> *polish
[Agent refines and improves the draft]
```

### Creating Documentation

```bash
# 1. Understand the audience
/content-strategist
> Technical documentation for API users
[Strategic brief creation]

# 2. Structure the docs
/content-architect
> Design documentation hierarchy
[Architecture and navigation]

# 3. Write documentation
/writer
> *write API reference section
[Content creation]

# 4. Ensure quality
/copy-editor
> *self-review against technical writing standards
[Quality assurance]
```

## Agent Commands

Each agent has specific commands (use `*help` to see full list):

### Writer Commands
- `*write` - Create new content piece from outline
- `*draft` - Draft content section by section
- `*write-from-outline` - Transform outline into complete content
- `*expand` - Expand brief content into detailed writing
- `*rewrite` - Rewrite section for clarity
- `*adapt-tone` - Adapt content for different voice/tone
- `*polish` - Refine and polish existing draft
- `*help` - Show all available commands

### Content Strategist Commands
- `*analyze-audience` - Deep audience analysis
- `*create-brief` - Generate content brief
- `*plan-series` - Plan multi-piece content series
- `*research` - Conduct topic research
- `*help` - Show all available commands

### Copy Editor Commands
- `*review` - Comprehensive editorial review
- `*check-quality` - Run quality checklist
- `*fix-clarity` - Improve clarity and readability
- `*check-consistency` - Verify consistency
- `*help` - Show all available commands

## Project Structure

After initialization, your project will have:

```
your-content-project/
├── .claude/
│   ├── commands/
│   │   └── Baldwin/
│   │       ├── agents/          # Agent slash commands
│   │       │   ├── writer.md
│   │       │   ├── content-strategist.md
│   │       │   └── ...
│   │       └── tasks/           # Task commands
│   │           ├── create-content-piece.md
│   │           └── ...
│   └── project-context.md       # Project awareness for Claude
├── baldwin.config.yaml          # Optional project config
├── docs/                        # Your content and planning docs
└── content/                     # Your actual content
```

## Configuration

### baldwin.config.yaml

Optional configuration file for your content project:

```yaml
name: My Novel
type: content-project
version: 1.0.0

baldwin:
  version: 0.1.0
  agents:
    - writer
    - copy-editor
    - content-strategist

directories:
  docs: docs           # Planning documents
  content: chapters    # Actual content
  output: build        # Published output
```

## Using in Code Projects (Optional)

While Baldwin is designed for dedicated content directories, you can use it in code projects for documentation:

```bash
# In your code project
cd ~/code/my-app

# Initialize Baldwin for docs writing
npx baldwin-init init --minimal

# Now use /writer for README, API docs, etc.
```

Baldwin agents will be available alongside your normal coding workflow.

## Removing Baldwin Writer

To remove Baldwin from a project:

```bash
# Simply delete the Claude Code configuration
rm -rf .claude/commands/Baldwin
rm .claude/project-context.md
rm baldwin.config.yaml
```

## Tips & Best Practices

### 1. Start with Strategy
Always begin with `/content-strategist` to define your audience and goals before writing.

### 2. Use Outlines
Create outlines with `/content-architect` before drafting. This gives `/writer` clear structure to follow.

### 3. Iterative Refinement
Use multiple rounds with `/copy-editor` to polish content. Don't try to perfect in one pass.

### 4. Agent-Specific Chats
Start fresh Claude Code chats when switching agents for cleaner context.

### 5. Project Context
Let Claude read your `docs/content-brief.md` and `docs/outline.md` for better context awareness.

## Troubleshooting

### Commands not appearing

**Problem**: Slash commands like `/writer` don't autocomplete

**Solution**:
1. Ensure you ran `npx baldwin-init init` in the directory
2. Restart Claude Code
3. Check that `.claude/commands/Baldwin/` exists
4. Try typing the full command (may need to press Tab)

### Agents seem confused

**Problem**: Agent doesn't understand Baldwin context

**Solution**:
1. Ensure `.claude/project-context.md` exists
2. Manually load `baldwin-core/core-config.yaml` in chat
3. Start a fresh conversation
4. Use the `/help` command within the agent

### Wrong agent activated

**Problem**: Started wrong agent or want to switch

**Solution**:
1. Type `/exit` to exit current agent
2. Start new chat for clean context
3. Load the correct agent with its slash command

### Installation failed

**Problem**: `npx baldwin-init init` fails

**Solution**:
1. Check you're in the correct directory
2. Ensure Node.js ≥20.10.0 is installed
3. Check you have write permissions
4. Try with `--yes` flag to skip prompts

## Integration with Other Tools

### VS Code
Baldwin works with Claude Code extension in VS Code. Install both and follow the Quick Start.

### Git
The `.claude/` directory is project-specific. Add to version control if your team uses Baldwin:

```gitignore
# Or ignore if you don't want to commit IDE config
.claude/
```

### CI/CD
Baldwin is a development tool. For production builds, use your regular toolchain.

## FAQ

**Q: Does Baldwin work with other AI assistants?**
A: Baldwin is optimized for Claude Code's slash command system. Basic agent files can be loaded in other tools, but integration may differ.

**Q: Can I use Baldwin and BMAD-METHOD together?**
A: Yes! Baldwin extends BMAD-METHOD. They can coexist in the same project with different command prefixes (`/Baldwin/` vs `/BMad/`).

**Q: Is this for code or content?**
A: Baldwin is for content (articles, documentation, creative writing). Use BMAD-METHOD for code development.

**Q: Do I need to publish to npm?**
A: No. Use `npm link` for local development or install from git URL.

## Support & Resources

- **Documentation**: [Baldwin Writer README](../README.md)
- **Architecture**: [Baldwin Core README](../baldwin-core/README.md)
- **Issues**: [GitHub Issues](https://github.com/your-repo/baldwin-writer/issues)
- **BMAD-METHOD**: [Base Framework](https://github.com/bmad-code-org/BMAD-METHOD)

---

**Happy Writing!**
*Process Over Prompts. Team Over Tool. Quality Built-In.*
