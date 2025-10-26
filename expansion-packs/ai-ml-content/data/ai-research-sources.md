# AI & ML Research Sources

Comprehensive guide to AI and machine learning research sources for content creators. Discover where AI research happens, how to track the latest developments, and most importantly, how to effectively consume and communicate AI research.

## Quick Reference by Research Type

| Research Need            | Top Sources                                         |
| ------------------------ | --------------------------------------------------- |
| Academic Papers          | arXiv, Papers with Code, conference proceedings     |
| Latest AI Research       | OpenAI Blog, Anthropic Research, DeepMind, Meta AI  |
| Practical Implementation | Hugging Face, GitHub, r/LocalLLaMA                  |
| AI News & Trends         | The Batch, TLDR AI, Import AI                       |
| Community Insights       | r/MachineLearning, AI Discord servers, Twitter/X AI |
| Tool Discovery           | Hugging Face, Papers with Code, GitHub Trending     |
| Paper Summaries          | Papers with Code, AI newsletter digests             |

---

## Academic Papers & Research

### arXiv

**What it's for**: Cutting-edge AI research papers (pre-publication)

**Key Categories**:

- **cs.AI** (Artificial Intelligence) - General AI research
- **cs.CL** (Computation and Language) - NLP, LLMs
- **cs.LG** (Machine Learning) - ML algorithms, theory
- **cs.CV** (Computer Vision) - Vision models, image generation
- **stat.ML** (Machine Learning Statistics) - Statistical ML

**How to use**:

```
1. Subscribe to daily/weekly email digests by category
2. Use search filters: "Generative AI" OR "Large Language Models"
3. Sort by "Relevance" or "Submission Date"
4. Check "Recent" for newest papers (last 7 days)
5. Follow citation links to related work
```

**Finding Relevant Papers**:

```
Search Examples:
- "Retrieval Augmented Generation" (RAG research)
- "Constitutional AI" (AI safety)
- "Prompt Engineering" (prompting techniques)
- "Parameter-Efficient Fine-Tuning" (PEFT methods)

Filter by date: Last 3 months (AI moves fast)
```

**URL**: https://arxiv.org

**Pro Tip**: Use ar5iv.org (HTML version of arXiv) for easier reading

---

### Papers with Code

**What it's for**: Papers + implementation code + benchmarks

**Why it's valuable**:

- Papers linked to code repositories
- Benchmark leaderboards (see state-of-the-art)
- Reproducible research
- Dataset information

**How to use**:

```
1. Browse by task (e.g., "Text Generation", "Question Answering")
2. Check benchmarks to see current SOTA (state-of-the-art)
3. Find papers with code implementations
4. Track trending papers (what's hot this week)
5. Subscribe to newsletter for curated papers
```

**Content Opportunities**:

- Explain papers from trending list
- Compare approaches on same benchmark
- Tutorial using paper's code
- Benchmark analysis articles

**URL**: https://paperswithcode.com

---

### AI Conference Proceedings

**Major AI Conferences** (in order of prestige):

#### NeurIPS (Neural Information Processing Systems)

- **Focus**: ML theory, algorithms, applications
- **When**: December annually
- **Papers**: ~2,500 submissions, ~25% acceptance
- **URL**: https://nips.cc

#### ICML (International Conference on Machine Learning)

- **Focus**: ML research
- **When**: July annually
- **Papers**: ~2,000 submissions
- **URL**: https://icml.cc

#### ICLR (International Conference on Learning Representations)

- **Focus**: Deep learning, representation learning
- **When**: May annually
- **Papers**: OpenReview.net (open peer review)
- **URL**: https://iclr.cc

#### ACL (Association for Computational Linguistics)

- **Focus**: NLP, language models
- **When**: July annually
- **Papers**: NLP and LLM research
- **URL**: https://aclweb.org

#### EMNLP (Empirical Methods in Natural Language Processing)

- **Focus**: Practical NLP
- **When**: December annually

#### CVPR (Computer Vision and Pattern Recognition)

- **Focus**: Computer vision, image generation
- **When**: June annually

**How to use conferences**:

```
1. Review accepted papers list when published
2. Identify trending themes (many papers on same topic)
3. Find workshop papers (often more practical)
4. Watch recorded talks (YouTube)
5. Create content explaining breakthrough papers
```

---

### Semantic Scholar

**What it's for**: AI-powered paper search and citation tracking

**Features**:

- AI-powered paper recommendations
- Citation graphs (see what cites what)
- Paper summaries (TLDR feature)
- Author profiles and h-index
- "Highly Influential Citations" metric

**How to use**:

```
1. Search for paper or topic
2. Use "Citing Papers" to find newer research
3. Check "References" to understand background
4. Use TLDR for quick paper summary
5. Set up alerts for new papers on topic
```

**URL**: https://semanticscholar.org

---

### Connected Papers

**What it's for**: Visual citation graphs, finding related papers

**How it works**:

- Enter a paper
- See visual graph of related papers
- Papers closer = more similar/related
- Find prior work and derivative work

**Use cases**:

- Literature review for comprehensive content
- Find all papers in a research thread
- Discover related techniques
- Track research evolution

**URL**: https://connectedpapers.com

---

## AI Research Labs & Blogs

### OpenAI

**Blog**: https://openai.com/blog
**Research**: https://openai.com/research

**What they publish**:

- GPT model research (GPT-4, GPT-4V, etc.)
- DALL-E and image generation
- Reinforcement learning
- AI safety research
- Product announcements

**Following Strategy**:

- Subscribe to blog RSS/newsletter
- Follow @OpenAI on Twitter/X
- Check research page monthly
- Watch for "System Card" releases (detailed model info)

**Content Opportunities**:

- Explain OpenAI research papers
- Compare GPT versions
- Tutorial using OpenAI API
- Analysis of safety research

---

### Anthropic

**Blog**: https://anthropic.com/news
**Research**: https://anthropic.com/research

**What they publish**:

- Claude model research
- Constitutional AI
- AI safety and alignment
- Interpretability research
- Red teaming and evaluations

**Key Research Areas**:

- Constitutional AI (RLAIF)
- Mechanistic interpretability
- Long context windows
- Honest and helpful AI

**Content Opportunities**:

- Constitutional AI explained
- Claude vs GPT comparisons
- Prompt engineering for Claude
- AI safety concepts

---

### DeepMind (Google DeepMind)

**Blog**: https://deepmind.google/discover/blog
**Research**: https://deepmind.google/research

**What they publish**:

- Gemini model research
- AlphaFold, AlphaGo research
- Reinforcement learning breakthroughs
- Multi-modal AI
- Academic papers (lots on arXiv)

**Following Strategy**:

- Very research-heavy (more academic than OpenAI/Anthropic)
- Check blog for major breakthroughs
- Browse publications page
- Follow DeepMind researchers on Twitter

---

### Meta AI (FAIR - Facebook AI Research)

**Blog**: https://ai.meta.com/blog
**Research**: https://ai.meta.com/research

**What they publish**:

- LLaMA model research (open source)
- PyTorch developments
- Computer vision research
- Multimodal AI
- Open source model releases

**Key Contributions**:

- LLaMA models (open source)
- Segment Anything Model (SAM)
- PyTorch framework
- FAIR has strong open source culture

**Content Opportunities**:

- LLaMA fine-tuning guides
- Open source LLM comparisons
- PyTorch tutorials

---

### Google Research & Google AI Blog

**Blog**: https://ai.googleblog.com
**Research**: https://research.google

**What they publish**:

- Transformers research (invented the architecture)
- PaLM, Gemini research
- Search and ranking AI
- Broad ML research

**Following Strategy**:

- Blog less frequent but high quality
- Check arXiv for "Google Research" authors
- Follow Google Brain researchers

---

### Microsoft Research

**Blog**: https://www.microsoft.com/research/blog
**Research**: https://microsoft.com/research

**What they publish**:

- Azure AI research
- GPT collaboration (Microsoft + OpenAI)
- Multimodal research
- AI for science

---

## AI Communities

### Reddit

#### r/MachineLearning (2.8M members)

**What it's for**: Academic ML discussion, paper releases, research news

**Content**:

- Paper discussions ([R] tag = Research)
- Project showcases ([P] tag = Project)
- Discussions ([D] tag)
- News ([N] tag)

**How to use**:

```
1. Sort by "Hot" for trending discussions
2. Filter by [R] flair for research papers
3. Read comments for paper critiques/summaries
4. Check weekly discussion threads
5. Find implementation discussions
```

**Content Opportunities**:

- Hot papers getting discussed
- Common questions in comments
- Project inspiration

---

#### r/LocalLLaMA (180K members)

**What it's for**: Running LLMs locally, open source models, fine-tuning

**Content**:

- Model releases (LLaMA, Mistral, etc.)
- Quantization techniques
- Local deployment guides
- GPU optimization
- Fine-tuning discussions

**Why it's valuable**:

- Practitioners, not just researchers
- Real hardware constraints
- Hands-on implementation focus

---

#### r/artificial (120K members)

**What it's for**: General AI news, broader audience

---

#### r/ChatGPT (4M+ members)

**What it's for**: ChatGPT use cases, prompt examples

**Content Opportunities**:

- Prompt patterns people share
- Common pain points
- Use case ideas

---

### Hugging Face

**Hub**: https://huggingface.co
**Forums**: https://discuss.huggingface.co

**What it's for**:

- Model repository (100K+ models)
- Dataset repository (20K+ datasets)
- Spaces (AI demos)
- Discussions and Q&A

**How to use**:

```
1. Browse trending models (what's popular this week)
2. Check model downloads (demand signal)
3. Read model cards (implementation details)
4. Try spaces (live demos)
5. Follow top contributors
```

**Content Opportunities**:

- Model comparison articles
- Tutorial using trending model
- Dataset guides
- Fine-tuning walkthroughs

---

### AI Discord Servers

#### EleutherAI Discord

- **Focus**: Open source LLM research
- **Members**: 15K+
- **Value**: Technical discussions, model training

#### Hugging Face Discord

- **Focus**: Transformers, diffusers, model discussions
- **Value**: Fast answers, community support

#### AI Safety Discord Servers

- **Focus**: AI alignment, safety research

**How to research**:

```
1. Join relevant servers
2. Monitor #announcements for releases
3. Check #general for pain points
4. Read #help for common questions
5. Note recurring topics
```

---

### Twitter/X AI Community

**Key Accounts to Follow**:

**Research Scientists**:

- @AndrewYNg (Andrew Ng - DeepLearning.AI)
- @karpathy (Andrej Karpathy - ex-Tesla/OpenAI)
- @ylecun (Yann LeCun - Meta AI)
- @goodfellow_ian (Ian Goodfellow - GANs)
- @hardmaru (David Ha - research scientist)

**AI Companies**:

- @OpenAI, @AnthropicAI, @DeepMind
- @HuggingFace, @LangChainAI

**AI Commentators**:

- @DrJimFan (AI research at NVIDIA)
- @emollick (AI for work/education)

**How to use**:

- Follow for paper releases
- See what's trending (#AITwitter)
- Find pre-print discussions
- Discover new tools/techniques

---

## AI Newsletters & Aggregators

### The Batch (by DeepLearning.AI)

**Frequency**: Weekly
**URL**: https://www.deeplearning.ai/the-batch
**Curator**: Andrew Ng's team

**What's included**:

- Top AI news (4-5 stories)
- Research highlights
- Business applications
- Andrew Ng's commentary

**Best for**: High-level overview + business perspective

---

### TLDR AI

**Frequency**: Daily
**URL**: https://tldr.tech/ai

**What's included**:

- 3-5 top AI news items daily
- Brief summaries
- Links to sources
- Very fast, scan

able format

**Best for**: Daily quick updates

---

### Import AI (by Jack Clark)

**Frequency**: Weekly
**URL**: https://jack-clark.net

**What's included**:

- 5-10 research paper summaries
- AI policy discussion
- "Tech Tales" (sci-fi shorts)
- Detailed, thoughtful analysis

**Best for**: Deep research summaries

---

### Papers with Code Newsletter

**Frequency**: Weekly
**What's included**:

- Trending papers from past week
- New benchmarks
- Code releases

---

### AI Alignment Newsletter

**Frequency**: ~Weekly
**Focus**: AI safety and alignment research

---

### Last Week in AI

**Frequency**: Weekly
**URL**: https://lastweekin.ai

**What's included**:

- Research summaries
- Industry news
- Open source releases

---

## How to Consume AI Papers Effectively

### The AI Paper Reading Challenge

AI research is vast and fast-moving. Most papers are:

- Highly technical (math-heavy)
- 8-20 pages long
- Assume significant background knowledge
- Move fast (100+ new papers daily on arXiv)

**You cannot read everything. Strategy is key.**

---

### Three-Tier Reading Strategy

#### Tier 1: Skim (5 minutes per paper)

**Goal**: Decide if paper is relevant

**What to read**:

1. **Title** - What problem/technique?
2. **Abstract** - What did they do? What results?
3. **Figures** - Scan all figures (architecture diagrams, results graphs)
4. **Conclusion** - What are the takeaways?

**Decision**: Read deeper? Skip? Bookmark for later?

**Use for**: Daily arXiv scanning, newsletter paper lists

---

#### Tier 2: Read for Understanding (30-60 minutes)

**Goal**: Understand the approach and results

**What to read** (in order):

1. **Abstract** - Full understanding
2. **Introduction** - Problem statement, why it matters
3. **Related Work** - How this compares to prior work
4. **Method Overview** - High-level approach (skip math initially)
5. **Results** - What improved? By how much?
6. **Figures & Tables** - Study architecture, results carefully
7. **Conclusion** - Limitations, future work

**Skip (initially)**: Dense mathematical proofs, implementation details

**Use for**: Papers in your content area, potential content topics

---

#### Tier 3: Deep Dive (2-4 hours)

**Goal**: Understand well enough to explain or implement

**What to do**:

1. Read entire paper carefully
2. Understand mathematical formulations
3. Review cited papers for background
4. Look for code implementation
5. Try to reproduce results (if possible)
6. Take detailed notes

**Use for**: Content creation, implementation tutorials

---

### How to Read AI Papers Efficiently

**Start with the Figures**:

- Figure 1 usually shows the architecture
- Results figures show performance gains
- You can understand 60% of a paper from figures alone

**Read the Abstract 3 Times**:

1. First: What problem do they solve?
2. Second: How do they solve it?
3. Third: What results did they achieve?

**Use the "Three-Pass" Method**:

- **Pass 1** (5 min): Skim - abstract, intro, conclusion, figures
- **Pass 2** (1 hour): Read but skip math proofs
- **Pass 3** (3+ hours): Deep dive, understand math, code

**Focus on "Why"**:

- Why did previous approaches fail?
- Why does this approach work better?
- Why do these hyperparameters matter?

**Make a Summary Template**:

```markdown
## Paper: [Title]

**Problem**: What problem does this solve?

**Approach**: How do they solve it? (1-2 sentences)

**Key Innovation**: What's new/different?

**Results**: Main performance improvements?

**Limitations**: What doesn't it solve?

**Relevance to me**: Why do I care? Content opportunity?

**Code**: [GitHub link if available]
```

---

### Identifying High-Impact Papers

**Signals a paper is important**:

**Pre-Publication**:

- From major research lab (OpenAI, DeepMind, Meta AI)
- Addresses known important problem
- Novel approach or surprisingly good results
- Released with code and models

**Post-Publication**:

- High citation count on Semantic Scholar
- Lots of discussion on r/MachineLearning
- Follow-up papers reference it
- Implementations on Hugging Face
- Mentioned in AI newsletters

**Red Flags** (might not be impactful):

- No code or data released
- Small improvements on narrow task
- Unreproducible results
- Not from known labs/authors (for beginners)

---

### From Paper to Content

**Content Creation Workflow**:

1. **Find Paper** (arXiv, Papers with Code, newsletter)
2. **Tier 1 Read** - Is this content-worthy?
3. **Check Impact** - Citations, discussion, relevance
4. **Tier 2 Read** - Understand approach and results
5. **Find Code** - GitHub, Hugging Face, Papers with Code
6. **Create Content**:
   - Explain the paper (plain language)
   - Tutorial using the code
   - Compare to other approaches
   - Discuss implications

**Content Angles**:

- **Explainer**: "Understanding [Paper Name] in Simple Terms"
- **Tutorial**: "Implementing [Technique] from [Paper]"
- **Comparison**: "[New Approach] vs [Existing Approach]"
- **Analysis**: "Why [Paper] Matters for [Application]"

---

### Staying Current Without Drowning

**Daily** (15-30 minutes):

- Scan TLDR AI newsletter
- Check r/MachineLearning "Hot" posts
- Glance at arXiv cs.AI recent submissions

**Weekly** (1-2 hours):

- Read The Batch, Import AI newsletters
- Review Papers with Code trending
- Deep read 1-2 relevant papers
- Check Hugging Face trending models

**Monthly** (2-4 hours):

- Review major conference proceedings
- Check research lab blogs
- Assess emerging trends
- Plan content based on hot topics

**Don't try to read everything. Focus on your niche.**

---

### Tools for Paper Management

**Reference Managers**:

- **Zotero** (free, open source) - Organize papers, citations
- **Mendeley** (free) - PDF annotation, organization
- **Notion** - Paper database, custom properties

**Reading Tools**:

- **ar5iv.org** - HTML version of arXiv papers (easier reading)
- **SciSpace** (formerly Typeset) - AI paper explanations
- **Elicit** - AI research assistant

**Citation Tracking**:

- **Semantic Scholar** - Citation alerts
- **Connected Papers** - Visual citation graphs
- **Google Scholar** - Citation tracking

---

## AI Research Workflow Example

```markdown
## Weekly AI Research Routine

### Monday (15 min)

- Read TLDR AI (scan 5 top stories)
- Check r/MachineLearning hot posts
- Note interesting papers for later

### Wednesday (30 min)

- Read The Batch newsletter
- Review Papers with Code trending
- Bookmark 2-3 papers for deep dive

### Friday (1-2 hours)

- Tier 2 read of bookmarked papers
- Check if code is available
- Decide which paper to create content from

### Monthly (first week)

- Review arXiv submissions from past month (Tier 1 skim)
- Check conference proceedings
- Identify trending topics
- Plan next month's content topics

### Content Pipeline

Week 1: Research papers → Identify topics
Week 2: Deep dive chosen paper → Take notes
Week 3: Create content (explainer or tutorial)
Week 4: Publish and promote
```

---

**Last Updated**: 2025-10-25
**Part of**: Baldwin Writer AI & ML Content Pack
**Related**: `ai-validation-examples.md`, `topic-research-framework.md`
