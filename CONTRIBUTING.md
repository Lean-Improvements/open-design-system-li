# Contributing

Thanks for your interest in the Lean Improvements design system.

## Commit convention

This repo uses [Conventional Commits](https://www.conventionalcommits.org/) to
automate releases via [release-please](https://github.com/googleapis/release-please):

- `fix: …` → patch release (bug fix / token tweak)
- `feat: …` → minor release (additive token or component)
- `feat!: …` or a `BREAKING CHANGE:` footer → major release (renamed/removed token
  or changed default — consumers must adapt)

Anything else (`chore:`, `docs:`, `refactor:`, `test:`) does not trigger a release
on its own.

## How releases work

Merging changes into `main` makes release-please open (or update) a
**"chore: release x.y.z"** pull request with the version bump and the generated
`CHANGELOG.md`. Merging **that** PR creates the git tag `vX.Y.Z` and a GitHub
Release. No manual tagging or tokens required.

## Local preview

```bash
npm install
npm run dev   # static server on http://localhost:4173
```

## Scope

This package is **purely presentational** — design tokens, a Tailwind preset, theme
CSS and reference components. Please do not add application/business logic, network
calls, secrets, or internal URLs. Keep it brand + UI only.
