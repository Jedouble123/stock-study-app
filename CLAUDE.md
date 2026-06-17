# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project

**주식 공부 앱** — A React web application for learning and studying the stock market.

Built with React 19 + Vite 8. No backend — all data comes from public APIs or static content.

## Tech Stack

- **Framework:** React 19
- **Build tool:** Vite 8
- **Styling:** Plain CSS with CSS custom properties (no CSS framework)
- **Package manager:** npm

## Project Structure

```
src/
├── components/   # Reusable UI components
├── pages/        # Page-level components (one file per route)
├── hooks/        # Custom React hooks
├── utils/        # Pure helper functions
├── styles/       # global.css and shared style tokens
└── main.jsx      # Entry point
```

## Commands

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint
```

## Development Notes

- CSS variables are defined in `src/styles/global.css` — use them everywhere, no hardcoded colors
- Keep components small and focused; extract shared logic into hooks
- No TypeScript — plain JSX
