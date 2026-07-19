# AGENTS.md

## Source of truth

- Follow `docs/PROJECT_SPEC.md`, `docs/PAGE_COPY.md`, `docs/CONTENT_AND_I18N.md`, and the other repository documentation.
- Keep the implementation proportionate to a small static company website.
- Do not introduce abstractions, services, libraries, or infrastructure without a concrete need.

## Task workflow

- Inspect the repository, current branch, Git status, and relevant files before editing.
- For a task explicitly marked as autonomous, create a dedicated feature branch and complete the entire approved task without pausing between phases.
- For a task that is not explicitly autonomous, present a concise plan and proposed file list before editing.
- Never discard unrelated working-tree changes.

## Subagent strategy

- For the autonomous rebuild, delegate independent read-heavy work to subagents.
- Before edits, run `tooling_auditor` and `repo_explorer` in parallel and wait for both.
- The main agent owns all application/documentation writes, integration, commits, and fixes. Avoid parallel write-heavy agents editing the same workspace.
- After implementation and `npm run check`, run `spec_reviewer` and `content_reviewer` in parallel, address valid findings, and rerun checks.
- If custom agents are unavailable in the current client, use built-in explorer/reviewer subagents or perform the same focused audits sequentially; do not skip diagnostics or independent review.

## Git and release boundaries

- Never modify or push directly to `main`.
- Creating a feature branch, logical commits, pushing the feature branch, and opening a pull request are allowed for an explicitly autonomous task.
- Never force-push.
- Never merge or rebase.
- Never merge or approve a pull request.
- Never deploy production.
- Never change Cloudflare settings, DNS, nameservers, or custom domains.
- The repository owner performs final review and uses Squash and merge.

## Content safety

- Do not invent company claims, statistics, technical performance values, brands, suppliers, certificates, reviews, awards, response times, or customer identities.
- Do not add testimonials, reviews, newsletter forms, quote forms, contact forms, account features, or online support.
- Do not include personal names of owners, employees, clients, or partners anywhere in this public repository unless the repository owner explicitly approves publication.
- The six project entries in `docs/PAGE_COPY.md` are approved temporary content. Six generated PNG source images already exist under `public/mockimages/`. Map each unique source to one project, preserve sources outside `public/`, publish optimized WebP outputs, and do not create mock modes, flags, or visible disclaimers.
- Supplier and brand sections must remain hidden when the supplier list is empty.
- Do not change protected company data unless explicitly instructed.

## Protected company data

- Legal name: `Sertalp — Fabrico de Caixilharia de Alumínio e P.V.C., Unipessoal, Lda.`
- NIPC: `506 845 206`
- Share capital: `5 000 €`
- IMPIC certificate: `136169-PAR`
- Main email: `sertalplda@gmail.com`
- Legacy email: `sertalp@sapo.pt`
- Telephone: `+351 219 172 712`
- Mobile and WhatsApp: `+351 917 556 253`
- Factory address: `Rua Fonte da Pedrinha, Fração D, Quinta das Portelas, 2705-863 Terrugem`
- Experience statement: `more than 30 years of experience`
- Warranty periods: glass 10 years; aluminium 5 years; white PVC 5 years; coloured PVC 3 years
- The complete approved legal footer is defined in `docs/PROJECT_SPEC.md`.

## Localization

- The public website is European Portuguese only.
- There are no language-prefixed public routes.
- Do not add `/en`, `/pt`, `/uk`, `[locale]`, language middleware, redirects for old language routes, or a language switcher.
- English exists only as a build-time development dictionary for content review.
- Portuguese and English dictionaries must share one typed structure and be updated together.
- Keep visible UI copy in dictionaries, not scattered through JSX.
- Keep invariant facts such as telephone numbers, emails, addresses, legal identifiers, image paths, and supplier names in typed content/data files.

## Architecture

- Keep Next.js App Router, React, TypeScript strict mode, Tailwind CSS, Lucide, and `next/image`.
- Keep the site statically exportable to `out`.
- Do not add server APIs, databases, authentication, CMS integrations, or runtime middleware.
- Avoid `any`.
- Prefer server components. Use client components only for real interaction such as the mobile menu, project lightbox, and 404 client redirect.
- Implement the project lightbox without a heavy third-party library.

## Dependencies

- Dependency additions or removals explicitly listed in `docs/PROJECT_SPEC.md` are approved.
- Other dependency changes require explicit owner approval.
- Use npm and preserve `package-lock.json`.
- Do not migrate to pnpm, Yarn, Bun, or another package manager.

## Quality

Before implementation, audit the toolchain and repository using the configured read-only subagents.

Before finishing a significant task, run:

```bash
npm run check
```

At minimum, report results for:

- ESLint
- Prettier check
- TypeScript type check
- Static Next.js build
- Playwright E2E in Chromium desktop and mobile viewports

Do not claim a check passed unless it was run successfully.

## Documentation

Update documentation in the same task when changing:

- architecture or routes;
- commands or dependencies;
- localization/content structure;
- deployment or CI;
- Cloudflare setup;
- image workflow;
- release requirements.

Do not rewrite documentation for unrelated visual or copy-only adjustments.

## Final handoff

The autonomous task is not complete until the branch is pushed and a pull request is opened, unless repository authentication makes that impossible. The final report must explain any authentication limitation and provide exact manual commands/links. It must also give the repository owner a prioritized checklist for Cloudflare Pages setup, Preview review, buying and connecting `sertalp.com`, squash merging, and production verification.
