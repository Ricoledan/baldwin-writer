# Workflow Orchestration Guide

## Overview

This guide shows common writer flows through Baldwin Writer workflows and how to orchestrate multiple agents for complex content projects. Unlike automated systems, Baldwin emphasizes intentional, human-guided orchestration where you choose when and how workflows connect.

## Philosophy: Writer-Guided Orchestration

**Not Automated Triggers** - Baldwin doesn't auto-start workflows. You decide when to move between stages.

**Common Patterns** - This guide shows how experienced content creators typically flow through Baldwin's agents and workflows.

**Flexible** - Adapt these patterns to your needs. Skip steps, repeat phases, or create your own flow.

---

## The Core Content Creation Flow

Most content follows this general progression:

```
Research → Plan → Structure → Write → Edit → Publish
   ↓         ↓        ↓         ↓      ↓       ↓
  Maya     Maya     June     James   Toni    Langston
```

### Flow Breakdown

**Phase 1: Research & Discovery** (Maya - Content Strategist)

- Research topics using frameworks
- Validate topic opportunities
- Analyze content gaps
- Creates: Topic research brief

**Phase 2: Strategic Planning** (Maya - Content Strategist)

- Create content brief
- Define audience, goals, success metrics
- Plan content series if applicable
- Creates: Content brief

**Phase 3: Structure & Architecture** (June - Content Architect)

- Design content structure
- Create detailed outline
- Plan information flow
- Creates: Content outline

**Phase 4: Writing** (James - Writer)

- Write first draft from outline
- Implement content brief requirements
- Create engaging, clear content
- Creates: Draft content

**Phase 5: Editorial Review** (Toni - Copy Editor)

- Review for clarity, accuracy, consistency
- Check grammar, style, voice
- Validate against quality checklists
- Creates: Edited content + feedback

**Phase 6: Publishing** (Langston - Sprint Lead)

- Final publishing checklist
- Format for platform
- Coordinate publication
- Creates: Published content

---

## Common Writer Journeys

### Journey 1: Single Article (Topic Known)

**Use When**: You know what to write about, need to execute.

**Flow**:

```
1. /strategist → *create-brief
   Input: Topic idea
   Output: content-brief.yaml

2. /architect → *create-outline
   Input: content-brief.yaml
   Output: outline.yaml

3. /writer → Write draft
   Input: outline.yaml
   Output: draft.md

4. /copy-editor → Review
   Input: draft.md
   Output: edited draft + feedback

5. /writer → Implement feedback
   Output: final-draft.md

6. /sprint-lead → Publishing checklist
   Output: Published content
```

**Estimated Time**: 4-8 hours for 2,000-word article

---

### Journey 2: Topic Research → Article

**Use When**: You need to discover and validate topics first.

**Flow**:

```
1. /strategist → *research-topics
   Input: General content area
   Output: topic-research-brief.md

2. /strategist → *validate-topic
   Input: Top topic ideas
   Output: Validation scores, go/no-go decisions

3. /strategist → *create-brief
   Input: Validated topic
   Output: content-brief.yaml

4. [Continue with Journey 1 steps 2-6]
```

**Estimated Time**: 6-12 hours (2-4 hours research + article production)

**Key Decision Point**: After validation, decide which topic to pursue.

---

### Journey 3: Content Series / Topic Cluster

**Use When**: Planning multiple related pieces.

**Flow**:

```
1. /strategist → *research-topics
   Output: Topic cluster ideas

2. /strategist → *plan-series
   Input: Pillar topic + cluster topics
   Output: content-series.yaml (10-15 topics)

3. /owner → Prioritize series
   Input: content-series.yaml
   Output: Prioritized topic list

4. For each article in series:

   4a. /strategist → *create-brief
       Output: content-brief-[topic].yaml

   4b. /architect → *create-outline
       Output: outline-[topic].yaml

   4c. /writer → Write draft
       Output: draft-[topic].md

   4d. /copy-editor → Review
       Output: edited-draft-[topic].md

5. /architect → Review series coherence
   Input: All drafts
   Output: Cross-linking strategy, series structure notes

6. /sprint-lead → Series publication schedule
```

**Estimated Time**: 40-80 hours for 10-article series

**Key Pattern**: Create all briefs first, then batch produce articles.

---

### Journey 4: Content Refresh / Update

**Use When**: Updating existing content.

**Flow**:

```
1. /strategist → *plan-refresh
   Input: Existing content URL
   Output: Refresh brief (gaps, updates needed)

2. /architect → Review structure
   Input: Existing outline + refresh brief
   Output: Updated outline (new sections, reorganization)

3. /writer → Update content
   Input: Existing content + updated outline
   Output: Refreshed draft

4. /copy-editor → Review updates
   Output: Final refreshed content

5. /sprint-lead → Republishing checklist
```

**Estimated Time**: 2-4 hours for moderate refresh

---

### Journey 5: Large Content Project (E.g., Guide, eBook)

**Use When**: Multi-chapter, comprehensive resource.

**Flow**:

```
1. /strategist → Research & planning
   Output: Comprehensive content brief

2. /architect → Content architecture
   Input: Brief
   Output: Complete content architecture (chapters, sections)

3. /owner → Approve architecture
   Decision: Sign off on structure

4. For each chapter:

   4a. /architect → Chapter outline
   4b. /writer → Write chapter
   4c. /copy-editor → Review chapter

5. /architect → Cross-chapter review
   Output: Coherence notes, linking strategy

6. /copy-editor → Final editorial pass
   Output: Publication-ready manuscript

7. /sprint-lead → Publishing workflow
```

**Estimated Time**: 80-200 hours depending on scope

**Key Pattern**: Architecture phase is critical - get structure right before writing.

---

## Agent Orchestration Patterns

### Pattern 1: Sequential Handoff

**When to use**: Standard content production

```
Agent A completes → Hands off to Agent B → Agent B completes → Hands off to Agent C
```

**Example**:

```
Maya (Brief) → June (Outline) → James (Draft) → Toni (Edit)
```

**How**: Each agent creates output that becomes input for next agent.

---

### Pattern 2: Iterative Loop

**When to use**: Refinement through multiple cycles

```
Agent A → Agent B → Agent A (revise) → Agent B (re-review)
```

**Example**:

```
James (Draft v1) → Toni (Feedback) → James (Draft v2) → Toni (Approve)
```

**How**: Writer and editor collaborate until quality threshold met.

---

### Pattern 3: Parallel Production

**When to use**: Multiple pieces being created simultaneously

```
Brief → Outline → [Writer A + Writer B + Writer C] → Editorial review pool
```

**Example** (Content series):

```
Maya creates 5 briefs
June creates 5 outlines
James writes articles 1, 2, 3
James writes articles 4, 5
Toni reviews all 5
```

**How**: Batch similar work, parallelize when possible.

---

### Pattern 4: Collaborative Review

**When to use**: Multiple reviewers needed

```
Writer → [Copy Editor + UX Expert + Subject Matter Expert] → Writer (consolidate)
```

**Example** (Technical article):

```
James (Draft) → Toni (Editorial) + Audre (Reader Experience) → James (Final)
```

**How**: Multiple agents provide different perspectives.

---

### Pattern 5: Strategic Orchestration

**When to use**: Complex multi-agent projects

```
Orchestrator coordinates → Delegates to specialists → Consolidates results
```

**Example**:

```
Zora (Orchestrator):
  ├─ Delegates research → Maya
  ├─ Delegates structure → June
  ├─ Delegates writing → James
  └─ Delegates review → Toni
Zora consolidates all outputs
```

**How**: Use Zora (Orchestrator) for projects requiring coordination.

---

## Decision Points in Workflows

### Decision 1: After Topic Research

**Question**: Which topic should we pursue?

**Who decides**: Content Owner (Alice) or Content Strategist (Maya)

**Options**:

- Pursue highest-scoring topic
- Pursue quick-win topic (low effort, good ROI)
- Pursue strategic topic (aligns with business goals)
- Research more topics

**Typical choice**: Highest-scoring topic that aligns with current goals.

---

### Decision 2: After Draft v1

**Question**: Ready for publishing or needs revision?

**Who decides**: Copy Editor (Toni)

**Options**:

- Approve for publishing (minor polish only)
- Request targeted revisions (specific issues)
- Request major rewrite (significant problems)

**Typical choice**: Request targeted revisions, then approve.

---

### Decision 3: Series vs Single Piece

**Question**: Create series or standalone article?

**Who decides**: Content Strategist (Maya) + Content Owner (Alice)

**Consider**:

- Topic breadth (can support 10+ articles?)
- Resources available
- SEO benefits of topic cluster
- Audience depth of interest

**Typical choice**: Series if topic has breadth and resources allow.

---

## Workflow Connection Examples

### Example 1: Research → Article Production

```bash
# Step 1: Research topics
/strategist
*research-topics

# Maya researches and creates: topic-research-brief.md
# Output shows 10 validated topics

# Step 2: Create brief for top topic
/strategist
*create-brief

# Maya creates: content-brief.yaml

# Step 3: Structure
/architect
*create-outline

# June creates: outline.yaml

# Step 4: Write
/writer
# (Interactive writing session)
# James creates: draft.md

# Step 5: Edit
/copy-editor
# (Review session)
# Toni creates: edited-draft.md + feedback

# Step 6: Revise
/writer
# Implement Toni's feedback
# James creates: final-draft.md
```

---

### Example 2: Series Planning → Production

```bash
# Step 1: Research cluster
/strategist
*research-topics
# Focus: "Content Marketing" pillar

# Step 2: Plan series
/strategist
*plan-series

# Maya creates: content-series.yaml
# Contains: 1 pillar + 12 cluster topics

# Step 3: Prioritize
/owner
# Alice reviews and prioritizes
# Decision: Create pillar + top 5 clusters first

# Step 4: Batch brief creation
/strategist
*create-brief
# Repeat 6 times (pillar + 5 clusters)
# Output: 6 content briefs

# Step 5: Batch outline creation
/architect
*create-outline
# Repeat 6 times
# Output: 6 outlines

# Step 6: Production schedule
/sprint-lead
# Langston creates production timeline
# Week 1-2: Pillar
# Week 3-4: Clusters 1-2
# Week 5-6: Clusters 3-4
# Week 7: Cluster 5

# Step 7: Execute (using Journey 1 for each piece)
```

---

## Common Flow Optimizations

### Optimization 1: Batch Similar Work

**Instead of**: Brief → Outline → Write → Edit (repeat 5 times)

**Do**: All briefs → All outlines → All drafts → All edits

**Benefit**: Faster context switching, consistent quality

---

### Optimization 2: Templates for Repetitive Content

**When**: Creating similar content repeatedly

**Do**:

1. Create first piece with full workflow
2. Save as template
3. Use template for subsequent pieces
4. Customize per piece

**Benefit**: 50-70% time savings on subsequent pieces

---

### Optimization 3: Parallel Track Different Content Types

**When**: Multiple content types in production

**Do**:

```
Track 1 (Blog): Research → Plan → Write
Track 2 (Guide): Architecture → Chapter 1
Track 3 (Refresh): Update old content
```

**Benefit**: Maintain momentum, avoid bottlenecks

---

## Orchestration Best Practices

### 1. Always Start with Strategy

Don't skip Maya (Content Strategist). Even for "quick" pieces, a brief saves time later.

**Why**: Clear goals and audience understanding prevent rewrites.

---

### 2. Structure Before Writing

Don't skip June (Content Architect). Outline first, write second.

**Why**: Good structure makes writing 3x faster and editing easier.

---

### 3. Separate Drafting from Editing

Don't edit while writing. Write complete draft, then edit.

**Why**: Switching between creating and critiquing slows both.

---

### 4. Use Checklists at Quality Gates

Before moving between phases, use checklists.

**Quality Gates**:

- Brief complete? → Use content-strategy-checklist.md
- Outline complete? → Use content-architecture-checklist.md
- Draft complete? → Use editorial-quality-checklist.md
- Ready to publish? → Use publishing-checklist.md

**Why**: Catches issues early, ensures nothing missed.

---

### 5. Iterate When Needed

Don't force linear flow if iteration helps.

**Example**: Draft → Review → Find structural issue → Back to architecture → Rewrite

**Why**: Better to fix fundamental issues than polish broken structure.

---

## When to Use Which Agent

### Use Maya (Content Strategist) when:

- Discovering content opportunities
- Validating topic ideas
- Creating content briefs
- Planning content series
- Analyzing competitors and gaps
- Defining success metrics

### Use June (Content Architect) when:

- Structuring content
- Creating outlines
- Designing information flow
- Planning content hierarchies
- Organizing complex topics

### Use James (Writer) when:

- Writing drafts
- Implementing feedback
- Creating engaging content
- Adapting voice and tone

### Use Toni (Copy Editor) when:

- Reviewing drafts
- Checking quality and consistency
- Grammar and style review
- Validating against checklists

### Use Langston (Sprint Lead) when:

- Managing production schedules
- Coordinating workflows
- Tracking progress
- Publishing coordination

### Use Alice (Content Owner) when:

- Making final decisions
- Prioritizing content
- Approving strategy
- Managing stakeholder expectations

### Use Zora (Orchestrator) when:

- Coordinating complex multi-agent projects
- Managing large content initiatives
- Delegating to multiple specialists
- Consolidating diverse outputs

### Use Audre (Reader Experience) when:

- Optimizing for engagement
- Checking accessibility
- Evaluating from reader perspective
- Testing content effectiveness

### Use Baldwin Master when:

- You need flexibility across all roles
- Quick projects without role specialization
- Adapting to unique content types

---

## Workflow Templates

### Template 1: Standard Blog Article (4-6 hours)

```
1. /strategist → *create-brief (30 min)
2. /architect → *create-outline (45 min)
3. /writer → Write draft (2-3 hours)
4. /copy-editor → Review (30 min)
5. /writer → Implement feedback (45 min)
6. /sprint-lead → Publish (15 min)
```

---

### Template 2: Research-Driven Article (6-10 hours)

```
1. /strategist → *research-topics (2 hours)
2. /strategist → *validate-topic (30 min)
3. /strategist → *create-brief (30 min)
4. /architect → *create-outline (45 min)
5. /writer → Write draft (2-3 hours)
6. /copy-editor → Review (45 min)
7. /writer → Revise (1 hour)
8. /sprint-lead → Publish (15 min)
```

---

### Template 3: Comprehensive Guide (20-40 hours)

```
1. /strategist → Research & brief (3-4 hours)
2. /architect → Architecture & all outlines (4-6 hours)
3. /owner → Approve structure (1 hour)
4. /writer → Write all sections (10-20 hours)
5. /copy-editor → Editorial review (3-4 hours)
6. /writer → Revisions (2-3 hours)
7. /copy-editor → Final pass (1 hour)
8. /sprint-lead → Publish (1 hour)
```

---

## Troubleshooting Common Flow Issues

### Issue: "I'm stuck, don't know what to write about"

**Solution**: Start with Maya

```
/strategist
*research-topics
```

Maya will help discover validated opportunities.

---

### Issue: "Draft is meandering, loses focus"

**Solution**: Go back to architecture

```
/architect
*create-outline
```

Restructure before continuing to write.

---

### Issue: "Content feels generic"

**Solution**: Strengthen the brief

```
/strategist
*create-brief
```

Add specific audience details, unique angle, differentiation.

---

### Issue: "Not sure if content is ready"

**Solution**: Use quality checklist

```
/copy-editor
```

Run through editorial-quality-checklist.md systematically.

---

## Summary: The Flexible Framework

Baldwin Writer provides structure without rigidity:

**Core Flow** (most content):

```
Research → Plan → Structure → Write → Edit → Publish
```

**Key Principles**:

1. Strategy first (don't skip briefs)
2. Structure before writing (outline first)
3. Separate creation from critique
4. Use quality gates
5. Iterate when needed

**Adapt to your needs**: Skip steps for quick content, add loops for complex content, batch similar work, parallelize when possible.

**Remember**: Workflows guide, you decide. Use Baldwin to enhance your process, not replace your judgment.

---

**Last Updated**: 2025-10-25
**Related Files**: `baldwin-kb.md`, workflow YAML files, agent files
