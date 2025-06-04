import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navigation } from './components/Navigation'
import { LandingPage } from './components/LandingPage'
import { MapPage } from './components/MapPage'
import { SuggestPage } from './components/SuggestPage'

const getBasename = (): string => {
  const basePath = import.meta.env.BASE_URL
  
  if (import.meta.env.DEV) {
    return basePath === '/' ? '' : basePath
  }
  
  return basePath.endsWith('/') ? basePath.slice(0, -1) : basePath
}

export default function App() {
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
