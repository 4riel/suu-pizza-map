import styled, { keyframes } from 'styled-components'
import type { Place } from '../data/places'
import * as React from 'react'
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
  align-items: flex-start;
  z-index: ${theme.zIndex.modal};
  animation: ${fadeIn} 0.3s ease-out;
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.sm};
  overflow-y: auto;
  
  @media (min-width: ${theme.breakpoints.md}) {
    align-items: center;
    padding: ${theme.spacing.md};
  }
`

const ModalBox = styled.div`
  background: ${theme.colors.background.primary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.sm};
  width: 100%;
  max-width: 420px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${theme.colors.shadow.xl};
  text-align: left;
  position: relative;
  animation: ${slideInUp} 0.4s ease-out;
  border: 1px solid ${theme.colors.border.light};
  margin: ${theme.spacing.sm} 0;
  
  @media (min-width: ${theme.breakpoints.md}) {
    border-radius: ${theme.borderRadius.xl};
    padding: ${theme.spacing.lg};
    max-width: 480px;
    max-height: 85vh;
    margin: 0;
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
`

const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing.sm};
  right: ${theme.spacing.sm};
  background: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.full};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${theme.transitions.normal};
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.text.secondary};
  z-index: 10;
  
  @media (min-width: ${theme.breakpoints.md}) {
    top: ${theme.spacing.md};
    right: ${theme.spacing.md};
    width: 36px;
    height: 36px;
    font-size: ${theme.typography.sizes.base};
  }
  
  &:hover {
    background: ${theme.colors.primary};
    color: white;
    transform: scale(1.1);
  }
`

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.md};
  box-shadow: ${theme.colors.shadow.md};
  
  @media (min-width: ${theme.breakpoints.md}) {
    height: 200px;
    border-radius: ${theme.borderRadius.lg};
    margin-bottom: ${theme.spacing.lg};
  }
`

const PlaceName = styled.h2`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.xl};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.text.primary};
  margin: 0 0 ${theme.spacing.xs} 0;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  line-height: 1.2;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes['3xl']};
    margin: 0 0 ${theme.spacing.sm} 0;
    gap: ${theme.spacing.sm};
  }
`

const Location = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.sizes.base};
  margin: 0 0 ${theme.spacing.md} 0;
  font-weight: ${theme.typography.weights.medium};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.lg};
    gap: ${theme.spacing.sm};
  }
`

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
  padding: ${theme.spacing.sm};
  background: ${theme.colors.background.secondary};
  border-radius: ${theme.borderRadius.md};
  
  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.lg};
    padding: ${theme.spacing.md};
    border-radius: ${theme.borderRadius.lg};
  }
`

const Stars = styled.div`
  color: ${theme.colors.accent};
  font-size: ${theme.typography.sizes.lg};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.xl};
  }
`

const RatingText = styled.span`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.sizes.base};
  font-weight: ${theme.typography.weights.semibold};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.lg};
  }
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.md};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing.lg};
  }
`

const InfoCard = styled.div`
  background: ${theme.colors.background.secondary};
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${theme.colors.border.light};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md};
    border-radius: ${theme.borderRadius.lg};
  }
`

const InfoTitle = styled.h4`
  font-size: ${theme.typography.sizes.xs};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.light};
  margin: 0 0 ${theme.spacing.xs} 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.sm};
  }
`

const InfoValue = styled.p`
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.text.primary};
  margin: 0;
  font-weight: ${theme.typography.weights.medium};
  line-height: 1.4;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.base};
  }
`

const ReviewSection = styled.div`
  margin-bottom: ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing.lg};
  }
`

const ReviewTitle = styled.h3`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.lg};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.primary};
  margin: 0 0 ${theme.spacing.sm} 0;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.xl};
    margin: 0 0 ${theme.spacing.md} 0;
  }
`

const Review = styled.p`
  font-size: ${theme.typography.sizes.sm};
  line-height: ${theme.typography.lineHeights.relaxed};
  color: ${theme.colors.text.secondary};
  margin: 0 0 ${theme.spacing.sm} 0;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.base};
    margin: 0 0 ${theme.spacing.md} 0;
  }
`

const SuuQuote = styled.blockquote`
  background: ${theme.colors.primaryLight};
  border-left: 4px solid ${theme.colors.primary};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  margin: ${theme.spacing.md} 0;
  border-radius: 0 ${theme.borderRadius.md} ${theme.borderRadius.md} 0;
  font-style: italic;
  color: ${theme.colors.text.primary};
  position: relative;
  font-size: ${theme.typography.sizes.sm};
  line-height: 1.5;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    margin: ${theme.spacing.lg} 0;
    border-radius: 0 ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0;
    font-size: ${theme.typography.sizes.base};
  }
  
  &::before {
    content: '"';
    font-size: ${theme.typography.sizes.xl};
    color: ${theme.colors.primary};
    position: absolute;
    top: -${theme.spacing.xs};
    left: ${theme.spacing.xs};
    font-family: ${theme.typography.fonts.heading};
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.sizes['3xl']};
      top: -${theme.spacing.sm};
      left: ${theme.spacing.sm};
    }
  }
`

const MustTrySection = styled.div`
  margin-bottom: ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing.lg};
  }
`

const MustTryTitle = styled.h4`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.base};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.primary};
  margin: 0 0 ${theme.spacing.sm} 0;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.lg};
  }
`

const MustTryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  
  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
  }
`

const MustTryItem = styled.span`
  background: ${theme.colors.background.gradient};
  color: white;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.sizes.xs};
  font-weight: ${theme.typography.weights.medium};
  box-shadow: ${theme.colors.shadow.sm};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.typography.sizes.sm};
  }
`

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  background: ${theme.colors.background.gradient};
  color: white;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  text-decoration: none;
  font-weight: ${theme.typography.weights.semibold};
  font-size: ${theme.typography.sizes.sm};
  transition: ${theme.transitions.bounce};
  margin-right: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xs};
  box-shadow: ${theme.colors.shadow.sm};
  min-height: 44px; /* Touch target */
  
  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.xl};
    font-size: ${theme.typography.sizes.base};
    margin-bottom: ${theme.spacing.sm};
    min-height: auto;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.colors.shadow.md};
  }
`

interface PlaceModalProps {
  place: Place
  onClose: () => void
}

export const PlaceModal: React.FC<PlaceModalProps> = ({ place, onClose }: PlaceModalProps) => {
  const renderStars = (rating: number) => {
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
