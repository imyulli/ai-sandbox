# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Node.js training project demonstrating LLM-assisted function generation. The task is to implement three utility functions in `src/index.js`, validated by a Jest test suite.

## Commands

```bash
npm install          # Install dependencies
npm test             # Run all tests (outputs JUnit XML to test-results/junit.xml)

# Run a single test file
npx jest tests/index.test.js

# Run tests matching a name pattern
npx jest -t "should correctly group"

# Run src/index.js directly
npm start
```

## Architecture

This is a minimal, flat Node.js project with no build step or transpilation:

- **`src/index.js`** — The only implementation file. All three functions must be exported via `module.exports`. This is the primary edit target.
- **`tests/index.test.js`** — Jest test suite. Imports functions from `src/index.js` and tests them in named `describe` blocks: `groupAnagrams`, `sumOfPrimes`, `toTitleCase`.
- **`preview/`** — Static Figma design mockup (HTML/CSS login form). Not connected to the JS implementation.
- **`.github/agents/readme-specialist.agent.md`** — Defines an agent scoped to documentation files only; it should not touch source code.

## Functions to Implement

All three must be exported from `src/index.js`:

| Function | Signature | Description |
|---|---|---|
| `sumOfPrimes` | `sumOfPrimes(n)` | Sum of all primes ≤ n; return 0 for n < 2 |
| `toTitleCase` | `toTitleCase(input)` | Capitalize first letter of each word; preserve multiple spaces |
| `groupAnagrams` | `groupAnagrams(words)` | Group string array by anagram sets; return array of arrays |

## Test Reporter

`npm test` runs Jest with both the default console reporter and `jest-junit`. JUnit XML is written to `test-results/junit.xml` (directory created automatically). The `junit.xml` in the repo root is a stale artifact — the canonical output path is `test-results/junit.xml`.
