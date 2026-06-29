# 🧾 Personal Resume Website

A simple and modern personal resume website built with React. This project is based on an open-source template that I forked and customized to better fit my needs — both visually and functionally.

🔗 [Live Demo](https://rykhlov.tech)

---

## 📌 About the Project

This website serves as my online CV/resume, where you can find information about my professional background, skills, experience, education, and more.

It's a lightweight, backend-free solution built using only frontend technologies. The site is fully responsive, fast-loading, and easy to maintain or extend.

---

## 🔧 Features

- ✅ Built with **React**
- ✅ Fully **responsive design**
- ✅ **No backend required**
- ✅ Easy to customize
- ✅ Optimized for performance and user experience
- ✅ Styled with SCSS

---

## 🛠 Tech Stack

- **React** – For component-based UI architecture
- **Vite** – Fast dev server and optimized production builds
- **HTML5 / SCSS** – Semantic markup and styling
- **TypeScript** – Client-side logic
- **Responsive Design**

---

## 📄 Downloadable CV

The site offers a one-click **Download CV** (EN/RU, matching the selected language).
The PDFs live in `public/cv/` and are generated from a styled HTML template via the
system Chrome in headless mode — no Puppeteer/Chromium download needed.

```bash
npm run cv   # regenerates public/cv/Nikita-Rykhlov-CV-{EN,RU}.pdf
```

Edit the résumé copy in `scripts/build-cv.mjs` (source of truth: the full
`resume.md` / `resume.ru.md`) and re-run the command. Override the browser with
`CHROME_BIN=/path/to/chrome npm run cv` if Chrome isn't auto-detected.

---

## 💡 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.