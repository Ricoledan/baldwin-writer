# Baldwin Writer: Workflow Examples

## Overview

This document provides detailed, real-world examples of how Baldwin Writer's multi-agent system works together to create different types of content. Each example shows the complete flow from initial idea to published content, including agent interactions, artifacts created, and quality gates passed.

## Workflow Components

Each workflow includes:
- **Agents Involved**: Which specialized agents participate
- **Phases**: Distinct stages of the workflow
- **Artifacts**: Documents and deliverables created
- **Quality Gates**: Review points ensuring excellence
- **Timeline**: Estimated duration for each phase
- **Agent Dialogue**: Sample interactions between agents and user

---

## Example 1: Blog Article Production

### Scenario
Creating a comprehensive blog post about "Content Marketing Trends in 2025" for a B2B marketing blog.

### Agents Involved
- Content Strategist (Alex)
- Content Architect (Sarah)
- Writer (James)
- Copy Editor (Quinn)
- Content Sprint Lead (Sam)

### Complete Workflow

#### Phase 1: Content Planning (Web UI)
**Agent**: Content Strategist (Alex)
**Duration**: 30-45 minutes
**Location**: Web UI (Google Gemini, ChatGPT, Claude)

**User activates Content Strategist**
```
User: "I want to write a blog post about content marketing trends"

Alex (Content Strategist): "Great! Let me help you develop a strategic content brief.
I'll ask you some questions to understand your audience and goals.

1. Who is your target audience?
2. What's the primary goal of this content?
3. What unique angle or insights can you provide?
4. What's your desired length and depth?

Let's start with #1 - who are you writing this for?"

User: "B2B marketing managers at mid-size tech companies"

Alex: "Excellent. These are typically strategic thinkers focused on ROI and efficiency.
Let me run *create-brief to develop a comprehensive content brief."

[Alex runs create-doc.md with content-brief-tmpl.yaml]

Alex: "I've created your content brief. It includes:
- Audience analysis (B2B marketing managers, tech-savvy, ROI-focused)
- Content goal: Educate and position your brand as thought leader
- Success metrics: 10+ shares, 500+ views, 3+ backlinks
- Recommended angle: Data-driven predictions with actionable takeaways
- SEO keywords: content marketing trends, 2025 marketing strategy, B2B content

Would you like to review or refine any section?"
```

**Artifact Created**: `content-brief-2025-marketing-trends.md`

---

#### Phase 2: Content Architecture (Web UI)
**Agent**: Content Architect (Sarah)
**Duration**: 20-30 minutes
**Location**: Web UI

**User activates Content Architect with content brief**
```
User: "Here's my content brief [uploads file]. Can you create an outline?"

Sarah (Content Architect): "I've reviewed your brief. For B2B marketing managers,
I recommend a data-driven structure with clear takeaways. Let me run *create-outline.

[Sarah runs create-doc.md with outline-tmpl.yaml]

Sarah: "I've designed a 2,500-word structure with 5 main sections:

1. Introduction: The Changing Landscape (300 words)
   - Hook: Surprising stat about content marketing ROI
   - Context: What changed in 2024
   - Promise: 5 trends to watch

2. Trend #1: AI-Assisted Content at Scale (500 words)
   - What it is
   - Why it matters
   - How to implement
   - Common mistakes to avoid

3. Trend #2: Interactive Content Formats (500 words)
   [same structure]

4. Trend #3: First-Party Data Strategies (500 words)
   [same structure]

5. Trend #4: Micro-Content for Maximum Impact (500 words)
   [same structure]

6. Conclusion & Action Plan (200 words)
   - Summary of trends
   - 3-step action plan for readers
   - CTA to your service

Each section follows the same pattern for consistency. The structure supports scanning
while providing depth for engaged readers. Would you like me to adjust anything?"

User: "Looks great!"

Sarah: "Perfect. I'll run *review-structure to verify everything aligns with your brief."

[Sarah runs execute-checklist with content-architecture-checklist.md]

Sarah: "✓ Structure supports content goals
✓ Appropriate for audience sophistication level
✓ Provides both scanning and depth
✓ Clear progression and flow
✓ Actionable takeaways included

Architecture approved. Ready for writing phase!"
```

**Artifact Created**: `outline-2025-marketing-trends.md`

---

#### Phase 3: Environment Transition
**Duration**: 5 minutes
**Action**: Switch from Web UI to IDE

```
User switches to Claude Code, Cursor, or VS Code with Baldwin Writer agents installed
User opens the project directory containing:
- content-brief-2025-marketing-trends.md
- outline-2025-marketing-trends.md
```

---

#### Phase 4: Content Sprint Kickoff (IDE)
**Agent**: Content Sprint Lead (Sam)
**Duration**: 10 minutes
**Location**: IDE

**User activates Content Sprint Lead in IDE**
```
User: "I'm ready to start writing my marketing trends article"

Sam (Content Sprint Lead): "Great! I see you have a content brief and outline ready.
Let me create your content piece document with *create-piece.

[Sam runs create-content-piece.md]

Sam: "I've created content-piece-marketing-trends-2025.md with:

Writing Tasks (checkboxes):
- [ ] Write Section 1: Introduction
- [ ] Write Section 2: Trend #1 - AI-Assisted Content
- [ ] Write Section 3: Trend #2 - Interactive Formats
- [ ] Write Section 4: Trend #3 - First-Party Data
- [ ] Write Section 5: Trend #4 - Micro-Content
- [ ] Write Section 6: Conclusion & Action Plan

Quality Standards:
- ✓ Matches brand voice (professional but approachable)
- ✓ Includes data/statistics for credibility
- ✓ Actionable takeaways in each section
- ✓ SEO keywords naturally integrated
- ✓ 2,500 words (+/- 200 words)

Writer Record (for James to update as he works):
- Sections completed: [to be filled]
- Word count: [to be tracked]
- Research sources used: [to be listed]
- Revision notes: [to be added]

Ready to hand off to James (Writer)?"

User: "Yes, let's go"

Sam: "Activating Writer agent James. Good luck with your content!"
```

**Artifact Created**: `content-piece-marketing-trends-2025.md`

---

#### Phase 5: Content Creation (IDE)
**Agent**: Writer (James)
**Duration**: 2-4 hours
**Location**: IDE

**User activates Writer with content piece**
```
User: "James, I'm ready to write this article. Let's use *write-content"

James (Writer): "I've reviewed the content piece, brief, and outline. I'll work through
each section sequentially. Starting with Section 1: Introduction.

[James reads outline for Section 1]
[James drafts Section 1]

James: "I've drafted the introduction (315 words):

---
# The Changing Landscape of Content Marketing in 2025

Here's a statistic that might surprise you: 73% of B2B marketing teams now use AI-assisted
content tools regularly, up from just 12% two years ago. This dramatic shift signals a
fundamental transformation in how we create, distribute, and measure content effectiveness.

[continues with full introduction draft...]
---

I've included:
- ✓ Hook with surprising stat (73% AI adoption)
- ✓ Context about 2024 changes
- ✓ Clear promise of 5 trends
- ✓ Professional but approachable tone
- ✓ Natural keyword integration

Self-review checklist:
✓ Matches brand voice
✓ Engaging opening
✓ Sets clear expectations
✓ Appropriate length

Updating content piece: [x] Write Section 1: Introduction

Moving to Section 2: Trend #1 - AI-Assisted Content..."

[James continues through each section, following the outline, maintaining consistency,
and updating checkboxes as he completes each section]

James: "All sections complete! Final word count: 2,547 words.

Completed:
[x] Write Section 1: Introduction (315 words)
[x] Write Section 2: Trend #1 - AI-Assisted Content (523 words)
[x] Write Section 3: Trend #2 - Interactive Formats (498 words)
[x] Write Section 4: Trend #3 - First-Party Data (512 words)
[x] Write Section 5: Trend #4 - Micro-Content (505 words)
[x] Write Section 6: Conclusion & Action Plan (194 words)

Running self-review with *self-review..."

[James runs execute-checklist with publishing-checklist.md]

James: "Self-review results:
✓ All sections match outline
✓ Consistent voice throughout
✓ Data/stats in every section
✓ Actionable takeaways provided
✓ SEO keywords naturally integrated
✓ Word count on target
✓ Smooth transitions between sections
⚠ Need to add 2 more data sources (have 3, want 5)

Let me add additional research citations...

[James adds two more data sources]

Final self-review: All quality standards met!

Content Status: Ready for Editorial Review

Would you like me to continue, or shall we move to Copy Editor (Quinn)?"
```

**Artifact Updated**: `content-piece-marketing-trends-2025.md` (full draft completed)

---

#### Phase 6: Editorial Review (IDE)
**Agent**: Copy Editor (Quinn)
**Duration**: 45-60 minutes
**Location**: IDE

**User activates Copy Editor with completed draft**
```
User: "Quinn, please review the marketing trends article with *review-content"

Quinn (Copy Editor): "I'll perform a comprehensive editorial review. Let me read through
the full draft..."

[Quinn reviews entire article]

Quinn: "I've completed my review. Overall: Strong draft with excellent structure and
insights. I found 23 items to address:

**Critical Issues (Must Fix):**
1. Section 2, paragraph 3: Statistic needs source citation
2. Section 4, paragraph 2: Contradicts earlier claim about data privacy
3. Conclusion: CTA is too soft for B2B audience

**Recommended Improvements (Should Fix):**
4. Introduction: Consider stronger hook - current stat is good but not surprising enough
5. Section 2: Add specific tool examples (mentions AI but no concrete examples)
6. Section 3: Interactive content examples need more diversity (all are quizzes)
7-15. [additional style and clarity improvements]

**Optional Polish (Nice to Have):**
16. Section 5: Could use a contrarian viewpoint for balance
17-23. [minor stylistic suggestions]

I'll create a detailed review document: review-feedback-marketing-trends.md

Would you like me to work with James to *apply-editorial-fixes, or would you prefer
to review my feedback first?"

User: "Let's apply the critical and recommended fixes"

Quinn: "Understood. Let me collaborate with James..."

[Quinn and James work together to apply fixes]

Quinn: "All critical and recommended issues addressed:

Fixed:
✓ Added citation for Section 2 stat
✓ Resolved data privacy contradiction
✓ Strengthened CTA with specific next step
✓ Enhanced hook with more surprising stat (91% failure rate)
✓ Added 3 specific AI tool examples (Jasper, Copy.ai, ChatGPT)
✓ Diversified interactive examples (quizzes, calculators, assessments)
✓ [all other recommended fixes]

Running final quality check..."

[Quinn runs execute-checklist with publishing-checklist.md]

Quinn: "Final editorial review complete:

✓ All quality standards met
✓ Brand voice consistent
✓ Factually accurate with proper citations
✓ Grammar and style perfect
✓ SEO optimized
✓ Engaging and actionable
✓ Ready for publication

Content Status: APPROVED FOR PUBLICATION

Recommended next steps:
1. Format for your blog platform
2. Create meta description (I can help with this)
3. Select featured image
4. Schedule publication
5. Prepare social media promotion

Would you like me to help with any of these?"
```

**Artifacts Created**:
- `review-feedback-marketing-trends.md`
- Updated `content-piece-marketing-trends-2025.md` (final version)

---

#### Phase 7: Publication Preparation
**Agent**: Content Sprint Lead (Sam)
**Duration**: 15-20 minutes

```
Sam: "Content approved! Let me help coordinate publication.

Publication Checklist:
- [x] Content drafted and approved
- [ ] Meta description written
- [ ] Featured image selected
- [ ] Internal links added
- [ ] External links verified
- [ ] Author bio included
- [ ] Publication date scheduled
- [ ] Social media posts drafted
- [ ] Email newsletter prepared

I can help with meta description and social posts. Shall we proceed?"

[User and Sam complete publication preparation]

Sam: "All set! Your article is ready to publish.

Final Deliverables:
✓ 2,547-word blog post
✓ Meta description (155 characters, SEO-optimized)
✓ 3 social media posts (LinkedIn, Twitter, Facebook)
✓ Email newsletter blurb
✓ Internal linking suggestions

Great work! This workflow took approximately 4-5 hours from initial brief to
publication-ready content. Would you like a retrospective, or shall we close this sprint?"
```

**Final Artifacts**:
- `content-piece-marketing-trends-2025.md` (published version)
- `meta-description-marketing-trends.txt`
- `social-posts-marketing-trends.md`

---

## Example 2: Novel Chapter (Creative Writing)

### Scenario
Writing Chapter 3 of a fantasy novel using the Creative Writing expansion pack.

### Agents Involved
- Plot Architect
- Character Psychologist
- Writer (James)
- Beta Reader
- Editor (from Creative Writing pack)

### Condensed Workflow

#### Phase 1: Chapter Planning
**Plot Architect**: "Based on your story outline, Chapter 3 needs to:
- Introduce the antagonist's motivation
- Create the midpoint plot twist
- Advance the protagonist's character arc
- Set up Chapter 4's conflict

Let me create a chapter beat sheet..."

**Character Psychologist**: "For the antagonist reveal, we need to show:
- Their justified grievance (readers should understand their perspective)
- A humanizing moment (they're not pure evil)
- Contradiction with protagonist's values (creates genuine conflict)

I recommend showing their backstory through action, not exposition."

#### Phase 2: Drafting
**Writer (James)**: "I'll draft the chapter in 3 scenes:
1. Scene 1: Protagonist's investigation (builds tension)
2. Scene 2: Antagonist reveal (the twist)
3. Scene 3: Protagonist's reaction (emotional impact)

Starting with Scene 1..."

[Writes 3,500-word chapter following beat sheet]

#### Phase 3: Beta Review
**Beta Reader**: "I've read as your target reader. Feedback:
- Scene 1: Great tension build-up, but paragraph 4 needs faster pacing
- Scene 2: Twist is genuinely surprising! But needs more foreshadowing in Ch 1-2
- Scene 3: Emotional reaction feels authentic
- Overall: Strong chapter, addresses my notes above and it's ready"

#### Phase 4: Line Editing
**Editor**: "Performing line edit for:
- Prose rhythm and flow
- Dialogue authenticity
- Sensory details
- Genre conventions (fantasy)

Found 15 opportunities for improvement, focusing on 'show don't tell' and
trimming unnecessary adverbs. Applying fixes..."

**Result**: Polished chapter ready for manuscript integration

---

## Example 3: Technical Documentation (API Reference)

### Scenario
Creating API documentation for a new RESTful API using the Technical Writing expansion pack (planned).

### Agents Involved
- Content Strategist (Alex)
- API Documentation Specialist
- Code Example Curator
- Technical Reviewer
- Docs Architect

### Condensed Workflow

#### Phase 1: Documentation Planning
**Content Strategist**: "Analyzing your API structure and developer audience.
Recommending:
- Quick Start guide (5 minutes to first API call)
- Endpoint reference (complete with examples)
- Authentication guide (security-focused)
- Error handling guide (troubleshooting)
- Use case tutorials (real-world scenarios)"

**Docs Architect**: "I'll structure the docs with:
- Progressive disclosure (basic → advanced)
- Consistent endpoint documentation pattern
- Easy navigation and search
- Integration with code samples"

#### Phase 2: Content Creation
**API Documentation Specialist**: "For each endpoint, I'll document:
- Purpose and use case
- Request format (headers, parameters, body)
- Response format (success and error cases)
- Example request/response
- Common mistakes
- Related endpoints

Starting with authentication endpoints..."

**Code Example Curator**: "I'll create working code examples in:
- Python
- JavaScript
- cURL
- PHP

Each example will be:
- Copy-paste ready
- Well-commented
- Following best practices
- Tested and verified"

#### Phase 3: Technical Review
**Technical Reviewer**: "Validating:
✓ All endpoints documented accurately
✓ Code examples execute successfully
✓ Parameter types correct
✓ Error codes comprehensive
⚠ Missing rate limiting information
⚠ OAuth flow needs clarification

Adding missing content..."

**Result**: Comprehensive, accurate API documentation

---

## Example 4: Content Series (Multi-Article Campaign)

### Scenario
Creating a 5-part content series on "Building a Content Marketing Engine" for B2B SaaS.

### Workflow Highlights

#### Series Planning
**Editorial PM**: "I've mapped out your 5-article series:

Article 1: Foundation - Content Strategy Basics (1,500 words)
- Establishes framework for series
- Introduces key concepts
- Sets expectations

Article 2: Audience Research (2,000 words)
- Deep dive into buyer personas
- Research methodologies
- Tools and templates

Article 3: Content Calendar Planning (1,800 words)
- Calendar structure
- Prioritization frameworks
- Resource allocation

Article 4: Production Workflow (2,200 words)
- Team structures
- Quality processes
- Tools and automation

Article 5: Measurement & Optimization (2,000 words)
- KPIs and metrics
- Analytics setup
- Continuous improvement

Each article links to next, building a complete system.
Total word count: 9,500 words
Timeline: 4 weeks (1 article per week + 1 week buffer)"

#### Sequential Production
Articles produced using standard blog workflow (Example 1), but with:
- **Content Architect** ensuring structural consistency across series
- **Copy Editor** verifying terminology consistency
- **Content Sprint Lead** managing publication schedule
- **Editorial PM** tracking series metrics

#### Series Quality Gates
- Part 1 establishes terminology used throughout
- Each part builds on previous (no contradictions)
- Consistent voice and depth
- Strategic CTA progression (lead magnet → demo → contact sales)
- SEO interlinking strategy

**Result**: Cohesive 5-part series that builds audience trust and drives conversions

---

## Example 5: Academic Paper (Research Paper)

### Scenario
Writing a research paper for academic publication using the Academic Writing expansion pack (planned).

### Agents Involved
- Research Analyst
- Argument Architect
- Methodology Designer
- Citation Manager
- Peer Review Simulator
- Writer (James)

### Condensed Workflow

#### Phase 1: Literature Review
**Research Analyst**: "I've analyzed 47 papers in your field on this topic.
- 3 papers directly address your research question
- 12 papers provide supporting context
- 8 papers offer contrasting viewpoints
- Gap identified: No one has studied X under conditions Y

Recommended approach: Position your research as filling this specific gap."

#### Phase 2: Argument Structure
**Argument Architect**: "Your thesis requires supporting with:
1. Theoretical framework (establish your lens)
2. Methodological justification (why this approach)
3. Evidence presentation (your data)
4. Alternative explanations (address counterarguments)
5. Implications (so what?)

I'll create an argument map showing logical flow..."

#### Phase 3: Methodology Design
**Methodology Designer**: "For your research question, I recommend:
- Mixed methods approach (quantitative + qualitative)
- Sample size: 200 participants (power analysis shows significance)
- Data collection: Survey + semi-structured interviews
- Analysis: Regression analysis + thematic coding

I'll draft your methodology section with full justification..."

#### Phase 4: Writing & Citation
**Writer (James)**: "Drafting paper following academic conventions:
- Abstract (250 words)
- Introduction with hook and thesis
- Literature Review (2,000 words)
- Methodology (1,500 words)
- Results (1,800 words)
- Discussion (1,500 words)
- Conclusion (500 words)
- References (40+ citations)"

**Citation Manager**: "Ensuring all citations follow APA 7th edition:
- In-text citations formatted correctly
- Reference list complete and formatted
- No orphaned citations
- Direct quotes properly attributed
- Plagiarism check passed"

#### Phase 5: Peer Review Simulation
**Peer Review Simulator**: "Acting as 3 typical peer reviewers in your field:

Reviewer 1 (Methodologist): Questions validity of sample selection.
Recommendation: Add discussion of sampling limitations.

Reviewer 2 (Theorist): Wants stronger connection to existing theory.
Recommendation: Expand theoretical framework section.

Reviewer 3 (Skeptic): Challenges generalizability of findings.
Recommendation: Clarify scope and acknowledge limitations.

All reviewers: Minor revisions recommended. Apply these changes
before submission to increase acceptance likelihood."

**Result**: Publication-ready research paper with anticipated reviewer concerns addressed

---

## Workflow Pattern Analysis

### Common Elements Across All Workflows

1. **Planning Before Creation**
   - Every workflow starts with strategy/planning
   - Content brief or equivalent defines success
   - Architecture/structure designed before writing

2. **Multi-Agent Collaboration**
   - No single agent does everything
   - Specialists contribute their expertise
   - Handoffs between agents are explicit

3. **Quality Gates Built-In**
   - Self-review by Writer
   - Editorial review by Copy Editor or specialist
   - Checklist-based validation
   - Multiple review passes

4. **Artifact Trail**
   - Every phase produces documents
   - Artifacts reference each other
   - Complete project documentation
   - Revision history maintained

5. **Iterative Refinement**
   - Initial draft → Review → Revise → Approve
   - Feedback is specific and actionable
   - Quality improves with each pass

### Workflow Variations by Content Type

| Content Type | Planning Intensity | Technical Depth | Review Cycles | Typical Duration |
|--------------|-------------------|-----------------|---------------|------------------|
| Blog Post | Medium | Low-Medium | 1-2 | 4-6 hours |
| Novel Chapter | High | Low | 2-3 | 6-10 hours |
| Technical Docs | High | Very High | 2-4 | 10-20 hours |
| Content Series | Very High | Medium | 2-3 per piece | 2-4 weeks |
| Research Paper | Very High | Very High | 3-5 | 40-80 hours |

---

## Workflow Customization

### Adapting Workflows for Your Needs

#### For Faster Production (Lower Rigor)
- Skip some planning steps
- Combine architecture and drafting
- Single review pass instead of multiple
- Use templates more heavily

#### For Higher Quality (More Rigor)
- Add additional research phase
- Multiple review passes by different agents
- Peer review or beta reader feedback
- Extensive revision cycles

#### For Team Collaboration
- Multiple writers on different sections
- Parallel review processes
- Version control integration
- Shared knowledge base

---

## Getting Started with Workflows

### New User Recommendations

1. **Start Simple**: Begin with single blog post (Example 1)
2. **Learn Agents**: Understand each agent's role
3. **Follow Structure**: Trust the process initially
4. **Adapt Later**: Customize once comfortable
5. **Build Library**: Create reusable templates from successful workflows

### Workflow Templates

Baldwin Writer includes pre-built workflow templates:
- `article-production.yaml` - Standard blog post
- `novel-writing.yaml` - Fiction chapter creation
- `documentation.yaml` - Technical documentation
- `series-development.yaml` - Multi-piece content
- `research-paper.yaml` - Academic writing

Each template provides:
- Step-by-step agent sequence
- Phase descriptions
- Artifact checklists
- Quality gate criteria
- Timeline estimates

---

**Document Version**: 1.0.0
**Last Updated**: 2025-10-25
**Owner**: Baldwin Writer Team
**Related Documents**:
- [ARCHITECTURE.md](ARCHITECTURE.md) - Technical structure
- [AGENT_TRANSFORMATION.md](AGENT_TRANSFORMATION.md) - Agent details
- [user-guide.md](user-guide.md) - Getting started guide
