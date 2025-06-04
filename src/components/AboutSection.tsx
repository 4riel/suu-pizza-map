import styled, { keyframes } from 'styled-components'

import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation'
import { theme } from '../styles/theme'

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
  padding: ${theme.spacing['4xl']} ${theme.spacing.xl};
  background: ${theme.colors.background.secondary};
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '50px'});
  transition: all 0.8s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(180deg, transparent 0%, ${theme.colors.background.secondary} 100%);
    transform: translateY(${props => props.$parallaxOffset * 0.3}px);
  }
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  animation: ${fadeInUp} 0.8s ease-out;
`

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 320px;
    height: 320px;
    border: 3px solid #ff6b6b;
    border-radius: 50%;
    top: -10px;
    left: -10px;
    opacity: 0.3;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    font-size: 5rem;
    
    &::after {
      width: 220px;
      height: 220px;
    }
  }
`

const TextSection = styled.div`
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`

const Title = styled.h2`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes['4xl']};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes['3xl']};
  }
`

const Description = styled.p`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.lg};
  line-height: ${theme.typography.lineHeights.loose};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xl};
`

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const StatCard = styled.div`
  text-align: center;
  padding: ${theme.spacing.lg};
  background: ${theme.colors.background.primary};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.colors.shadow.md};
  transition: ${theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.colors.shadow.lg};
  }
`

const StatNumber = styled.div`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes['3xl']};
  font-weight: ${theme.typography.weights.extrabold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
`

const StatLabel = styled.div`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.text.light};
  font-weight: ${theme.typography.weights.medium};
`

export const AboutSection: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.3 })
  const { offset: parallaxOffset, elementRef: parallaxRef } = useParallax(0.5)

  return (
          <AboutContainer 
        ref={elementRef as any} // eslint-disable-line @typescript-eslint/no-explicit-any
        $isVisible={isVisible} 
        $parallaxOffset={parallaxOffset}
        id="about"
      >
        <Content ref={parallaxRef as any}> {/* eslint-disable-line @typescript-eslint/no-explicit-any */}
        <ImageSection>
          <ProfileImage>👩‍🍳</ProfileImage>
        </ImageSection>
        
        <TextSection>
          <Title>Meet Suu, Korean Pizza Explorer Extraordinaire</Title>
          
          <Description>
            Meet Suu, the Korean globe-trotting pizza connoisseur who's made it her mission to find the perfect slice. 
            From hidden gems in Naples' narrow streets to innovative fusion spots in Tokyo, Suu rates every pizza 
            with brutal honesty and infectious enthusiasm. Her reviews have helped thousands discover their new 
            favorite pizza spots across the world.
          </Description>
          
          <Description>
            Born and raised in Seoul, Suu grew up with a palate trained on kimchi and bulgogi, which gave her 
            a unique appreciation for bold flavors and fermented goodness. She jokes that her love for pizza 
            started as a quest to find something as satisfying as kimchi jjigae - and surprisingly, 
            a good margherita comes pretty close! 🥢➡️🍕
          </Description>
          
          <Description>
            With a passport full of stamps and a stomach full of amazing memories, Suu brings you authentic, 
            unbiased reviews that go beyond just taste. She explores the culture, the people, and the stories 
            behind every slice - always with a side of Korean humor and maybe some gochujang recommendations.
          </Description>
          
          <StatsContainer>
            <StatCard>
              <StatNumber>500+</StatNumber>
              <StatLabel>Places Reviewed</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>50+</StatNumber>
              <StatLabel>Countries Explored</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>100K+</StatNumber>
              <StatLabel>Happy Pizza Lovers</StatLabel>
            </StatCard>
          </StatsContainer>
        </TextSection>
      </Content>
    </AboutContainer>
  )
} 