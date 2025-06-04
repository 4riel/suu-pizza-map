import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import { useParallax } from '../hooks/useScrollAnimation'
import { theme } from '../styles/theme'

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const HeroContainer = styled.section<{ $parallaxOffset: number }>`
  min-height: 100vh;
  background: ${theme.colors.background.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md};
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
  
  &::before {
    content: '🍕';
    position: absolute;
    font-size: 1.5rem;
    opacity: 0.1;
    animation: ${float} 6s ease-in-out infinite;
    top: 15%;
    left: 5%;
    transform: translateY(${props => props.$parallaxOffset * 0.2}px);
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 2rem;
      top: 20%;
      left: 10%;
    }
  }
  
  &::after {
    content: '🍕';
    position: absolute;
    font-size: 2rem;
    opacity: 0.1;
    animation: ${float} 4s ease-in-out infinite reverse;
    bottom: 15%;
    right: 10%;
    transform: translateY(${props => props.$parallaxOffset * 0.3}px);
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 3rem;
      bottom: 20%;
      right: 15%;
    }
  }
`

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  z-index: 2;
  text-align: center;
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    text-align: left;
  }
`

const TextContent = styled.div`
  color: white;
  order: 2;
  
  @media (min-width: ${theme.breakpoints.md}) {
    order: 1;
  }
`

const Headline = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 3rem;
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: 3.5rem;
  }
`

const Subheadline = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.95;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: 1.125rem;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`

const CTAButton = styled(Link)`
  display: inline-block;
  background: ${theme.colors.background.primary};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.full};
  text-decoration: none;
  font-weight: ${theme.typography.weights.semibold};
  font-size: ${theme.typography.sizes.base};
  transition: ${theme.transitions.bounce};
  box-shadow: ${theme.colors.shadow.md};
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    font-size: ${theme.typography.sizes.lg};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: ${theme.transitions.slow};
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: ${theme.colors.shadow.xl};
    background: #f8f9fa;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
`

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;
  order: 1;
  
  @media (min-width: ${theme.breakpoints.md}) {
    order: 2;
  }
`

const PizzaIcon = styled.div`
  font-size: 6rem;
  animation: ${float} 3s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
  
  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: 8rem;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 10rem;
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: 12rem;
  }
`

const BackgroundShape = styled.div`
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: 1;
`

export const HeroSection: React.FC = () => {
  const { offset: parallaxOffset, elementRef } = useParallax(0.3)

  return (
    <HeroContainer ref={elementRef} $parallaxOffset={parallaxOffset}>
      <BackgroundShape />
      
      <HeroContent>
        <TextContent>
          <Headline>Discover Pizza Paradise with Suu</Headline>
          
          <Subheadline>
            Join our fearless food explorer as she hunts down the world's most incredible pizza slices, one bite at a time
          </Subheadline>
          
          <CTAButton to="/map">🍕 Explore Pizza Map</CTAButton>
        </TextContent>
        
        <HeroImage>
          <PizzaIcon>🍕</PizzaIcon>
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  )
} 