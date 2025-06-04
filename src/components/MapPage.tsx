import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { places } from '../data/places'
import { theme } from '../styles/theme'
import { MapView } from './MapView'
import { PlaceModal } from './PlaceModal'
import { Sidebar } from './Sidebar'
import { SuggestModal } from './SuggestModal'

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
`

const MapContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 0 ${theme.borderRadius.xl};
  box-shadow: ${theme.colors.shadow.lg};
  
  /* Add subtle animation on hover */
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
`

export const MapPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [filter, setFilter] = useState('')
  const [showSuggest, setShowSuggest] = useState(false)

  const handleSelect = (id: number): void => {
    setSelectedId(id)
  }

  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(filter.toLowerCase()) ||
    place.city.toLowerCase().includes(filter.toLowerCase())
  )

  const list = filter ? filteredPlaces : places
  const selectedPlace = places.find(place => place.id === selectedId) || null

  return (
    <Container>
      <Sidebar
        places={places}
        selectedId={selectedId}
        onSelect={handleSelect}
        filter={filter}
        onFilter={setFilter}
        onSuggest={() => setShowSuggest(true)}
      />
      
      <MapContainer>
        <MapView places={list} selectedId={selectedId} onSelect={handleSelect} />
      </MapContainer>
      
      {selectedPlace && (
        <PlaceModal
          place={selectedPlace}
          onClose={() => setSelectedId(null)}
        />
      )}
      
      {showSuggest && (
        <SuggestModal onClose={() => setShowSuggest(false)} />
      )}
    </Container>
  )
} 