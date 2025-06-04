import { useState } from 'react'
import styled from 'styled-components'
import { places } from './data/places'
import { MapView } from './components/MapView'
import { Sidebar } from './components/Sidebar'
import { PlaceCard } from './components/PlaceCard'
import { SuggestModal } from './components/SuggestModal'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [filter, setFilter] = useState('')
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
