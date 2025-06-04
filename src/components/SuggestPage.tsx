import { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const Container = styled.div`
  min-height: 100vh;
  padding: 80px ${theme.spacing.md} ${theme.spacing.md};
  background: ${theme.colors.background.gradientLight};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 120px ${theme.spacing.xl} ${theme.spacing.xl};
  }
`

const FormContainer = styled.div`
  background: ${theme.colors.background.primary};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.colors.shadow.lg};
  max-width: 600px;
  width: 100%;
  border: 1px solid ${theme.colors.border.light};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['3xl']};
    border-radius: ${theme.borderRadius['2xl']};
    box-shadow: ${theme.colors.shadow.xl};
  }
`

const Title = styled.h1`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.xl};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  text-align: center;
  line-height: 1.2;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes['3xl']};
    margin-bottom: ${theme.spacing.md};
  }
`

const Subtitle = styled.p`
  color: ${theme.colors.text.secondary};
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
  font-size: ${theme.typography.sizes.sm};
  line-height: ${theme.typography.lineHeights.relaxed};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.lg};
    margin-bottom: ${theme.spacing['2xl']};
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.lg};
  }
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  
  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
  }
`

const Label = styled.label`
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.sizes.sm};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.base};
  }
`

const Input = styled.input`
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.sizes.sm};
  transition: ${theme.transitions.normal};
  background: ${theme.colors.background.primary};
  color: ${theme.colors.text.primary};
  min-height: 44px; /* Touch target */
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.lg};
    font-size: ${theme.typography.sizes.base};
    min-height: auto;
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primaryLight};
  }
  
  &::placeholder {
    color: ${theme.colors.text.light};
  }
`

const TextArea = styled.textarea`
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.sizes.sm};
  min-height: 100px;
  resize: vertical;
  transition: ${theme.transitions.normal};
  background: ${theme.colors.background.primary};
  color: ${theme.colors.text.primary};
  font-family: inherit;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.lg};
    font-size: ${theme.typography.sizes.base};
    min-height: 120px;
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primaryLight};
  }
  
  &::placeholder {
    color: ${theme.colors.text.light};
  }
`

const SubmitButton = styled.button`
  background: ${theme.colors.background.gradient};
  color: ${theme.colors.text.white};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.typography.sizes.base};
  font-weight: ${theme.typography.weights.semibold};
  cursor: pointer;
  transition: ${theme.transitions.bounce};
  box-shadow: ${theme.colors.shadow.md};
  min-height: 48px; /* Touch target */
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg} ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.xl};
    font-size: ${theme.typography.sizes.lg};
    min-height: auto;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.colors.shadow.lg};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background: ${theme.colors.border.light};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

const SuccessMessage = styled.div`
  background: ${theme.colors.primaryLight};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  text-align: center;
  margin-top: ${theme.spacing.md};
  border: 1px solid ${theme.colors.primary};
  font-size: ${theme.typography.sizes.sm};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.xl};
    margin-top: ${theme.spacing.lg};
    font-size: ${theme.typography.sizes.base};
  }
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.lg};
  }
`

export const SuggestPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    country: '',
    description: '',
    yourName: '',
    email: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Suggestion submitted:', formData)
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <Container>
        <FormContainer>
          <Title>🍕 Thank You!</Title>
          <SuccessMessage>
            Your pizza place suggestion has been submitted! Suu will review it and might include it in her next adventure. 
            Keep an eye on the map for updates! 🌍✨
          </SuccessMessage>
        </FormContainer>
      </Container>
    )
  }

  return (
    <Container>
      <FormContainer>
        <Title>🍕 Suggest a Pizza Place</Title>
        <Subtitle>
          Know an amazing pizza spot that Suu should try? Share it with us and help fellow pizza lovers discover great places!
        </Subtitle>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Pizza Place Name *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Tony's Authentic Pizzeria"
              required
            />
          </InputGroup>
          
          <FormGrid>
            <InputGroup>
              <Label htmlFor="city">City *</Label>
              <Input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g., Naples"
                required
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="country">Country *</Label>
              <Input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="e.g., Italy"
                required
              />
            </InputGroup>
          </FormGrid>
          
          <InputGroup>
            <Label htmlFor="description">Why should Suu visit this place? *</Label>
            <TextArea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us what makes this pizza place special! Is it the dough? The sauce? The atmosphere? Share your experience..."
              required
            />
          </InputGroup>
          
          <FormGrid>
            <InputGroup>
              <Label htmlFor="yourName">Your Name</Label>
              <Input
                type="text"
                id="yourName"
                name="yourName"
                value={formData.yourName}
                onChange={handleChange}
                placeholder="Your name (optional)"
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com (optional)"
              />
            </InputGroup>
          </FormGrid>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? '🍕 Sending to Suu...' : '🍕 Submit Suggestion'}
          </SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  )
} 