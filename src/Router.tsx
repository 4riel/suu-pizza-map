import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './components/LandingPage'
import MapPage from './components/MapPage'
import { Navigation } from './components/Navigation'

export function Router() {
  return (
    <BrowserRouter basename="/suu-pizza-map">
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/suggest" element={<MapPage showSuggest />} />
      </Routes>
    </BrowserRouter>
  )
}
