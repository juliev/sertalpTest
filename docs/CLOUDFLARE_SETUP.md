# Cloudflare Pages setup

This project intentionally uses a static Next.js export. Cloudflare currently recommends Workers for full-stack Next.js, but Pages remains appropriate for this deliberately static website.

The Codex agent documents this setup but must not change the Cloudflare account, deploy manually, or modify DNS.

## 1. Prerequisites

- GitHub repository available.
- Rebuilt feature branch pushed to GitHub with an open pull request.
- Cloudflare account.
- Domain `sertalp.com` purchased and added to the same Cloudflare account before attaching the apex domain.
- Node.js 22 declared through `.nvmrc`.

## 2. Create the Pages project

In Cloudflare:

1. Open **Workers & Pages**.
2. Select **Create application**.
3. Choose **Pages**.
4. Choose **Import an existing Git repository**.
5. Connect the GitHub account and select `juliev/sertalpTest`.
6. Use these build settings:

| Setting                | Value                        |
| ---------------------- | ---------------------------- |
| Framework preset       | Next.js (Static HTML Export) |
| Production branch      | `main`                       |
| Build command          | `npm run build`              |
| Build output directory | `out`                        |
| Root directory         | repository root              |

The project defaults to Portuguese. For clarity, a production environment variable may be set:

```text
SITE_LOCALE=pt
```

It is not a secret. The application must default to Portuguese when it is absent.

Node.js 22 is pinned by `.nvmrc`. Cloudflare also supports a `NODE_VERSION` build variable, but do not create duplicate configuration unless the build requires it.

## 3. Preview deployments

With Git integration enabled:

- pushes to non-production branches create Preview deployments;
- pull requests from the same repository receive a unique Preview URL;
- new commits update the branch preview;
- Cloudflare adds `X-Robots-Tag: noindex` to Preview deployments by default.

Review the preview before merging.

The recommended release flow is:

```text
feature branch
→ pull request
→ GitHub Actions
→ Cloudflare Preview
→ manual review
→ Squash and merge
→ production build from main
```

## 4. Attach the apex domain

After the production site is approved:

1. Add `sertalp.com` as a Cloudflare zone.
2. Point the registrar nameservers to the nameservers Cloudflare provides.
3. Open the Pages project.
4. Open **Custom domains**.
5. Select **Set up a domain**.
6. Enter `sertalp.com`.
7. Wait for DNS and certificate activation.

For an apex Pages domain, the domain must be a zone in the same Cloudflare account.

## 5. Redirect `www` to the apex domain

Use Cloudflare **Bulk Redirects**, not application code.

Create a permanent redirect:

```text
https://www.sertalp.com/* → https://sertalp.com/$1
```

Use HTTP 301 and preserve:

- query string;
- path suffix.

Cloudflare's documented setup may require a proxied DNS record for `www` before the redirect becomes active.

## 6. Redirect the production `pages.dev` domain

After the custom domain is active, use Cloudflare Bulk Redirects:

```text
https://<project>.pages.dev/* → https://sertalp.com/$1
```

Use HTTP 301 and preserve query string and path suffix.

Do not redirect preview hash or branch domains needed for review.

## 7. Disable the old GitHub Pages setup

After Cloudflare is confirmed:

- ensure GitHub Pages is disabled in repository settings;
- delete the old GitHub Pages workflow from the repository;
- remove root `CNAME`;
- verify no deployment job still writes to `gh-pages`.

## 8. Verification

Check:

```bash
curl -I https://sertalp.com/
curl -I https://www.sertalp.com/
curl -I https://<project>.pages.dev/
```

Verify:

- HTTPS is valid;
- `www` returns 301 to the apex domain;
- production `pages.dev` returns 301 to the apex domain;
- paths and query strings are preserved;
- all public pages load;
- sitemap uses `https://sertalp.com`;
- canonical tags use `https://sertalp.com`.

## 9. Build troubleshooting

When a Pages build fails:

1. Open the failed deployment.
2. Read install and build logs.
3. Confirm Node.js and npm versions.
4. Run locally:

```bash
npm ci
npm run check
```

5. Confirm the output directory is `out`.
6. Confirm no server-only route, middleware, API route, dynamic runtime dependency, or unsupported image optimization remains.
7. Push a fix to the feature branch and review the updated Preview.

## 10. Rollback

Preferred options:

- revert the problematic merge in Git and let Pages redeploy;
- use Pages deployment history to restore/retry a previously known-good production deployment where the dashboard supports it.

Keep the Git repository as the source of truth.

## References

- Static Next.js on Pages: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- Preview deployments: https://developers.cloudflare.com/pages/configuration/preview-deployments/
- Custom domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Redirect www: https://developers.cloudflare.com/pages/how-to/www-redirect/
- Redirect pages.dev: https://developers.cloudflare.com/pages/how-to/redirect-to-custom-domain/
