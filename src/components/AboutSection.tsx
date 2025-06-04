import styled, { keyframes } from 'styled-components'

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: 4rem 1rem;
  background: #fff;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const fade = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const Headshot = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #f7c59f;
  margin: 0 auto;
  animation: ${fade} 1s ease forwards;
`

const Copy = styled.p`
  animation: ${fade} 1.2s ease forwards;
  color: #333;
`

export function AboutSection() {
  return (
    <Section>
      <Headshot aria-label="Suu headshot" />
      <Copy>
        Meet Suu, the globe-trotting pizza connoisseur who's made it her mission
        to find the perfect slice. From hidden gems in Naples' narrow streets to
        innovative fusion spots in Tokyo, Suu rates every pizza with brutal
        honesty and infectious enthusiasm. Her reviews have helped thousands
        discover their new favorite pizza spots.
      </Copy>
    </Section>
  )
}
