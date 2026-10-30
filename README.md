# Universe Invedors Open Library

This static site is the parent-domain resource directory for
`https://universeinvedors.tech/`. This directory is the root of the
`UniverseInvedors/website-main` GitHub repository and should be deployed with
the repository root as the Cloudflare Pages output directory. The company site
is a separate Pages project built from the production Next.js application in
`UniverseInvedors/organization-website`.

## What this release includes

- Searchable, category-filtered directory of selected creative-asset sources,
  open-source projects, AI resources, and browser tools.
- Practical guidance on checking asset licenses and attribution requirements.
- About, privacy, terms, contact, and sitemap pages.
- No local copies of third-party asset catalogs and no AI service/API integration.

Each resource listing points to the original provider. Licensing can vary by
asset, model, font family, or repository; the original item and provider terms
are authoritative. Do not describe a third-party service as integrated unless
it has actually been implemented and its data handling has been reviewed.

## Deployments and domain changes

The `organization-website` deployment workflow deploys this repository to the
`website-main` Pages project and binds the root domain to it. It deploys the
company application separately and binds the company subdomain. Review the
outer repository's `DOMAIN_SETUP.md` for the intended hostnames and
troubleshooting.

Before deploying, confirm that both destinations are correct and review the
privacy and terms notices against the actual hosting and any enabled
third-party services.

## AdSense

No AdSense code is enabled in this site. Review it for quality, accessibility,
and policy readiness, then request review for the root site in the AdSense
dashboard. Approval is not guaranteed. Add publisher code only after the
account and specific site are eligible and approved.
