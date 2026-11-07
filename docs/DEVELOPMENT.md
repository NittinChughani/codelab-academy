# Development and maintenance

This is a dependency-free static site intended to be edited directly on GitHub if desired. The repository does not require a framework, bundler, database or backend.

## Source files

- `index.html`: semantic structure, sections and input controls
- `assets/style.css`: GearEx styling plus new responsive sections
- `assets/data.js`: original C/C++ `LESSONS` and `QUESTIONS` arrays
- `assets/gearex-courses.js`: five additional language tracks, starters and quiz content
- `assets/challenges.js`: `CHALLENGES` with two language variants per task
- `assets/projects.js`: `PROJECTS` project briefs
- `assets/app.js`: rendering, navigation, quizzes, Wandbox language adapter and progress persistence
- `assets/gearex-features.js`: theme selector, guided tracer, assessments and printable certificates

**DO NOT place untrusted source text into `innerHTML`.** The UI builds elements and uses `textContent` for content and remote compiler results.

## Content definitions

Each lesson needs a unique string `id`, `lang` (`c`, `cpp`, `py`, `js`, `java`, `cs` or `sql`), `title`, `level`, `description`, `intro`, compilable `code`, `points` (array of educational facts) and `challenge`. New lessons may also provide `walkthrough`, `pitfalls` and `output`.

Each quiz question needs unique `id`, `lang`, `question`, `options` (4 strings), zero-based `answer`, and `explanation`.

Each challenge needs unique `id`, `lang`, `title`, `level`, `topic`, `description`, `hint`, `samples` (at least two `{input, output}` pairs), and a compilable `solution`. The external service is not a full online judge: only the first sample is verified.

Each project needs unique `id`, `lang`, `title`, `level`, `description`, `skills`, `steps`, `acceptance`, `starter`, and `tip`.

## Test locally

```bash
python3 -m http.server 8000
node --check assets/app.js
node scripts/check-content.cjs
```

Review the site at common phone, tablet and desktop widths. Verify hashes (`#lesson/c-hello`, `#challenge/c-challenge-01`, `#project/c-calculator`), bookmarks, completion, quiz finish/retry, code highlighting, loading starter programs, and exporting/importing progress.

## Compiler limitations

Wandbox is queried only after a user clicks Run, uses GCC compilers from its advertised list and is subject to connectivity and third-party limits. Never embed a secret key in frontend source code. When service policies change, update the integration and this documentation; do not silently simulate execution.

## Storage compatibility

The new key `codelab-academy-complete-v2` stores arrays of stable IDs, theme, attempt count and editor drafts. It migrates known values from `codelab-academy-v1` and `codelab-practiced` on first load. Keep IDs stable when editing or progress could become orphaned.

## Good first contributions

Correct mistakes, add original practical tasks, improve compiler error messages, enhance keyboard navigation and add accessibility tests. No scraping or copying proprietary course content.

## Guided tracing & certification

The tracer provides illustrative source-order explanations, not actual execution semantics for arbitrary programs; do not describe it as a debugger. Certificate assessment results are locally stored in `gearex-certificates-v1` and deliberately do not claim accreditation or identity verification.

## Themes

Five palettes are defined under `body[data-theme]`. To add a theme, update both the `#themeSelect` list and CSS variables. Keep keyboard focus indicators and text contrast accessible.
