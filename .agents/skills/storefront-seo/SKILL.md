---
name: storefront-seo
description: Use when changing or verifying SEO, discovery routes, metadata, structured data, or sitemap behavior in an AutomaticPallet storefront.
---

# AutomaticPallet storefront SEO

Scope this work to one product before editing. The customer application lives
at `apps/<product>/user-web`; product structured-data helpers live in
`@<product>/data-ops/seo/json-ld`.

## Invariants

- Keep canonical URLs, alternate-language links, robots directives, and
  sitemap entries consistent for the affected product.
- Never include account, checkout, cart, admin, or other user-specific routes
  in a public sitemap. Give those routes explicit no-index metadata.
- Keep JSON-LD aligned with the rendered page and canonical product data; do
  not seed ratings, offers, reviews, or organization details merely to satisfy
  a schema shape.
- Use the product's existing discovery builder and route conventions. Do not
  copy AutomaticPallet's bilingual or SSG behavior into ClearAccess or
  RentShortlet without confirming that product owns the same feature.

## Verification

- Run the affected storefront's sitemap or SEO unit tests, for example
  `vp test run apps/automaticpallet/user-web/tests/sitemap-generation.test.ts`
  or the corresponding product test path.
- Run the relevant product data-ops JSON-LD tests when structured data changes.
- Use `vp check` and the relevant product build task. Do not introduce `vpr`.
