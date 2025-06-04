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

Follow these steps to publish the site:

1. **Set the `homepage`**

   The `homepage` field in `package.json` should be:

   ```json
   "homepage": "https://4riel.github.io/suu-pizza-map"
   ```

2. **Verify the Vite base path**

   Ensure `vite.config.ts` sets `base: '/suu-pizza-map/'`.

3. **Enable GitHub Pages**

   In your repository settings under **Pages**, choose the `gh-pages` branch.

4. **Deploy**

   Push or merge to the `main` branch. The **Deploy to GitHub Pages** workflow will
   build the project and publish `dist` to `gh-pages`. You can also trigger the
   workflow manually or run `npm run deploy` locally.

Once the GitHub Pages build completes, visit:

```
https://4riel.github.io/suu-pizza-map/
```

## Project Structure

- `src/data/places.ts` – sample pizza place data
- `src/components/` – React components (map and sidebar)

The app is intentionally minimal and mobile friendly.
