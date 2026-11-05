# CodeLab Academy

A free, open-source, mobile-friendly website for learning **C and C++** through short lessons, coding challenges, and interactive multiple-choice quizzes.

> **Project status:** Early educational release. Feedback, corrections, and contributions are welcome. This project is not affiliated with any AI subscription program.

## Features

- 12 beginner/intermediate C and C++ lessons, with runnable examples and hands-on challenges
- 12 quiz questions with explanations, scores, and topic filtering
- Lesson search and language filters
- Completion tracking and light/dark theme saved in browser `localStorage`
- Accessible labels, keyboard focus states, responsive layout
- No accounts, analytics, backend, third-party JavaScript dependencies, or external API calls
- Static hosting: deploy on GitHub Pages, Netlify, or any HTTP server

## Preview locally

1. Clone or download this repository.
2. From the repository root, run:

   ```bash
   python3 -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

You can also open `index.html` directly, though serving over HTTP is recommended.

## Publish on GitHub Pages

1. Create a **public** repository on GitHub (for example, `codelab-academy`).
2. Upload all files in this project, preserving the folders.
3. Open the repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. GitHub will display your live website URL when deployment completes.

Alternatively, use the included GitHub Actions workflow: it runs JavaScript syntax checks on pushes and pull requests. Pages deployment is configured separately using the branch method above.

## Project structure

```text
codelab-academy/
├── index.html                 # Website layout
├── assets/
│   ├── style.css              # Responsive styles and themes
│   ├── data.js                # Lessons and quiz question bank
│   └── app.js                 # Navigation, quiz logic, local progress
├── docs/
│   ├── CURRICULUM.md          # Topics and learning outcomes
│   └── DEVELOPMENT.md         # Maintainer guide
├── .github/workflows/check.yml # Automated syntax validation
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE
└── README.md
```

## Add a lesson

Edit `assets/data.js` and append an entry to `LESSONS` with a **unique** `id`, `lang` (`c` or `cpp`), `title`, `level`, `description`, `intro`, `code`, `points` (array of strings), and `challenge`. Lessons are rendered using DOM `textContent` to avoid treating contributed lesson text as HTML.

## Add a quiz question

Append an entry to `QUESTIONS` with a unique `id`, `lang`, `question`, four `options`, a zero-based `answer` index, and an `explanation`.

## Test

Run `node --check assets/data.js && node --check assets/app.js` (Node.js required). The GitHub workflow runs these checks automatically. Manually verify mobile layouts, lesson navigation, quiz feedback, and theme persistence in your browser. Automated browser tests are a future improvement.

## Privacy

Lesson completion and theme preferences are stored only in your browser's local storage. No data is transmitted to a server by the application. Clearing site storage resets your progress.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Beginner-friendly contributions include lesson corrections, additional exercises, accessibility improvements, and translations.

## License

MIT — see [LICENSE](LICENSE). Educational code samples in this repository are original to this project.
