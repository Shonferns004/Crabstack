# Crabstack Frontend

React + Vite public-facing website with Tailwind CSS v4 and Framer Motion.

## Tech Stack

- **Framework:** React 19
- **Build:** Vite 8
- **Routing:** React Router 7
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Material Symbols

## Setup

```bash
cp .env.example .env
npm install
```

## Run

```bash
npm run dev        # Start dev server on http://localhost:5173
npm run build      # Production build to dist/
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `VITE_API_URL` | `/api` | Backend API URL (uses Vite proxy in dev) |

The Vite dev server proxies `/api` requests to `http://localhost:3001` (configured in `vite.config.js`).

## Deployment (Vercel)

The `vercel.json` rewrites all routes to `index.html` for SPA support.

No build commands needed — Vercel auto-detects Vite.

## Project Structure

```
crabstack/
├── public/                    # Static assets
├── src/
│   ├── main.jsx               # Entry point
│   ├── App.jsx                # Root component with routing
│   ├── index.css              # Tailwind + global styles
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollReveal.jsx
│   │   ├── GlitchText.jsx
│   │   ├── Marquee.jsx
│   │   ├── Parallax.jsx
│   │   └── ...
│   └── pages/                 # Public pages
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Work.jsx
│       └── Contact.jsx
├── .env.example
├── vercel.json
├── vite.config.js
└── package.json
```

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, services, case files carousel, testimonials |
| `/about` | About — identity, process, values |
| `/services` | Services — detailed capability breakdown |
| `/work` | Work — portfolio grid with filter |
| `/contact` | Contact — inquiry form |

## Key Features

- **Responsive** — mobile-first with Tailwind
- **Animations** — scroll reveals, glitch text, parallax, marquee
- **Contact form** — stores submissions in Supabase
- **Newsletter** — email subscription via footer
- **Auto-scrolling carousel** — project showcase on home page
