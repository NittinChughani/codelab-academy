# Contributing to CodeLab Academy

Thanks for helping learners use C and C++ confidently. Contributions should be original, technically accurate and welcoming to beginners.

## Before you begin

1. Search existing issues before opening a duplicate.
2. For a new feature, open an issue describing the educational benefit.
3. Keep changes focused. Don't add tracking scripts, private API keys or unnecessary heavy dependencies.
4. Respect the [Code of Conduct](CODE_OF_CONDUCT.md).

## How to contribute using GitHub in your browser

1. Fork the repository or create a branch, depending on your access.
2. Edit or add the relevant source file on GitHub.
3. Commit changes and open a pull request describing what you changed.
4. Include sample inputs and expected outputs for new programming tasks.
5. Review automated checks and respond to feedback.

## Content requirements

For lessons, explain the purpose of every important line, include a compilable example and a meaningful practice task. For quizzes, provide four distinct options and explain the correct answer. For challenges, provide at least two different sample inputs, a hint and a working, self-contained C or C++ solution. Include boundary cases where reasonable.

## Test your change

```bash
node --check assets/app.js
node --check assets/data.js
node --check assets/challenges.js
node --check assets/projects.js
node scripts/check-content.cjs
```

For code exercises, compile using GCC or G++ and compare against all sample cases. For UI changes, manually verify mobile widths, dark/light themes and keyboard focus. See [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

## Please do not

- Upload copyrighted textbook passages or another creator's course without permission.
- Add fake output or claim code execution without a compiler.
- Submit unrelated promotional links, personal data or confidential material.
- Rename existing lesson/challenge IDs without explaining the progress migration impact.

Small bug fixes and clear explanations are valuable contributions.
