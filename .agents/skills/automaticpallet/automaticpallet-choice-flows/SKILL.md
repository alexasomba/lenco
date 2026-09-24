---
name: automaticpallet-choice-flows
description: Use when an AutomaticPallet task needs a human decision, architectural trade-off, explicit approval, or a choice among concrete implementation paths.
---

# AutomaticPallet choice flows

Use across Isolate, Build, Prove, and Ship whenever the next action depends on user intent or authorization.

## Decision order

1. Use native tool approvals for command execution, destructive actions, permission escalation, and external writes.
2. Use structured choices when there are two or more concrete options with meaningful trade-offs.
3. Use plain text for simple yes/no or open follow-ups.

State the decision, the default, and the relevant trade-off briefly. Titles and choices must describe the user’s outcome, not internal implementation jargon.

## Repository defaults

- Prefer Vite+, TanStack Start, Cloudflare Workers, and shadcn on Base UI.
- Never invent a CLI command. Search the repository or its task graph first.
- Do not infer approval to upload evidence, edit a PR, trigger a review, resolve a thread, or change production state.
- If a requested choice conflicts with a constitution, workflow manifest, or product ownership rule, explain the conflict before acting.
