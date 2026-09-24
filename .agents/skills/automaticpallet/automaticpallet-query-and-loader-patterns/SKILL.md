---
name: automaticpallet-query-and-loader-patterns
description: Use when adding or refactoring TanStack Start loaders, server functions, query options, mutations, or cache invalidation in an AutomaticPallet web app.
---

# AutomaticPallet query and loader patterns

Use during Build and Prove for data fetching in `apps/<product>/user-web` and `apps/<product>/admin-web`.

## File ownership

- Put `createServerFn` modules in the app’s `src/queries/` area (split `*-logic.ts` only when the existing slice uses that pattern).
- Keep query options next to the server-function module or inside the existing feature slice; do not invent a new `*.mutation.ts` layout.
- Keep database clients inside server-function handlers or `*.server.ts` modules.

## Query module contract

When a component and route loader consume the same server data, expose one module with:

1. A query-key factory for filters and invalidation.
2. A typed `queryOptions(...)` factory.
3. A typed hook wrapper only when the component needs one.

```ts
export const orderQueryKeys = {
  all: ['orders'] as const,
  list: (params: OrderListParams) => ['orders', 'list', params] as const,
}

export function orderQueryOptions(params: OrderListParams) {
  return queryOptions({
    queryKey: orderQueryKeys.list(params),
    queryFn: () => listOrdersFn({ data: params }),
  })
}
```

The server function and query-options module must agree on a typed input contract. Do not duplicate lookup implementations for mocks; use the migration-backed database helper for database tests.

## Drizzle relational query invariants

Drizzle ORM v1 RQB v2 ignores callback `where` filters on `db.query.*.findFirst/findMany`. Use object filters such as `where: { id }` or `{ status: { in: [...] } }`, or `{ RAW: sql }` / `{ RAW: and(...sql) }` when the object API cannot express the predicate.

- Never use callback `where: (t, { eq }) => eq(...)`; it is silently dropped.
- Do not cast relational lookups as `any` or optional-chain a real `DrizzleDb` query.
- Keep one implementation per lookup; do not keep a SQL `select().from().where(eq())` twin for mocks because filters drift.
- Use the migration-backed SQLite helper for database tests; it must implement the real public database seam.
- Do not skip `runInTransaction` when `process.env.VITEST` is set; its D1/SQLite fallback handles databases without a usable `transaction` method.

## Route loaders

- Keep route files thin.
- `loaderDeps` must return only search or path values the query actually uses.
- Loaders and components must call the same `queryOptions` factory.
- Use `context.queryClient.ensureQueryData(...)` for route prefetching.
- Server-only logic belongs in `createServerFn` or `@tanstack/react-start/server` because loaders run on both server and client.

## Start and data-service boundary

- User-web and admin-web queries that the app can execute synchronously use in-process `createServerFn` calls and the product’s `@<product>/data-ops` package.
- Never use `dataService.get(...)` or `fetch('/api/...')` for those in-process queries.
- Reserve service bindings and `dataService` for cross-worker RPC to `apps/<product>/data-service`.
- Static imports of server-function wrappers from query options are allowed; do not dynamically import server-only modules from `queryFn`.

## Mutations and live data

- Colocate mutations with the feature and invalidate the query-key factory, not ad-hoc string keys.
- For TanStack DB live queries, use the repository’s `db-core` and `react-db` skills; respect `ssr: false` and preload collections in loaders when required.
- Test success, validation failure, authorization failure, and invalidation behavior through public interfaces.
