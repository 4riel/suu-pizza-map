import { useState } from 'react'
import styled from 'styled-components'

import { theme } from '../styles/theme'

const Container = styled.div`
  min-height: 100vh;
  padding: 120px ${theme.spacing.xl} ${theme.spacing.xl};
  background: ${theme.colors.background.gradientLight};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 100px ${theme.spacing.md} ${theme.spacing.md};
  }
`

const FormContainer = styled.div`
  background: ${theme.colors.background.primary};
  padding: ${theme.spacing['3xl']};
  border-radius: ${theme.borderRadius['2xl']};
  box-shadow: ${theme.colors.shadow.lg};
  max-width: 600px;
  width: 100%;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`

const Title = styled.h1`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes['4xl']};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  text-align: center;
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes['3xl']};
  }
`

const Subtitle = styled.p`
  font-family: ${theme.typography.fonts.body};
  color: ${theme.colors.text.light};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  font-size: ${theme.typography.sizes.lg};
  line-height: ${theme.typography.lineHeights.normal};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`

const Label = styled.label`
  font-family: ${theme.typography.fonts.body};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.sizes.base};
`

const Input = styled.input`
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.base};
  transition: ${theme.transitions.normal};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
  
  &::placeholder {
    color: ${theme.colors.text.light};
  }
`

const TextArea = styled.textarea`
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.base};
  min-height: 120px;
  resize: vertical;
  transition: ${theme.transitions.normal};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
  
  &::placeholder {
    color: ${theme.colors.text.light};
  }
`

const SubmitButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.text.white};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.lg};
  font-weight: ${theme.typography.weights.semibold};
  cursor: pointer;
  transition: ${theme.transitions.normal};
  
  &:hover {
    background: ${theme.colors.primaryHover};
    transform: translateY(-2px);
    box-shadow: ${theme.colors.shadow.md};
  }
  
  &:disabled {
    background: ${theme.colors.text.light};
    cursor: not-allowed;
    transform: none;
  }
`

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  text-align: center;
  margin-top: ${theme.spacing.md};
  font-family: ${theme.typography.fonts.body};
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Suggestion submitted:', formData)
    setSubmitted(true)
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
          Know an amazing pizza spot that Suu should try? Share it with us!
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
              required
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="city">City *</Label>
            <Input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
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
              required
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="description">Why should Suu visit this place?</Label>
            <TextArea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us what makes this pizza place special..."
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="yourName">Your Name</Label>
            <Input
              type="text"
              id="yourName"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="email">Your Email (optional)</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </InputGroup>
          
          <SubmitButton type="submit">
            Submit Suggestion
          </SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  )
} 