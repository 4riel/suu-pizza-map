import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { places } from '../data/places'
import { MapView } from './MapView'
import { Sidebar } from './Sidebar'
import { PlaceModal } from './PlaceModal'
import { SuggestModal } from './SuggestModal'
import { theme } from '../styles/theme'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

// Mobile-first container: stacks vertically on mobile, side-by-side on desktop
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 80px;
  background: ${theme.colors.background.secondary};
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.colors.background.gradient};
    z-index: 10;
  }
  
  /* Desktop: side-by-side layout */
  @media (min-width: ${theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

// Mobile toggle button for sidebar
const MobileToggle = styled.button`
  position: fixed;
  top: 90px;
  left: ${theme.spacing.md};
  z-index: ${theme.zIndex.modal + 1};
  background: ${theme.colors.background.gradient};
  color: ${theme.colors.text.white};
  border: none;
  border-radius: ${theme.borderRadius.circle};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.sizes.xl};
  cursor: pointer;
  transition: ${theme.transitions.bounce};
  box-shadow: ${theme.colors.shadow.lg};
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${theme.colors.shadow.xl};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  /* Hide on desktop where sidebar is always visible */
  @media (min-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`

// Sidebar container with mobile overlay behavior
const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  /* Mobile: Full-screen overlay */
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.overlay};
  z-index: ${theme.zIndex.modal};
  transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
  transition: ${theme.transitions.normal};
  
  /* Mobile sidebar content */
  > * {
    width: 320px;
    max-width: 85vw;
    height: 100%;
    transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
    transition: ${theme.transitions.normal};
  }
  
  /* Desktop: Normal sidebar */
  @media (min-width: ${theme.breakpoints.lg}) {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    background: transparent;
    transform: none;
    
    > * {
      width: 320px;
      max-width: none;
      transform: none;
    }
  }
`

// Map container that adjusts based on screen size
const MapContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 0; /* Important for flex children */
  
  /* Mobile: Full width when sidebar is closed */
  width: 100%;
  
  /* Desktop: Adjust for sidebar */
  @media (min-width: ${theme.breakpoints.lg}) {
    border-radius: 0 0 0 ${theme.borderRadius.xl};
    box-shadow: ${theme.colors.shadow.lg};
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${theme.colors.background.gradient};
      opacity: 0;
      transition: ${theme.transitions.slow};
      pointer-events: none;
      z-index: 1;
    }
    
    &:hover::after {
      opacity: 0.05;
    }
  }
`

export const MapPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [filter, setFilter] = useState('')
  const [showSuggest, setShowSuggest] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSelect = (id: number) => {
    setSelectedId(id)
    // Close sidebar on mobile when a place is selected
    if (window.innerWidth < 1024) {
      setSidebarOpen(false)
    }
  }

  const filteredPlaces = places.filter(
    (p) =>
      p.name.toLowerCase().includes(filter.toLowerCase()) ||
      p.city.toLowerCase().includes(filter.toLowerCase())
  )

  const list = filter ? filteredPlaces : places
  const selectedPlace = places.find((p) => p.id === selectedId) || null

  return (
    <Container>
      {/* Mobile toggle button */}
      <MobileToggle 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle pizza places list"
      >
        {sidebarOpen ? '✕' : '🍕'}
      </MobileToggle>

      {/* Sidebar with mobile overlay */}
      <SidebarContainer 
        $isOpen={sidebarOpen}
        onClick={(e) => {
          // Close sidebar when clicking overlay on mobile
          if (e.target === e.currentTarget && window.innerWidth < 1024) {
            setSidebarOpen(false)
          }
        }}
      >
        <Sidebar
          places={places}
          selectedId={selectedId}
          onSelect={handleSelect}
          filter={filter}
          onFilter={setFilter}
          onSuggest={() => setShowSuggest(true)}
          onClose={() => setSidebarOpen(false)}
        />
      </SidebarContainer>

      {/* Map container */}
      <MapContainer>
        <MapView places={list} selectedId={selectedId} onSelect={handleSelect} />
      </MapContainer>

      {/* Modals */}
      {selectedPlace && (
        <PlaceModal
          place={selectedPlace}
          onClose={() => setSelectedId(null)}
        />
      )}
      {showSuggest && <SuggestModal onClose={() => setShowSuggest(false)} />}
    </Container>
  )
} 