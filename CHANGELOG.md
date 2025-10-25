# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial release of Baldwin Writer
- Claude Code integration with slash commands (`/writer`, `/content-strategist`, etc.)
- 10 specialized content creation agents
- 7 comprehensive data/knowledge files (baldwin-kb, audience-personas, content-structures, writing-preferences, style-frameworks, voice-and-tone-guide, publishing-platforms)
- 3 agent team configurations (team-all, team-core-writing, team-fiction)
- Content workflows and templates (article production, content refresh, series development)
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
