# Suu Pizza Map

Suu Pizza Map is a simple React application showing pizza spots that Suu has visited around the world. It uses Vite, TypeScript, Leaflet and styled-components.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run locally**

   ```bash
   npm run dev
   ```

   Then open <http://localhost:5173/suu-pizza-map/> in your browser.

## Deployment to GitHub Pages

1. The `homepage` field in `package.json` is already set to `https://4riel.github.io/suu-pizza-map`. Ensure the `base` option in `vite.config.ts` matches the repository name (`/suu-pizza-map/`).
2. Build and deploy (the built files in `dist/` are committed so the site can be served directly):

   ```bash
   npm run deploy
   ```

This will build the project and push the `dist` folder to the `gh-pages` branch. Enable GitHub Pages for that branch in the repository settings. The built output in `dist/` is also kept in the repository for convenience. Once deployed, visit:

```
https://4riel.github.io/suu-pizza-map/
```

## Project Structure

- `src/data/places.ts` – sample pizza place data
- `src/components/` – React components (map and sidebar)

The app is intentionally minimal and mobile friendly.
