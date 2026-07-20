# Sertalp website

Static company website for Sertalp, a Portuguese manufacturer and installer of
PVC and aluminium windows and doors.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS and Lucide icons
- Static export for Cloudflare Pages
- Playwright Chromium E2E

## Requirements

- Node.js 22
- npm

## Development

```bash
nvm use
npm ci
npm run dev
```

The public site defaults to European Portuguese. Review the English development
dictionary at the same URLs with:

```bash
npm run dev:en
```

English is a build-time content-review mode, not a public locale.

## Quality

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

Install the local Chromium binary once before E2E work:

```bash
npx playwright install chromium
```

## Content and images

- Protected company facts: `src/content/`
- Typed Portuguese and English copy: `src/i18n/dictionaries/`
- Archived generated sources: `assets/source-images/`
- Published owner-supplied work images: `public/images/works/`

Verify published images with `npm run images:verify`.

See `docs/CONTENT_AND_I18N.md` and `docs/IMAGE_GUIDELINES.md` before changing
content or imagery.

## Deployment

The production build is a static export in `out`:

```bash
npm run build
```

Cloudflare Pages uses `main` as the production branch, `npm run build` as the
build command, and `out` as the output directory. GitHub Actions performs
quality checks only and does not deploy.

Setup and release documentation:

- `docs/CLOUDFLARE_SETUP.md`
- `docs/DEVELOPMENT_AND_DEPLOYMENT.md`
- `docs/RELEASE_CHECKLIST.md`
- `docs/OWNER_NEXT_STEPS.md`
