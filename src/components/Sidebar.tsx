import { useRef, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

import type { Place } from '../data/places'
import { theme } from '../styles/theme'

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const Container = styled.div`
  width: 100%;
  background: ${theme.colors.background.primary};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
  animation: ${slideIn} 0.6s ease-out;
  
  @media (min-width: ${theme.breakpoints.md}) {
    width: 400px;
    border-right: 1px solid ${theme.colors.border.light};
    box-shadow: ${theme.colors.shadow.md};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.colors.background.gradient};
    z-index: 10;
  }
`

const Header = styled.div`
  padding: ${theme.spacing.md};
  background: ${theme.colors.background.primary};
  border-bottom: 1px solid ${theme.colors.border.light};
  position: sticky;
  top: 0;
  z-index: 5;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} ${theme.spacing.lg} ${theme.spacing.lg};
  }
`

const Title = styled.h2`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.lg};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary};
  margin: 0 0 ${theme.spacing.sm} 0;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes['2xl']};
    margin: 0 0 ${theme.spacing.md} 0;
    gap: ${theme.spacing.sm};
  }
`

const PizzaIcon = styled.span`
  font-size: ${theme.typography.sizes.xl};
  animation: spin 8s linear infinite;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes['3xl']};
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: ${theme.spacing.sm};
  
  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing.md};
  }
`

const SearchInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.sm} ${theme.spacing.sm} 2.5rem;
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.typography.sizes.sm};
  transition: ${theme.transitions.normal};
  background: ${theme.colors.background.secondary};
  color: ${theme.colors.text.primary};
  box-sizing: border-box;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} 3rem;
    border-radius: ${theme.borderRadius.xl};
    font-size: ${theme.typography.sizes.base};
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primaryLight};
    background: ${theme.colors.background.primary};
  }
  
  &::placeholder {
    color: ${theme.colors.text.light};
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: ${theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.text.light};
  font-size: ${theme.typography.sizes.base};
  
  @media (min-width: ${theme.breakpoints.md}) {
    left: ${theme.spacing.md};
    font-size: ${theme.typography.sizes.lg};
  }
`

const PlacesList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 ${theme.spacing.md} ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.lg} ${theme.spacing.lg};
  }
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
    
    @media (min-width: ${theme.breakpoints.md}) {
      width: 6px;
    }
  }
  
  &::-webkit-scrollbar-track {
    background: ${theme.colors.background.secondary};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.border.light};
    border-radius: ${theme.borderRadius.sm};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primary};
  }
`

const PlaceCard = styled.div<{ $isActive: boolean; $index: number }>`
  background: ${props => props.$isActive ? theme.colors.primaryLight : theme.colors.background.primary};
  border: 2px solid ${props => props.$isActive ? theme.colors.primary : theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.sm};
  cursor: pointer;
  transition: ${theme.transitions.bounce};
  box-shadow: ${theme.colors.shadow.sm};
  animation: ${slideIn} 0.4s ease-out ${props => props.$index * 0.05}s both;
  min-height: 44px; /* Minimum touch target for mobile */
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: ${theme.breakpoints.md}) {
    border-radius: ${theme.borderRadius.lg};
    padding: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.md};
    min-height: auto;
    
    &:hover {
      transform: translateX(8px) translateY(-2px);
      box-shadow: ${theme.colors.shadow.lg};
      border-color: ${theme.colors.primary};
      background: ${props => props.$isActive ? theme.colors.primaryLight : theme.colors.background.secondary};
    }
  }
  
  &:active {
    transform: scale(0.98);
    
    @media (min-width: ${theme.breakpoints.md}) {
      transform: translateX(4px) scale(0.98);
    }
  }
`

const PlaceName = styled.h3`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.base};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.primary};
  margin: 0 0 ${theme.spacing.xs} 0;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.lg};
    gap: ${theme.spacing.sm};
  }
`

const PlaceLocation = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.sizes.xs};
  margin: 0 0 ${theme.spacing.xs} 0;
  font-weight: ${theme.typography.weights.medium};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.sm};
  }
`

const PlaceRating = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.xs};
  
  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing.sm};
  }
`

const Stars = styled.span`
  color: ${theme.colors.accent};
  font-size: ${theme.typography.sizes.xs};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.sm};
  }
`

const RatingText = styled.span`
  color: ${theme.colors.text.light};
  font-size: ${theme.typography.sizes.xs};
  font-weight: ${theme.typography.weights.medium};
`

const PlaceReview = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.sizes.xs};
  line-height: ${theme.typography.lineHeights.relaxed};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.sm};
    -webkit-line-clamp: 2;
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  color: ${theme.colors.text.light};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['3xl']} ${theme.spacing.lg};
  }
`

const EmptyIcon = styled.div`
  font-size: ${theme.typography.sizes['3xl']};
  margin-bottom: ${theme.spacing.sm};
  opacity: 0.5;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes['5xl']};
    margin-bottom: ${theme.spacing.md};
  }
`

interface SidebarProps {
  places: Place[]
  selectedId: number | null
  onSelect: (id: number) => void
  filter: string
  onFilter: (val: string) => void
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  places, 
  selectedId, 
  onSelect, 
  filter, 
  onFilter
}) => {
  const refs = useRef<Record<number, HTMLDivElement | null>>({})

  useEffect(() => {
    if (selectedId && refs.current[selectedId]) {
      refs.current[selectedId]!.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      })
    }
  }, [selectedId])

  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(filter.toLowerCase()) ||
    place.city.toLowerCase().includes(filter.toLowerCase()) ||
    place.country.toLowerCase().includes(filter.toLowerCase())
  )

  const renderStars = (rating: number): string => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <Container>
      <Header>
        <Title>
          <PizzaIcon>🍕</PizzaIcon>
          Suu's Pizza Map
        </Title>
        <SearchContainer>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search places, cities..."
            value={filter}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onFilter(e.target.value)}
          />
        </SearchContainer>
      </Header>

      <PlacesList>
        {filteredPlaces.length === 0 ? (
          <EmptyState>
            <EmptyIcon>🕵️‍♀️</EmptyIcon>
            <p>No pizza places found!</p>
            <p>Try a different search term</p>
          </EmptyState>
        ) : (
          filteredPlaces.map((place, index) => (
            <PlaceCard
              key={place.id}
              ref={(el: HTMLDivElement | null) => {
                refs.current[place.id] = el
              }}
              $isActive={place.id === selectedId}
              $index={index}
              onClick={() => onSelect(place.id)}
              className="sidebar-card"
            >
              <PlaceName>
                🍕 {place.name}
              </PlaceName>
              <PlaceLocation>
                📍 {place.city}, {place.country}
              </PlaceLocation>
              <PlaceRating>
                <Stars>{renderStars(place.rating)}</Stars>
                <RatingText>{place.rating}/5</RatingText>
              </PlaceRating>
              <PlaceReview>{place.review}</PlaceReview>
            </PlaceCard>
          ))
        )}
      </PlacesList>
    </Container>
  )
}
