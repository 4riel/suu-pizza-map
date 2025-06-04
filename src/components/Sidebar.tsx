import styled, { keyframes } from 'styled-components'
import type { Place } from '../data/places'
import { theme } from '../styles/theme'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useRef, useEffect, useState } from 'react'

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
  width: 320px;
  background: ${theme.colors.background.primary};
  border-right: 1px solid ${theme.colors.border.light};
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;
  box-shadow: ${theme.colors.shadow.md};
  animation: ${slideIn} 0.6s ease-out;
  
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
  
  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
    height: 200px;
    border-right: none;
    border-bottom: 1px solid ${theme.colors.border.light};
    animation: none;
  }
`

const Header = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing.lg} ${theme.spacing.lg};
  background: ${theme.colors.background.primary};
  border-bottom: 1px solid ${theme.colors.border.light};
  position: sticky;
  top: 0;
  z-index: 5;
`

const Title = styled.h2`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes['2xl']};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary};
  margin: 0 0 ${theme.spacing.md} 0;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`

const PizzaIcon = styled.span`
  font-size: ${theme.typography.sizes['3xl']};
  animation: spin 8s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: ${theme.spacing.md};
`

const SearchInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} 3rem;
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.xl};
  font-size: ${theme.typography.sizes.base};
  transition: ${theme.transitions.normal};
  background: ${theme.colors.background.secondary};
  color: ${theme.colors.text.primary};
  box-sizing: border-box;
  
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
  left: ${theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.text.light};
  font-size: ${theme.typography.sizes.lg};
`

const PlacesList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 ${theme.spacing.lg} ${theme.spacing.lg};
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
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
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.md};
  cursor: pointer;
  transition: ${theme.transitions.bounce};
  box-shadow: ${theme.colors.shadow.sm};
  animation: ${slideIn} 0.4s ease-out ${props => props.$index * 0.05}s both;
  
  &:hover {
    transform: translateX(8px) translateY(-2px);
    box-shadow: ${theme.colors.shadow.lg};
    border-color: ${theme.colors.primary};
    background: ${props => props.$isActive ? theme.colors.primaryLight : theme.colors.background.secondary};
  }
  
  &:active {
    transform: translateX(4px) scale(0.98);
  }
`

const PlaceName = styled.h3`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.lg};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.primary};
  margin: 0 0 ${theme.spacing.xs} 0;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`

const PlaceLocation = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.sizes.sm};
  margin: 0 0 ${theme.spacing.xs} 0;
  font-weight: ${theme.typography.weights.medium};
`

const PlaceRating = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.sm};
`

const Stars = styled.span`
  color: ${theme.colors.accent};
  font-size: ${theme.typography.sizes.sm};
`

const RatingText = styled.span`
  color: ${theme.colors.text.light};
  font-size: ${theme.typography.sizes.xs};
  font-weight: ${theme.typography.weights.medium};
`

const PlaceReview = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.sizes.sm};
  line-height: ${theme.typography.lineHeights.relaxed};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const SuggestButton = styled.button`
  width: calc(100% - ${theme.spacing.xl});
  margin: 0 ${theme.spacing.lg} ${theme.spacing.lg};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: ${theme.colors.background.gradient};
  color: ${theme.colors.text.white};
  border: none;
  border-radius: ${theme.borderRadius.xl};
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.base};
  font-weight: ${theme.typography.weights.semibold};
  cursor: pointer;
  transition: ${theme.transitions.bounce};
  box-shadow: ${theme.colors.shadow.md};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  
  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: ${theme.colors.shadow.xl};
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing['3xl']} ${theme.spacing.lg};
  color: ${theme.colors.text.light};
`

const EmptyIcon = styled.div`
  font-size: ${theme.typography.sizes['5xl']};
  margin-bottom: ${theme.spacing.md};
  opacity: 0.5;
`

interface SidebarProps {
  places: Place[]
  selectedId: number | null
  onSelect: (id: number) => void
  filter: string
  onFilter: (val: string) => void
  onSuggest: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  places, 
  selectedId, 
  onSelect, 
  filter, 
  onFilter, 
  onSuggest 
}) => {
  const refs = useRef<Record<number, HTMLDivElement | null>>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    if (selectedId && refs.current[selectedId]) {
      refs.current[selectedId]!.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      })
    }
  }, [selectedId])

  const filteredPlaces = places.filter(
    (place) =>
      place.name.toLowerCase().includes(filter.toLowerCase()) ||
      place.city.toLowerCase().includes(filter.toLowerCase()) ||
      place.country.toLowerCase().includes(filter.toLowerCase())
  )

  const renderStars = (rating: number) => {
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
            placeholder="Search places, cities, countries..."
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

      <SuggestButton onClick={onSuggest}>
        ✨ Suggest a Spot for Suu
      </SuggestButton>
    </Container>
  )
}
