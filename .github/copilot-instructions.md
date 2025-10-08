# Coding guidance

## General rules
- Keep production (non-test) code clean, only add comments when absolutely necessary to describe code purpose; prefer descriptive code to comments.
- Use early returns and shallow function bodies.
- Keep names explicit and intention-revealing.
- File naming are kebab-case.

## Fixing issues
- Always run all checks using `npm run checks` and fix issues before proposing a commit.
- Most linting issues are fixed automatically when checks are run.

## When unsure
- Follow nearby file patterns. If patterns conflict, make minimal change and call out the inconsistency in the PR description.
