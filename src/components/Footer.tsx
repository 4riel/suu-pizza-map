import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { theme } from '../styles/theme'

const FooterContainer = styled.footer<{ $isVisible: boolean }>`
  background: ${theme.colors.text.primary};
  color: ${theme.colors.text.white};
  padding: ${theme.spacing.xl} ${theme.spacing.md} ${theme.spacing.md};
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '30px'});
  transition: all 0.8s ease;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['4xl']} ${theme.spacing.xl} ${theme.spacing.xl};
  }
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  text-align: center;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.xl};
    text-align: left;
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: ${theme.spacing['3xl']};
  }
`

const FooterSection = styled.div``

const FooterTitle = styled.h3`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.lg};
  font-weight: ${theme.typography.weights.bold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.secondary};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.xl};
    margin-bottom: ${theme.spacing.lg};
  }
`

const FooterText = styled.p`
  line-height: ${theme.typography.lineHeights.relaxed};
  margin-bottom: ${theme.spacing.sm};
  opacity: 0.9;
  font-size: ${theme.typography.sizes.sm};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.base};
    margin-bottom: ${theme.spacing.md};
  }
`

const FooterLink = styled.a`
  color: ${theme.colors.text.white};
  text-decoration: none;
  display: block;
  margin-bottom: ${theme.spacing.xs};
  transition: ${theme.transitions.normal};
  opacity: 0.8;
  font-size: ${theme.typography.sizes.sm};
  padding: ${theme.spacing.xs} 0;
  min-height: 44px; /* Touch target */
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    justify-content: flex-start;
    margin-bottom: ${theme.spacing.sm};
    font-size: ${theme.typography.sizes.base};
    min-height: auto;
    padding: 0;
  }
  
  &:hover {
    color: ${theme.colors.secondary};
    opacity: 1;
    
    @media (min-width: ${theme.breakpoints.md}) {
      transform: translateX(5px);
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
  justify-content: center;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    justify-content: flex-start;
    gap: ${theme.spacing.md};
    margin-top: ${theme.spacing.lg};
  }
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius.circle};
  color: ${theme.colors.text.white};
  text-decoration: none;
  font-size: ${theme.typography.sizes.base};
  transition: ${theme.transitions.bounce};
  
  @media (min-width: ${theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
    font-size: ${theme.typography.sizes.lg};
  }
  
  &:hover {
    background: ${theme.colors.primary};
    transform: translateY(-3px) scale(1.1);
  }
`

const CTASection = styled.div`
  background: ${theme.colors.background.gradient};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  text-align: center;
  color: ${theme.colors.text.white};
  margin-bottom: ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.xl};
    margin-bottom: ${theme.spacing.xl};
  }
`

const CTATitle = styled.h3`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.lg};
  font-weight: ${theme.typography.weights.bold};
  margin-bottom: ${theme.spacing.sm};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes['2xl']};
    margin-bottom: ${theme.spacing.md};
  }
`

const CTAButton = styled(Link)`
  display: inline-block;
  background: ${theme.colors.text.white};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  text-decoration: none;
  font-weight: ${theme.typography.weights.semibold};
  margin-top: ${theme.spacing.sm};
  transition: ${theme.transitions.bounce};
  font-size: ${theme.typography.sizes.sm};
  min-height: 44px; /* Touch target */
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    margin-top: ${theme.spacing.md};
    font-size: ${theme.typography.sizes.base};
    display: inline-block;
    min-height: auto;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.colors.shadow.lg};
    background: #f8f9fa;
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: ${theme.spacing.lg};
  padding-top: ${theme.spacing.md};
  text-align: center;
  opacity: 0.7;
  font-size: ${theme.typography.sizes.xs};
  
  @media (min-width: ${theme.breakpoints.md}) {
    margin-top: ${theme.spacing['2xl']};
    padding-top: ${theme.spacing.xl};
    font-size: ${theme.typography.sizes.sm};
  }
`

const PizzaEmoji = styled.span`
  font-size: ${theme.typography.sizes.lg};
  animation: spin 2s linear infinite;
  display: inline-block;
  margin: 0 ${theme.spacing.xs};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes['2xl']};
    margin: 0 ${theme.spacing.sm};
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

export const Footer: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.2 })

  return (
    <FooterContainer ref={elementRef} $isVisible={isVisible}>
      <FooterContent>
        <FooterSection>
          <FooterTitle>🍕 Suu's Pizza Map</FooterTitle>
          <FooterText>
            Join Suu on her delicious journey around the world, discovering amazing pizza places 
            one slice at a time.
          </FooterText>
          <CTASection>
            <CTATitle>Found an amazing pizza place?</CTATitle>
            <FooterText>Share it with Suu!</FooterText>
            <CTAButton to="/suggest">
              🍕 Submit Your Pizza Place
            </CTAButton>
          </CTASection>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink as={Link} to="/">Home</FooterLink>
          <FooterLink as={Link} to="/map">Pizza Map</FooterLink>
          <FooterLink as={Link} to="/suggest">Suggest a Place</FooterLink>
          <FooterLink href="#about">About Suu</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterLink href="mailto:hello@suupizzamap.com">hello@suupizzamap.com</FooterLink>
          <FooterText>
            <strong>Suu's HQ:</strong><br />
            Seoul, South Korea<br />
            (Currently traveling!)
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Follow Suu</FooterTitle>
          <FooterText>Follow her pizza adventures!</FooterText>
          <SocialLinks>
            <SocialLink href="https://instagram.com/suupizzamap" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              📸
            </SocialLink>
            <SocialLink href="https://twitter.com/suupizzamap" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              🐦
            </SocialLink>
            <SocialLink href="https://tiktok.com/@suupizzamap" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              🎵
            </SocialLink>
            <SocialLink href="https://youtube.com/@suupizzamap" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              📺
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>
          Made with <PizzaEmoji>🍕</PizzaEmoji> by Suu | © 2024 Suu's Pizza Map | All rights reserved
        </p>
        <p>
          "Life's too short for bad pizza!" - Suu 🇰🇷
        </p>
      </FooterBottom>
    </FooterContainer>
  )
} 