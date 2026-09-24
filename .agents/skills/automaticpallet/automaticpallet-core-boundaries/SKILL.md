---
name: automaticpallet-core-boundaries
description: Use when moving code between product apps, data-ops, shared UI, result, or other reusable packages and when checking runtime or ownership boundaries.
---

# AutomaticPallet core boundaries

Use during Build and Prove for package placement, shared contracts, extraction, and dependency-direction decisions.

## Shared package contract

Put code in a shared package only when it is a runtime-agnostic contract or pure utility used by more than one consumer:

- Zod schemas and inferred transport/domain types.
- Domain statuses, enums, constants, and pure formatters/normalizers.
- Product data-ops Drizzle schema, relations, migrations, DAL, and database helpers.
- `packages/ui` Base UI/shadcn primitives and `cn()` utilities.
- `packages/result` generic result behavior only.

## Keep application-specific code local

Do not put these in shared domain packages:

- React components, hooks, or context providers outside `packages/ui`.
- Route definitions, loaders, router navigation, or search state.
- TanStack Query hooks, `queryOptions`, cache instances, or app-specific collections.
- `createServerFn` wrappers or Cloudflare binding access.
- App-specific environment variables, request context, or user/session state.

## Product ownership

- `apps/<product>/user-web`: storefront routes, UI, server functions, and customer request-path behavior.
- `apps/<product>/admin-web`: operator routes and staff workflows.
- `apps/<product>/data-service`: Durable Objects, workflows, queues, crons, scheduled handlers, and cross-worker RPC.
- `packages/<product>/data-ops`: product auth, Drizzle schema, migrations, queries, and data operations.
- `packages/ui`: reusable primitives plus product-selectable styles.
- `packages/result`: generic results; product errors stay with their product.

The current product data packages are `@automaticpallet/data-ops`, `@rentshortlet/data-ops`, and `@clearaccess/data-ops`. During consolidation, source repositories may still expose legacy flat paths; record any approved transition exception in [`specs/025-consolidated-monorepo/migration-manifest.csv`](../../../../specs/025-consolidated-monorepo/migration-manifest.csv).

## Boundary review

Before extracting code, identify its runtime, owner, consumers, and public seam. Prefer the narrowest package that satisfies real reuse. Verify import direction and add a public-interface test when moving a seam. Do not use a shared package as a convenience dumping ground.
