# Baldwin Writer: Terminology Translation Guide

## Overview

Baldwin Writer adapts BMAD-METHOD's software development terminology for content creation. This guide provides translations for all core concepts, ensuring consistency across documentation, agents, workflows, and user communication.

## Core Concept Translations

### Project Structure

| BMAD-METHOD (Dev) | Baldwin Writer (Content) | Description |
|-------------------|--------------------------|-------------|
| **Project** | **Content Project** | The overall initiative (e.g., "Blog Content Strategy" or "Novel Manuscript") |
| **Epic** | **Content Series** | A collection of related pieces (e.g., "5-Part Marketing Series" or "Part 1 of Trilogy") |
| **Story** | **Content Piece** | Single deliverable unit (article, chapter, white paper, etc.) |
| **Task** | **Writing Task** | Specific work item within a content piece (e.g., "Write Introduction", "Research Statistics") |
| **Subtask** | **Sub-section** | Granular work unit (e.g., "Opening Hook", "Supporting Example #2") |
| **Spike** | **Research Task** | Investigation or research work before content creation |

### Lifecycle & Process

| BMAD-METHOD (Dev) | Baldwin Writer (Content) | Description |
|-------------------|--------------------------|-------------|
| **Sprint** | **Content Sprint** | Time-boxed creation period (e.g., "2-week content sprint") |
| **Iteration** | **Draft Cycle** | One complete pass through creation/review/refinement |
| **Backlog** | **Content Queue** | Prioritized list of upcoming content pieces |
| **Planning** | **Content Planning** | Strategic phase defining what to create |
| **Development** | **Content Creation** | Active writing and production phase |
| **Review** | **Editorial Review** | Quality assurance and feedback phase |
| **Deployment** | **Publication** | Making content live/available |
| **Release** | **Publication Release** | Publishing multiple pieces together |

### Roles & Agents

| BMAD-METHOD (Dev) | Baldwin Writer (Content) | Description |
|-------------------|--------------------------|-------------|
| **Product Manager (PM)** | **Editorial PM** | Manages content strategy and priorities |
| **Product Owner (PO)** | **Content Owner** | Vision keeper, maintains alignment with goals |
| **Architect** | **Content Architect** | Designs information architecture and structure |
| **Developer (Dev)** | **Writer** | Creates the actual content |
| **QA Engineer** | **Copy Editor** | Ensures quality, consistency, and correctness |
| **Scrum Master (SM)** | **Content Sprint Lead** | Facilitates process and removes blockers |
| **Analyst** | **Content Strategist** | Analyzes audience, market, and requirements |
| **UX Expert** | **Reader Experience Specialist** | Optimizes for reader engagement and clarity |

### Artifacts & Documents

| BMAD-METHOD (Dev) | Baldwin Writer (Content) | Description |
|-------------------|--------------------------|-------------|
| **PRD (Product Requirements Doc)** | **Content Brief** | Defines what content should accomplish and for whom |
| **Architecture Spec** | **Content Architecture** | Structural blueprint (outline, information hierarchy) |
| **User Story** | **Content Assignment** | Specific content deliverable with acceptance criteria |
| **Technical Spec** | **Content Specification** | Detailed guidelines (style, tone, length, format) |
| **API Documentation** | **Content Guidelines** | Standards and patterns for consistency |
| **Code Review** | **Editorial Review** | Peer review of content quality |
| **Test Plan** | **Quality Checklist** | Criteria for content acceptance |
| **Changelog** | **Revision History** | Record of content changes |

### Quality & Standards

| BMAD-METHOD (Dev) | Baldwin Writer (Content) | Description |
|-------------------|--------------------------|-------------|
| **Acceptance Criteria** | **Quality Standards** | Specific requirements for content to be "done" |
| **Definition of Done (DoD)** | **Publishing Checklist** | Criteria that must be met before publication |
| **Code Quality** | **Content Quality** | Standards for excellence (clarity, accuracy, style) |
| **Technical Debt** | **Content Debt** | Outdated or inconsistent content needing updates |
| **Regression Testing** | **Consistency Check** | Verifying new content doesn't contradict existing |
| **Unit Test** | **Section Review** | Checking individual sections for quality |
| **Integration Test** | **Flow Check** | Ensuring sections work together smoothly |
| **Linting** | **Style Check** | Automated verification of style guidelines |

### Workflow & Process Terms

| BMAD-METHOD (Dev) | Baldwin Writer (Content) | Description |
|-------------------|--------------------------|-------------|
| **Greenfield Project** | **New Content Project** | Starting from scratch with no existing content |
| **Brownfield Project** | **Content Refresh** | Updating or expanding existing content |
| **Refactoring** | **Content Restructuring** | Improving organization without changing meaning |
| **Debugging** | **Issue Resolution** | Fixing errors, inconsistencies, or unclear sections |
| **Code Merge** | **Content Integration** | Combining contributions from multiple sources |
| **Branch** | **Draft Version** | Separate version for experimental changes |
| **Commit** | **Save Checkpoint** | Saving a specific version of content |
| **Pull Request** | **Review Submission** | Requesting review/approval of content |

### File & Organization

| BMAD-METHOD (Dev) | Baldwin Writer (Content) | Description |
|-------------------|--------------------------|-------------|
| **Repository** | **Content Library** | Collection of all content and resources |
| **Package** | **Content Bundle** | Related content packaged together |
| **Module** | **Content Module** | Self-contained content unit |
| **Library** | **Resource Library** | Reusable content components or references |
| **Framework** | **Content Framework** | Structured approach to content creation |

## Agent-Specific Terminology

### Content Strategist (formerly Analyst)
- **Market Research** → **Audience Research**
- **Competitive Analysis** → **Content Gap Analysis**
- **User Personas** → **Reader Personas**
- **Requirements Gathering** → **Content Requirements Discovery**

### Content Architect (formerly Architect)
- **System Architecture** → **Content Architecture**
- **Component Design** → **Section Design**
- **API Design** → **Content Structure**
- **Data Model** → **Content Model**

### Writer (formerly Developer)
- **Implement Feature** → **Write Section**
- **Write Code** → **Write Content**
- **Debug Code** → **Revise Content**
- **Run Tests** → **Self-Review**

### Copy Editor (formerly QA)
- **Test Coverage** → **Review Coverage**
- **Bug Report** → **Revision Request**
- **Quality Gate** → **Editorial Gate**
- **Test Automation** → **Style Check Automation**

### Content Sprint Lead (formerly Scrum Master)
- **Daily Standup** → **Daily Check-in**
- **Sprint Planning** → **Content Sprint Planning**
- **Retrospective** → **Process Review**
- **Remove Blockers** → **Unblock Writers**

### Editorial PM (formerly Product Manager)
- **Roadmap** → **Content Calendar**
- **Feature Prioritization** → **Content Prioritization**
- **Stakeholder Management** → **Stakeholder Communication**
- **Release Planning** → **Publication Planning**

## File Naming Conventions

### Core Files
- `prd-tmpl.yaml` → `content-brief-tmpl.yaml`
- `architecture-tmpl.yaml` → `content-architecture-tmpl.yaml`
- `story-tmpl.yaml` → `content-piece-tmpl.yaml`
- `technical-preferences.md` → `writing-preferences.md`

### Workflows
- `greenfield-fullstack.yaml` → `new-content-project.yaml`
- `brownfield-service.yaml` → `content-refresh.yaml`

### Checklists
- `story-dod-checklist.md` → `publishing-checklist.md`
- `architect-checklist.md` → `content-architecture-checklist.md`
- `pm-checklist.md` → `editorial-pm-checklist.md`

### Tasks
- `create-next-story.md` → `create-content-piece.md`
- `validate-next-story.md` → `validate-content-piece.md`
- `review-story.md` → `review-content.md`
- `apply-qa-fixes.md` → `apply-editorial-fixes.md`

## Context-Specific Adaptations

### For Creative Writing (Fiction)
- **Content Piece** → **Chapter**
- **Content Series** → **Novel** or **Book**
- **Writing Task** → **Scene**
- **Quality Standards** → **Story Beats**

### For Technical Writing
- **Content Piece** → **Documentation Page**
- **Content Series** → **Documentation Set**
- **Writing Task** → **Section**
- **Quality Standards** → **Accuracy Requirements**

### For Content Marketing
- **Content Piece** → **Article** or **Blog Post**
- **Content Series** → **Campaign**
- **Writing Task** → **Section**
- **Quality Standards** → **SEO Requirements**

### For Academic Writing
- **Content Piece** → **Paper** or **Chapter**
- **Content Series** → **Thesis** or **Dissertation**
- **Writing Task** → **Section**
- **Quality Standards** → **Academic Standards**

## Workflow Command Translations

### BMAD Command → Baldwin Command

```
# Development commands become writing commands
bmad create-story    → baldwin create-piece
bmad review-story    → baldwin review-content
bmad next-story      → baldwin next-piece

# Sprint commands remain similar
bmad start-sprint    → baldwin start-sprint
bmad plan-sprint     → baldwin plan-sprint

# Build/deployment becomes publication
bmad deploy          → baldwin publish
bmad release         → baldwin release
```

## User-Facing Language

### In UI/Documentation
Always use content-focused terminology in user-facing text:
- ❌ "Create a new story for this epic"
- ✅ "Create a new content piece for this series"

### In Code/Internal
Internal code can use original BMAD terms for compatibility:
- File paths: Keep `story-tmpl.yaml` internally
- Variables: `const story = createStory()`
- Functions: `validateStory()`

But map them in presentation layer:
- Display: "Content Piece"
- Labels: "Validate Content"

## Migration Strategy

### Phase 1: Transparent Layer (Current)
- Keep BMAD terminology in code
- Add Baldwin terminology in documentation
- Use both terms with explanations

Example:
> "Create a Content Piece (Story): This represents a single article, chapter, or document..."

### Phase 2: Dual Support
- Support both terminologies
- Baldwin as primary, BMAD as alias
- Clear migration guides

### Phase 3: Pure Baldwin
- Full terminology replacement
- BMAD terms deprecated
- Legacy support via compatibility layer

## Common Pitfalls to Avoid

1. **Don't mix metaphors**: Pick one term and stick with it in a single context
   - ❌ "Create a story in your content series"
   - ✅ "Create a content piece in your content series"

2. **Don't over-translate**: Some terms work for both contexts
   - ✅ "Template", "Workflow", "Agent", "Task"

3. **Don't lose precision**: Ensure translations maintain specific meanings
   - ❌ "Thing" (too vague)
   - ✅ "Content Piece" (specific unit of work)

4. **Don't confuse users**: Be consistent within each expansion pack
   - Creative Writing pack: Use "Chapter" consistently
   - Technical Writing pack: Use "Documentation Page" consistently

## Quick Reference Card

**The "Rule of 3" Translation:**
1. **What you make**: Story → Content Piece
2. **Who makes it**: Developer → Writer
3. **How it's checked**: QA → Copy Editor

Everything else follows from these three core translations.

---

**Document Version**: 1.0
**Last Updated**: 2025-10-25
**Owner**: Baldwin Writer Team
**Related**: See POSITIONING.md, AGENT_TRANSFORMATION.md
