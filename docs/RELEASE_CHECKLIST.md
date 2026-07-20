# Release checklist

## Repository and Git

- [ ] Work is in a feature branch, not `main`.
- [ ] Pull request targets `main`.
- [ ] No force-push occurred.
- [ ] GitHub Actions `quality` check passed.
- [ ] Cloudflare Preview is available and reviewed.
- [ ] Merge method will be Squash and merge.

## Build quality

- [ ] `npm ci` succeeds.
- [ ] `npm run lint` succeeds.
- [ ] `npm run format:check` succeeds.
- [ ] `npm run typecheck` succeeds.
- [ ] `npm run build` creates `out`.
- [ ] `npm run test:e2e` succeeds in Chromium desktop and mobile projects.
- [ ] `npm run check` succeeds.

## Routes

- [ ] `/`
- [ ] `/janelas/`
- [ ] `/portas/`
- [ ] `/projetos/`
- [ ] `/sobre-nos/`
- [ ] `/contactos/`
- [ ] `/politica-de-privacidade/`
- [ ] `/politica-de-cookies/`
- [ ] Unknown route navigates to `/`.
- [ ] No public `/en`, `/pt`, `/uk` or `[locale]` route remains.

## Content

- [ ] Portuguese and English dictionaries have identical typed structure.
- [ ] Production defaults to Portuguese.
- [ ] No language switcher is visible.
- [ ] No personal owner/employee/client names exist.
- [ ] No testimonials or reviews exist.
- [ ] No newsletter exists.
- [ ] No contact or quotation form exists.
- [ ] No Other Products navigation/page exists.
- [ ] No fake customer counts, ratings, savings, response time, acoustic values, U-values, security classes, or unsupported performance data remain.
- [ ] No brand, supplier, manufacturer, partner, or related logo section is present.
- [ ] Experience in the sector since February 1978 is present without personal attribution.
- [ ] Markets copy matches the approved list.
- [ ] Sobre Nós includes the approved text-only CLASSE+ and IMPIC information.
- [ ] No certificate image, PDF, download, preview, logo, or unsupported A+ claim exists.
- [ ] Warranty periods match the specification.
- [ ] Temporary project content is approved for the current review.
- [ ] Archived generated PNG sources remain outside `public/`.
- [ ] No page, metadata, or project data references generated imagery.
- [ ] Published imagery comes from the owner-supplied files under `public/images/works/`.

## Contacts

- [ ] Telephone is correct and uses `tel:`.
- [ ] Mobile/WhatsApp number is correct.
- [ ] WhatsApp link uses `wa.me/351917556253`.
- [ ] Primary email is correct and uses `mailto:`.
- [ ] Legacy email is shown as secondary.
- [ ] Factory address is correct.
- [ ] No opening hours or schedule labels are shown.
- [ ] Facebook link is correct.
- [ ] Google Maps iframe loads lazily.
- [ ] Google Maps external link is correct.
- [ ] No contact form is present.

## Legal and privacy

- [ ] Complete approved legal footer appears on every page.
- [ ] NIPC, capital and IMPIC values are correct.
- [ ] Privacy contact is `sertalplda@gmail.com`.
- [ ] Privacy Policy page is present.
- [ ] Cookies Policy page is present.
- [ ] Google Maps third-party processing is disclosed.
- [ ] No GA4 or Google Tag Manager is loaded.
- [ ] No cookie-consent banner is implemented in this release.
- [ ] Legal copy is treated as an owner-approved draft, not a claim of legal certification.

## Design and accessibility

- [ ] Existing blue/white technical visual direction is preserved.
- [ ] Existing hero image is reused.
- [ ] Header works on desktop and mobile.
- [ ] WhatsApp is visible in header, footer and Contacts.
- [ ] One `h1` per page.
- [ ] Heading order is logical.
- [ ] Focus is visible.
- [ ] Mobile menu is keyboard accessible.
- [ ] Project lightbox is keyboard accessible.
- [ ] Escape closes the lightbox.
- [ ] Focus returns after closing the lightbox.
- [ ] `prefers-reduced-motion` is respected.
- [ ] Images have useful translated alt text.
- [ ] No horizontal mobile overflow.
- [ ] No autoplay carousel, parallax or heavy animation.

## SEO

- [ ] Canonical domain is `https://sertalp.com`.
- [ ] Every page has approved title and description.
- [ ] Open Graph image uses existing hero initially.
- [ ] Production Open Graph locale is `pt_PT`.
- [ ] `sitemap.xml` includes all eight public pages.
- [ ] `robots.txt` allows public crawling and references the sitemap.
- [ ] No English alternate URLs or `hreflang`.
- [ ] Preview deployment is not indexed.
- [ ] No unsupported review/rating/price schema is added.

## Deployment

- [ ] Old GitHub Pages workflow is removed.
- [ ] Root `CNAME` is removed.
- [ ] Cloudflare Pages build command is `npm run build`.
- [ ] Cloudflare output directory is `out`.
- [ ] Production branch is `main`.
- [ ] Domain/DNS changes are performed manually after review.
- [ ] Agent did not merge, deploy, or modify DNS.
