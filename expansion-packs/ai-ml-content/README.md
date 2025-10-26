# AI & Machine Learning Content Pack

Domain-specific extension for Baldwin Writer focused on AI and machine learning content creation - LLM guides, prompt engineering tutorials, AI architecture content, model development, and AI research communication.

## 📚 Overview

The AI & ML Content Pack extends Baldwin Writer with specialized knowledge, examples, and workflows for creating AI/ML content. Whether you're writing about prompt engineering, fine-tuning LLMs, RAG architectures, or explaining AI research papers, this pack provides AI-specific research methods and validated topic examples.

### Key Features

- 🤖 **AI-Specific Topic Research** - Research strategies for AI/ML content
- ✅ **Validated AI Topics** - 25+ pre-validated AI/ML content opportunities
- 🔬 **AI Research Sources** - arXiv, research labs, AI communities, newsletters
- 📄 **AI Paper Consumption** - How to read and communicate AI research
- 🎯 **AI Topic Clusters** - Ready-to-use AI/ML content clusters

## 🎯 What This Pack Covers

### AI & ML Content Domains

- **LLMs & Prompt Engineering**: ChatGPT, Claude, prompt patterns, optimization, chain-of-thought
- **AI Development & Fine-tuning**: Model training, LoRA, PEFT, evaluation, benchmarking
- **AI Architecture & Systems**: RAG, agents, function calling, multi-agent systems, vector databases
- **AI Tools & Frameworks**: LangChain, LlamaIndex, Transformers, Hugging Face, AI SDKs
- **AI Research Communication**: Explaining papers, research summaries, staying current

## 📋 Included Resources

### Data Files

1. **ai-validation-examples.md** - 25+ validated AI/ML topic examples
   - Complete BADVC assessments
   - Search volume data
   - Competition analysis
   - AI-specific validation criteria
   - Topics: Prompt engineering, RAG, fine-tuning, AI agents, tools

2. **ai-research-sources.md** - Comprehensive list of AI research sources
   - Academic papers (arXiv, conferences, Papers with Code)
   - AI research labs (OpenAI, Anthropic, DeepMind, Meta AI, Google Research)
   - AI communities (r/MachineLearning, Hugging Face, AI Discord)
   - AI newsletters (The Batch, TLDR AI, Import AI)
   - How to consume AI papers effectively

3. **ai-audience-personas.md** (future) - Detailed AI audience personas
   - AI Engineers
   - ML Researchers
   - LLM Application Developers
   - Prompt Engineers
   - AI Product Managers

4. **ai-topic-clusters.md** (future) - Pre-built AI topic clusters
   - Prompt Engineering Mastery
   - RAG Architecture & Implementation
   - LLM Fine-tuning Guide
   - AI Agent Development
   - Vector Database Selection

### Templates (Future)

1. **ai-content-brief-tmpl.yaml** - AI content brief with research requirements
2. **research-summary-tmpl.yaml** - AI paper summary template
3. **tutorial-outline-tmpl.yaml** - AI tutorial structure template

### Workflows (Future)

1. **ai-topic-research.yaml** - AI topic research workflow
2. **research-communication.yaml** - AI paper communication workflow

## 🚀 Installation

### Automatic (Future)

```bash
baldwin-init init --pack ai-ml-content
```

### Manual

This pack is included with Baldwin Writer by default in the `expansion-packs/ai-ml-content/` directory. The Baldwin core agents automatically reference these files when working on AI/ML content.

## 💡 Usage

### Using AI-Specific Knowledge

The AI pack provides additional context for Baldwin agents when researching and creating AI/ML content. Agents will automatically reference AI-specific examples and sources when appropriate.

### Research Workflow

When researching AI topics, the Content Strategist (Maya) can use:

```
/strategist
*research-topics

# Maya will use AI-specific research sources and methodologies
# See: ai-ml-content/data/ai-research-sources.md
```

### Validation Examples

Reference validated AI topic examples:

```
/strategist
*validate-topic

# Provide topic: "RAG architecture best practices"
# Maya references: ai-ml-content/data/ai-validation-examples.md
```

### Topic Clusters

Use pre-built AI topic clusters:

```
/strategist
*plan-series

# Select from: ai-ml-content/data/ai-topic-clusters.md
# - Prompt Engineering Mastery
# - RAG Architecture & Implementation
# - LLM Fine-tuning Guide
```

## 🎯 When to Use This Pack

**Use AI & ML Content Pack for**:

- LLM and prompt engineering content
- AI architecture guides (RAG, agents, multi-agent systems)
- Model development tutorials (fine-tuning, evaluation)
- AI tool comparisons (LangChain, vector databases)
- AI research summaries and explanations
- AI application development guides
- Machine learning tutorials and best practices

**Don't use for**:

- General software development (use separate tech pack if created)
- Creative writing (use creative-writing pack)
- General business content (use core Baldwin)
- Academic writing (use academic pack - future)

## 📊 AI-Specific Research Sources

This pack includes curated research sources for AI content:

### Academic Papers

- arXiv (cs.AI, cs.CL, cs.LG, cs.CV)
- Conference proceedings (NeurIPS, ICML, ICLR, ACL, EMNLP)
- Papers with Code
- Semantic Scholar, Connected Papers (citation tracking)
- How to read AI papers effectively

### AI Research Labs & Blogs

- OpenAI Blog & Research
- Anthropic Research
- DeepMind Blog
- Meta AI (FAIR)
- Google Research & Google AI Blog
- Microsoft Research
- How to track new AI releases

### AI Communities

- r/MachineLearning, r/LocalLLaMA, r/artificial
- Hugging Face forums and discussions
- AI Discord servers (EleutherAI, etc.)
- Twitter/X AI researchers and practitioners
- AI Stack Exchange

### AI Newsletters & Aggregators

- The Batch (Andrew Ng / DeepLearning.AI)
- TLDR AI
- Import AI (Jack Clark)
- Papers with Code newsletter
- AI Alignment Newsletter
- Last Week in AI

## 🔧 AI Topic Validation Criteria

The pack includes AI-specific validation criteria:

### AI Authority Signals

- Published AI research or papers
- Open source AI contributions (Hugging Face, GitHub)
- Production AI experience
- AI certifications or courses completed
- Conference presentations (NeurIPS, ICML, etc.)
- AI blog with track record

### AI Audience Demand

- arXiv paper count and citations in topic area
- Hugging Face model/dataset downloads
- r/MachineLearning discussion frequency
- Twitter/X AI community engagement
- GitHub stars for AI tools/frameworks
- AI job posting trends

### AI Competition Assessment

- Research paper comprehensiveness
- Tutorial code quality and examples
- Recency of AI content (field moves fast)
- Depth of AI explanations
- Production-ready examples

## 🤝 Contributing

AI-specific examples and research sources can be expanded:

1. Add new validated AI topics to `ai-validation-examples.md`
2. Contribute AI research sources to `ai-research-sources.md`
3. Expand AI audience personas
4. Submit PRs with clear descriptions

## 📄 Domain-Agnostic Core

Baldwin Writer's core is domain-agnostic. This AI pack is ONE domain extension. Other domains:

- **Creative Writing Pack** (`bmad-creative-writing/`) - Fiction, screenwriting
- **Healthcare Pack** (future) - Medical content, patient education
- **Finance Pack** (future) - Financial analysis, investment content
- **B2B SaaS Pack** (future) - Product marketing, sales enablement

The core frameworks (BADVC, topic clusters, gap analysis) are universal and apply across all domains.

## 📚 Related Core Files

This pack extends these core Baldwin files:

- `baldwin-core/data/topic-research-framework.md` (universal frameworks)
- `baldwin-core/data/topic-validation-guide.md` (universal validation)
- `baldwin-core/data/content-gap-analysis-guide.md` (universal gap analysis)

## 🙏 Credits

Created for the Baldwin Writer platform.

Based on systematic AI/ML content research and validation methodologies.

---

**Version:** 0.1.0
**Compatible with:** Baldwin Writer v0.1.0
**Last Updated:** 2025-10-25
**Domain:** AI & Machine Learning (LLMs, Prompt Engineering, AI Development, AI Research)
