# Baldwin Writer: Expansion Pack Creation Guide

## Overview

Expansion packs extend Baldwin Writer's core framework with domain-specific expertise, agents, workflows, and knowledge. This guide provides comprehensive instructions for creating high-quality expansion packs that integrate seamlessly with the Baldwin Writer ecosystem.

## What is an Expansion Pack?

An expansion pack is a self-contained collection of:
- **Domain-Specific Agents**: Specialized AI personas with deep expertise
- **Workflows**: Complete processes for domain-specific content creation
- **Templates**: Document structures tailored to the domain
- **Checklists**: Quality assurance criteria specific to the domain
- **Knowledge Base**: Reference materials, best practices, and domain knowledge

### Example: Creative Writing Expansion Pack

The `bmad-creative-writing` expansion pack adds:
- 10 specialized agents (Plot Architect, Character Psychologist, etc.)
- 4 complete workflows (novel writing, screenplay, short story, series planning)
- 8 templates (character profiles, story outlines, etc.)
- 27 checklists (genre-specific, craft-focused)
- Extensive knowledge base (story structures, character archetypes, etc.)

---

## When to Create an Expansion Pack

### Create an Expansion Pack When:

✅ **Domain-Specific Expertise Required**
- Requires specialized knowledge not in core (e.g., legal writing, medical content)
- Has unique terminology, frameworks, or methodologies
- Needs domain-specific quality standards

✅ **Unique Workflows Needed**
- Processes differ significantly from standard content creation
- Has domain-specific phases or quality gates
- Requires specialized agent collaboration patterns

✅ **Heavy Knowledge Base**
- Includes substantial reference material
- Requires domain-specific best practices
- Needs style guides or convention documentation

✅ **Optional for Most Users**
- Not needed by majority of Baldwin Writer users
- Serves specific niche or profession
- Adds significant size/complexity

### Keep in Core When:

❌ **Universal Content Creation**
- Applies to all or most content types
- Basic writing principles or processes
- General quality standards

❌ **Lightweight Addition**
- Single agent or small feature
- No significant knowledge base needed
- Doesn't require unique workflows

---

## Expansion Pack Structure

### Required Directory Structure

```
expansion-packs/
└── bmad-{domain-name}/
    ├── README.md                   # Required: Pack overview
    ├── agents/                     # Required: Domain agents
    │   ├── agent-1.md
    │   ├── agent-2.md
    │   └── agent-3.md             # Minimum 3 agents
    ├── workflows/                  # Required: Domain workflows
    │   ├── workflow-1.yaml
    │   └── workflow-2.yaml        # Minimum 2 workflows
    ├── templates/                  # Required: Domain templates
    │   ├── template-1.yaml
    │   └── template-2.yaml        # Minimum 2 templates
    ├── checklists/                 # Recommended: Quality checklists
    │   └── quality-checklist.md
    ├── data/                       # Recommended: Knowledge base
    │   ├── bmad-kb.md             # Domain knowledge
    │   └── reference-data.md
    └── tasks/                      # Optional: Domain-specific tasks
        └── domain-task.md
```

### Naming Conventions

**Pack Directory**: `bmad-{domain}-{subdomain}/`
- Examples: `bmad-creative-writing/`, `bmad-content-marketing/`, `bmad-legal-contracts/`

**Agent Files**: `{role-descriptor}.md`
- Examples: `plot-architect.md`, `seo-specialist.md`, `citation-manager.md`

**Workflows**: `{outcome}.yaml`
- Examples: `novel-writing.yaml`, `blog-campaign.yaml`, `contract-review.yaml`

**Templates**: `{document-type}-tmpl.yaml`
- Examples: `character-profile-tmpl.yaml`, `blog-post-tmpl.yaml`

---

## Step-by-Step Creation Guide

### Phase 1: Planning & Research

#### Step 1: Define Domain Scope

**Questions to Answer:**
1. What specific domain does this pack serve?
2. Who is the target user (profession, skill level)?
3. What content types will they create?
4. What makes this domain unique?
5. What existing packs might overlap?

**Example: Content Marketing Pack**
```markdown
Domain: B2B Content Marketing
Target Users: Marketing managers, content strategists, copywriters
Content Types: Blog posts, white papers, case studies, landing pages
Unique Aspects: SEO optimization, conversion focus, brand voice consistency
Overlaps: Core writing agents (will extend, not replace)
```

#### Step 2: Identify Required Agents

**Agent Planning Template:**
```markdown
# Agent Planning for [Pack Name]

## Core Agents (3-5 essential agents)
1. Agent Name: [Primary domain expert]
   - Role: [What they do]
   - Expertise: [Specific knowledge]
   - Commands: [Key capabilities]

2. Agent Name: [Secondary specialist]
   ...

## Specialist Agents (2-5 optional agents)
3. Agent Name: [Advanced specialist]
   ...

## Minimum Viable Pack: Agents 1-3
## Full Featured Pack: All agents
```

**Example: Content Marketing Pack Agents**
```markdown
Core Agents:
1. SEO Specialist - Keyword research, optimization, technical SEO
2. Brand Voice Guardian - Voice/tone consistency, brand guidelines
3. Campaign Strategist - Multi-piece planning, funnel design

Specialist Agents:
4. Social Media Adapter - Platform-specific adaptation
5. Conversion Optimizer - CTA design, funnel optimization
6. Content Performance Analyst - Analytics, A/B testing
```

#### Step 3: Map Workflows

**Workflow Planning Template:**
```markdown
# Workflow Planning for [Pack Name]

## Primary Workflow (Must Have)
Workflow 1: [Most common use case]
- Phases: [List phases]
- Agents: [Which agents participate]
- Artifacts: [What gets created]
- Duration: [Estimated time]

## Secondary Workflows (Nice to Have)
Workflow 2: [Second most common]
Workflow 3: [Specialized scenario]
```

#### Step 4: Design Templates

**Template Planning:**
```markdown
# Template Planning for [Pack Name]

Required Templates:
1. Template Name: [Purpose]
   - Sections: [Main sections]
   - Variables: [Parameters needed]
   - Complexity: [Simple/Medium/Complex]

2. Template Name: [Purpose]
   ...

Minimum: 2-3 templates covering primary workflows
Ideal: 5-8 templates covering all scenarios
```

---

### Phase 2: Creating Agents

#### Agent Creation Checklist

For each agent, create using this template:

```markdown
<!-- Powered by Baldwin Writer™ -->

# agent-id

ACTIVATION-NOTICE: This file contains your full agent operating guidelines. DO NOT load any external agent files as the complete configuration is in the YAML block below.

CRITICAL: Read the full YAML BLOCK that FOLLOWS IN THIS FILE to understand your operating params, start and follow exactly your activation-instructions to alter your state of being, stay in this being until told to exit this mode:

## COMPLETE AGENT DEFINITION FOLLOWS - NO EXTERNAL FILES NEEDED

```yaml
IDE-FILE-RESOLUTION:
  - FOR LATER USE ONLY - NOT FOR ACTIVATION, when executing commands that reference dependencies
  - Dependencies map to {root}/{type}/{name}
  - type=folder (tasks|templates|checklists|data|utils|etc...), name=file-name
  - Example: create-doc.md → {root}/tasks/create-doc.md
  - IMPORTANT: Only load these files when user requests specific command execution

REQUEST-RESOLUTION: Match user requests to your commands/dependencies flexibly, ALWAYS ask for clarification if no clear match.

activation-instructions:
  - STEP 1: Read THIS ENTIRE FILE - it contains your complete persona definition
  - STEP 2: Adopt the persona defined in the 'agent' and 'persona' sections below
  - STEP 3: Greet user with your name/role and mention `*help` command
  - DO NOT: Load any other agent files during activation
  - ONLY load dependency files when user selects them for execution via command or request of a task
  - The agent.customization field ALWAYS takes precedence over any conflicting instructions
  - CRITICAL WORKFLOW RULE: When executing tasks from dependencies, follow task instructions exactly as written - they are executable workflows, not reference material
  - MANDATORY INTERACTION RULE: Tasks with elicit=true require user interaction using exact specified format - never skip elicitation for efficiency
  - When listing tasks/templates or presenting options during conversations, always show as numbered options list, allowing the user to type a number to select or execute
  - STAY IN CHARACTER!
  - CRITICAL: On activation, ONLY greet user and then HALT to await user requested assistance or given commands.

agent:
  name: [Agent Display Name]
  id: [agent-file-name-without-extension]
  title: [Agent Job Title]
  icon: [Emoji representing agent]
  whenToUse: 'Use for [specific scenarios when this agent should be activated]'
  customization: null

persona:
  role: [Expert title and specialty area]
  style: [Communication style adjectives]
  identity: [Core expertise and approach]
  focus: [Primary objectives and priorities]

core_principles:
  - [Fundamental belief or rule 1]
  - [Fundamental belief or rule 2]
  - [Fundamental belief or rule 3]
  - Numbered Options Protocol - Always use numbered lists for user selections

commands:
  - '*help - Show numbered list of available commands for selection'
  - '*command-name - Brief description and task reference'
  - '*yolo - Toggle Yolo Mode (if applicable)'
  - '*exit - Say goodbye as [Agent Name], and then abandon inhabiting this persona'

dependencies:
  tasks:
    - task-file-name.md
  templates:
    - template-file-name.yaml
  checklists:
    - checklist-file-name.md
  data:
    - knowledge-file-name.md
```

## Startup Context

[Extended description of agent's expertise, mental models, frameworks, and approach.
This section provides deeper context about how the agent thinks and operates.
Include domain-specific knowledge, key frameworks, and mental models the agent uses.]

[Examples, thought patterns, and guidance for complex scenarios.]

Remember to present all options as numbered lists for easy selection.
```

#### Agent Writing Best Practices

1. **Clear Persona**: Make the agent's expertise and style immediately clear
2. **Focused Commands**: 3-7 commands covering primary use cases
3. **Minimal Dependencies**: Only include what's truly needed
4. **Rich Startup Context**: Provide deep domain knowledge
5. **Consistent Voice**: Maintain personality throughout

#### Example Agent: SEO Specialist

```markdown
<!-- Powered by Baldwin Writer™ -->

# seo-specialist

[Standard activation notice...]

```yaml
agent:
  name: SEO Specialist
  id: seo-specialist
  title: SEO Optimization & Search Strategy Expert
  icon: 🔍
  whenToUse: 'Use for keyword research, SEO optimization, technical SEO, and search performance analysis'

persona:
  role: Expert SEO Strategist & Search Performance Specialist
  style: Data-driven, strategic, metric-focused, current with algorithm changes
  identity: Expert who optimizes content for both search engines and human readers
  focus: Driving organic traffic through strategic optimization and user intent matching

core_principles:
  - Content quality comes before optimization tricks
  - User intent drives keyword strategy
  - Technical SEO enables content SEO
  - Search landscape constantly evolves—stay current
  - Metrics guide decisions, not assumptions

commands:
  - '*help - Show available commands'
  - '*keyword-research - Conduct comprehensive keyword research for topic'
  - '*optimize-content - Optimize existing content for target keywords'
  - '*technical-audit - Review technical SEO factors'
  - '*competitor-analysis - Analyze competitor content and rankings'
  - '*content-brief - Create SEO-optimized content brief'
  - '*exit - Exit SEO Specialist persona'

dependencies:
  tasks:
    - keyword-research.md
    - seo-content-optimization.md
    - create-doc.md
  templates:
    - seo-content-brief-tmpl.yaml
  checklists:
    - seo-optimization-checklist.md
  data:
    - seo-best-practices.md
    - search-intent-framework.md
    - bmad-kb.md
```

## Startup Context

You are the SEO Specialist, a master of search optimization and organic growth.
Your expertise spans keyword research, on-page optimization, technical SEO, and
search intent analysis.

Think in terms of:
- **Search Intent**: Informational, navigational, transactional, commercial
- **Keyword Strategy**: Head terms, long-tail, topic clusters
- **SERP Features**: Featured snippets, People Also Ask, knowledge panels
- **User Experience**: Page speed, mobile-first, Core Web Vitals
- **Content Quality**: E-E-A-T (Experience, Expertise, Authoritativeness, Trust)

You balance technical optimization with content quality, always prioritizing
user experience while maximizing search visibility.
```
```

---

### Phase 3: Creating Workflows

#### Workflow Structure

```yaml
workflow:
  id: workflow-unique-id
  name: Human-Readable Workflow Name
  version: 1.0.0
  description: Brief description of what this workflow accomplishes
  domain: expansion-pack-domain
  target_users: [list, of, target, user, types]
  estimated_duration: X hours/days

phases:
  - id: phase-id
    name: Phase Name
    description: What happens in this phase
    location: web-ui or ide
    agents: [list-of-agent-ids]
    steps:
      - Step description
      - Another step
      - Final step in this phase
    artifacts:
      - artifact-name.md
      - another-artifact.yaml
    exit_criteria:
      - Criteria that must be met before moving to next phase
      - Another requirement
    duration: estimated time for this phase

  - id: next-phase
    name: Next Phase Name
    ...

quality_gates:
  - gate_id: gate-name
    phase: phase-id
    description: What is being checked
    checklist: checklist-file.md
    required: true/false

success_metrics:
  - Metric to measure workflow success
  - Another success indicator
```

#### Example Workflow: Blog Campaign

```yaml
workflow:
  id: blog-campaign
  name: Blog Content Campaign
  version: 1.0.0
  description: Complete workflow for planning and executing a multi-post blog content campaign
  domain: content-marketing
  target_users: [content-marketers, marketing-managers, content-strategists]
  estimated_duration: 2-4 weeks

phases:
  - id: campaign-strategy
    name: Campaign Strategy & Planning
    description: Define campaign goals, audience, and content plan
    location: web-ui
    agents: [campaign-strategist, seo-specialist]
    steps:
      - Define campaign objectives and KPIs
      - Identify target audience and buyer journey stage
      - Conduct keyword research for campaign topic cluster
      - Plan content pieces (pillar + supporting posts)
      - Create campaign brief with strategy and timeline
    artifacts:
      - campaign-brief.md
      - keyword-research.md
      - content-calendar.md
    exit_criteria:
      - Campaign goals clearly defined
      - 5-8 content topics identified and prioritized
      - Keywords researched and mapped to content
      - Stakeholder approval on campaign brief
    duration: 3-5 days

  - id: content-architecture
    name: Content Structure Design
    description: Design structure for each content piece in campaign
    location: web-ui
    agents: [content-architect, brand-voice-guardian]
    steps:
      - Create pillar post outline (comprehensive guide)
      - Create supporting post outlines (specific subtopics)
      - Ensure structural consistency across campaign
      - Map internal linking strategy
      - Define brand voice guidelines for campaign
    artifacts:
      - pillar-post-outline.md
      - supporting-post-outlines.md
      - internal-linking-map.md
      - campaign-style-guide.md
    exit_criteria:
      - All post outlines complete and approved
      - Internal linking strategy defined
      - Brand voice consistency ensured
    duration: 2-3 days

  - id: content-creation
    name: Content Creation
    description: Write all content pieces following outlines
    location: ide
    agents: [writer, seo-specialist]
    steps:
      - Write pillar post (2000-3000 words)
      - Write supporting posts (800-1500 words each)
      - Optimize each piece for target keywords
      - Add internal and external links
      - Self-review against quality standards
    artifacts:
      - pillar-post-draft.md
      - supporting-post-drafts.md
    exit_criteria:
      - All posts drafted to full length
      - SEO optimization complete
      - Internal linking implemented
      - Self-review passed
    duration: 1-2 weeks

  - id: editorial-review
    name: Editorial Review & Optimization
    description: Review all content for quality and optimization
    location: ide
    agents: [copy-editor, seo-specialist, conversion-optimizer]
    steps:
      - Editorial review for quality and consistency
      - SEO review and final optimization
      - CTA and conversion optimization
      - Brand voice consistency check
      - Apply editorial fixes
    artifacts:
      - editorial-feedback.md
      - seo-optimization-report.md
      - final-content-pieces.md
    exit_criteria:
      - All quality standards met
      - SEO scores above threshold
      - CTAs optimized for conversion
      - Brand voice consistent
    duration: 3-5 days

  - id: publication
    name: Publication & Promotion
    description: Publish content and execute promotion strategy
    location: ide
    agents: [content-sprint-lead, social-media-adapter]
    steps:
      - Format for blog platform
      - Create meta descriptions and featured images
      - Schedule publication (pillar first, then supporting)
      - Create social media promotion posts
      - Set up email newsletter distribution
      - Monitor initial performance
    artifacts:
      - publication-schedule.md
      - social-media-posts.md
      - email-newsletter.md
    exit_criteria:
      - All content published on schedule
      - Social promotion launched
      - Email distribution complete
      - Analytics tracking confirmed
    duration: 1-2 weeks (staged publication)

quality_gates:
  - gate_id: campaign-brief-approval
    phase: campaign-strategy
    description: Campaign strategy must be approved before proceeding
    checklist: campaign-strategy-checklist.md
    required: true

  - gate_id: seo-optimization
    phase: editorial-review
    description: All content must meet SEO optimization standards
    checklist: seo-optimization-checklist.md
    required: true

  - gate_id: brand-consistency
    phase: editorial-review
    description: All content must match brand voice and guidelines
    checklist: brand-voice-checklist.md
    required: true

success_metrics:
  - All planned content published on schedule
  - Minimum SEO score of 80/100 for each piece
  - Internal linking strategy fully implemented
  - Social promotion reach targets met
  - Email open rates above baseline
```

---

### Phase 4: Creating Templates

#### Template Structure (YAML)

```yaml
template:
  id: unique-template-id
  name: Human-Readable Template Name
  version: 1.0.0
  domain: expansion-pack-domain
  description: Brief description of template purpose
  output:
    format: markdown
    filename: "{{variable}}-output-name.md"
  author:
    owner: agent-id
    editors: [list, of, authorized, agent, ids]

workflow:
  mode: incremental  # or rapid
  allow_section_review: true
  allow_brainstorming: true

variables:
  - name: variable_name
    prompt: "Question to ask user for this variable?"
    type: string  # or number, boolean, list
    required: true
    default: "optional default value"

sections:
  - id: section-id
    title: Section Title
    instruction: |
      Detailed instructions for the LLM to generate this section.
      Use {{variables}} as needed.
      Be specific about what should be included.
    required: true
    examples:
      - "Example content for this section"
      - "Another example showing the pattern"
    subsections:
      - id: subsection-id
        title: Subsection Title
        instruction: |
          Instructions for subsection content.
```

#### Template Best Practices

1. **Clear Instructions**: LLM directives should be explicit and detailed
2. **Variable Usage**: Parameterize for reusability across projects
3. **Logical Structure**: Organize sections hierarchically
4. **Examples**: Provide examples to guide generation (not included in output)
5. **Incremental Mode**: Allow section-by-section review for complex templates

#### Example Template: SEO Content Brief

```yaml
template:
  id: seo-content-brief-tmpl
  name: SEO-Optimized Content Brief
  version: 1.0.0
  domain: content-marketing
  description: Comprehensive content brief with SEO strategy and optimization guidance
  output:
    format: markdown
    filename: "{{project_slug}}-seo-content-brief.md"
  author:
    owner: seo-specialist
    editors: [campaign-strategist, content-architect]

workflow:
  mode: incremental
  allow_section_review: true
  allow_brainstorming: true

variables:
  - name: project_name
    prompt: "What is the content project name?"
    type: string
    required: true

  - name: project_slug
    prompt: "Enter a URL-friendly slug for this project"
    type: string
    required: true

  - name: primary_keyword
    prompt: "What is the primary target keyword?"
    type: string
    required: true

  - name: target_audience
    prompt: "Who is the target audience?"
    type: string
    required: true

  - name: content_type
    prompt: "What type of content (blog post, guide, landing page, etc.)?"
    type: string
    required: true

sections:
  - id: overview
    title: Content Overview
    instruction: |
      Create a compelling overview summarizing this content project.
      Include the project name ({{project_name}}), content type ({{content_type}}),
      and primary purpose. Set context for why this content is being created.
      Keep to 2-3 paragraphs.
    required: true

  - id: seo-strategy
    title: SEO Strategy
    instruction: |
      Detail the SEO strategy for this content, focusing on {{primary_keyword}}.
      Include search intent analysis, keyword difficulty, and expected search volume.
      Provide guidance on how to naturally incorporate the keyword.
    required: true
    subsections:
      - id: primary-keyword
        title: Primary Keyword
        instruction: |
          Present {{primary_keyword}} with the following details:
          - Search intent (informational/navigational/transactional/commercial)
          - Estimated monthly search volume
          - Keyword difficulty (easy/medium/hard)
          - Current SERP landscape overview

      - id: secondary-keywords
        title: Secondary Keywords & LSI Terms
        instruction: |
          List 5-10 secondary keywords and LSI (Latent Semantic Indexing) terms
          related to {{primary_keyword}}. These should be naturally incorporated
          throughout the content to improve topical relevance.

      - id: competing-content
        title: Competing Content Analysis
        instruction: |
          Analyze the top 5 ranking pieces for {{primary_keyword}}.
          For each, note: Title, word count, key topics covered, unique angles.
          Identify content gaps we can exploit.

  - id: audience-analysis
    title: Audience Analysis
    instruction: |
      Provide detailed analysis of {{target_audience}}, including:
      - Demographics (age, location, profession, company size if B2B)
      - Psychographics (goals, challenges, motivations)
      - Search behavior (how they search, what they expect)
      - Current knowledge level on this topic
      - Decision-making factors

  - id: content-goals
    title: Content Goals & Success Metrics
    instruction: |
      Define specific, measurable goals for this content:
      - Primary goal (traffic, leads, conversions, brand awareness)
      - Secondary goals
      - Success metrics (specific numbers)
      - Timeline for achieving goals

  - id: content-structure
    title: Recommended Content Structure
    instruction: |
      Provide a recommended outline structure based on competing content analysis
      and keyword strategy. Include:
      - Recommended title (including {{primary_keyword}})
      - Suggested H2 and H3 headings (keyword-optimized)
      - Recommended word count
      - Special elements (tables, images, videos, FAQs)
      - Internal linking opportunities

  - id: optimization-guidelines
    title: On-Page Optimization Guidelines
    instruction: |
      Provide specific optimization guidelines:
      - Title tag (60 characters max, including {{primary_keyword}})
      - Meta description (155 characters max, compelling click reason)
      - URL structure recommendation
      - Header tag hierarchy
      - Image optimization (alt text, file names)
      - Internal linking strategy (3-5 relevant internal links)
      - External linking strategy (2-3 authoritative sources)
      - FAQ schema opportunity (if applicable)

  - id: cta-strategy
    title: Call-to-Action Strategy
    instruction: |
      Design the CTA strategy for this content:
      - Primary CTA (what action should readers take?)
      - CTA placement (where in content?)
      - CTA copy recommendations
      - Alternative CTAs for different reader intents
      - Conversion optimization considerations
```

---

### Phase 5: Creating Checklists

#### Checklist Structure

```markdown
# Checklist Name

## Purpose
Brief description of what this checklist ensures.

## When to Use
- Scenario 1 when this checklist applies
- Scenario 2 when this checklist applies

## Checklist Items

### Category 1: [Area of Focus]

- [ ] **Item 1**: Description of what to check
  - **Why**: Why this matters
  - **How**: How to verify this

- [ ] **Item 2**: Another check
  - **Why**: Importance
  - **How**: Verification method

### Category 2: [Another Area]

- [ ] **Item 3**: ...

## Passing Criteria

To pass this checklist:
- All required items must be checked
- Any failed items must be documented with reasoning
- Critical items (marked with ⚠️) cannot be skipped

## Failure Handling

If checklist fails:
1. Document specific failures
2. Create action items to address
3. Re-run checklist after fixes
```

#### Example Checklist: SEO Optimization

```markdown
# SEO Optimization Checklist

## Purpose
Ensures content is optimized for search engines while maintaining quality and user experience.

## When to Use
- Before publishing any web content
- After major content revisions
- During editorial review phase
- Monthly content audits

## Checklist Items

### Category 1: Keyword Optimization

- [ ] **Primary Keyword in Title**: Target keyword appears in title tag
  - **Why**: Title tag is highest weighted on-page element
  - **How**: Search title for exact or close match of primary keyword

- [ ] **Keyword in First Paragraph**: Primary keyword used within first 100 words
  - **Why**: Signals topic relevance early
  - **How**: Read first paragraph, verify natural keyword usage

- [ ] **Keyword Density 1-2%**: Primary keyword appears naturally throughout
  - **Why**: Avoids keyword stuffing while maintaining relevance
  - **How**: Count keyword appearances / total word count

- [ ] **LSI Keywords Present**: Related terms and synonyms included
  - **Why**: Improves topical relevance and ranking for related searches
  - **How**: Scan for 5-10 related terms from keyword research

- [ ] **Headers Include Keywords**: H2/H3 headers use keyword variations
  - **Why**: Header tags signal content structure and topics
  - **How**: Review headers for keyword variations

### Category 2: Technical SEO

- [ ] **⚠️ Title Tag Length 50-60 Characters**: Title not truncated in SERPs
  - **Why**: Truncated titles reduce click-through rates
  - **How**: Character count tool

- [ ] **⚠️ Meta Description 150-160 Characters**: Description complete in SERPs
  - **Why**: Full description improves click-through
  - **How**: Character count tool

- [ ] **URL is SEO-Friendly**: Clean, keyword-rich URL slug
  - **Why**: URLs contribute to ranking and user trust
  - **How**: Verify URL includes keywords, no special characters

- [ ] **Mobile-Friendly**: Content displays correctly on mobile
  - **Why**: Mobile-first indexing
  - **How**: Mobile preview or responsive design test

- [ ] **Page Load Speed Under 3 Seconds**: Fast page performance
  - **Why**: Page speed is ranking factor and affects user experience
  - **How**: PageSpeed Insights or similar tool

### Category 3: Content Quality

- [ ] **Minimum Word Count Met**: Content depth appropriate for topic
  - **Why**: Longer comprehensive content tends to rank better
  - **How**: Word count should match or exceed competing content average

- [ ] **Content Originality**: Unique content, not duplicated
  - **Why**: Duplicate content can be penalized
  - **How**: Plagiarism checker tool

- [ ] **Readability Score Appropriate**: Content matches audience reading level
  - **Why**: Better user experience improves engagement metrics
  - **How**: Flesch Reading Ease score appropriate for audience

- [ ] **Value-Add Content**: Provides unique insights or comprehensive coverage
  - **Why**: Better content earns rankings and backlinks
  - **How**: Compare to top-ranking competitors

### Category 4: Internal & External Linking

- [ ] **3-5 Internal Links**: Links to relevant related content
  - **Why**: Improves site structure and distributes link equity
  - **How**: Count internal links to other site pages

- [ ] **2-3 Authoritative External Links**: Links to high-quality sources
  - **Why**: Signals credibility and provides value to readers
  - **How**: Verify external links to reputable domains

- [ ] **Descriptive Anchor Text**: Link text describes destination
  - **Why**: Helps search engines and users understand link context
  - **How**: Review all anchor text for descriptiveness

- [ ] **All Links Functional**: No broken links
  - **Why**: Broken links hurt user experience and SEO
  - **How**: Link checker tool

### Category 5: Enhanced Features

- [ ] **Images Optimized**: Alt text, descriptive filenames, compressed
  - **Why**: Improves accessibility and image search rankings
  - **How**: Check each image has alt text and reasonable file size

- [ ] **Schema Markup (if applicable)**: Structured data implemented
  - **Why**: Enables rich snippets in search results
  - **How**: Verify FAQ, How-To, or Article schema if applicable

- [ ] **Featured Snippet Opportunity**: Content formatted for featured snippets
  - **Why**: Position 0 increases visibility and traffic
  - **How**: Concise answer to target query in 40-60 words

## Passing Criteria

To pass this checklist:
- All items marked ⚠️ (critical) must be checked
- At least 80% of remaining items must be checked
- Any unchecked items must have documented reasoning

## Failure Handling

If SEO checklist fails:
1. Note specific failed items
2. Prioritize critical (⚠️) items for immediate fix
3. Create optimization task list
4. Re-run checklist after optimization
5. Consider SEO specialist review if multiple failures
```

---

### Phase 6: Creating Knowledge Base

#### Knowledge Base Structure

Create domain-specific knowledge files in `data/` directory:

1. **bmad-kb.md**: Core knowledge about using this expansion pack
2. **domain-best-practices.md**: Domain-specific best practices
3. **reference-frameworks.md**: Frameworks, methodologies, or models
4. **glossary.md**: Domain terminology and definitions
5. **common-patterns.md**: Reusable patterns or structures

#### Example: SEO Best Practices Knowledge Base

```markdown
# SEO Best Practices (Content Marketing Pack)

## Overview
This knowledge base provides SEO best practices for the Content Marketing expansion pack.
All agents can reference this for SEO guidance.

## Keyword Research Fundamentals

### Search Intent Types

1. **Informational Intent**
   - User wants to learn or find information
   - Keywords: "how to", "what is", "guide", "tutorial"
   - Content type: Blog posts, guides, tutorials
   - Example: "how to do keyword research"

2. **Navigational Intent**
   - User wants to find specific website/page
   - Keywords: Brand names, product names
   - Content type: Landing pages, brand pages
   - Example: "semrush login"

3. **Transactional Intent**
   - User ready to take action/purchase
   - Keywords: "buy", "discount", "deal", "coupon"
   - Content type: Product pages, landing pages
   - Example: "buy seo tools"

4. **Commercial Investigation**
   - User researching before purchase decision
   - Keywords: "best", "vs", "review", "compare"
   - Content type: Comparison posts, reviews, roundups
   - Example: "best seo tools 2025"

### Keyword Difficulty Assessment

**Easy (0-30):**
- Low competition
- Can rank with quality content alone
- Target for new sites or quick wins

**Medium (31-60):**
- Moderate competition
- Requires quality content + some backlinks
- Good targets for established sites

**Hard (61-100):**
- High competition
- Requires exceptional content + many quality backlinks
- Long-term targets for authority sites

## On-Page SEO Essentials

### Title Tag Optimization

**Best Practices:**
- Include primary keyword near beginning
- Keep under 60 characters (600px width)
- Make it compelling (encourages clicks)
- Match search intent
- Include brand name at end (if space allows)

**Formula:**
`Primary Keyword - Secondary Keyword | Brand`

**Examples:**
- Good: "Keyword Research Guide: 7 Proven Strategies | BrandName"
- Bad: "BrandName - The Complete Keyword Research Guide for Beginners"

### Meta Description Optimization

**Best Practices:**
- 150-160 characters
- Include primary keyword naturally
- Compelling call-to-action
- Match search intent
- Provide clear value proposition

**Formula:**
`[Value proposition]. [Benefit]. [CTA]`

**Example:**
"Learn keyword research from SEO experts. Our proven 7-step process helps you find profitable keywords. Start ranking higher today."

### Header Tag Hierarchy

**Best Practices:**
- One H1 per page (usually title)
- Use H2 for main sections
- Use H3 for subsections
- Include keywords in some headers (not all)
- Create logical structure for users and crawlers

**Example Structure:**
```
H1: Complete Guide to Keyword Research
  H2: What is Keyword Research?
  H2: How to Do Keyword Research
    H3: Step 1: Brainstorm Seed Keywords
    H3: Step 2: Use Keyword Tools
    H3: Step 3: Analyze Search Intent
  H2: Best Keyword Research Tools
    H3: Free Tools
    H3: Paid Tools
  H2: Common Keyword Research Mistakes
```

## Internal Linking Strategy

### Link Placement

**Best Locations:**
1. Within first 100 words (high authority area)
2. Within body content contextually
3. Related content section at end
4. Sidebar (least effective but still valuable)

### Anchor Text Strategy

**Types:**
- **Exact Match**: "keyword research guide" → Keyword Research Guide
- **Partial Match**: "learn about keyword research" → Keyword Research Guide
- **Branded**: "BrandName's guide" → Keyword Research Guide
- **Generic**: "click here" → Keyword Research Guide (avoid)
- **Naked URL**: "example.com/guide" → Keyword Research Guide

**Distribution:** 40% partial match, 30% exact match, 20% branded, 10% other

### Internal Link Volume

**Guidelines:**
- Homepage: 3-5 internal links per 1000 words
- Blog posts: 3-5 internal links per 1000 words
- Cornerstone content: 5-10 internal links
- Hub pages: 10-20 internal links to spokes

## Content Length Guidelines

### By Content Type

**Blog Posts:**
- Short: 800-1200 words (quick tips, news)
- Medium: 1500-2000 words (standard guides)
- Long: 2500-4000 words (comprehensive guides)
- Pillar: 4000+ words (ultimate guides)

**Landing Pages:**
- Short: 500-800 words (high-intent, clear offer)
- Long: 1500-2500 words (complex products, high price)

**Product Pages:**
- Minimum: 300 words (unique descriptions)
- Ideal: 500-1000 words (comprehensive)

### Quality Over Quantity

- Match or exceed average length of top 10 results
- Provide comprehensive coverage
- No fluff—every word should add value
- Break long content with subheadings, lists, images

## Mobile Optimization

### Mobile-First Indexing

Google uses mobile version of content for indexing and ranking.

**Requirements:**
- Responsive design
- Same content on mobile and desktop
- Structured data on both versions
- Meta tags present on both versions

### Mobile Page Speed

**Targets:**
- Load time under 3 seconds
- Largest Contentful Paint (LCP) under 2.5s
- First Input Delay (FID) under 100ms
- Cumulative Layout Shift (CLS) under 0.1

## E-E-A-T (Experience, Expertise, Authoritativeness, Trust)

### Experience

Show first-hand experience:
- Real examples from your experience
- Case studies with results
- Screenshots or evidence
- Personal insights

### Expertise

Demonstrate expertise:
- Detailed, accurate information
- Author credentials
- Professional language
- Cite sources

### Authoritativeness

Build authority:
- Backlinks from reputable sites
- Brand mentions
- Author bio with credentials
- Social proof (testimonials, reviews)

### Trust

Establish trust:
- HTTPS security
- Privacy policy
- Contact information
- Transparent business practices
- Professional design

## Common SEO Mistakes to Avoid

1. **Keyword Stuffing**: Using keywords unnaturally to manipulate rankings
2. **Duplicate Content**: Same content on multiple pages/sites
3. **Thin Content**: Pages with little substantive content
4. **Ignoring Search Intent**: Content doesn't match what user wants
5. **Broken Links**: Links to non-existent pages
6. **Slow Page Speed**: Pages take too long to load
7. **Missing Mobile Optimization**: Poor mobile experience
8. **No Internal Linking**: Pages aren't connected
9. **Poor Title Tags**: Generic, duplicate, or missing keywords
10. **Ignoring User Experience**: SEO at expense of usability

## SEO Tools Reference

### Free Tools

- **Google Search Console**: Performance monitoring
- **Google Analytics**: Traffic analysis
- **Google Keyword Planner**: Keyword research
- **Google Trends**: Keyword trend analysis
- **Answer the Public**: Question-based keywords

### Paid Tools

- **Ahrefs**: Comprehensive SEO suite
- **SEMrush**: All-in-one marketing toolkit
- **Moz Pro**: SEO analytics and research
- **Surfer SEO**: On-page optimization
- **Clearscope**: Content optimization

## Staying Current

SEO constantly evolves. Stay updated:
- Follow Google Search Central blog
- Monitor algorithm updates
- Test and measure continuously
- Adapt to new SERP features
- Balance SEO with user experience

---

**Last Updated**: 2025-10-25
**Maintained by**: SEO Specialist agent
```

---

### Phase 7: Creating README

Every expansion pack needs a comprehensive README explaining the pack.

#### README Template

```markdown
# Baldwin Writer: [Pack Name] Expansion Pack

[One-sentence description of what this pack does]

## 📚 Overview

[2-3 paragraph overview explaining:
- What this pack adds to Baldwin Writer
- Who should use it
- What problems it solves
- How it extends the core framework]

### Key Features

- 🤖 **X Specialized Agents** - [Brief list of what they do]
- 📖 **X Complete Workflows** - [Types of workflows included]
- ✅ **X Quality Checklists** - [What they ensure]
- 📝 **X Tasks** - [Key tasks available]
- 🎭 **X Templates** - [Template types]

## ✍️ Included Agents

### Core [Domain] Team

1. **Agent Name** - Brief description of role and expertise
2. **Agent Name** - Description
3. **Agent Name** - Description

### Specialist Agents

4. **Agent Name** - Advanced capability description
5. **Agent Name** - Description

[Detail on each agent's capabilities, commands, and when to use]

## 🚀 Installation

### Via Baldwin Writer Installer

```bash
npx baldwin-writer install
# Select "[Pack Name]" from the expansion packs list
```

### Manual Installation

1. Clone or download this expansion pack
2. Copy to your Baldwin Writer installation:
   ```bash
   cp -r [pack-directory]/* ~/baldwin-writer/expansion-packs/[pack-directory]/
   ```
3. Run the Baldwin Writer installer to register the pack

## 💡 Usage

### Quick Start

```bash
# Load the complete [domain] team
baldwin load team [team-name]

# Or activate individual agents
baldwin activate [agent-name]
```

### Available Workflows

- **workflow-name** - Description and use case
- **workflow-name** - Description and use case

## 📋 Key Components

### Templates

- `template-name.yaml` - Purpose and when to use
- `template-name.yaml` - Purpose

### Featured Checklists

- Category-specific checklists
- Quality assurance checklists
- Technical checklists

## 🎯 Use Cases

### Use Case 1: [Scenario Name]

Description of scenario and how the pack helps

### Use Case 2: [Scenario Name]

Description

## 📖 Documentation

- [Workflow Guide](workflows/README.md) - Detailed workflow instructions
- [Agent Reference](agents/README.md) - Complete agent documentation
- [Template Guide](templates/README.md) - Template usage guide
- [Knowledge Base](data/README.md) - Domain knowledge reference

## 🤝 Contributing

We welcome contributions to this expansion pack:

1. Additional domain-specific agents
2. New workflows for specialized scenarios
3. Templates for common document types
4. Checklists for quality assurance
5. Knowledge base enhancements

See [Contributing Guide](../../docs/how-to-contribute-with-pull-requests.md) for details.

## 🙏 Credits

Created by [Author Name] for the Baldwin Writer community.

Special thanks to [contributors/inspirations].

---

**Version:** 1.0.0
**Compatible with:** Baldwin Writer v1.0+
**Last Updated:** [Date]
```

---

## Phase 8: Testing & Validation

### Testing Checklist

#### Structural Tests

- [ ] All required directories present
- [ ] All agents have valid YAML blocks
- [ ] All templates use correct YAML schema
- [ ] All workflows reference valid agents
- [ ] No broken dependency references
- [ ] README is complete and accurate

#### Functional Tests

- [ ] Each agent activates without errors
- [ ] Agent commands execute correctly
- [ ] Templates generate proper documents
- [ ] Workflows complete end-to-end
- [ ] Checklists are practical and usable
- [ ] Knowledge base is accurate and helpful

#### Integration Tests

- [ ] Pack works with core Baldwin agents
- [ ] No terminology conflicts
- [ ] Build system recognizes pack
- [ ] Web bundles generate correctly
- [ ] IDE integration works

#### Quality Tests

- [ ] Agent personas are distinct and clear
- [ ] No generic or vague instructions
- [ ] Examples are domain-appropriate
- [ ] Terminology is consistent
- [ ] Documentation is comprehensive

### User Testing

1. **Alpha Testing**: Creator uses pack for real projects
2. **Beta Testing**: 3-5 target users test with feedback
3. **Refinement**: Address feedback and iterate
4. **Release**: Publish to expansion pack repository

---

## Publishing Your Expansion Pack

### Pre-Publication Checklist

- [ ] All tests pass
- [ ] README is comprehensive
- [ ] Version numbers set correctly
- [ ] Contributors credited
- [ ] Example projects included
- [ ] Documentation complete

### Submission Process

1. **Fork Baldwin Writer Repository**
2. **Create Pack Branch**: `git checkout -b expansion/[pack-name]`
3. **Add Your Pack**: Place in `expansion-packs/[pack-directory]/`
4. **Commit Changes**: Clear, detailed commit messages
5. **Create Pull Request**: Include description, screenshots, examples
6. **Address Review Feedback**: Iterate based on maintainer feedback
7. **Merge & Release**: Pack becomes available to all users

### Pack Versioning

Follow semantic versioning:
- **Major (1.0.0)**: Breaking changes, major new features
- **Minor (1.1.0)**: New features, backward compatible
- **Patch (1.1.1)**: Bug fixes, minor improvements

---

## Maintaining Your Pack

### Ongoing Responsibilities

1. **Bug Fixes**: Address reported issues promptly
2. **Compatibility**: Keep pack compatible with Baldwin core updates
3. **Enhancements**: Add new features based on user feedback
4. **Documentation**: Keep docs current with changes
5. **Community Support**: Help users in issues/discussions

### Update Process

1. Make changes in pack directory
2. Update version number
3. Update changelog
4. Test thoroughly
5. Submit pull request with changes
6. Release notes for significant updates

---

## Best Practices Summary

### Do:
✅ Focus on specific domain expertise
✅ Create distinct, valuable agent personas
✅ Provide complete, tested workflows
✅ Include comprehensive knowledge base
✅ Write clear, detailed documentation
✅ Test with real users before release
✅ Maintain and support your pack

### Don't:
❌ Duplicate core functionality unnecessarily
❌ Create generic, vague agents
❌ Skip testing or documentation
❌ Use inconsistent terminology
❌ Ignore user feedback
❌ Abandon pack after initial release

---

## Expansion Pack Ideas

### High Priority (Community Needs)

1. **Content Marketing Suite** - Blogs, campaigns, SEO
2. **Technical Documentation** - API docs, tutorials, guides
3. **Academic Writing Lab** - Research papers, citations
4. **Business Writing Pro** - Reports, proposals, presentations
5. **Legal Contracts & Docs** - Contracts, agreements, policies

### Specialized Domains

6. **Medical/Healthcare Writing** - Medical content, patient materials
7. **Real Estate Marketing** - Listings, descriptions, market reports
8. **Grant Writing Studio** - Grant proposals, nonprofit content
9. **Technical Specification** - Engineering specs, datasheets
10. **Email Marketing** - Campaign sequences, newsletters

### Creative Extensions

11. **Podcast Production** - Show notes, episode scripts, descriptions
12. **Video Scripts** - YouTube, TikTok, educational videos
13. **Social Media Management** - Multi-platform content creation
14. **Newsletter Publishing** - Substack, Ghost, email newsletters
15. **eBook Production** - Long-form digital books

---

**Document Version**: 1.0.0
**Last Updated**: 2025-10-25
**Owner**: Baldwin Writer Team
**Related Documents**:
- [ARCHITECTURE.md](ARCHITECTURE.md) - Codebase structure
- [TERMINOLOGY.md](TERMINOLOGY.md) - Naming conventions
- [expansion-packs.md](expansion-packs.md) - Pack overview
