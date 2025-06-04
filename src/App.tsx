import { useState } from 'react'
import styled from 'styled-components'
import { places } from './data/places'
import { MapView } from './components/MapView'
import { Sidebar } from './components/Sidebar'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [filter, setFilter] = useState('')

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
      />
      <div style={{ flex: 1 }}>
        <MapView places={list} selectedId={selectedId} onSelect={handleSelect} />
      </div>
    </Container>
  )
}

export default App
