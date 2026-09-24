---
name: automaticpallet-data-migrations
description: Use when changing a product Drizzle schema, generating a migration, or applying a D1 migration in AutomaticPallet.
---

# AutomaticPallet data migrations

Use this skill together with the focused installed Drizzle skill. First load
`drizzle-kit#drizzle`; then load `drizzle-kit#drizzle-migrations` and
`drizzle-kit#drizzle-generate` for schema or migration work.

## Product boundary

- The product data-ops package owns its Drizzle schema, migration files, and
  database operations. Do not move those responsibilities into a web app.
- Use the product-qualified repository tasks: `db:generate:<product>` and
  `db:migrate:local:<product>`. They preserve each product's config and
  Worker/D1 boundary.
- Review generated SQL and snapshots before applying anything. A generated
  migration is source code and requires the same review as a hand-written one.

## Safety

- Apply migrations locally first. Remote or preview D1 operations are external
  writes and require explicit user authority.
- Do not use raw `drizzle-kit push` for managed product databases. Do not use
  direct remote introspection or export as a workaround for a migration issue.
- If Drizzle reports a rename, data-loss, or missing-hint decision, stop and
  obtain the required product and user decision before continuing.

## Proof

Run the relevant product generation and local migration task, then the focused
data-ops test or `vp check`. Report generated SQL review separately from any
remote-application evidence.
