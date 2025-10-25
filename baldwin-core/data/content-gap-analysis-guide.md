# Content Gap Analysis Guide

## Overview

Content gap analysis is the systematic process of identifying valuable content opportunities by finding topics your audience searches for that you haven't covered, or where competitors have stronger content. This guide provides step-by-step methods for discovering and prioritizing content gaps.

**Domain-Agnostic Framework**: This guide uses universal methodologies that apply across all content domains. For domain-specific examples (technical content, creative writing, healthcare, finance, etc.), see the expansion packs in `expansion-packs/`.

**Example Notation**: Generic examples use placeholder format like "[Topic]" or "[Industry]". Apply to your domain:

- Tech: "API testing" → See `expansion-packs/tech-content/`
- Creative: "Character development" → See `expansion-packs/bmad-creative-writing/`
- Your domain: Substitute your topics

## What Are Content Gaps?

### Types of Content Gaps

#### 1. Keyword Gap

**Definition**: Keywords and search terms that competitors rank for, but you don't.

**Example Template**:

```
Your competitor ranks for:
- "[Topic] [subtopic keyword]" (position X, Y/month searches)
- "[Topic] best practices" (position X, Y/month searches)
- "[Topic] how-to guide" (position X, Y/month searches)

You rank for:
- None of these

Gap: X keyword opportunities, ~Y total monthly searches
```

**Domain Examples**:

- **Content Marketing**: "content calendar template", "content strategy framework"
- **Project Management**: "agile sprint planning", "scrum vs kanban"
- **Personal Finance**: "budget planning worksheet", "retirement calculator"
- **Tech**: See `expansion-packs/tech-content/` for API, DevOps examples

#### 2. Topic Gap

**Definition**: Subject areas or themes you haven't covered at all.

**Example Template**:

```
Your Content Coverage for [Topic Area]:
✅ [Subtopic 1] - covered
✅ [Subtopic 2] - covered
❌ [Subtopic 3] - GAP
❌ [Subtopic 4] - GAP
❌ [Subtopic 5] - GAP
✅ [Subtopic 6] - covered

Gaps: 3 major topic areas missing
```

**Domain Examples**:

**Email Marketing**:

```
✅ Email list building
✅ Subject line writing
❌ Automation workflows (GAP)
❌ Segmentation strategies (GAP)
❌ Deliverability optimization (GAP)
```

**Recipe/Food Blog**:

```
✅ Quick weeknight dinners
✅ Desserts
❌ Meal prep guides (GAP)
❌ Dietary restrictions (GAP)
❌ Kitchen equipment reviews (GAP)
```

#### 3. Quality Gap

**Definition**: Topics where you have content, but competitors' content is significantly better.

**Example Template**:

```
Topic: "[Your Topic]"

Your article:
- X words
- Published [old date]
- Y elements covered
- Limited examples
- Z backlinks

Competitor article:
- 3X words
- Published [recent date]
- 2Y elements covered
- Comprehensive examples/visuals
- 10Z backlinks

Gap: Quality and comprehensiveness
Action: Update/rewrite
```

**Real Example (Content Marketing)**:

```
Topic: "Content Marketing Strategy"

Your article:
- 1,200 words
- Published 2021
- 5 strategy steps
- No templates
- 4 backlinks

Competitor article:
- 4,500 words
- Published 2024
- 12 strategy steps
- 3 downloadable templates
- 68 backlinks

Gap: Depth, recency, resources
Action: Complete rewrite with templates
```

#### 4. Format Gap

**Definition**: Content types or formats you're missing.

**Example**:

```
Content Formats:

Your formats:
✅ Blog articles (50)
✅ How-to guides (15)
❌ Video tutorials (GAP)
❌ Interactive tools (GAP)
❌ Downloadable templates (GAP)
❌ Webinars (GAP)

Gaps: 4 format types competitors use successfully
```

#### 5. Audience Segment Gap

**Definition**: Audience segments not adequately served by your content.

**Example Template**:

```
Target Audiences for [Your Niche]:

Content coverage:
✅ [Audience Segment 1] (X% of content)
✅ [Audience Segment 2] (Y% of content)
❌ [Audience Segment 3] (GAP - Z% of content)
❌ [Audience Segment 4] (GAP - low% of content)

Gaps: Under-serving [specific audience segments]
```

**Domain Examples**:

**B2B Marketing Blog**:

```
✅ Marketing Managers (40% of content)
✅ Content Creators (45% of content)
❌ CMOs/Executives (GAP - 10%)
❌ Solo consultants (GAP - 5%)
```

**Personal Finance**:

```
✅ Young professionals (50%)
✅ Families (30%)
❌ Retirees (GAP - 10%)
❌ Small business owners (GAP - 10%)
```

#### 6. Search Intent Gap

**Definition**: Missing content for specific search intents.

**Example**:

```
Search Intent Coverage:

Your content:
- Informational: 70% ✅
- Navigational: 20% ✅
- Commercial: 5% ❌ (GAP)
- Transactional: 5% ❌ (GAP)

Gaps: Under-serving commercial and transactional intent
Need: Comparison guides, alternatives pages, decision content
```

---

## Gap Analysis Tools

### Free Tools

#### Google Search Console

**What it finds**: Keywords you already rank for (positions 11-50)

**How to use**:

```
1. Open Google Search Console
2. Go to Performance → Search Results
3. Filter by:
   - Position: 11-100
   - Impressions: >100
4. Sort by impressions (descending)
5. Result: Keywords where you're ALMOST ranking

These are your easiest gap opportunities - you're already on page 2-3
```

**Example Output**:

```
Keyword: "[your topic keyword]"
- Position: 11-20
- Impressions: X/month
- Clicks: Y

Action: Small improvements could push to page 1
Opportunity: HIGH (already ranking, just need boost)
```

**Real Example (Project Management)**:

```
Keyword: "project timeline template"
- Position: 14
- Impressions: 820/month
- Clicks: 12

Action: Update article, add downloadable template
Opportunity: HIGH - Could gain 200+ monthly visits
```

#### Google "People Also Ask"

**What it finds**: Common questions on a topic

**How to use**:

```
1. Google your target keyword
2. Expand "People Also Ask" section
3. Click each question to load more
4. Extract 20-30 related questions
5. Check if you answer these questions

Result: Question-based content gaps
```

**Example Template**:

```
Search: "[your main keyword]"

People Also Ask:
- "[Question 1]"
- "[Question 2]"
- "[Question 3]"
- "[Question 4]"

Your content check:
❌ Don't answer question 1
✅ Have content for question 2
❌ Don't cover question 3
❌ Don't address question 4

Gaps identified: 3 questions to answer
```

**Real Example (Email Marketing)**:

```
Search: "email marketing"

People Also Ask:
- "What is a good open rate for email marketing?"
- "How often should I send marketing emails?"
- "What are the best email marketing tools?"
- "How to build an email list?"

Your content check:
❌ No benchmarks/open rate guide
❌ No frequency best practices
✅ Have tools comparison
✅ Have list building guide

Gaps: 2 high-value questions
```

#### Answer Socrates / AlsoAsked

**What it finds**: Question clusters and hierarchies

**How to use**:

```
1. Enter seed keyword
2. Get visual question tree
3. Identify branches you haven't covered
4. Export question list

Result: Systematic question coverage map
```

#### Reddit / Community Search

**What it finds**: Real questions people are asking

**How to use**:

```
1. Find relevant subreddits (e.g., r/devops, r/kubernetes)
2. Search for your topic
3. Sort by top posts (last year)
4. Note frequently asked questions
5. Check if you have content answering them

Result: Real user pain points and questions
```

**Example Template**:

```
Community: [Relevant forum/subreddit]

Top questions (last 6 months):
1. "[Question about topic]" (X upvotes)
2. "[Question about topic]" (Y upvotes)
3. "[Question about topic]" (Z upvotes)

Your content check:
❌ No content addressing question 1
❌ No content addressing question 2
✅ Have content for question 3
❌ No content for question 4

Gaps: X high-interest topics
```

**Domain Examples**:

**Photography (r/photography)**:

```
1. "Best camera for beginners 2024?" (445 upvotes)
2. "How to price photography services?" (387 upvotes)
3. "Lightroom vs Capture One?" (298 upvotes)

Gaps: Pricing guide, software comparison
```

**Gardening (r/gardening)**:

```
1. "When to start seeds indoors?" (512 upvotes)
2. "Dealing with aphids naturally?" (401 upvotes)
3. "Best vegetables for containers?" (367 upvotes)

Gaps: Seed starting calendar, pest control guide
```

For tech examples, see `expansion-packs/tech-content/`

### Paid Tools

#### Ahrefs Content Gap Tool

**What it finds**: Keywords up to 10 competitors rank for that you don't

**How to use**:

```
1. Ahrefs → Content Gap
2. Enter your domain
3. Add 3-5 competitor domains
4. Filter:
   - Keyword difficulty: <40 (if you're DA <50)
   - Volume: >100/month
   - At least 2 competitors ranking
5. Result: List of keyword gaps

Export and prioritize
```

**Example Output Template**:

```
Keyword: "[topic keyword]"
- Volume: X/month
- Difficulty: Y
- Competitors ranking: Z/5
- Your ranking: Not in top 100

Opportunity: [HIGH/MEDIUM/LOW]
Reason: [volume level], [difficulty level], [competitor analysis]
```

**Real Examples**:

**Content Marketing**:

```
Keyword: "content calendar template excel"
- Volume: 1,200/month
- Difficulty: 22
- Competitors ranking: 4/5
- Your ranking: Not in top 100

Opportunity: HIGH
Reason: Good volume, low difficulty, proven demand
```

**Fitness/Health**:

```
Keyword: "meal prep for weight loss"
- Volume: 3,400/month
- Difficulty: 35
- Competitors ranking: 3/5
- Your ranking: Not in top 100

Opportunity: MEDIUM-HIGH
Reason: High volume, moderate difficulty, achievable
```

#### Semrush Keyword Gap

**What it finds**: Keyword gaps across 4 categories

**How to use**:

```
1. Semrush → Keyword Gap
2. Enter your domain + 4 competitors
3. Review 4 gap types:
   - Missing: They rank, you don't (PRIMARY GAPS)
   - Weak: You rank poorly (positions 11+)
   - Strong: You outrank them (not gaps)
   - Unique: Only you rank (your advantages)

4. Export "Missing" and "Weak" keywords
5. Filter and prioritize
```

**Gap Categories**:

```
Missing (Priority 1):
- Competitors rank top 10
- You don't rank at all
- Action: Create new content

Weak (Priority 2):
- You rank position 11-50
- Competitors rank top 10
- Action: Improve existing content

Example Results:
- Missing keywords: 347
- Weak keywords: 124
- Total gaps: 471 opportunities
```

#### MarketMuse

**What it finds**: Topic authority gaps and content insufficiency

**How to use**:

```
1. Enter your target topic
2. MarketMuse analyzes:
   - Topics you should cover
   - Depth required
   - Related topics missing
3. Get content brief with gap areas
4. Compare your content vs. ideal coverage

Result: Topic-level gap analysis
```

---

## Step-by-Step Gap Analysis Process

### Step 1: Prepare Your Content Inventory

**Create comprehensive list of all your content**:

```markdown
## Content Inventory

### Blog Articles (47)

1. "Introduction to REST APIs" (1,200 words, 2022-03-15)
2. "API Authentication Best Practices" (1,800 words, 2023-06-20)
3. "Building Your First API" (2,100 words, 2023-09-10)
   ...

### Resources (8)

1. "API Design Checklist" (template, 2023-01-15)
2. "REST API Best Practices Guide" (PDF, 2022-08-20)
   ...

### Videos (0)

- None

### Tools (0)

- None
```

**Extract metadata**:

```
For each piece:
- Title
- URL
- Primary keyword
- Related keywords
- Word count
- Publish date
- Last updated
- Current rankings (if any)
- Traffic (monthly)
```

**Export from Google Analytics / Search Console**:

- All ranking keywords (position 1-100)
- Traffic by page
- Top performing content

### Step 2: Identify Your Competitors

**Competitor Types**:

**Direct Competitors** (Same business/product):

- Targeting same customers
- Similar positioning
- Same market

**Content Competitors** (Targeting same keywords):

- Ranking for your target keywords
- May be different business
- Focus: Their content, not product

**How to Find Content Competitors**:

**Method 1: Google Search**:

```
1. Search your top 10 target keywords
2. Note who appears in top 10 repeatedly
3. List competitors by frequency

Example:
"API documentation" → ReadMe, Stoplight, Swagger
"API testing" → Postman, SoapUI, RestAssured
"API design" → Nordic APIs, Phil Sturgeon, Swagger

Content Competitors:
- Swagger (appears 3x)
- Postman (appears 2x)
- ReadMe (appears 2x)
- Nordic APIs (appears 1x)
```

**Method 2: Ahrefs "Competing Domains"**:

```
1. Ahrefs → Site Explorer → Your domain
2. Organic Search → Competitors
3. Filter by "Common keywords" > 50
4. Review top 10 domains

Result: Competitors with significant keyword overlap
```

**Select 3-5 Competitors for Analysis**:

```
Chosen Competitors:
1. Postman Blog (Direct competitor, strong content)
2. Nordic APIs (Thought leader, API-focused)
3. RapidAPI Blog (Similar audience, comprehensive)
4. Kong Blog (Enterprise focus, high authority)
5. RestfulAPI.net (Niche authority, specific topics)

Why these:
- Mix of business types
- Varying domain authority
- Different content strategies
- Cover different angles
```

### Step 3: Analyze Competitor Content

**For Each Competitor, Document**:

```markdown
## Competitor Analysis: Postman Blog

### Overview

- Domain Authority: 71
- Blog posts: ~300
- Publishing frequency: 2-3x/week
- Content age: Mostly 2023-2024

### Top 10 Performing Posts (by estimated traffic)

1. "API testing tutorial" (est. 8,000 visits/month)
2. "REST API vs GraphQL" (est. 5,400 visits/month)
3. "API documentation guide" (est. 3,200 visits/month)
   ...

### Topic Categories Covered

- API Testing: 80 posts
- API Development: 60 posts
- API Documentation: 25 posts
- API Security: 20 posts
- Tools & Integration: 40 posts
- Case Studies: 15 posts

### Content Depth

- Average word count: 1,800 words
- Typical format: How-to guides, tutorials
- Visuals: Screenshots, custom graphics
- Code examples: Extensive
- Original research: Some (surveys, reports)

### Strengths

- Strong technical expertise
- Comprehensive tutorials
- Regular publishing
- Product integration examples

### Potential Gaps (They don't cover well)

- API governance
- Enterprise API strategy
- API monetization
- Legacy API migration

### Our Opportunities

- Go deeper on security topics
- More enterprise content
- Better beginner content
- Original research/data
```

### Step 4: Run Keyword Gap Analysis

**Using Ahrefs Content Gap**:

```
Setup:
- Your domain: yourdomain.com
- Competitor 1: postman.com/blog
- Competitor 2: nordicapis.com
- Competitor 3: rapidapi.com/blog

Filters:
- Keyword Difficulty: <35
- Volume: >50/month
- Intent: All
- Position: 1-10 (competitors)

Results: 234 keyword gaps

Top Gaps:
1. "API gateway vs load balancer" (900/month, KD 25)
2. "GraphQL subscriptions tutorial" (450/month, KD 22)
3. "API versioning strategies" (680/month, KD 30)
4. "REST API pagination best practices" (520/month, KD 28)
5. "API rate limiting algorithms" (300/month, KD 24)
...
```

**Export and Categorize**:

```markdown
## Keyword Gaps by Topic

### API Design (45 keywords)

- "API design patterns" (1,200/month, KD 32)
- "RESTful API best practices" (890/month, KD 35)
  ...

### API Security (38 keywords)

- "API authentication methods" (1,500/month, KD 30)
- "OAuth2 flow explained" (720/month, KD 25)
  ...

### API Testing (42 keywords)

- "API load testing tools" (680/month, KD 28)
- "API integration testing" (520/month, KD 26)
  ...

### API Documentation (29 keywords)

- "API documentation tools" (1,100/month, KD 33)
- "OpenAPI specification guide" (400/month, KD 22)
  ...
```

### Step 5: Identify Topic Gaps

**Question Mining** from communities:

```markdown
## Questions from Reddit (r/webdev, r/apis)

### Authentication/Security (Most discussed)

- "How to secure API keys in frontend apps?" (28 posts)
- "JWT vs session-based auth for APIs?" (22 posts)
- "API key management best practices?" (18 posts)

### Design/Architecture

- "When to use GraphQL over REST?" (31 posts)
- "How to design backwards-compatible APIs?" (15 posts)
- "Monolith vs microservices for small team?" (19 posts)

### Performance

- "How to optimize API response times?" (12 posts)
- "Database query optimization for APIs?" (9 posts)
- "Caching strategies for REST APIs?" (14 posts)

### Testing

- "Best practices for API testing?" (17 posts)
- "How to test rate limiting?" (6 posts)
- "End-to-end API testing setup?" (11 posts)
```

**Cross-reference with your content**:

```
Your Coverage Check:

Authentication Questions:
❌ "How to secure API keys in frontend?" - NO CONTENT
✅ "JWT vs session auth?" - Have article
❌ "API key management?" - NO CONTENT

Design Questions:
✅ "GraphQL vs REST?" - Have comparison
❌ "Backwards-compatible API design?" - NO CONTENT
❌ "Monolith vs microservices?" - NO CONTENT

Result: 5 high-interest gaps identified
```

### Step 6: Find Quality Gaps

**Compare your content vs. top-ranking competitor content**:

```markdown
## Quality Gap Analysis: "API Rate Limiting"

### Your Article

- URL: yourdomain.com/api-rate-limiting
- Word count: 1,200
- Published: 2021-11-15
- Last updated: 2021-11-15 (3+ years old)
- Ranking: Position 23
- Traffic: 15 visits/month
- Backlinks: 3

**Coverage**:

- What is rate limiting (200 words)
- Why it matters (150 words)
- Basic implementation (400 words)
- 1 code example (Node.js)
- No algorithms explained
- No real-world examples

### Top Competitor (Position 3)

- URL: competitor.com/api-rate-limiting-guide
- Word count: 3,800
- Published: 2023-08-10
- Last updated: 2024-06-15 (recent)
- Ranking: Position 3
- Traffic: ~380 visits/month (est.)
- Backlinks: 47

**Coverage**:

- What is rate limiting (300 words)
- Why it matters (250 words)
- 5 rate limiting algorithms explained (1,200 words)
  - Token bucket
  - Leaky bucket
  - Fixed window
  - Sliding window
  - Adaptive
- Implementation in 4 languages (900 words)
  - Node.js
  - Python
  - Go
  - Java
- Production considerations (600 words)
- Real-world case studies (550 words)
- 8 code examples
- Custom diagrams for each algorithm

### Gap Analysis

**Comprehensiveness**: MAJOR GAP

- They cover 5 algorithms, we cover 0
- They have 4 language examples, we have 1
- They have case studies, we have none

**Recency**: MAJOR GAP

- Their content: 6 months old
- Our content: 3+ years old
- Technology changes not reflected

**Depth**: MAJOR GAP

- 3,800 words vs 1,200 words
- Production considerations missing
- No algorithm deep-dives

**Visuals**: GAP

- They have algorithm diagrams
- We have no visuals

### Action: COMPLETE REWRITE NEEDED

Priority: HIGH
Estimated effort: 16-20 hours
Expected improvement: Position 23 → Position 5-8
```

### Step 7: Identify Format Gaps

**Analyze competitor content formats**:

```markdown
## Format Gap Analysis

### Competitor Content Formats

**Postman**:

- Blog articles: 300+
- Video tutorials: 50+
- Interactive tools: 5 (workspace, collection runner, etc.)
- Templates: 20+
- Webinars: Monthly
- Community forum: Active

**Nordic APIs**:

- Blog articles: 250+
- eBooks: 8
- Conference talks: Video archive
- API Summit (annual event)
- Newsletter: Weekly

**RapidAPI**:

- Blog articles: 200+
- API marketplace: 1000s of APIs
- Code generators: Interactive
- API Collections: Curated
- Tutorials: Video + text

### Your Current Formats

- Blog articles: 47
- Resources: 8 (static)
- Videos: 0
- Tools: 0
- Events: 0
- Newsletter: No

### Format Gaps Identified

**HIGH PRIORITY**:
❌ Video tutorials (all competitors have)
❌ Interactive tools (2/3 competitors)
❌ Newsletter (2/3 competitors)

**MEDIUM PRIORITY**:
❌ Webinars/events
❌ eBooks/guides
❌ Community/forum

**Action**: Add video and interactive elements
Rationale: All top competitors use these formats
```

---

## Prioritizing Content Gaps

### Gap Prioritization Framework

**Score each gap on 4 dimensions**:

#### 1. Opportunity Size (1-5 points)

```
5 points: >5,000 monthly search volume
4 points: 1,000-5,000 monthly volume
3 points: 500-1,000 monthly volume
2 points: 100-500 monthly volume
1 point: <100 but high intent
```

#### 2. Competition Level (1-5 points)

```
5 points: Weak competition (DA <40, thin content)
4 points: Medium-low competition (DA 40-55)
3 points: Medium competition (DA 55-65)
2 points: Strong competition (DA 65-75)
1 point: Very strong (DA 75+)
```

#### 3. Business Value (1-5 points)

```
5 points: Direct conversion impact
4 points: Strong lead generation
3 points: Moderate business alignment
2 points: Indirect benefit
1 point: Weak alignment
```

#### 4. Effort Required (1-5 points)

```
5 points: Easy (simple article, <8 hours)
4 points: Moderate (standard article, 8-12 hours)
3 points: Complex (comprehensive guide, 16-20 hours)
2 points: Very complex (research needed, 24+ hours)
1 point: Extremely complex (>40 hours)
```

### Priority Calculation

**Total Score** = Opportunity + (6 - Competition) + Business Value + Effort

Why "(6 - Competition)"?: Lower competition = higher priority

**Priority Tiers**:

- **18-20 points**: URGENT (do immediately)
- **15-17 points**: HIGH (next sprint)
- **12-14 points**: MEDIUM (plan for next quarter)
- **9-11 points**: LOW (backlog)
- **<9 points**: DEFER or skip

### Example Prioritization

```markdown
## Gap: "API Authentication Methods Complete Guide"

### Scoring

**Opportunity**: 4/5

- Search volume: 1,800/month
- Multiple related keywords: +1,200/month
- Total: ~3,000/month

**Competition**: 3 → Score 3/5 (6-3=3)

- Medium competition
- Top results: DA 55-70
- Can compete with quality

**Business Value**: 5/5

- Core to our product (API platform)
- High conversion topic
- Attracts qualified leads

**Effort**: 4/5

- Moderate complexity
- Estimated: 12 hours
- Have internal expertise

**Total**: 4 + 3 + 5 + 4 = 16/20

**Priority**: HIGH ✅
**Action**: Schedule for next sprint
**Timeline**: 2 weeks
```

---

## Gap Analysis Templates

### Keyword Gap Template

```markdown
# Keyword Gap Analysis

**Date**: [Date]
**Analyzed by**: [Name]
**Competitors analyzed**: [List]

## Summary

- Total gaps identified: [number]
- High priority: [number]
- Medium priority: [number]
- Low priority: [number]

## Top 20 Keyword Gaps

| Keyword   | Volume | KD  | Intent        | Competitors Ranking | Priority |
| --------- | ------ | --- | ------------- | ------------------- | -------- |
| [keyword] | 1,200  | 25  | Commercial    | 3/5                 | HIGH     |
| [keyword] | 800    | 22  | Informational | 4/5                 | HIGH     |

...

## Gaps by Topic Category

### [Category 1]

- Total gaps: [number]
- Combined volume: [volume]
- Average difficulty: [KD]
- Priority gaps: [number]

Top opportunities:

1. [Keyword] (volume, KD, priority)
2. [Keyword] (volume, KD, priority)
   ...

## Recommended Actions

1. Create content for [X] high-priority gaps
2. Update existing content for [Y] quality gaps
3. Defer [Z] low-priority gaps

## Timeline

- Month 1: [Topics]
- Month 2: [Topics]
- Month 3: [Topics]
```

### Topic Gap Template

```markdown
# Topic Gap Analysis: [Topic Area]

**Date**: [Date]
**Competitors**: [List]

## Current Coverage

### Topics We Cover

- [Topic 1] (X articles)
- [Topic 2] (X articles)
  ...

### Topics We Don't Cover (Gaps)

❌ [Gap topic 1]
❌ [Gap topic 2]
❌ [Gap topic 3]
...

## Gap Details

### Gap: [Topic Name]

**Why it matters**:

- Competitor coverage: [X/5 competitors cover this]
- Search demand: [volume/month]
- Business relevance: [High/Medium/Low]

**What's missing**:

- Specific subtopics not covered
- Questions not answered
- Formats not created

**Recommendation**:

- Priority: [High/Medium/Low]
- Format: [Article/Video/Tool/etc.]
- Est. effort: [hours]
- Expected impact: [description]

[Repeat for each gap]

## Action Plan

1. [Action item with timeline]
2. [Action item with timeline]
   ...
```

---

**Last Updated**: 2025-10-25
**Related Files**: `topic-research-framework.md`, `topic-validation-guide.md`, `content-strategist.md`
