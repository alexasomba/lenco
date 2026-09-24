# AutomaticPallet developer skills

This directory contains only the repository-owned skill family registered in
`.agents/factory-manifest.json`, plus the preset-managed workflow skill.

Package-owned skills are intentionally not vendored here. Discover approved
installed sources with `pnpm exec intent list` and load a focused skill with
`pnpm exec intent load <package>#<skill>`.
