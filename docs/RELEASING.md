# Release Process

This document describes how to create releases for Baldwin Writer.

## Semantic Versioning

Baldwin Writer follows [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes that require user action
- **MINOR** (0.2.0): New features, backwards compatible
- **PATCH** (0.1.1): Bug fixes, backwards compatible

### Breaking Changes Include:

- Changes to agent command syntax
- Configuration file format changes
- CLI flags/options modifications
- Public API changes
- Required migrations

## Automated Release Process

### Prerequisites

1. **npm Authentication**: Set `NPM_TOKEN` in GitHub Secrets
   - Go to https://www.npmjs.com/settings/[username]/tokens
   - Create new token with "Automation" type
   - Add to GitHub repo: Settings → Secrets → Actions → New secret
   - Name: `NPM_TOKEN`

2. **Clean Working Directory**: Ensure all changes are committed
3. **Passing CI**: All tests and validation passing
4. **Updated Documentation**: README and docs reflect changes

### Creating a Release

#### Option 1: Manual Release with npm Scripts

```bash
# Patch release (0.1.0 → 0.1.1) - Bug fixes only
npm run release:patch

# Minor release (0.1.0 → 0.2.0) - New features, backwards compatible
npm run release:minor

# Major release (0.1.0 → 1.0.0) - Breaking changes
npm run release:major
```

**What happens:**

1. Runs `npm run validate` (pre-version hook)
2. Updates version in package.json
3. Generates changelog entry
4. Creates git commit with version
5. Creates git tag (e.g., v0.2.0)
6. Pushes commit and tags to GitHub
7. GitHub Actions triggers automatic npm publish

#### Option 2: Git Tag (Manual Control)

```bash
# Create version tag
git tag v0.2.0

# Push tag to trigger release
git push origin v0.2.0
```

**What happens:**

1. GitHub Actions workflow triggers on tag push
2. Runs tests and validation
3. Builds the package
4. Publishes to npm with provenance
5. Creates GitHub release with changelog
6. Generates release notes

## Commit Message Format

Baldwin Writer uses [Conventional Commits](https://www.conventionalcommits.org/) for automated changelog generation.

### Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature (triggers MINOR version bump)
- `fix`: Bug fix (triggers PATCH version bump)
- `docs`: Documentation only
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code restructuring without functional changes
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates
- `ci`: CI/CD configuration changes

### Breaking Changes

Add `BREAKING CHANGE:` in commit footer to trigger MAJOR version bump:

```bash
git commit -m "feat(agents): redesign agent command syntax

BREAKING CHANGE: Agent commands now require explicit activation.
Users must update from /writer to /writer:activate.
See migration guide in docs/MIGRATION.md"
```

### Examples

```bash
# New feature (minor bump)
git commit -m "feat(agents): add blog-post-optimizer agent"

# Bug fix (patch bump)
git commit -m "fix(cli): resolve path resolution on Windows"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Breaking change (major bump)
git commit -m "feat(config)!: change config file format to YAML

BREAKING CHANGE: Configuration files must be migrated from JSON to YAML.
Run 'baldwin migrate-config' to auto-convert."
```

## Pre-Release Checklist

Before creating a release, ensure:

- [ ] All tests passing (`npm test`)
- [ ] Validation passing (`npm run validate`)
- [ ] Linting clean (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation updated
- [ ] CHANGELOG.md reviewed
- [ ] Version number appropriate for changes
- [ ] Breaking changes documented
- [ ] Migration guide created (if needed)
- [ ] Examples updated
- [ ] Dependencies updated
- [ ] Security vulnerabilities addressed

## Version Strategy

### Pre-1.0 (Current: 0.1.0)

- **0.1.x**: Bug fixes during initial testing
- **0.2.0+**: New features and improvements
- **1.0.0**: First stable release when ready for production

### Post-1.0

- **1.x.y**: Backwards-compatible changes only
- **2.0.0+**: Breaking changes with migration guides

## Testing a Release Locally

Before publishing, test the package locally:

```bash
# See what files will be published
npm pack --dry-run

# Create tarball
npm pack

# Inspect tarball contents
tar -tzf baldwin-writer-0.1.0.tgz

# Test local installation
npm install -g ./baldwin-writer-0.1.0.tgz

# Test initialization
cd /tmp/test-project
baldwin-init init
```

## Post-Release Tasks

After a release is published:

1. **Verify npm Package**

   ```bash
   npm info baldwin-writer
   npm view baldwin-writer versions
   ```

2. **Test Installation**

   ```bash
   npm install -g baldwin-writer@latest
   baldwin-init --version
   ```

3. **Update Documentation Site** (if applicable)
   - Deploy updated docs
   - Update version references

4. **Announce Release**
   - Post to GitHub Discussions
   - Update project README if needed
   - Social media (if applicable)

5. **Monitor for Issues**
   - Watch GitHub issues
   - Check npm download stats
   - Review community feedback

## Rollback Procedure

If a release has critical issues:

### Option 1: Deprecate Version

```bash
npm deprecate baldwin-writer@0.2.0 "Critical bug, use 0.1.1 instead"
```

### Option 2: Publish Hotfix

```bash
# Fix the issue
git commit -m "fix(critical): resolve critical bug in agent loading"

# Publish patch
npm run release:patch
```

## GitHub Actions Setup

The release workflow (`.github/workflows/release.yml`) triggers on version tags:

- **Trigger**: Push of tag matching `v*.*.*` (e.g., v0.2.0)
- **Actions**: Validate → Build → Publish → Release
- **Secrets Required**: `NPM_TOKEN`
- **Permissions**: `contents: write`, `id-token: write`

### Troubleshooting GitHub Actions

**Publishing fails:**

1. Check `NPM_TOKEN` is set in secrets
2. Verify npm token has "Automation" permissions
3. Ensure package name is available on npm
4. Check validation/build logs for errors

**Tag already exists:**

```bash
# Delete local tag
git tag -d v0.2.0

# Delete remote tag
git push --delete origin v0.2.0

# Recreate with correct version
npm run release:minor
```

## Emergency Procedures

### Critical Security Issue

1. Unpublish if within 72 hours:

   ```bash
   npm unpublish baldwin-writer@0.2.0
   ```

2. Otherwise, publish patched version immediately:

   ```bash
   git commit -m "fix(security): patch critical vulnerability CVE-2025-XXXX"
   npm run release:patch
   ```

3. Update security advisory on GitHub

### Accidental Publish

If you accidentally publish a bad version:

1. Publish fixed version immediately (can't unpublish after 72h)
2. Deprecate bad version
3. Communicate in release notes

## Additional Resources

- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [npm Publishing](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- [GitHub Releases](https://docs.github.com/en/repositories/releasing-projects-on-github)

---

**Questions?** Open an issue or discussion on GitHub.
