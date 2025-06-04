# Suu's Pizza Map 🍕

An interactive web application showcasing Suu's pizza adventures around the world. Features an interactive map with detailed reviews and cultural insights from a Korean food explorer's perspective.

## Overview

This project displays Suu's worldwide pizza place database through an interactive map interface. Users can browse locations, read reviews, and suggest new places to visit.

**Live site:** <https://4riel.github.io/suu-pizza-map/>

## Features

- Interactive world map with pizza place markers
- Detailed place information with reviews and ratings  
- Mobile-responsive design with floating action buttons
- Smart clustering for better map navigation at different zoom levels
- Search and filter functionality
- Place suggestion form

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```
   Open <http://localhost:5173/suu-pizza-map/>

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment & Routing

### Main Deployment
- **Auto-deploy**: Pushes to `main` branch trigger GitHub Actions deployment
- **URL**: `https://4riel.github.io/suu-pizza-map/`
- **Base path**: `/suu-pizza-map/`

### PR Preview Deployments
- **Auto-deploy**: Pull requests get preview deployments
- **URL pattern**: `https://4riel.github.io/suu-pizza-map/pr-{number}/`
- **Base path**: `/suu-pizza-map/pr-{number}/`

#### Technical Implementation
The app uses dynamic base paths to support both main and PR deployments:

```typescript
// App.tsx - Dynamic basename calculation
const getBasename = () => {
  const basePath = import.meta.env.BASE_URL
  if (import.meta.env.DEV) {
    return basePath === '/' ? '' : basePath
  }
  return basePath.endsWith('/') ? basePath.slice(0, -1) : basePath
}
```

The GitHub Actions workflow sets `BASE_PATH` environment variable for PR builds:
```yaml
env:
  BASE_PATH: "/suu-pizza-map/pr-${{ github.event.pull_request.number }}/"
```

This ensures React Router and Vite use the correct paths for both scenarios.

## Tech Stack

- **React 19** + TypeScript
- **Styled Components** for styling
- **Leaflet** + React-Leaflet for mapping
- **React Router DOM** for navigation
- **Vite** for build tooling
- **GitHub Pages** for hosting

## Mobile Features

- **Floating action buttons**: 🍕 (sidebar), 📍 (location), ✨ (suggest)
- **Responsive sidebar**: Full-screen on mobile, overlay on desktop
- **Touch-optimized**: 44px minimum touch targets
- **Smart clustering**: Zoom-dependent pizza place grouping
- **Modal optimization**: Proper sizing and navbar clearance

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Main navigation with mobile menu
│   ├── MapPage.tsx      # Map container with floating buttons
│   ├── MapView.tsx      # Leaflet map with clustering
│   ├── Sidebar.tsx      # Pizza places list with search
│   ├── PlaceModal.tsx   # Pizza place details modal
│   └── ...
├── data/
│   ├── places.ts        # Pizza places database
│   └── types.ts         # TypeScript definitions
├── styles/
│   ├── theme.ts         # Design system configuration
│   └── GlobalStyles.tsx # Global styling
└── index.html           # Vite entry point
```

## Contributing

Use the "Suggest a Place" feature in the app or submit issues/PRs for improvements.

---

*"Just like kimchi, the best pizza gets better with time and passion!"* - Suu
