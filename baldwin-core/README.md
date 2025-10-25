# Baldwin Writer Core

This directory contains Baldwin Writer's core extensions that layer on top of **BMAD-METHOD**.

## Architecture

Baldwin Writer **extends** BMAD-METHOD rather than forking it. This allows us to:
- ✅ Pull updates from BMAD-METHOD independently
- ✅ Maintain compatibility with BMAD framework improvements
- ✅ Contribute improvements back to BMAD community
- ✅ Focus on content-creation specialization while leveraging BMAD's orchestration

## Directory Structure

```
baldwin-core/
├── agents/              # Content-focused agents extending BMAD agents
├── agent-teams/         # Pre-configured content teams
├── workflows/           # Content creation workflows
├── templates/           # Content briefs, outlines, specifications
├── tasks/               # Content-specific tasks
├── checklists/          # Editorial and quality checklists
├── data/                # Content creation knowledge base
└── core-config.yaml     # Extension configuration
```

## How It Works

### Agent Extension Pattern

Baldwin agents **wrap** BMAD agents with content-creation focus:

```
Baldwin Agent (content-strategist.md)
    ↓ extends
BMAD Agent (pm.md from bmad-method npm package)
    ↓ provides
Core orchestration framework
```

Each Baldwin agent:
1. Inherits orchestration capabilities from its BMAD parent
2. Adapts persona and commands for content creation
3. References content-specific templates and tasks
4. Uses content-focused terminology

### Example: Content Strategist

```yaml
agent:
  name: Content Strategist
  extends: pm                    # ← Extends BMAD's Project Manager
  domain: content-strategy

persona:
  role: >
    I analyze audiences, define content requirements, and create
    strategic content briefs. I'm your planning partner.

  # Inherits PM's orchestration, adds content focus
```

## Key Extension Mappings

### Agent Mapping

| Baldwin Agent | Extends BMAD Agent | Focus |
|--------------|-------------------|-------|
| Content Strategist | PM | Audience analysis, content planning |
| Content Architect | Architect | Information architecture, structure |
| Writer | Dev | Content creation, drafting |
| Copy Editor | QA | Editorial review, quality |
| Content Sprint Lead | SM | Workflow facilitation |
| Baldwin Master | BMAD Master | Content orchestration |
| Content Owner | PO | Content vision, strategy |
| Reader Experience | UX Expert | Audience engagement |

### Workflow Mapping

| Baldwin Workflow | Based On BMAD | Purpose |
|-----------------|---------------|---------|
| new-content-project | greenfield-fullstack | New content from scratch |
| content-refresh | brownfield-fullstack | Update existing content |
| article-production | story-workflow | Single article/piece |
| series-development | epic-workflow | Multi-piece series |

### Template Mapping

| Baldwin Template | BMAD Equivalent | Purpose |
|-----------------|----------------|---------|
| content-brief | PRD | Content requirements |
| content-architecture | Architecture spec | Structure design |
| content-piece | Story | Individual deliverable |
| outline | (new) | Content outline |

## Terminology Adaptation

Baldwin Writer uses content-focused language:

| BMAD Term | Baldwin Term |
|-----------|--------------|
| Sprint | Content Sprint |
| Story | Content Piece |
| Epic | Content Series |
| User Story | Reader Need |
| Backlog | Content Backlog |
| Definition of Done | Ready to Publish |

## Build Process

When building Baldwin Writer agents:

1. **Base layer**: BMAD-METHOD core (from submodule)
2. **Extension layer**: Baldwin core (this directory)
3. **Specialization layer**: Expansion packs (creative writing, etc.)

The build tool merges these layers to create complete agent bundles.

## Shared Resources

Baldwin Writer reuses these BMAD resources:
- `create-doc` task
- `execute-checklist` task
- `advanced-elicitation` task
- `facilitate-brainstorming-session` task
- `bmad-doc-template` utility
- `workflow-management` utility

## Development Guidelines

### Creating New Baldwin Agents

1. Choose the BMAD agent to extend (see `core-config.yaml`)
2. Create agent file in `baldwin-core/agents/`
3. Reference BMAD parent in agent metadata
4. Adapt persona and commands for content focus
5. Reference content-specific dependencies

### Creating Content Workflows

1. Choose BMAD workflow pattern to adapt
2. Map phases to content creation stages
3. Assign Baldwin agents to each phase
4. Define content artifacts and exit criteria
5. Use content terminology throughout

### Creating Content Templates

1. Follow BMAD template YAML structure
2. Adapt sections for content deliverables
3. Use content-focused variable names
4. Include content-specific instructions

## Updating from BMAD

To pull latest BMAD improvements:

```bash
npm update bmad-method
```

Baldwin extensions remain independent and won't be affected by BMAD updates.

## Related Documentation

- [BMAD-METHOD](https://github.com/bmadcode/BMAD-METHOD) - Base framework
- [ARCHITECTURE.md](../docs/ARCHITECTURE.md) - Overall architecture
- [POSITIONING.md](../docs/POSITIONING.md) - Brand positioning
- [TERMINOLOGY.md](../docs/TERMINOLOGY.md) - Terminology guide

---

**Baldwin Writer extends BMAD-METHOD with content creation expertise.**
