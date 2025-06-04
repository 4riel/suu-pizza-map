import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(#ffe8d6, #fff);
  position: relative;
  overflow: hidden;
`

const slide = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: #b52b1c;
  margin: 0;
  animation: ${slide} 0.8s ease forwards;
`

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 1rem auto 2rem;
  color: #333;
  animation: ${slide} 1s ease forwards;
`

const CTA = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #e8a628;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`

export function HeroSection() {
  return (
    <Wrapper>
      <Title>Discover Pizza Paradise with Suu</Title>
      <Subtitle>
        Join our fearless food explorer as she hunts down the world's most
        incredible pizza slices, one bite at a time
      </Subtitle>
      <CTA to="/map">Explore Pizza Map</CTA>
    </Wrapper>
  )
}
