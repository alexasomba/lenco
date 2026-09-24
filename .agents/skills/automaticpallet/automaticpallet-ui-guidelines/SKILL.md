---
name: automaticpallet-ui-guidelines
description: Use when authoring AutomaticPallet UI in user-web, admin-web, or packages/ui, including Base UI composition, component extraction, styling, and React 19 behavior.
---

# AutomaticPallet UI guidelines

Use during Build and Prove for UI implementation and UI-focused verification.

## Design-system rules

- Use shadcn/ui components on Base UI from `@workspace/ui`; use the `render` prop, never Radix `asChild`.
- Use `@phosphor-icons/react` exclusively.
- Use Tailwind v4 OKLCH theme variables such as `bg-background`, `text-foreground`, and `border-border`; do not hardcode hex or raw HSL classes.
- Compose classes with `cn(...)` from `@workspace/ui/lib/utils`.
- Do not add Coss or unrelated UI primitive systems.

## Visual foundations

Carry over design principles from references, not their brand-specific recipes. Use the product's existing theme and component tokens unless a product brief explicitly adopts different values.

- Create hierarchy with a consistent type and spacing scale, deliberate alignment, and content-first layouts. Prefer CSS grid, flexbox, and intrinsic sizing over JavaScript measurements.
- Separate surfaces with semantic background and border tokens. Use shadows sparingly to express elevation, and keep nested radii aligned with child corners no larger than their parent.
- Test layouts at narrow and wide sizes with long and localized content. For charts and status indicators, use distinguishable palettes and pair color with labels or other cues.

## Interaction and accessibility

Apply these behavior rules across product themes.

- Prefer semantic HTML and accessible names. Keep every action keyboard-operable, show a clear `:focus-visible` state, and keep focused controls unobscured. Navigation uses links; dialogs and drawers manage and restore focus.
- Prefer generous hit areas, aiming for 44px on touch screens. Keep browser zoom and paste available, and use at least 16px text in mobile inputs to avoid iOS Safari auto-zoom.
- Associate form controls with labels and use suitable `type`, `inputMode`, and `autoComplete` values. Let users enter a value and explain validation errors beside the field; on submit, focus the first invalid field.
- Specify relevant default, hover, active, focus, disabled, loading, empty, success, and error states for interactive components. Preserve a button's label while loading, announce async updates accessibly, and provide a recovery action for errors and empty screens. Do not use color alone to convey status.
- Honor `prefers-reduced-motion`; animate only when it clarifies a change, list transition properties explicitly, and keep motion interruptible. Prefer CSS layout and intrinsic sizing over JavaScript measurements.
- Check narrow and wide layouts, safe areas, and long or translated content. Reserve space for images and keep skeletons close to their final layout. Put shareable filters, tabs, pagination, and similar state in TanStack Router search params when users should be able to refresh, revisit, or share the view.

## Component ownership

Extract to `packages/ui` only when the component is app-agnostic, reusable across user and admin surfaces, and depends on primitive props rather than routes, auth, product data, or business state.

Keep components in app feature slices when they consume server functions, Query/DB hooks, router state, auth, or product-specific entities such as checkout, orders, or catalog records.

Shared component callers may use `className` for layout utilities only. Colors, typography, borders, radii, shadows, opacity, transforms, and cursor states belong in shared component variants or component-owned styles. Do not use arbitrary values; use a named theme token or a plain wrapper when layout needs a repeated value. The only caller-side visual exception is `sr-only` on `DialogTitle`, `FieldLabel`, and `Label`, preserving an accessible name when the visible label is intentionally omitted.

## TanStack UI integrations

Route TanStack UI usage through the shared adapters so framework APIs and shadcn composition have one update boundary:

- Forms import from `@workspace/ui/components/tanstack-form`. Use `TanStackForm` for shared form submission behavior and `TanStackFormField` with the standard input props helper when the field matches that structure. Keep product validation, values, and submit behavior in the app.
- Tables import hooks, types, and table UI from `@workspace/ui/components/tanstack-table`. Use `TanStackDataTable` when its shared toolbar, pagination, and table structure fit; bespoke screens may compose the `TanStackTable*` primitives through this adapter.
- TanStack-backed table UI uses explicitly named `TanStack*` primitives and composites from that adapter, including `TanStackDataTable`, `TanStackDataTablePagination`, and `TanStackTable*`. Keep shadcn's `Table` exports in `table.tsx` for tables that do not use the TanStack table model; do not expose bare aliases for TanStack-backed UI components from the adapter. Engine hooks and model types may keep their upstream names.
- TanStack Charts import from `@workspace/ui/components/tanstack-charts`, using `TanStackChart` and `TanStackChartContainer`. Keep this renderer separate from `@workspace/ui/components/chart`, which owns the shadcn/Recharts chart API.
- Do not import `@tanstack/react-form`, `@tanstack/react-table`, or `@tanstack/charts` from product UI. Keep vendor imports in the shared adapters; dedicated devtools integrations may import their matching devtools package.

Keep adapter composition inside `packages/ui` so shadcn component refreshes can be handled there without changing product routes. Keep data, route state, and product-specific chart definitions in app feature slices.

## React 19 policy

- Use loaders and Query for server state, mutation callbacks for writes, `<Navigate />` for declarative guards, and event handlers for user actions.
- Do not use `useEffect` for derived values, server data, query-data mirroring, redirects, URL synchronization, debouncing, or user events.
- Retain effects only for real external synchronization such as sockets, timers, DOM observers, browser APIs, SDK setup, persistence, analytics, or post-commit measurement.
- Every retained effect needs a nearby `// effect-policy: external-sync — ...` justification.
- Use `'window' in globalThis`, never `typeof window !== "undefined"`.
- Never read or mutate `ref.current` during render; initialize computed state with `useState(() => initialValue)`.

## UI proof

For changed UI, list the relevant interaction states and check keyboard-only use, visible focus, responsive behavior, and accessible names and announcements. For visual changes, load `automaticpallet-evidence-driven-testing` and capture a comparable local before/after result.
