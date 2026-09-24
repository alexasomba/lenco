---
name: automaticpallet-viteplus-workflow
description: Use in AutomaticPallet for any code or workflow task. It enforces detached origin/preview worktrees, Vite+ tasks, local evidence, and human-gated preview-to-main promotion.
---

# AutomaticPallet Codex workflow

Run `vp run agent:doctor` before substantial work. Create isolated work with
`vp run agent:worktree:create <name>`; never create a task branch. Use `vp staged`
for checkpoints and `vp run agent:verify` before landing. Land only through
`vp run agent:land <name>`, which may push only `preview`.

`main` is changed only by a human merge of the `preview` to `main` promotion PR.
When `agent:land` requires an issue for a feature, fix, refactor, or performance
delivery and no matching GitHub issue exists, create one that precisely scopes
the delivery and pass its number with `--issue`; never relabel a change to evade
the landing gate.
Use `vp run agent:promotion:status` to inspect, never change, its CI and
Cloudflare evidence. Do not upload evidence, edit PRs, trigger reviews, or resolve
threads without an explicit user instruction. Database access belongs in the
product `data-ops` boundary. Treat exact commands, code, identifiers, and quoted
technical text as immutable during prose cleanup.
