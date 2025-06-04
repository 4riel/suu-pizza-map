import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { LandingPage } from './components/LandingPage'
import { MapPage } from './components/MapPage'
import { SuggestPage } from './components/SuggestPage'

function App() {
  return (
    <Router basename="/suu-pizza-map">
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
