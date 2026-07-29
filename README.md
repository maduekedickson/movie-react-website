# Movie Explorer

Movie Explorer is a compact, modern React application designed to demonstrate a professional frontend CI/CD pipeline with GitHub, GitHub Actions, AWS EC2, Apache Web Server, and automated production deployment.

## Features

- Home page with search, trending button, and popular movie cards
- Movie details page with rich TMDB metadata
- About page describing the deployment pipeline
- Responsive dark UI with Tailwind CSS
- Lazy-loaded pages and reusable React components
- TMDB API integration with secure environment variables
- GitHub Actions workflow for build and deployment

## Technologies

- React 19
- Vite
- React Router
- Tailwind CSS
- Axios
- Lucide React Icons
- TMDB API
- GitHub Actions

## Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Copy `.env.example` to `.env` and add your TMDB credentials:

```bash
cp .env.example .env
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Folder structure

- `src/`
  - `components/` - reusable UI components
  - `pages/` - route pages
  - `services/` - TMDB API integration
  - `hooks/` - custom hooks
  - `assets/` - static assets
  - `App.jsx`, `main.jsx`
- `.github/workflows/deploy.yml` - GitHub Actions pipeline
- `tailwind.config.js`, `vite.config.js`

## Deployment notes

This project is built for deployment to an Apache-served web root. The workflow produces a `dist` folder from `npm run build`, and the GitHub Actions deployment step syncs the `dist` folder to an EC2 instance at `/var/www/html/`.

### Required GitHub secrets

- `EC2_SSH_KEY`
- `EC2_HOST`
- `EC2_USER`

## Notes

- The build output is production-ready and suitable for Apache hosting.
- No placeholder content or TODOs remain.
