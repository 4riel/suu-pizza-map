import styled from 'styled-components'
import type { Place } from '../data/places'

const Card = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: #fff;
  padding: 1rem;
  width: 240px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    left: 1rem;
    right: 1rem;
    top: auto;
    bottom: 1rem;
  }
`

const Image = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`

const Close = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`

interface PlaceCardProps {
  place: Place
  onClose: () => void
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ place, onClose }) => {
  return (
    <Card>
      <Close aria-label="Close" onClick={onClose}>&times;</Close>
      {place.image && <Image src={place.image} alt={place.name} />}
      <h3>{place.name}</h3>
      <div>
        {'\u2605'.repeat(place.rating)}{'\u2606'.repeat(5 - place.rating)} {place.rating}/5
      </div>
      <p>{place.review}</p>
    </Card>
  )
}
