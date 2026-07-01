# AK2 Landing Page

A production-ready landing page built with **SvelteKit**, **Tailwind CSS v4**, and **TypeScript**.

## Tech Stack

- **SvelteKit (Svelte 5 + Runes)**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **TypeScript**

## Prerequisites

Use **Node.js 22 (LTS)**.

```bash
nvm install 22
nvm use 22
```

## Getting Started

```bash
npm install
npm run dev -- --open
```

## Project Structure

```text
src/
├── app.css              # Global styles & design tokens
├── app.html             # HTML document template
├── routes/
│   ├── +layout.svelte   # Global layout
│   └── +page.svelte     # Landing page
└── lib/
    ├── components/      # Reusable UI components
    └── data/
        └── content.ts   # Static content and data
```# ak2-landing-page
