## <small>0.3.1 (2025-10-26)</small>

- fix: correct agent activation path resolution ([435d676](https://github.com/Ricoledan/baldwin-writer/commit/435d676))

## 0.3.0 (2025-10-26)

- feat: add diagram enhancements ([1c905d2](https://github.com/Ricoledan/baldwin-writer/commit/1c905d2))

## <small>0.2.8 (2025-10-26)</small>

- fix: keep IDE configs at project root for discovery ([4006916](https://github.com/Ricoledan/baldwin-writer/commit/4006916))

## <small>0.2.7 (2025-10-26)</small>

- fix: use configured rule-dir for Claude Code installation ([32a9322](https://github.com/Ricoledan/baldwin-writer/commit/32a9322))

## <small>0.2.6 (2025-10-26)</small>

- fix: update core-config path in installer bin ([fda5295](https://github.com/Ricoledan/baldwin-writer/commit/fda5295))

## <small>0.2.5 (2025-10-26)</small>

- refactor: reorganize to .baldwin/ structure and remove redundant agents ([06e5fdf](https://github.com/Ricoledan/baldwin-writer/commit/06e5fdf))

## <small>0.1.1 (2025-10-26)</small>

- docs: update setup instructions for published npm package ([dcf8ff5](https://github.com/Ricoledan/baldwin-writer/commit/dcf8ff5))

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial release of Baldwin Writer
- Claude Code integration with slash commands (`/writer`, `/content-strategist`, etc.)
- 10 specialized content creation agents
- 10 comprehensive data/knowledge files (baldwin-kb, audience-personas, content-structures, writing-preferences, style-frameworks, voice-and-tone-guide, publishing-platforms, topic-research-framework, topic-validation-guide, content-gap-analysis-guide)
- 3 agent team configurations (team-all, team-core-writing, team-fiction)
- Content workflows and templates (article production, content refresh, series development, topic research)
- Systematic topic research capabilities (BADVC framework, topic clusters, content gap analysis)
- Topic validation frameworks for data-driven content planning
- Enhanced Content Strategist agent with research and validation capabilities
- BMAD-METHOD npm dependency integration
- Project-specific initialization with `baldwin-init` command
- Comprehensive documentation and integration guides
- Automated release workflow with semantic versioning
- Conventional commits support with commitlint

### Changed

- Migrated from git submodule to npm package dependency for BMAD-METHOD
- Cleaned up repository structure and build artifacts
- Removed non-content expansion packs (game development, infrastructure/devops)
- Kept only content-focused expansion pack (creative-writing for fiction/narrative)
- Package size reduced from 466KB to 208KB (55% reduction)

### Features

- **Content Agents**: Writer, Content Strategist, Copy Editor, Content Architect, Content Sprint Lead
- **Orchestration**: Baldwin Master, Baldwin Orchestrator, Content Owner, Editorial PM, Reader Experience
- **Workflows**: New content project, content refresh, article production, series development
- **Templates**: Content brief, architecture, piece, outline
- **Quality**: Checklists for writing, clarity, editorial review

## [0.1.0] - 2025-10-25

### Added

- Project initialization
- Core agent system based on BMAD-METHOD framework
- Content creation workflows
- Documentation and user guides
- MIT License

[Unreleased]: https://github.com/ricoledan/baldwin-writer/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/ricoledan/baldwin-writer/releases/tag/v0.1.0
