# Development and deployment workflow

## 1. Autonomous task diagnostics and subagents

Before creating commits or changing application files, the main Codex thread must:

1. Spawn `tooling_auditor` and `repo_explorer` in parallel.
2. Wait for both reports.
3. Inspect Git status, branch, remotes, Node/npm, GitHub authentication/integration, current dependencies, Playwright/Chromium availability, and the six PNG files in `public/mockimages/`.
4. Create and switch to the feature branch while preserving the approved uncommitted bootstrap/specification files and image assets.
5. Activate Node.js 22 using an already available version manager when necessary.
6. Install only project-scoped dependencies approved by the specification.
7. Run `npm ci` where the lockfile is already consistent; use an intentional npm install only when updating the approved dependency set.
8. Install Playwright Chromium with `npx playwright install chromium` locally, or `npx playwright install --with-deps chromium` in CI.

Do not install global system tools merely for convenience. If `gh` is unavailable, use the connected GitHub integration. If neither can open a PR, finish and push the feature branch when possible, then provide the exact manual PR URL/command instead of blocking the implementation.

Use subagents mainly for read-heavy diagnostics and review. The main thread owns code edits to avoid conflicts.

## 2. Local environment

Requirements:

- Node.js 22
- npm

Install:

```bash
npm ci
```

Run Portuguese:

```bash
npm run dev
```

Run English development review:

```bash
npm run dev:en
```

English uses identical URLs and is not a public localization.

## 3. Required commands

```bash
npm run lint
npm run format
npm run format:check
npm run typecheck
npm run build
npm run test:e2e
npm run check:fast
npm run check
```

Before a logical commit, run at least:

```bash
npm run check:fast
```

Before pushing or opening a PR, run:

```bash
npm run check
```

## 4. Branch workflow

Never work directly on `main`.

For the approved rebuild:

```bash
git switch -c feature/site-rebuild
```

A feature branch may contain several related tasks and multiple logical commits.

Do not force-push.

## 5. Autonomous Codex task

For an explicitly autonomous task, Codex is allowed to:

- inspect the repository;
- create a feature branch;
- edit all files in approved scope;
- install/remove dependencies listed in the specification;
- create logical commits;
- push the feature branch;
- open a pull request;
- fix its own test failures.

Codex must not:

- push to `main`;
- merge or rebase;
- merge/approve the pull request;
- deploy;
- use Wrangler to publish;
- change DNS or Cloudflare settings.

## 6. Pull request

The PR must include:

- summary;
- screenshots or Preview link where available;
- changed architecture/routes;
- dependency changes;
- checks run and results;
- source PNG to final WebP image mapping;
- client data still pending;
- known deviations.

Use **Squash and merge** after review.

## 7. GitHub Actions

The quality workflow runs on:

- pull requests to `main`;
- pushes to `main`.

Expected steps:

```text
checkout
setup Node 22 with npm cache
npm ci
install Playwright Chromium
npm run check
```

GitHub Actions does not deploy.

## 8. Cloudflare Preview review

Before merge, review:

- home desktop;
- home mobile;
- all navigation links;
- Windows and Doors;
- project gallery/lightbox;
- Contacts and map;
- Privacy and Cookies;
- legal footer;
- telephone, email, WhatsApp, Facebook and Google Maps links;
- unknown URL behavior;
- no fake forms/reviews/language switcher;
- layout and overflow.

## 9. Production

Production deployment happens automatically only after merge to `main` through Cloudflare Pages Git integration.

The agent does not manually deploy.

After production deployment, verify:

- apex domain;
- www redirect;
- pages.dev redirect;
- sitemap;
- robots;
- canonical URLs;
- main contact links.

## 10. Branch protection

Recommended `main` protection:

- require a pull request;
- require the `quality` status check;
- block force pushes;
- block branch deletion;
- allow the repository owner to merge after manual Preview review;
- do not require a second human approval for this solo-maintained repository.

## 11. Commit guidance

Use concise conventional-style commits where practical.

Example groups:

```text
chore: add project instructions and development tooling
refactor: simplify routing and localization
feat: rebuild shared layout and company pages
feat: add project gallery and contact experience
feat: add SEO legal pages and static routing
test: add Chromium end-to-end checks
docs: add Cloudflare and release documentation
```

Do not create commits solely to match this list. Follow the actual logical changes.

## 12. Independent final review

After `npm run check` passes, spawn `spec_reviewer` and `content_reviewer` in parallel. Wait for both reports, fix every valid finding, rerun the affected checks and the final `npm run check`, and only then push/open the PR.

The final response must include a prioritized manual next-step checklist covering:

1. PR and local/Cloudflare Preview review.
2. Cloudflare Pages Git integration setup if not yet configured.
3. Domain purchase and Cloudflare zone setup.
4. `sertalp.com` and `www` custom-domain/redirect setup.
5. Squash merge and production verification.
6. Deferred GA4/cookie-consent work.
