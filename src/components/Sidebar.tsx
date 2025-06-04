import styled from 'styled-components'
import type { Place } from '../data/places'
import { useRef, useEffect } from 'react'

const Wrapper = styled.div`
  background: #ffffffee;
  width: 320px;
  max-height: 100vh;
  overflow-y: auto;
  padding: 1rem;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
    bottom: 0;
    max-height: 50vh;
  }
`

const ListItem = styled.div<{ active: boolean }>`
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  background: ${({ active }) => (active ? '#f0f0f0' : 'transparent')};
`

const Title = styled.h2`
  margin: 0 0 0.5rem;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`

interface SidebarProps {
  places: Place[]
  selectedId: number | null
  onSelect: (id: number) => void
  filter: string
  onFilter: (val: string) => void
}

export const Sidebar: React.FC<SidebarProps> = ({ places, selectedId, onSelect, filter, onFilter }) => {
  const refs = useRef<Record<number, HTMLDivElement | null>>({})
  useEffect(() => {
    if (selectedId && refs.current[selectedId]) {
      refs.current[selectedId]!.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [selectedId])

  const filtered = places.filter(
    (p) =>
      p.name.toLowerCase().includes(filter.toLowerCase()) ||
      p.city.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <Wrapper>
      <Title>Suu Pizza Map</Title>
      <SearchInput
        type="text"
        placeholder="Search by name or city"
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onFilter(e.target.value)}
      />
      {filtered.map((place) => (
        <ListItem
          key={place.id}
          ref={(el: HTMLDivElement | null) => {
            refs.current[place.id] = el
          }}
          active={place.id === selectedId}
          onClick={() => onSelect(place.id)}
        >
          <strong>{place.name}</strong>
          <br />
          {place.city}, {place.country}
          <br />
          Rating: {place.rating}/5
          <br />
          <small>{place.review}</small>
        </ListItem>
      ))}
    </Wrapper>
  )
}
