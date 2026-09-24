---
name: automaticpallet-feature-architecture
description: Use when implementing a full-stack AutomaticPallet feature or deciding whether repeated workflow mechanics belong in a reusable service.
---

# AutomaticPallet feature architecture

Use this skill during Build and Prove for changes that cross product data, contracts, server execution, queries, routes, or UI. It combines the end-to-end feature ladder with the rule that orchestration owns product decisions while reusable services own repeated mechanics.

## Delivery ladder

Follow the dependency order unless an approved specification records a justified exception:

1. **Schema and migrations** — edit `packages/<product>/data-ops/src/drizzle/`, then use the product-qualified database tasks listed in `package.json` (for example `vp run db:generate:automaticpallet` and `vp run db:migrate:local:automaticpallet`) to verify migrations locally.
2. **Contracts** — derive Zod schemas from Drizzle through the product data-ops `factory.ts`; compose domain/API shapes with `.pick()`, `.omit()`, or `.extend()`.
3. **Server execution** — use `createServerFn` in `apps/<product>/user-web` or `admin-web` for synchronous app queries; use `apps/<product>/data-service` for Workers, queues, workflows, Durable Objects, and cross-worker RPC.
4. **Query options** — use the shared query/options factory for loaders and components. Load `automaticpallet-query-and-loader-patterns` for the detailed contract.
5. **Routes and UI** — keep routes thin, pass only loader dependencies the query uses, and compose UI from `@workspace/ui`.
6. **Verification** — map acceptance and failure paths to public-interface tests and load `automaticpallet-evidence-driven-testing`.

## Orchestration versus reusable mechanics

- Product actions, route handlers, and worker workflows own the “why” and “when”: authorization, policy, state transitions, retries, failure classification, and user-facing errors.
- Product `data-ops` owns reusable data mechanics: Drizzle access, transactions, schema-backed validation, and product DAL operations.
- `data-service` owns reusable worker mechanics such as queue, workflow, and Durable Object coordination when the operation is genuinely cross-request or cross-worker.
- Extract a capability only when at least two callers need the same operational behavior. Give it explicit inputs, structured results, and explicit failures.
- Do not create a god-service, let a service mutate product policy directly, or abstract logic used by only one caller.

Before choosing an owner or extracting a package, load [automaticpallet-core-boundaries](../core-boundaries/SKILL.md). It is the canonical source for product ownership, package placement, runtime boundaries, and dependency direction.

## Build checklist

- Identify the owning product path and package boundary before writing code; apply [automaticpallet-core-boundaries](../core-boundaries/SKILL.md).
- Search for an existing capability before creating a new service or query.
- Keep domain policy at the orchestration boundary and mechanics behind explicit interfaces.
- Keep shared packages runtime-agnostic; do not import React, routes, Query, or app environment access into them.
- Use one implementation per lookup and one schema source of truth.
- Add the public-interface test before implementation for each vertical slice.
