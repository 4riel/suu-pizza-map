# Suu Pizza Map

A minimal React + Leaflet map showing pizza spots around the world.

**Live site:** <https://4riel.github.io/suu-pizza-map/>

## Development


1. Install dependencies

   ```bash
   npm install
   ```

2. Start the dev server

   ```bash
   npm run dev
   ```

   Then open <http://localhost:5173/suu-pizza-map/> in your browser.

## Deployment

A GitHub Actions workflow builds the project and publishes `dist` to the
`gh-pages` branch whenever you push to `main`. The site will be updated
shortly after.

## Project Structure

- `src/` – application source code
- `src/index.html` – Vite entry file
- `vite.config.ts` – build configuration
