import styled, { keyframes } from 'styled-components'
import { theme } from '../styles/theme'
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation'

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

const AboutContainer = styled.section<{ $isVisible: boolean; $parallaxOffset: number }>`
  padding: ${theme.spacing['2xl']} ${theme.spacing.md};
  background: ${theme.colors.background.secondary};
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '50px'});
  transition: all 0.8s ease;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['4xl']} ${theme.spacing.xl};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: linear-gradient(180deg, transparent 0%, ${theme.colors.background.secondary} 100%);
    transform: translateY(${props => props.$parallaxOffset * 0.3}px);
    
    @media (min-width: ${theme.breakpoints.md}) {
      height: 100px;
    }
  }
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  text-align: center;
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    text-align: left;
  }
`

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  animation: ${fadeInUp} 0.8s ease-out;
  order: 1;
  
  @media (min-width: ${theme.breakpoints.md}) {
    order: 0;
  }
`

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${theme.colors.background.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  box-shadow: ${theme.colors.shadow.lg};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 220px;
    height: 220px;
    border: 3px solid ${theme.colors.secondary};
    border-radius: 50%;
    top: -10px;
    left: -10px;
    opacity: 0.3;
  }
  
  @media (min-width: ${theme.breakpoints.sm}) {
    width: 250px;
    height: 250px;
    font-size: 6rem;
    
    &::after {
      width: 270px;
      height: 270px;
    }
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    width: 300px;
    height: 300px;
    font-size: 8rem;
    
    &::after {
      width: 320px;
      height: 320px;
    }
  }
`

const TextSection = styled.div`
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
  order: 2;
  
  @media (min-width: ${theme.breakpoints.md}) {
    order: 0;
  }
`

const Title = styled.h2`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.xl};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.2;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.sizes['2xl']};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes['3xl']};
    margin-bottom: ${theme.spacing.lg};
  }
`

const Description = styled.p`
  font-size: ${theme.typography.sizes.sm};
  line-height: ${theme.typography.lineHeights.relaxed};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.sizes.base};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.lg};
    margin-bottom: ${theme.spacing.xl};
  }
`

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.md};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing['2xl']};
  }
`

const StatCard = styled.div`
  text-align: center;
  padding: ${theme.spacing.md};
  background: ${theme.colors.background.primary};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.colors.shadow.sm};
  transition: ${theme.transitions.bounce};
  border: 1px solid ${theme.colors.border.light};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.xl};
    box-shadow: ${theme.colors.shadow.md};
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: ${theme.colors.shadow.lg};
    }
  }
`

const StatNumber = styled.div`
  font-size: ${theme.typography.sizes.xl};
  font-weight: ${theme.typography.weights.extrabold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes['3xl']};
    margin-bottom: ${theme.spacing.sm};
  }
`

const StatLabel = styled.div`
  font-size: ${theme.typography.sizes.xs};
  color: ${theme.colors.text.light};
  font-weight: ${theme.typography.weights.medium};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.sm};
  }
`

export const AboutSection: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.3 })
  const { offset: parallaxOffset, elementRef: parallaxRef } = useParallax(0.5)

  return (
    <AboutContainer 
      ref={elementRef as any} 
      $isVisible={isVisible} 
      $parallaxOffset={parallaxOffset}
      id="about"
    >
      <Content ref={parallaxRef as any}>
        <ImageSection>
          <ProfileImage>
            👩‍🍳
          </ProfileImage>
        </ImageSection>
        <TextSection>
          <Title>Meet Suu, Korean Pizza Explorer Extraordinaire</Title>
          <Description>
            Meet Suu, the Korean globe-trotting pizza connoisseur who's made it her mission to find the perfect slice. 
            From hidden gems in Naples' narrow streets to innovative fusion spots in Tokyo, Suu rates every pizza 
            with brutal honesty and infectious enthusiasm.
          </Description>
          <Description>
            Born and raised in Seoul, Suu grew up with a palate trained on kimchi and bulgogi, which gave her 
            a unique appreciation for bold flavors and fermented goodness. She jokes that her love for pizza 
            started as a quest to find something as satisfying as kimchi jjigae! 🥢➡️🍕
          </Description>
          <Description>
            With a passport full of stamps and a stomach full of amazing memories, Suu brings you authentic, 
            unbiased reviews that go beyond just taste - always with a side of Korean humor.
          </Description>
          <StatsContainer>
            <StatCard>
              <StatNumber>12+</StatNumber>
              <StatLabel>Places Reviewed</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>10+</StatNumber>
              <StatLabel>Countries Explored</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>∞</StatNumber>
              <StatLabel>Pizza Dreams</StatLabel>
            </StatCard>
          </StatsContainer>
        </TextSection>
      </Content>
    </AboutContainer>
  )
} 