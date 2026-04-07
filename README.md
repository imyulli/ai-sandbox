# JavaScript New Function Generation

A training exercise demonstrating LLM-assisted JavaScript function generation. Implement three utility functions guided by tests, using an AI assistant to help produce correct solutions.

> **Note:** The task description covers only the initial requirements. Additional requirements are revealed through the test suite — use the test results to discover and satisfy all edge cases.

## Table of Contents

- [Overview](#overview)
- [Functions](#functions)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)

## Overview

Engage with an LLM (e.g. [EPAM Dial](https://chat.lab.epam.com/)) to generate JavaScript implementations for the three functions described below. Validate your solutions by running the Jest test suite.

## Functions

| Function | Signature | Description |
|---|---|---|
| `sumOfPrimes` | `sumOfPrimes(n: number): number` | Returns the sum of all prime numbers up to (and including) `n`. |
| `toTitleCase` | `toTitleCase(input: string): string` | Converts a string to title case — the first letter of every word is capitalised. |
| `groupAnagrams` | `groupAnagrams(words: string[]): string[][]` | Groups an array of strings by their anagram sets. Order of groups and words within groups does not matter. |

All implementations belong in [`src/index.js`](src/index.js) and must be exported.

## Getting Started

**Prerequisites:** Node.js ≥ 18 and npm.

```bash
# Install dependencies
npm install
```

## Running Tests

```bash
npm test
```

Test results are written to `test-results/junit.xml` (JUnit format).

## Project Structure

```
.
├── src/
│   └── index.js        # Function implementations (edit this file)
├── tests/
│   └── index.test.js   # Jest test suite
└── package.json
```