import styled from 'styled-components'
import type { Place } from '../data/places'
import * as React from 'react'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalBox = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`

interface PlaceModalProps {
  place: Place
  onClose: () => void
}

export const PlaceModal: React.FC<PlaceModalProps> = ({ place, onClose }: PlaceModalProps) => {
  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close">&times;</CloseButton>
        <h2>{place.name}</h2>
        <p>
          {place.city}, {place.country}
        </p>
        <p>Rating: {place.rating}/5</p>
        <p>{place.review}</p>
      </ModalBox>
    </Overlay>
  )
}
