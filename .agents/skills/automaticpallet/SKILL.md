---
name: automaticpallet
description: >-
  Core entrypoint for AutomaticPallet repository work. Use first to route
  Isolate → Build → Prove → Ship work to the smallest relevant local skill
  while preserving product, runtime, and authorization boundaries.
metadata:
  type: core
  scope: repository
  lifecycle: isolate-build-prove-ship
---

# AutomaticPallet Core

This is the entrypoint for the AutomaticPallet skill family. The root
[`AGENTS.md`](../../../AGENTS.md) remains the mandatory policy authority for
tooling, safety, authorization, worktrees, landing, and promotion. This skill
routes work; it does not replace that policy or duplicate detailed guidance.

## Mandatory write gate

Before any edit, run `vp run agent:worktree:assert`. It must confirm a
detached task checkout under `.worktrees/`. Never edit primary `preview`; if it
is dirty, stop and report its changes.

## Lifecycle routing

Choose one primary route, then add only the skills needed by the actual change.
Do not load every child skill by default.

| Beat    | Start with                                | Add when needed                                                    |
| ------- | ----------------------------------------- | ------------------------------------------------------------------ |
| Isolate | `automaticpallet-viteplus-workflow`       | `automaticpallet-choice-flows` for decisions or approval           |
| Build   | `automaticpallet-feature-architecture`    | Query, boundary, UI, TypeScript, or SEO skill for the changed seam |
| Prove   | `automaticpallet-evidence-driven-testing` | The build skill that owns the behavior being proven                |
| Ship    | `automaticpallet-viteplus-workflow`       | Evidence and `automaticpallet-writing-for-humans`                  |

## Concern routing

| Need                                                                           | Skill                                                                             |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| A feature crossing schema, contracts, server execution, queries, routes, or UI | [feature-architecture](./automaticpallet-feature-architecture/SKILL.md)           |
| Product ownership, package placement, or runtime boundaries                    | [core-boundaries](./automaticpallet-core-boundaries/SKILL.md)                     |
| TanStack Start loaders, server functions, Query, RQB, or invalidation          | [query-and-loader-patterns](./automaticpallet-query-and-loader-patterns/SKILL.md) |
| TypeScript inference, Drizzle/Zod schemas, or JSON text columns                | [typescript](./automaticpallet-typescript/SKILL.md)                               |
| Drizzle schema changes, migration generation, or D1 application                | [data-migrations](./automaticpallet-data-migrations/SKILL.md)                     |
| React, Base UI, ShadCN, Tailwind, accessibility, or responsive UI              | [ui-guidelines](./automaticpallet-ui-guidelines/SKILL.md)                         |
| A human decision, tradeoff, approval, or authorization boundary                | [choice-flows](./automaticpallet-choice-flows/SKILL.md)                           |
| Tests, runtime behavior, performance, or visual proof                          | [evidence-driven-testing](./automaticpallet-evidence-driven-testing/SKILL.md)     |
| Worktrees, guarded landing, preview push, or promotion                         | [viteplus-workflow](../automaticpallet-viteplus-workflow/SKILL.md)                |
| Storefront metadata, canonical URLs, or structured SEO data                    | [storefront-seo](../storefront-seo/SKILL.md)                                      |
| Human-facing summaries, docs, or release prose                                 | [writing-for-humans](./automaticpallet-writing-for-humans/SKILL.md)               |

## Composition rules

- Keep product decisions and ownership in the AutomaticPallet skills. Load a
  generic package skill with `pnpm exec intent load <package>#<skill>` when
  framework mechanics require it; do not recreate package documentation here.
- Load the most specific skill for the changed package or concern. Add a
  second skill only when the implementation crosses a real boundary.
- Keep the product path, runtime, and authorization decision explicit before
  editing. If the correct owner or permission is unclear, use
  `automaticpallet-choice-flows` and stop before an external write.
- Treat [`factory-manifest.json`](../../factory-manifest.json) as the canonical
  inventory and lifecycle map. Treat `package.json` as the source for exact
  repository commands.

## Completion

The change is not complete until its relevant Prove evidence exists and the
guarded Ship workflow has satisfied the root policy. Report commands and
evidence honestly; do not turn a skipped gate into a green claim.
