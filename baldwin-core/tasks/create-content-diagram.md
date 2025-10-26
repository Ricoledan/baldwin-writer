# Create Content Diagram

**Purpose**: Generate visual diagrams to illustrate content structures, workflows, or relationships using Mermaid and Excalidraw formats.

## Task Overview

This task helps you create diagrams that visualize content architecture, workflows, article structures, or any conceptual relationships in your content projects. Diagrams are generated in both Mermaid (text-based) and Excalidraw (visual) formats.

## When to Use This Task

- **Content Planning**: Visualize content structure during planning phase
- **Documentation**: Create diagrams for process documentation
- **Content Architecture**: Show hierarchical content relationships
- **Workflow Visualization**: Illustrate content creation workflows
- **Reader Guidance**: Create visual guides for complex concepts

## Prerequisites

- Baldwin Writer CLI installed
- Basic understanding of diagram types (optional - templates available)

## Task Steps

### Step 1: Determine Diagram Purpose

Identify what you want to visualize:

1. **Content Workflow**: Show the content creation process
2. **Article Structure**: Display article components and hierarchy
3. **Content Hierarchy**: Map pillar content and supporting pieces
4. **Agent Collaboration**: Visualize agent handoffs
5. **Content Sprint**: Timeline and milestones
6. **Custom**: Your own specific diagram

### Step 2: Choose Creation Method

**Option A - Use a Template** (Recommended for common diagrams):

```bash
# List available templates
baldwin diagram --list-templates

# Generate from template
baldwin diagram --template content-workflow --name my-workflow

# Other template examples
baldwin diagram --template article-structure --name article-components
baldwin diagram --template content-hierarchy --name content-hub
```

**Option B - Interactive Mode** (Guided creation):

```bash
# Run diagram command without options for interactive mode
baldwin diagram
```

**Option C - Custom Mermaid Code** (Advanced):

```bash
# Provide your own Mermaid syntax
baldwin diagram --name custom-diagram --mermaid "graph TD
    A[Start] --> B[Process]
    B --> C[End]"
```

### Step 3: Review Generated Files

After generation, you'll have:

1. **Mermaid file** (`.mmd`): Text-based diagram definition
   - Located in `diagrams/` directory
   - Can be edited with any text editor
   - Renderable in many markdown viewers

2. **Excalidraw file** (`.excalidraw`): Visual diagram
   - Located in `diagrams/` directory
   - Open with Excalidraw (https://excalidraw.com)
   - Fully editable visual format

### Step 4: Customize and Refine

**For Mermaid diagrams**:

- Edit the `.mmd` file directly
- Regenerate by running the command again
- Reference: https://mermaid.js.org/

**For Excalidraw diagrams**:

- Open `.excalidraw` file in Excalidraw
- Customize colors, shapes, layout
- Export as PNG/SVG if needed

### Step 5: Integrate into Content

**In Markdown documents**:

```markdown
## Content Workflow

![Content Workflow](diagrams/content-workflow.png)

See the [interactive diagram](diagrams/content-workflow.excalidraw)
```

**In Documentation**:

- Reference diagrams in architecture docs
- Include in content briefs
- Add to project README files

## Available Templates

### content-workflow

Shows the standard content creation workflow from brief to publication.

```
Content Brief → Research → Outline → Draft → Review → Publish → Distribute
```

### article-structure

Displays standard article components and hierarchy.

```
Article → Introduction (Hook, Context) → Body (Sections) → Conclusion
```

### content-hierarchy

Maps content hub structure with pillar and supporting content.

```
Content Hub → Pillar Articles → Supporting Posts
```

### agent-collaboration

Visualizes collaboration between Baldwin Writer agents.

```
Content Strategist → Content Architect → Writer → Copy Editor
```

### content-sprint

Gantt chart showing content sprint timeline.

```
Planning → Development → Review → Publication (with dates)
```

## Examples

### Example 1: Visualizing Article Structure

```bash
# Generate article structure diagram
baldwin diagram --template article-structure --name blog-post-structure

# Output:
# ✓ Diagram generated from template!
#   Mermaid: diagrams/blog-post-structure.mmd
#   Excalidraw: diagrams/blog-post-structure.excalidraw
```

### Example 2: Custom Workflow Diagram

```bash
# Create custom content workflow
baldwin diagram --name editorial-workflow --mermaid "graph TD
    A[Idea] --> B[Pitch]
    B --> C{Approved?}
    C -->|Yes| D[Outline]
    C -->|No| A
    D --> E[Draft]
    E --> F[Edit]
    F --> G[Publish]"
```

### Example 3: Interactive Creation

```bash
# Run interactive mode
baldwin diagram

# Follow prompts:
# 1. Select "Use a template"
# 2. Choose "content-workflow"
# 3. Enter name "my-content-process"
```

## Tips and Best Practices

1. **Start with Templates**: Use existing templates and customize rather than building from scratch
2. **Keep It Simple**: Diagrams should clarify, not complicate - limit to 10-15 nodes
3. **Use Consistent Styling**: Stick to one diagram style per project
4. **Name Descriptively**: Use clear, descriptive names for diagram files
5. **Version Control**: Commit both Mermaid and Excalidraw files to git
6. **Update Regularly**: Keep diagrams current as processes evolve

## Output Directory Structure

```
project/
├── diagrams/
│   ├── content-workflow.mmd
│   ├── content-workflow.excalidraw
│   ├── article-structure.mmd
│   ├── article-structure.excalidraw
│   └── custom-diagram.mmd
```

## Troubleshooting

**Diagram not generating**:

- Check that Mermaid syntax is valid
- Ensure diagram name doesn't contain special characters
- Try using a template first to verify setup

**Excalidraw file won't open**:

- Upload to https://excalidraw.com
- Verify file extension is `.excalidraw`
- Check that file isn't corrupted (should be valid JSON)

**Want to export to PNG/SVG**:

- Open Excalidraw file online
- Use Excalidraw's export features
- Or use mermaid-cli tool for Mermaid files

## Integration with Baldwin Writer Agents

**Content Architect**:

- Generate structure diagrams during architecture design
- Visualize information hierarchy
- Map content series relationships

**Writer**:

- Create workflow diagrams to include in content
- Illustrate processes being explained
- Add visual elements to articles

**Content Strategist**:

- Map content strategy visually
- Show content funnel flows
- Illustrate audience journeys

## Creating Custom Templates

You can extend Baldwin Writer with your own diagram templates by modifying the diagram generator.

### How to Add a Custom Template

**Step 1: Edit diagram-generator.js**

Open `tools/lib/diagram-generator.js` and locate the `getContentTemplates()` method (around line 165).

**Step 2: Add Your Template**

Add your template to the returned object within the method:

```javascript
getContentTemplates() {
  return {
    // ... existing templates ...

    'my-custom-template': `graph TD
      A[Your Start] --> B[Your Process]
      B --> C[Your End]`,
  };
}
```

**Step 3: Test Your Template**

```bash
baldwin diagram --template my-custom-template --name my-diagram
```

### Template Design Tips

1. **Keep it focused**: One concept per template
2. **Use clear labels**: Self-explanatory node names
3. **Logical flow**: Left-to-right (LR) or top-to-bottom (TD)
4. **Consistent styling**: Use similar node types for similar concepts
5. **Test thoroughly**: Generate and verify before committing

### Mermaid Diagram Types

Baldwin Writer supports all Mermaid diagram types:

- **Flowchart**: `graph TD` (top-down) or `graph LR` (left-right)
- **Sequence**: `sequenceDiagram` - Show interactions between participants
- **Gantt**: `gantt` - Timeline and scheduling diagrams
- **Class**: `classDiagram` - Show relationships between entities
- **State**: `stateDiagram-v2` - State machines and transitions
- **Timeline**: `timeline` - Chronological events visualization
- **Pie**: `pie` - Data distribution charts
- **ER Diagram**: `erDiagram` - Entity relationship diagrams

**Full Documentation**: https://mermaid.js.org/

### Example: Custom Marketing Funnel

```javascript
'marketing-funnel': `graph TD
  SM[Social Media Traffic] --> LP[Landing Page]
  SEO[SEO Traffic] --> LP
  Email[Email Campaign] --> LP
  LP --> LM[Lead Magnet Download]
  LM --> EN[Email Nurture Sequence]
  EN --> SC[Sales Call]
  SC --> CU[New Customer]
  CU --> RT[Retention Content]`,
```

**Usage**:

```bash
baldwin diagram --template marketing-funnel --name my-funnel
```

### Example: Story Scene Structure

```javascript
'scene-structure': `graph LR
  G[Goal] --> C[Conflict]
  C --> D[Disaster]
  D --> R[Reaction]
  R --> DL[Dilemma]
  DL --> DC[Decision]`,
```

### Sharing Custom Templates

If you create useful templates:

1. Test them thoroughly with different projects
2. Document the use case and benefits
3. Consider contributing back to Baldwin Writer
4. Share with your team via git

## Next Steps

After creating diagrams:

1. Review and refine visual representation
2. Integrate into relevant documentation
3. Share with stakeholders for feedback
4. Update as content structure evolves
5. Reference in content briefs and outlines

---

**Remember**: Great diagrams simplify complexity. Use them to make your content strategy and structure immediately understandable.
