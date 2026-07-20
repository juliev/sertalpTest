# Sertalp website — project specification

## 1. Purpose

Build a small, fast, maintainable company website for Sertalp, a Portuguese manufacturer and installer of PVC and aluminium windows and doors.

The implementation must reuse the visual foundation of the existing website and repository, while removing unsupported claims, fake content, unnecessary features, language-prefixed routing, and GitHub Pages-specific configuration.

Current references:

- Existing website: https://test.homecomf.com/
- Repository: https://github.com/juliev/sertalpTest
- Intended production domain: https://sertalp.com

## 2. Approved scope

### Public pages

- `/`
- `/janelas/`
- `/portas/`
- `/projetos/`
- `/sobre-nos/`
- `/contactos/`
- `/politica-de-privacidade/`
- `/politica-de-cookies/`

Use `trailingSlash: true`.

There are no English, Portuguese, or Ukrainian route prefixes. English is only a build-time development dictionary using the same URLs.

### Removed scope

Remove completely:

- `/en`, `/pt`, `/uk`, `[locale]`, locale middleware, locale redirects, and the language switcher;
- the Other Products page and navigation item;
- contact and quote forms;
- `react-hook-form`;
- testimonials and reviews;
- newsletter UI;
- fake social links;
- fake statistics;
- fabricated technical specifications and performance numbers;
- unsupported claims such as 1,000+ customers, 100% satisfaction, 40% savings, 32 dB, 24-hour response, global 10-year product warranty, market-leader status, or unconfirmed brands;
- current GitHub Pages deployment workflow;
- root `CNAME`;
- `copilot-instructions.md`;
- `newsite.md`.

Do not create redirects for old language routes. They simply cease to exist and are handled by the generic unknown-route behavior.

## 3. Technology and build

Keep:

- Next.js App Router
- React
- TypeScript strict mode
- Tailwind CSS
- Lucide
- `next/image`
- npm and `package-lock.json`

Configure:

- Node.js 22 through `.nvmrc` and `package.json#engines`
- static export with `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`
- output directory `out`
- no runtime middleware
- no API routes
- no server-side runtime requirements
- no empty `.env.example`

### Approved dependency changes

Remove when unused after the rebuild:

- `react-hook-form`
- `server-only`

Add as development dependencies:

- `prettier`
- `@playwright/test`
- `sharp`

Do not add a lightbox library, animation library, state-management library, CMS, form library, analytics library, or Cloudflare runtime adapter.

### Required npm scripts

Use scripts equivalent to:

```json
{
  "dev": "next dev --turbopack",
  "dev:en": "SITE_LOCALE=en next dev --turbopack",
  "build": "next build",
  "build:en": "SITE_LOCALE=en next build",
  "lint": "eslint .",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "typecheck": "tsc --noEmit",
  "test:e2e": "playwright test",
  "check:fast": "npm run lint && npm run format:check && npm run typecheck",
  "check": "npm run check:fast && npm run build && npm run test:e2e",
  "images:optimize": "node scripts/optimize-images.mjs",
  "clean": "rm -rf .next out"
}
```

The exact script details may be adjusted only when necessary for the existing Next.js/ESLint setup, while preserving the behavior.

## 4. Language architecture

### Public language

European Portuguese is the only public language.

### English development review

English uses the same route structure and is selected at build/dev time:

```bash
SITE_LOCALE=en npm run dev
```

Default to Portuguese when `SITE_LOCALE` is absent or invalid.

Changing the development locale must update:

- visible copy;
- `<html lang>`;
- metadata.

It must not create alternate URLs, a public language switcher, `hreflang`, or separately indexed English pages.

### Suggested files

```text
src/
  i18n/
    config.ts
    types.ts
    get-dictionary.ts
    dictionaries/
      pt.ts
      en.ts
  content/
    company.ts
    projects.ts
    warranties.ts
```

Use TypeScript dictionaries with a shared `Dictionary` type or `satisfies Dictionary`. Do not use `any`.

Store invariant facts once in typed content files. Store translated UI text and SEO text in dictionaries.

## 5. Protected company data

### Identity

Commercial name:

```text
Sertalp
```

Legal name:

```text
Sertalp — Fabrico de Caixilharia de Alumínio e P.V.C., Unipessoal, Lda.
```

NIPC:

```text
506 845 206
```

CAE:

```text
25120
```

Share capital:

```text
5 000 €
```

IMPIC certificate:

```text
136169-PAR
```

IMPIC registration date:

```text
02/07/2021
```

CLASSE+:

```text
Participating company in the ADENE CLASSE+ system
```

### Contacts

Primary email:

```text
sertalplda@gmail.com
```

Legacy email for existing customers:

```text
sertalp@sapo.pt
```

Telephone:

```text
+351 219 172 712
```

Mobile and WhatsApp:

```text
+351 917 556 253
```

WhatsApp link:

```text
https://wa.me/351917556253
```

Facebook:

```text
https://www.facebook.com/profile.php?id=100057423310648
```

Factory address:

```text
Rua Fonte da Pedrinha, Fração D, Quinta das Portelas, 2705-863 Terrugem
```

Google Maps link:

```text
https://maps.app.goo.gl/5UhdfnTUioboDMtQ7?g_st=ic
```

Suggested no-key map embed:

```text
https://www.google.com/maps?q=Rua%20Fonte%20da%20Pedrinha%2C%20Fra%C3%A7%C3%A3o%20D%2C%20Quinta%20das%20Portelas%2C%202705-863%20Terrugem%2C%20Portugal&output=embed
```

### Experience and operations

Approved statements:

- Experience in the sector since February 1978.
- PVC and aluminium window and door solutions.
- Company-owned production of frames and products.
- Individual/custom solutions.
- Supply and installation as a complete service.
- Work throughout mainland Portugal, from north to south.
- Projects and deliveries to Madeira, the Azores, Spain, Israel, and Angola.

Do not attribute the February 1978 date to any individual or describe the current legal company as founded or registered in 1978. Do not publish any owner, director, employee, client, or partner personal name or biography.

Do not publish brand, supplier, manufacturer, partner, or product-system information.

### Certifications

- CLASSE+: Sertalp is a participating company in the ADENE CLASSE+ system.
- IMPIC: private works contractor certificate no. `136169-PAR`, registered on `02/07/2021`.
- Keep both items text-only on the About page.
- Do not publish certificate images, PDFs, downloads, previews, logos, or private reference files.
- Do not claim an A+ rating, a company energy class, universal product certification, or current certificate validity.

### Warranties

- Glass: 10 years
- Aluminium: 5 years
- White PVC: 5 years
- Coloured PVC: 3 years

Always accompany detailed warranty periods with a neutral qualification that the applicable terms depend on the supplied solution and the relevant manufacturer conditions.

### Approved legal footer

Use the following complete line exactly unless the repository owner explicitly changes it:

```text
Sertalp — Fabrico de Caixilharia de Alumínio e P.V.C., Unipessoal, Lda. · Sede: Estrada dos Pexiligais, 51, Pexiligais, Algueirão-Mem Martins, concelho de Sintra · Conservatória do Registo Comercial de Cascais · Matrícula n.º 20 945 (Sintra) · NIPC 506 845 206 · Capital social: 5 000 € · Certificado IMPIC n.º 136169-PAR
```

This wording is owner-approved for the current implementation. Keep it centralized and do not silently alter it.

## 6. Information architecture

### Header

Desktop:

- Sertalp logo/wordmark
- Início
- Janelas
- Portas
- Projetos
- Sobre Nós
- Contactos
- visible WhatsApp action
- primary `Pedir orçamento` action linking to `/contactos/`

Mobile:

- accessible menu button;
- same navigation;
- WhatsApp action;
- quote action;
- close on navigation;
- proper `aria-expanded`, `aria-controls`, keyboard operation, and focus states.

No language switcher.

### Footer

Include:

- short company description;
- main navigation;
- telephone;
- WhatsApp;
- primary email;
- factory address;
- Facebook;
- Privacy Policy and Cookies Policy links;
- complete approved legal footer;
- current year.

Do not include Instagram, Twitter/X, newsletter, forms, or fake links.

## 7. Page structure

Exact copy is in `docs/PAGE_COPY.md`.

### Home

1. Header
2. Hero
3. Three benefits: own production, custom solutions, complete service
4. Windows and doors cards
5. Four-step work process
6. Project preview using the same six projects
7. Experience in the sector since February 1978 section
8. Compact warranty teaser
9. Contact CTA
10. Footer

### Windows

1. Product hero
2. PVC windows
3. Aluminium windows
4. Site assessment and technical recommendation
5. Compact benefits
6. Project images/gallery where suitable
7. Detailed warranties
8. CTA

Do not add long technical tables, unsupported U-values, acoustic values, opening-type catalogs, or certifications.

### Doors

1. Product hero
2. Six solution cards:
   - entrance doors;
   - balcony doors;
   - sliding systems;
   - PVC doors;
   - aluminium doors;
   - custom/special sizes.
3. PVC and aluminium material sections
4. Custom assessment section
5. Detailed warranties
6. CTA

### Projects

- One simple gallery page.
- No visible category filters.
- Six projects.
- Three-column desktop grid, two-column tablet grid, one-column mobile grid.
- Card shows image, title, city, and one-sentence description.
- Clicking an image/card opens an accessible lightbox.
- Project model supports one main image and optional additional images.
- No individual project pages.

### About

- Experience in the sector since February 1978, without personal attribution.
- PVC and aluminium.
- Own production.
- Custom solutions.
- Complete installation service.
- Work throughout mainland Portugal and projects/deliveries to Madeira, the Azores, Spain, Israel, and Angola.
- Text-only CLASSE+ participating-company and IMPIC certificate information.
- No personal names, age, biographies, or founder portrait.

### Contacts

- No form.
- Telephone.
- WhatsApp.
- Primary email `sertalplda@gmail.com`.
- Alternative email `sertalp@sapo.pt`.
- Factory address.
- Embedded Google Maps iframe with `loading="lazy"`.
- `Abrir no Google Maps` link.
- Legacy email shown as a smaller secondary line for existing customers.
- Facebook link.

### Privacy and cookies

Implement both pages in the first release using the exact draft copy in `docs/PAGE_COPY.md`.

GA4 and cookie consent remain deferred.

The embedded Google Maps iframe is allowed in this phase. The policies must accurately disclose the third-party embed. Do not claim that the website is legally certified or that the text replaces professional legal advice.

## 8. Temporary project content

Use the six project entries and cities from `docs/PAGE_COPY.md`.

Do not create:

- `isMock`;
- mock files;
- environment-based content modes;
- preview-only content;
- visible “mock”, “demo”, or “illustrative” labels.

The content is temporary and must be easy to replace later.

### Project image sources

Published project imagery uses the owner-supplied work photographs mapped in
`docs/IMAGE_GUIDELINES.md`. Earlier generated sources may remain archived
outside `public/`, but their generated outputs must not be published or
referenced by application code, metadata, or project data.

## 9. Design specification

Preserve the recognizable visual basis of the existing website:

- Inter font;
- blue primary color direction;
- white and light-gray alternating sections;
- broad `max-w-7xl` containers;
- large hero image;
- rounded cards;
- subtle shadows;
- Lucide icons;
- generous whitespace;
- clean technical/company tone.

Do not create an unrelated full redesign.

### Recommended visual tokens

Use Tailwind tokens consistently:

- Primary: `blue-600`
- Primary hover: `blue-700`
- Dark emphasis: `blue-900`
- Primary soft background: `blue-50`
- Main text: `gray-950`
- Secondary text: `gray-600`
- Borders: `gray-200`
- Alternate section: `gray-50`
- White surfaces: `white`

Remove the current automatic dark-mode color override. The company site remains light.

### Layout

- Maximum content width: `max-w-7xl`.
- Standard page gutters: `px-4 sm:px-6 lg:px-8`.
- Section spacing: approximately `py-14` to `py-20`, adjusted by hierarchy.
- Hero: split text/image layout on desktop, stacked on mobile.
- Card radii: `rounded-xl` or `rounded-2xl`.
- Subtle `shadow-sm`, stronger only on hover where useful.
- Buttons must have at least a comfortable 44px target.
- Avoid large empty hero sliders, auto-rotating carousels, parallax, heavy gradients, or decorative video.

### Typography

- One `h1` per page.
- Clear `h2` section hierarchy.
- Avoid long centered paragraphs.
- Use readable line lengths.
- Use sentence case.
- Keep marketing copy factual and restrained.

### Motion

- Minimal hover transitions.
- Mobile menu transition.
- Lightbox transitions may be subtle.
- Respect `prefers-reduced-motion`.
- No autoplay or auto-advancing content.

### Accessibility

Target practical WCAG 2.2 AA fundamentals:

- semantic landmarks;
- keyboard navigation;
- visible focus;
- descriptive links;
- meaningful image alt text;
- logical headings;
- sufficient contrast;
- accessible mobile menu;
- accessible dialog/lightbox;
- Escape closes lightbox;
- arrow keys navigate images/projects when applicable;
- body scroll lock while the lightbox is open;
- focus returns to the opening card after close;
- reduced-motion support.

## 10. Project lightbox

Implement a small custom client component.

Requirements:

- opens from keyboard and pointer;
- dialog semantics;
- close button with accessible name;
- click on backdrop closes where appropriate;
- Escape closes;
- previous/next controls when more than one image is available;
- image counter when multiple images exist;
- title, city, and description available;
- no heavy dependency;
- no individual project route.

## 11. Google Maps

Use a normal iframe on `/contactos/`.

Minimum attributes:

- descriptive `title`;
- `loading="lazy"`;
- `referrerPolicy="no-referrer-when-downgrade"`;
- responsive container;
- no API key;
- nearby external link to Google Maps.

Do not implement consent gating in this task. Disclose the third-party embed in the privacy and cookies pages.

## 12. SEO

### Canonical domain

```text
https://sertalp.com
```

`https://www.sertalp.com` will later redirect to the apex domain at Cloudflare level.

### Requirements

- page-specific Portuguese titles and descriptions from `docs/PAGE_COPY.md`;
- canonical URL for every page;
- Open Graph metadata;
- an owner-supplied image from `public/images/works/` as the Open Graph image;
- `openGraph.locale = "pt_PT"` in production;
- no English alternate URLs or `hreflang`;
- `app/sitemap.ts`;
- `app/robots.ts`;
- include every public page in sitemap, including privacy and cookies pages;
- structured organization/local business data may be added only with verified data from this specification;
- do not add review, rating, FAQ, product-price, or unsupported service-area schema.

### Unknown routes

The owner wants unknown URLs to navigate to `/`.

For static export:

- create `app/not-found.tsx`;
- use a small client redirect based on `window.location.replace("/")` or router replacement;
- render an accessible fallback link/message while redirecting;
- do not add a Cloudflare `/* / 302` catch-all because that can intercept valid routes.

Old language URLs are not explicitly redirected. They fall through to the same generic unknown-route behavior.

## 13. Privacy and analytics

### Current release

- No GA4.
- No Google Tag Manager.
- No analytics library.
- No consent banner.
- No marketing cookies.
- No form data collected by the site.
- Google Maps iframe is embedded and disclosed.
- Privacy contact: `sertalplda@gmail.com`.

### Deferred

Implement GA4 and a consent solution only in a separate approved task. That task must re-evaluate:

- consent requirements;
- map behavior;
- analytics loading;
- privacy policy;
- cookies policy;
- consent preference storage.

## 14. Image workflow

Create:

```text
scripts/optimize-images.mjs
```

Using `sharp`, it should:

- accept source images from a documented source path or arguments;
- support common JPG, JPEG, PNG, and WebP input;
- auto-rotate according to EXIF;
- resize to a maximum width of approximately 1600px without upscaling;
- output WebP around quality 82;
- strip metadata by default;
- use safe kebab-case filenames;
- preserve original source files;
- create output directories when needed;
- report generated output paths;
- fail clearly on unsupported or corrupt files.

Document usage in `docs/IMAGE_GUIDELINES.md`.

Do not add a custom Codex skill for image optimization.

## 15. CI and tests

### GitHub Actions

Replace the GitHub Pages workflow with a quality workflow.

Trigger:

- pull requests to `main`;
- pushes to `main`.

Use:

- Ubuntu hosted runner;
- Node.js 22;
- npm cache;
- `npm ci`;
- `npx playwright install --with-deps chromium`;
- `npm run check`.

One job named clearly, such as `quality`.

Do not deploy from GitHub Actions.

### Playwright

Only Chromium is required.

Create two Playwright projects:

- Desktop Chrome/Chromium;
- Mobile Chrome/Chromium viewport.

Core smoke coverage:

- home loads;
- desktop and mobile navigation;
- all public routes load;
- main CTA goes to `/contactos/`;
- telephone `tel:` link;
- email `mailto:` link;
- WhatsApp link;
- Google Maps external link;
- embedded map exists on Contacts;
- project cards render;
- lightbox opens and closes by Escape;
- unknown route navigates to `/`;
- no horizontal overflow at mobile viewport;
- no form fields or testimonial section;
- no language switcher or `/en` navigation.
- experience since February 1978 with no personal attribution;
- approved geographical statement and no unspecified European markets;
- no brand/supplier section or opening hours;
- both email addresses and correct `mailto:` links;
- text-only CLASSE+ and IMPIC information with no certificate assets or unsupported A+ claims.

The static build must succeed independently from E2E. Playwright may run against the Next development server for simplicity.

## 16. Documentation to create

Create or replace:

```text
README.md
AGENTS.md
.codex/config.toml
.codex/agents/tooling-auditor.toml
.codex/agents/repo-explorer.toml
.codex/agents/spec-reviewer.toml
.codex/agents/content-reviewer.toml
.codex/rules/default.rules
docs/PROJECT_SPEC.md
docs/PAGE_COPY.md
docs/CONTENT_AND_I18N.md
docs/IMAGE_GUIDELINES.md
docs/CLOUDFLARE_SETUP.md
docs/DEVELOPMENT_AND_DEPLOYMENT.md
docs/RELEASE_CHECKLIST.md
docs/OWNER_NEXT_STEPS.md
```

Do not create:

```text
.agents/skills/
.env.example
docs/archive/
```

The repository does not currently need custom Codex skills.

## 17. Git workflow and subagent orchestration for this rebuild

Before editing, use read-heavy subagents in parallel for environment/tooling diagnostics and repository exploration. The main agent owns all writes and integration; do not run parallel write-heavy implementation agents against the same files. After implementation and automated checks, use independent read-only review subagents for specification and content review, then fix all actionable findings.

- Create `feature/site-rebuild` before modifications.
- Complete the entire approved specification.
- Create logical commits.
- Push only the feature branch.
- Open a PR to `main`.
- Do not merge.
- Do not deploy manually.
- Do not modify DNS.

Suggested commit groups:

```text
chore: add project instructions and development tooling
refactor: simplify routing and localization
feat: rebuild shared layout and company pages
feat: add project gallery and contact experience
feat: add SEO legal pages and static routing
test: add Chromium end-to-end checks
docs: add Cloudflare and release documentation
```

Adapt commit boundaries to the actual diff. Avoid empty or artificial commits.

## 18. Definition of done

The task is complete only when:

- all approved routes exist;
- all old locale routes and language UI are removed;
- exact PT and EN copy is implemented;
- protected facts are centralized;
- no personal names exist in repository content;
- no forms, reviews, newsletter, Other Products, or fake claims remain;
- project gallery and lightbox work;
- all six supplied PNG sources are mapped, preserved outside `public/`, and converted to unique final WebP files;
- Google Maps is embedded;
- privacy and cookies pages exist;
- static export succeeds;
- sitemap and robots exist;
- GitHub quality workflow exists;
- Chromium desktop/mobile tests pass;
- `npm run check` passes;
- documentation matches implementation;
- feature branch is pushed;
- pull request is opened;
- final report includes a prioritized owner checklist for Cloudflare Pages setup, Preview review, domain purchase/connection, merge, and production verification;
- no merge, production deployment, or DNS change has occurred.

## 19. External technical references

- Codex AGENTS.md: https://developers.openai.com/codex/agent-configuration/agents-md
- Codex rules: https://developers.openai.com/codex/rules
- Cloudflare static Next.js Pages: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- Cloudflare preview deployments: https://developers.cloudflare.com/pages/configuration/preview-deployments/
- Cloudflare custom domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Cloudflare www redirect: https://developers.cloudflare.com/pages/how-to/www-redirect/
- Google privacy policy: https://policies.google.com/privacy?hl=pt_PT
- Google Maps terms: https://www.google.com/intl/pt_pt/help/terms_maps/
- Portuguese data protection authority: https://www.cnpd.pt/
- GDPR text: https://eur-lex.europa.eu/eli/reg/2016/679/oj
