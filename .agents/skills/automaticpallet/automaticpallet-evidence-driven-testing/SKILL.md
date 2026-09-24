---
name: automaticpallet-evidence-driven-testing
description: Use when proving an AutomaticPallet code, Worker, data, performance, or UI change with tests, runtime evidence, or a local before-and-after comparison.
---

# AutomaticPallet evidence-driven testing

Use during Prove and Ship. Evidence must support the behavior being claimed; a prose assertion alone is not completion evidence.

## Test-first proof

- Identify and confirm the public seam and acceptance/failure scenarios before writing the test.
- Work in vertical red → green → refactor slices; do not write an imagined batch of tests before understanding the seam.
- Test public interfaces, not private helpers, implementation details, or mock-only SQL twins.
- For database behavior, use the migration-backed SQLite helper. For Cloudflare behavior, use Miniflare or `wrangler dev`.

## Required repository gates

Run the narrowest relevant checks while iterating and the full factory gates before landing:

```text
vp check
vp test
vp run agent:verify
```

`agent:verify` remains the build, check, test, and deployment-dry-run contract. Record the command and result when evidence is needed for a review or promotion decision.

## Evidence by change type

- **Data/API:** public-interface tests, validation failures, authorization failures, transaction behavior, and representative result payloads.
- **Worker/Cloudflare:** Miniflare or Wrangler execution, binding behavior, queues/workflows/DO paths, and deployment dry-run output.
- **Performance:** baseline, target budget, production-like measurement, and before/after result. Default web-vitals budgets and the repository’s regression threshold apply.
- **UI:** interaction states, responsive behavior, accessibility, keyboard behavior, and a local visual comparison when appearance changes.

## Local before-and-after proof

For UI changes, capture equivalent before and after states using the same route, selector, viewport, and meaningful user state. Produce a local Markdown comparison or attach the local artifacts to the change evidence. If the before state is unclear, identify whether production, preview, or a local baseline is the correct source before capturing.

Do not upload images, edit PRs, trigger reviews, resolve threads, or publish evidence without explicit user instruction.

## Completion report

Summarize the behavior proven, commands run, relevant evidence paths or measurements, and any untestable item. Do not claim green evidence when a command was skipped or failed.
