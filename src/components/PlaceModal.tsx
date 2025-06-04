import * as React from 'react'
import styled, { keyframes } from 'styled-components'

import type { Place } from '../data/places'
import { theme } from '../styles/theme'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${theme.colors.overlay};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${theme.zIndex.modal};
  animation: ${fadeIn} 0.3s ease-out;
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.lg};
`

const ModalBox = styled.div`
  background: ${theme.colors.background.primary};
  border-radius: ${theme.borderRadius['2xl']};
  padding: ${theme.spacing['2xl']};
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${theme.colors.shadow.xl};
  text-align: left;
  position: relative;
  animation: ${slideInUp} 0.4s ease-out;
  border: 1px solid ${theme.colors.border.light};
  
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
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.lg};
  box-shadow: ${theme.colors.shadow.md};
`

const PlaceName = styled.h2`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes['3xl']};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.text.primary};
  margin: 0 0 ${theme.spacing.sm} 0;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`

const Location = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.sizes.lg};
  margin: 0 0 ${theme.spacing.md} 0;
  font-weight: ${theme.typography.weights.medium};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  padding: ${theme.spacing.md};
  background: ${theme.colors.background.secondary};
  border-radius: ${theme.borderRadius.lg};
`

const Stars = styled.div`
  color: ${theme.colors.accent};
  font-size: ${theme.typography.sizes.xl};
`

const RatingText = styled.span`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.sizes.lg};
  font-weight: ${theme.typography.weights.semibold};
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const InfoCard = styled.div`
  background: ${theme.colors.background.secondary};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.border.light};
`

const InfoTitle = styled.h4`
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.light};
  margin: 0 0 ${theme.spacing.xs} 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const InfoValue = styled.p`
  font-size: ${theme.typography.sizes.base};
  color: ${theme.colors.text.primary};
  margin: 0;
  font-weight: ${theme.typography.weights.medium};
`

const ReviewSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
`

const ReviewTitle = styled.h3`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.xl};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.primary};
  margin: 0 0 ${theme.spacing.md} 0;
`

const Review = styled.p`
  font-size: ${theme.typography.sizes.base};
  line-height: ${theme.typography.lineHeights.relaxed};
  color: ${theme.colors.text.secondary};
  margin: 0 0 ${theme.spacing.md} 0;
`

const SuuQuote = styled.blockquote`
  background: ${theme.colors.primaryLight};
  border-left: 4px solid ${theme.colors.primary};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  margin: ${theme.spacing.lg} 0;
  border-radius: 0 ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0;
  font-style: italic;
  color: ${theme.colors.text.primary};
  position: relative;
  
  &::before {
    content: '"';
    font-size: ${theme.typography.sizes['3xl']};
    color: ${theme.colors.primary};
    position: absolute;
    top: -${theme.spacing.sm};
    left: ${theme.spacing.sm};
    font-family: ${theme.typography.fonts.heading};
  }
`

const MustTrySection = styled.div`
  margin-bottom: ${theme.spacing.lg};
`

const MustTryTitle = styled.h4`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.lg};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.primary};
  margin: 0 0 ${theme.spacing.md} 0;
`

const MustTryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`

const MustTryItem = styled.li`
  background: ${theme.colors.background.gradient};
  color: ${theme.colors.text.white};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.medium};
`

const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
  background: ${theme.colors.background.secondary};
  border: 2px solid ${theme.colors.border.light};
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.circle};
  font-size: ${theme.typography.sizes.lg};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${theme.transitions.bounce};
  
  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.text.white};
    border-color: ${theme.colors.primary};
    transform: scale(1.1);
  }
`

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: ${theme.colors.background.gradient};
  color: ${theme.colors.text.white};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.xl};
  text-decoration: none;
  font-weight: ${theme.typography.weights.semibold};
  transition: ${theme.transitions.bounce};
  margin-right: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.sm};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.colors.shadow.md};
  }
`

interface PlaceModalProps {
  place: Place
  onClose: () => void
}

export const PlaceModal: React.FC<PlaceModalProps> = ({ place, onClose }) => {
  const renderStars = (rating: number): string => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close">×</CloseButton>
        
        {place.image && <Image src={place.image} alt={place.name} />}
        
        <PlaceName>
          🍕 {place.name}
        </PlaceName>
        
        <Location>
          📍 {place.city}, {place.country}
        </Location>

        <RatingSection>
          <Stars>{renderStars(place.rating)}</Stars>
          <RatingText>{place.rating}/5</RatingText>
        </RatingSection>

        <InfoGrid>
          {place.specialty && (
            <InfoCard>
              <InfoTitle>Specialty</InfoTitle>
              <InfoValue>{place.specialty}</InfoValue>
            </InfoCard>
          )}
          
          {place.priceRange && (
            <InfoCard>
              <InfoTitle>Price Range</InfoTitle>
              <InfoValue>{place.priceRange}</InfoValue>
            </InfoCard>
          )}
          
          {place.hours && (
            <InfoCard>
              <InfoTitle>Hours</InfoTitle>
              <InfoValue>{place.hours}</InfoValue>
            </InfoCard>
          )}
          
          {place.visitDate && (
            <InfoCard>
              <InfoTitle>Suu's Visit</InfoTitle>
              <InfoValue>{new Date(place.visitDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</InfoValue>
            </InfoCard>
          )}
        </InfoGrid>

        <ReviewSection>
          <ReviewTitle>Suu's Review</ReviewTitle>
          <Review>{place.review}</Review>
        </ReviewSection>

        {place.suuQuote && (
          <SuuQuote>
            {place.suuQuote}
            <footer>— Suu 🇰🇷</footer>
          </SuuQuote>
        )}

        {place.mustTry && place.mustTry.length > 0 && (
          <MustTrySection>
            <MustTryTitle>🌟 Must Try Items</MustTryTitle>
            <MustTryList>
              {place.mustTry.map((item, index) => (
                <MustTryItem key={index}>{item}</MustTryItem>
              ))}
            </MustTryList>
          </MustTrySection>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.sm }}>
          {place.phone && (
            <ContactButton href={`tel:${place.phone}`}>
              📞 Call
            </ContactButton>
          )}
          
          {place.website && (
            <ContactButton href={place.website} target="_blank" rel="noopener noreferrer">
              🌐 Website
            </ContactButton>
          )}
          
          {place.address && (
            <ContactButton 
              href={`https://maps.google.com/?q=${encodeURIComponent(place.address)}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              🗺️ Directions
            </ContactButton>
          )}
        </div>
      </ModalBox>
    </Overlay>
  )
}
