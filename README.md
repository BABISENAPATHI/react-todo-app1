# TaskFlow — Animated React TODO Application

A clean, modern, and animated React TODO application built with modular components, `framer-motion` animations, `localStorage` persistence, and pre-configured GitHub Pages deployment.

## Features
- **Add Tasks**: Quickly create tasks with spring-animated entry transitions.
- **Complete / Uncomplete Tasks**: Toggle task completion with animated checkmarks and a live progress bar.
- **Delete Tasks**: Smooth slide-out exit animations upon deletion.
- **Filter & Persist**: Filter by All, Active, or Completed tasks, with automatic `localStorage` saving.

## Component Structure
- `src/App.js`: Main state management and layout container.
- `src/components/Header.js`: Title, completion badge, and animated progress bar.
- `src/components/TodoForm.js`: Controlled input form for adding new tasks.
- `src/components/FilterBar.js`: View filter tabs (`All`, `Active`, `Completed`) and clear completed action.
- `src/components/TodoList.js`: Animated list wrapper using `AnimatePresence`.
- `src/components/TodoItem.js`: Individual task row with toggle and delete actions.

## Local Setup
1. Extract the ZIP archive and open the folder in your terminal:
   ```bash
   cd react-todo-github-pages
   npm install
   ```
2. Start the local development server:
   ```bash
   npm start
   ```

## Deploy to GitHub Pages
1. Create a new repository on GitHub (e.g., `react-todo-app`).
2. Open `package.json` and update the `homepage` field with your GitHub username and repository name:
   ```json
   "homepage": "https://<your-github-username>.github.io/<your-repo-name>"
   ```
3. Initialize Git and push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Animated React TODO app"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
   git push -u origin main
   ```
4. Deploy live to GitHub Pages:
   ```bash
   npm run deploy
   ```
   This builds the production bundle and pushes it to the `gh-pages` branch. Your app will be live at your `homepage` URL within 1–2 minutes.
