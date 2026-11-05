# Developer guide

## Requirements

- A modern browser
- Python 3 (optional, for local HTTP server)
- Node.js (optional, for JavaScript syntax checks)

## Architecture

The project uses plain HTML, CSS, and JavaScript. `data.js` defines the curriculum, `app.js` handles DOM rendering, quizzes, filters, hash routing, and local progress. `style.css` defines the visual system and mobile breakpoints. No build step is required.

## Manual smoke test

1. Open the homepage at desktop and mobile widths.
2. Filter lessons to C and then C++.
3. Search for `arrays`, open the result, and copy its code.
4. Mark a lesson completed, reload, and verify completion persists.
5. Switch themes, reload, and verify theme persists.
6. Answer a quiz question incorrectly; verify the correct answer and explanation appear.
7. Complete the quiz, view the score, retry, and change quiz topic.
8. Navigate using keyboard Tab and Enter; check visible focus indicators.
9. Open a direct URL ending in `#lesson/c-hello` and verify the lesson renders.

## Security notes

Contributed text is inserted via `textContent`, not `innerHTML`. The site does not run learner code. Avoid introducing third-party scripts or collecting personal information without documenting the privacy impact.
