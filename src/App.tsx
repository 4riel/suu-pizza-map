import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { LandingPage } from './components/LandingPage'
import { MapPage } from './components/MapPage'
import { SuggestPage } from './components/SuggestPage'

// Get the base path from the build environment or default to the main deployment path
// This supports both main deployment (/suu-pizza-map/) and PR deployments (/suu-pizza-map/pr-123/)
const getBasename = () => {
  // During build time, Vite injects the base path into import.meta.env.BASE_URL
  const basePath = import.meta.env.BASE_URL
  
  // Handle development mode (typically "/" or empty)
  if (import.meta.env.DEV) {
    return basePath === '/' ? '' : basePath
  }
  
  // Remove trailing slash for React Router basename (production builds)
  return basePath.endsWith('/') ? basePath.slice(0, -1) : basePath
}

function App() {
  const basename = getBasename()
  
  return (
    <Router basename={basename}>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/suggest" element={<SuggestPage />} />
      </Routes>
    </Router>
  )
}

export default App
