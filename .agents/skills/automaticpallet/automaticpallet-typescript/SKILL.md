---
name: automaticpallet-typescript
description: Use when writing or reviewing TypeScript in AutomaticPallet, especially schema inference, generic APIs, route data, and type errors.
---

# AutomaticPallet TypeScript conventions

Use during Build and Prove whenever a type, schema, API shape, or generic boundary changes.

## Fix types at the source

- Never use `as` or `as any` to paper over a type error.
- Fix the schema, function signature, narrowing, or return type instead.
- Do not add a second interface that re-lists fields already represented by Drizzle or Zod.
- Preserve exact literals with inference or `satisfies`; do not widen values and then assert them back.

## Source-of-truth order

1. Drizzle tables define database columns.
2. `createSelectSchema`, `createInsertSchema`, and `createUpdateSchema` in the product data-ops factory derive validation schemas.
3. Domain and API shapes compose those schemas with `.pick()`, `.omit()`, and `.extend()`.
4. Infer return values, loader data, and input types from the function or schema that owns them.

## Drizzle/Zod schema SSOT

- Tables in `packages/<product>/data-ops/src/drizzle` are the column source of truth.
- Derive Zod schemas with `createSelectSchema`, `createInsertSchema`, or `createUpdateSchema` through the product data-ops `factory.ts` (`drizzle-orm/zod`).
- Compose domain and API shapes with `.pick()`, `.omit()`, `.extend()`, or factory refinements; do not hand-write a `z.object` that re-lists table columns.
- Add a `createSelectSchema` only when a caller needs validation.
- For JSON text columns, overwrite the derived select schema with `jsonTextColumnSchema` from `src/database/json.ts`; insert/update schemas may use `jsonishValueSchema` so writes remain strings.
- Parse JSON with `safeParseJson(value, schema)` and stringify at write sites; never use raw `JSON.parse` or pass parsed objects to inserts for text columns.

## Generic naming

Prefix generic type parameters with `T`: `TArgs`, `TReturn`, `TData`, `TError`, `TKey`, and `TValue`.

## Verification

When a type error exposes a boundary problem, fix the owning module rather than annotating the caller. Run the affected public-interface test and `vp check` after each vertical slice.
