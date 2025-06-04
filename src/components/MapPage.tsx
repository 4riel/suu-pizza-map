import { useState } from 'react'
import styled from 'styled-components'
import { places } from '../data/places'
import { MapView } from './MapView'
import { Sidebar } from './Sidebar'
import { PlaceModal } from './PlaceModal'
import { PlaceCard } from './PlaceCard'
import { SuggestModal } from './SuggestModal'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

interface MapPageProps {
  showSuggest?: boolean
}

function MapPage({ showSuggest = false }: MapPageProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [filter, setFilter] = useState('')
  const [suggest, setSuggest] = useState(showSuggest)

  const handleSelect = (id: number) => {
    setSelectedId(id)
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
      <Sidebar
        places={places}
        selectedId={selectedId}
        onSelect={handleSelect}
        filter={filter}
        onFilter={setFilter}
        onSuggest={() => setSuggest(true)}
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
      {selectedPlace && (
        <PlaceModal
          place={selectedPlace}
          onClose={() => setSelectedId(null)}
        />
      )}
      {suggest && <SuggestModal onClose={() => setSuggest(false)} />}
    </Container>
  )
}

export default MapPage
