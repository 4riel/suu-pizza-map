import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
`

const Subtitle = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-weight: 600;
  color: #2c3e50;
`

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #d73027;
  }
`

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #d73027;
  }
`

const SubmitButton = styled.button`
  background: #d73027;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #b8251f;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  margin-top: 1rem;
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