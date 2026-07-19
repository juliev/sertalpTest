# Owner next steps after the Codex pull request

This file describes the manual actions that remain after the autonomous implementation task. Codex must update details if the final repository configuration differs.

## 1. Review the pull request

- Read the PR summary and validation results.
- Confirm the source PNG → final WebP mapping.
- Review the diff for protected company facts and the absence of personal names.
- Confirm GitHub Actions `quality` passes.

## 2. Configure Cloudflare Pages if it is not connected yet

In Cloudflare Dashboard:

1. Open **Workers & Pages**.
2. Select **Create application** → **Pages** → **Import an existing Git repository**.
3. Authorize GitHub and select `juliev/sertalpTest`.
4. Use production branch `main`.
5. Select the **Next.js (Static HTML Export)** preset, or set:
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: repository root
6. Set Node.js 22 for builds using the supported Pages environment configuration if Cloudflare does not infer it from the repository.
7. Enable preview deployments for non-production branches.
8. Do not use Direct Upload or manual Wrangler deployment for this project.

After connecting, Cloudflare should build the open feature branch and expose a Preview URL.

## 3. Review the Cloudflare Preview

Check desktop and mobile:

- all pages and navigation;
- project gallery and lightbox;
- six unique project images;
- phone, WhatsApp, email, Facebook, and Google Maps links;
- map loading;
- legal footer;
- privacy/cookies pages;
- unknown route redirect;
- no forms, testimonials, language switcher, personal names, or horizontal overflow.

## 4. Buy and add the domain

1. Buy `sertalp.com` from the chosen registrar.
2. Add the domain as a Cloudflare zone.
3. Point the registrar nameservers to the Cloudflare nameservers shown for the zone.
4. Wait until the zone becomes active.

Do not point the domain at the site until the Preview has been approved.

## 5. Merge the pull request

- Use **Squash and merge**.
- Confirm Cloudflare automatically builds `main`.
- Verify the `*.pages.dev` production deployment before attaching the custom domain.

## 6. Connect custom domains

In the Pages project, add:

- `sertalp.com` as the primary custom domain;
- `www.sertalp.com` and redirect it to `https://sertalp.com`;
- redirect the public `*.pages.dev` production hostname to the canonical domain when the Cloudflare configuration supports the chosen approach.

Verify Universal SSL is active and both HTTP and HTTPS resolve correctly.

## 7. Production verification

Verify:

- `https://sertalp.com/`;
- `https://www.sertalp.com/` redirects to the apex;
- canonical metadata;
- `sitemap.xml`;
- `robots.txt`;
- all contact links;
- all public pages;
- mobile layout;
- no broken images or console errors.

## 8. Later tasks

Keep these separate from the first release:

- GA4;
- cookie-consent implementation;
- replacement of temporary project content with client-supplied real projects;
- any legal-text update requested by a qualified adviser or current company certificate.
