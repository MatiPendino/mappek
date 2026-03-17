# Mappek

Official website for [Mappek](https://mappek.com), a web development agency specializing in landing pages, e-commerce, custom web/mobile applications, bug fixing, and malware removal.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** (build tool)
- **Tailwind CSS v4** (via PostCSS)
- **react-i18next** (internationalization)
- **Motion** (animations)
- **React Router DOM** (routing)

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Internationalization

Default language is Spanish. Users can switch between Spanish and English via the language toggle in the navbar. Translations live in `src/i18n/locales/`.

## Legal / GDPR Compliance

- Cookie consent banner with accept/reject/manage granular preferences
- Privacy Policy page (`/privacy`)
- Cookie Policy page (`/cookies`)

## Portfolio Images

Project screenshots are stored in `src/assets/`. The logo files (`icono_medio_negro.png`, `logo_medio_blanco.png`, etc) are also served from there.
