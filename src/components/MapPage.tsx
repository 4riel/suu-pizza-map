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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 60px;
  background: ${theme.colors.background.secondary};
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
  
  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    padding-top: 80px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.colors.background.gradient};
    z-index: 10;
    
    @media (min-width: ${theme.breakpoints.md}) {
      top: 80px;
    }
  }
`

const FloatingButtonsContainer = styled.div<{ $hidden?: boolean }>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: ${props => props.$hidden ? 'none' : 'flex'};
  flex-direction: column;
  gap: ${theme.spacing.sm};
  z-index: 1200;
  transition: ${theme.transitions.fast};
  
  @media (min-width: 768px) {
    display: none;
  }
`

const FloatingButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  background: ${props => props.$variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  box-shadow: ${theme.colors.shadow.lg};
  cursor: pointer;
  transition: ${theme.transitions.bounce};
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${theme.colors.shadow.xl};
  }
  
  &:active {
    transform: scale(1.05);
  }
`

const SuggestFloatingButton = styled.button<{ $hidden?: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${theme.colors.background.gradient};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  width: 56px;
  height: 56px;
  display: ${props => props.$hidden ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  box-shadow: ${theme.colors.shadow.lg};
  cursor: pointer;
  transition: ${theme.transitions.bounce};
  z-index: 1200;
  
  @media (min-width: 768px) {
    display: none;
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${theme.colors.shadow.xl};
  }
  
  &:active {
    transform: scale(1.05);
  }
`

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  @media (max-width: 767px) {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: ${theme.zIndex.dropdown};
    transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    background: ${theme.colors.background.primary};
    overflow: hidden;
  }
  
  @media (min-width: 768px) {
    flex: 0 0 400px;
    position: relative;
    transform: none;
  }
`

const MapContainer = styled.div<{ $hidden?: boolean }>`
  flex: 1;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 767px) {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateX(${props => props.$hidden ? '100%' : '0'});
    transition: transform 0.3s ease;
  }
  
  @media (min-width: 768px) {
    height: auto;
    border-radius: 0 0 0 ${theme.borderRadius.xl};
    box-shadow: ${theme.colors.shadow.lg};
  }
  
  /* Add subtle animation on hover for desktop */
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
  
  @media (min-width: 768px) {
    &:hover::after {
      opacity: 0.05;
    }
  }
`

export const MapPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [filter, setFilter] = useState('')
  const [showSuggest, setShowSuggest] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSelect = (id: number) => {
    setSelectedId(id)
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false)
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        // Dispatch a custom event that the MapView can listen to
        window.dispatchEvent(new CustomEvent('centerMap', {
          detail: { lat: latitude, lng: longitude }
        }))
      },
      (error) => {
        console.error('Error getting location:', error)
        alert('Unable to get your location. Please check your browser settings.')
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    )
  }

  const filteredPlaces = places.filter(
    (p) =>
      p.name.toLowerCase().includes(filter.toLowerCase()) ||
      p.city.toLowerCase().includes(filter.toLowerCase())
  )

  const list = filter ? filteredPlaces : places
  const selectedPlace = places.find((p) => p.id === selectedId) || null
  
  // Hide floating buttons when any modal is open
  const hasModalOpen = selectedPlace !== null || showSuggest

  return (
    <Container>
      <FloatingButtonsContainer $hidden={hasModalOpen}>
        <FloatingButton onClick={toggleSidebar} aria-label="Toggle pizza places list">
          {isSidebarOpen ? '✕' : '🍕'}
        </FloatingButton>
        <FloatingButton 
          $variant="secondary" 
          onClick={handleCurrentLocation} 
          aria-label="Go to my location"
        >
          📍
        </FloatingButton>
      </FloatingButtonsContainer>
      
      <SuggestFloatingButton 
        $hidden={hasModalOpen}
        onClick={() => setShowSuggest(true)} 
        aria-label="Suggest a pizza place"
      >
        ✨
      </SuggestFloatingButton>
      
      <SidebarContainer $isOpen={isSidebarOpen}>
        <Sidebar
          places={places}
          selectedId={selectedId}
          onSelect={handleSelect}
          filter={filter}
          onFilter={setFilter}
        />
      </SidebarContainer>
      
      <MapContainer $hidden={isSidebarOpen}>
        <MapView places={list} selectedId={selectedId} onSelect={handleSelect} />
      </MapContainer>
      
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