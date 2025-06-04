import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { places } from './data/places'
import { MapView } from './components/MapView'
import { Sidebar } from './components/Sidebar'
import { PlaceCard } from './components/PlaceCard'
import { SuggestModal } from './components/SuggestModal'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background: linear-gradient(120deg, #ffb347, #ffcc33);
  color: #fff;
  padding: 1rem;
  box-sizing: border-box;
`

const Title = styled.h1`
  font-size: 3rem;
  margin: 0 0 1rem;
  animation: ${fadeIn} 0.6s ease-out both;
`

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin: 0 0 2rem;
  max-width: 600px;
  animation: ${fadeIn} 0.8s ease-out both;
`

const ExploreButton = styled.button`
  background: #ff6347;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  border-radius: 4px;
  transition: transform 0.3s, background 0.3s;
  animation: ${fadeIn} 1s ease-out both;

  &:hover {
    background: #ff4500;
    transform: scale(1.05);
  }
`

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [filter, setFilter] = useState('')
  const [showMap, setShowMap] = useState(false)
  const [showSuggest, setShowSuggest] = useState(false)

  const handleSelect = (id: number) => {
    setSelectedId(id)
  }

  const filteredPlaces = places.filter(
    (p) =>
      p.name.toLowerCase().includes(filter.toLowerCase()) ||
      p.city.toLowerCase().includes(filter.toLowerCase())
  )

  const list = filter ? filteredPlaces : places

  if (!showMap) {
    return (
      <LandingContainer>
        <Title>Suu's Global Pizza Journey</Title>
        <Subtitle>
          Join Suu as she travels the globe, tasting countless slices in search
          of the perfect pizza.
        </Subtitle>
        <ExploreButton onClick={() => setShowMap(true)}>
          See the Pizzas
        </ExploreButton>
      </LandingContainer>
    )
  }

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
      <div style={{ flex: 1 }}>
        <MapView places={list} selectedId={selectedId} onSelect={handleSelect} />
        {selectedId && (
          <PlaceCard
            place={places.find((p) => p.id === selectedId)!}
            onClose={() => setSelectedId(null)}
          />
        )}
      </div>
      {showSuggest && <SuggestModal onClose={() => setShowSuggest(false)} />}
    </Container>
  )
}

export default App
