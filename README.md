<div align="center">
  <img src="assets/favicon.svg" alt="Original GearEx emblem" width="94" height="94" />
  <h1>GearEx</h1>
  <p><strong>Learn. Code. Trace. Build.</strong></p>
  <p>An open-source learning studio for seven programming languages, built for curious developers.</p>
  <p>
    <a href="https://nittinchughani.github.io/codelab-academy/"><img alt="Live website" src="https://img.shields.io/badge/Website-Live-0ABDC6?style=for-the-badge"></a>
    <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/License-MIT-711C91?style=for-the-badge"></a>
    <img alt="Static site" src="https://img.shields.io/badge/Deployment-GitHub_Pages-133E7C?style=for-the-badge">
  </p>
</div>

---

## ⚡ What is GearEx?

**GearEx** is a free, no-signup educational website that combines lessons, a runnable code playground, practice challenges, quizzes, guided tracing and self-paced completion certificates. It is a reimagining of the original CodeLab Academy project, with a new identity and expanded curriculum.

**[Open GearEx](https://nittinchughani.github.io/codelab-academy/)** · **[Report a bug](../../issues/new?template=bug_report.md)** · **[Contribute](CONTRIBUTING.md)**

> **Repository URL note:** The repository currently retains the original `codelab-academy` slug so the working GitHub Pages URL stays active. The application name and site branding are GearEx. A repository rename requires a separate GitHub settings action; if renamed, update this URL and GitHub Pages configuration.

## ✨ At a glance

| Learning experience | Included |
|---|---|
| Languages | **C, C++, Python, JavaScript, Java, C#, SQL** |
| Guided lessons | **91** (51 original C/C++ + 40 new lessons) |
| Quiz questions | **113** (73 original + 40 new questions) |
| C/C++ coding challenges | **138**, including sample-input testing |
| C/C++ guided mini-projects | **12** |
| Code playground | Remote execution through **Wandbox** |
| Trace & visualization | Guided line-by-line source annotations + interactive loops, arrays and pointers |
| Completion certificates | One per language, unlocked with complete lessons and passing final assessment |
| Privacy | Local progress storage; no required account |

### 🎨 Five custom themes

| Theme | Palette |
|---|---|
| **Cyberpunk Neon** | `#091833` · `#133E7C` · `#0ABDC6` · `#EA00D9` · `#711C91` |
| **Quantum Teal** | `#041F2A` · `#00C2A8` · `#00E5FF` · `#B7C0CC` · `#F4F7FF` |
| **Synthwave Sunset** | `#260B68` · `#C231C9` · `#FF4900` · `#FFD319` · `#FF6E40` |
| **Bio-Digital Matrix** | `#0F172A` · `#0C1A2B` · `#D2FF26` · `#2DD4BF` · `#B2D5E9` |
| **Hologram Haze** | `#1A1033` · `#B45CFF` · `#FF4FD8` · `#E0F7FA` · `#D9A5CD` |

Themes are selectable from the **top-right corner** and persist in this browser.

## 🧠 A complete learning loop

1. Pick a roadmap and read a lesson's introduction, syntax essentials, annotated example and practice challenge.
2. Click **Try in playground** to run code or **Visualize step by step** for guided source annotations.
3. Check understanding with quizzes and C/C++ practice challenges.
4. Track your progress, export a backup, and return whenever you want.
5. Complete all lessons in a language, pass its final assessment at **70% or higher**, and print a personal completion certificate.

### About the tracer

The tracer currently provides **guided, source-order annotations** for snippets in all seven languages. It is **not an interpreter, instrumented runtime or full debugger**: it does not simulate control-flow decisions, loops, arbitrary functions, actual variable values or SQL query results. The separate visualizer includes interactive demonstrations of loops, arrays and pointers. For authoritative program output, use the remote runner. Future debugger support will require per-language runtime instrumentation or a secure backend.

### About the certificates

Certificates display the learner's name, the completed language, marks earned/total, percentage, overall performance, issue date and **Certified by creator · Nittin Chughani**. Completion is marked by the learner, and the assessment and certificate data live in local browser storage. These are **creator-issued self-paced learning achievements**, not institution-accredited, identity-verified credentials.

## 🚀 Get started

This project is a static website. You don't need a build tool:

1. Clone or download this repository.
2. Open `index.html` in a modern browser, or serve the folder with a basic local HTTP server.
3. Follow a roadmap, open the playground, choose your language and press **Run code**.

Running code sends source and optional standard input to the free third-party **[Wandbox](https://wandbox.org/)** service. Execution needs internet access, depends on that service's available compilers and rate limits, and is **not** run within GitHub Pages. Avoid sending credentials or personal data in source.

## 🗂️ Project structure

```text
GearEx/
├── index.html                  # Main learning interface
├── assets/
│   ├── favicon.svg            # Original GearEx symbol
│   ├── style.css              # Responsive design + 5 themes
│   ├── data.js                # Original C/C++ lessons + quizzes
│   ├── challenges.js          # C/C++ coding challenges
│   ├── projects.js            # C/C++ guided projects
│   ├── gearex-courses.js      # 5 new language courses
│   ├── app.js                 # Core progress, quizzes, editor and compiler
│   └── gearex-features.js     # Theme selector, tracer, certificates
├── docs/                       # Curriculum and development notes
├── scripts/check-content.cjs   # Content integrity test
└── .github/workflows/          # GitHub Actions validation
```

## 🔐 Progress & privacy

GearEx stores bookmarks, lessons, quiz history, work-in-progress code, themes and certificate records in **localStorage** on your device. No account or cloud sync is required. Use **Export progress** to keep a backup; clearing browser data can erase local progress.

The pre-upgrade storage keys are intentionally retained to preserve progress for returning CodeLab Academy learners. Older progress exports can also be imported.

## 🤝 Contribute

Bug reports, accessibility fixes, corrections to teaching explanations, multilingual course material and new visualizers are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) to get started. Please only submit code and learning material you have permission to share.

## 👨‍💻 Creator

**Created by Nittin Chughani** — a Computer Science & Engineering student and open-source builder creating helpful tools and accessible programming education.

**[GitHub profile](https://github.com/NittinChughani)**

---

<div align="center"><sub>Made for learning, experimenting and building useful things. · MIT License</sub></div>
