# Suu's Pizza Map 🍕

**Discover the world's best pizza places through the eyes of Suu, a passionate Korean food explorer!**

Suu's Pizza Map is an interactive web application that showcases incredible pizza destinations around the globe, featuring authentic reviews, personal stories, and cultural insights from Suu's culinary adventures.

## What is Suu's Pizza Map?

This project is a **food lover's dream** - a beautifully designed interactive map that takes you on a journey through Suu's pizza adventures across continents. From authentic Neapolitan pies in Naples to fusion Korean-style pizza in Seoul, each location comes with:

- 🗺️ **Interactive World Map** - Explore pizza places globally with smooth, responsive navigation
- 📖 **Personal Stories** - Read Suu's authentic reviews and cultural observations
- ⭐ **Ratings & Details** - Get comprehensive information including prices, specialties, and must-try dishes
- 🎯 **Cultural Insights** - Discover how pizza culture varies across different countries
- 💬 **Suu's Quotes** - Enjoy humorous and insightful commentary from a Korean perspective
- 📱 **Mobile-First Design** - Optimized for exploring on any device

## Features

### 🏠 **Landing Page**
- Hero section with animated pizza elements
- About section explaining Suu's mission
- Beautiful gradient backgrounds and smooth animations

### 🗺️ **Interactive Pizza Map**
- Real-time map exploration using Leaflet
- Clickable pizza markers with detailed information
- Sidebar with filterable pizza place listings
- Detailed modals for each location

### 📝 **Suggest New Places**
- Community-driven suggestions for new pizza destinations
- Form for submitting pizza place recommendations

### 📊 **Rich Pizza Database**
- 12+ carefully curated pizza places across 10+ countries
- Detailed information including:
  - Personal reviews and ratings
  - Address, phone, and website details
  - Operating hours and price ranges
  - Specialty dishes and must-try items
  - Suu's personal quotes and visit dates

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

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Styled Components with custom design system
- **Mapping**: Leaflet + React-Leaflet
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Project Structure

- `src/` – application source code
  - `components/` – React components (Navigation, Map, Modals, etc.)
  - `data/` – Pizza places database and type definitions
  - `styles/` – Theme and styling configuration
  - `hooks/` – Custom React hooks
- `src/index.html` – Vite entry file
- `vite.config.ts` – build configuration

## Contributing

Found an amazing pizza place that Suu should visit? Use the "Suggest a Place" feature on the website, or feel free to open an issue or pull request!

---

*"Just like kimchi, the best pizza gets better with time and passion!"* - Suu
