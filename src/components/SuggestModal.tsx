import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
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
  align-items: flex-start;
  justify-content: center;
  z-index: ${theme.zIndex.modal};
  animation: ${fadeIn} 0.3s ease-out;
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.sm};
  padding-top: 80px; /* Account for navbar height on mobile */
  overflow-y: auto;
  
  @media (min-width: ${theme.breakpoints.md}) {
    align-items: center;
    padding: ${theme.spacing.lg};
    padding-top: 100px; /* Account for navbar height on desktop */
  }
`

const Modal = styled.div`
  position: relative;
  background: ${theme.colors.background.primary};
  padding: ${theme.spacing['3xl']};
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: ${theme.borderRadius['2xl']};
  box-shadow: ${theme.colors.shadow.xl};
  animation: ${slideInUp} 0.4s ease-out;
  border: 1px solid ${theme.colors.border.light};
`

const Header = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['2xl']};
`

const Title = styled.h2`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes['3xl']};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.text.primary};
  margin: 0 0 ${theme.spacing.md} 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
`

const Subtitle = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.sizes.lg};
  margin: 0;
  line-height: ${theme.typography.lineHeights.relaxed};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`

const Label = styled.label`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.base};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.primary};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`

const Input = styled.input`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.xl};
  font-size: ${theme.typography.sizes.base};
  font-family: ${theme.typography.fonts.body};
  color: ${theme.colors.text.primary};
  background: ${theme.colors.background.secondary};
  transition: ${theme.transitions.normal};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primaryLight};
    background: ${theme.colors.background.primary};
  }
  
  &::placeholder {
    color: ${theme.colors.text.light};
  }
`

const TextArea = styled.textarea`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.xl};
  font-size: ${theme.typography.sizes.base};
  font-family: ${theme.typography.fonts.body};
  color: ${theme.colors.text.primary};
  background: ${theme.colors.background.secondary};
  transition: ${theme.transitions.normal};
  resize: vertical;
  min-height: 120px;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primaryLight};
    background: ${theme.colors.background.primary};
  }
  
  &::placeholder {
    color: ${theme.colors.text.light};
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`

const SubmitButton = styled.button`
  flex: 1;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.background.gradient};
  color: ${theme.colors.text.white};
  border: none;
  border-radius: ${theme.borderRadius.xl};
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.lg};
  font-weight: ${theme.typography.weights.semibold};
  cursor: pointer;
  transition: ${theme.transitions.bounce};
  box-shadow: ${theme.colors.shadow.md};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  
  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: ${theme.colors.shadow.xl};
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

const CancelButton = styled.button`
  flex: 0 0 auto;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: ${theme.colors.background.secondary};
  color: ${theme.colors.text.secondary};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.xl};
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.base};
  font-weight: ${theme.typography.weights.medium};
  cursor: pointer;
  transition: ${theme.transitions.bounce};
  
  &:hover {
    background: ${theme.colors.background.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.text.primary};
    transform: translateY(-1px);
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
  background: ${theme.colors.background.secondary};
  border: 2px solid ${theme.colors.border.light};
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.circle};
  font-size: ${theme.typography.sizes.lg};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${theme.transitions.bounce};
  
  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.text.white};
    border-color: ${theme.colors.primary};
    transform: scale(1.1);
  }
`

const SuccessMessage = styled.div`
  background: ${theme.colors.primaryLight};
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  text-align: center;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  animation: ${slideInUp} 0.3s ease-out;
`

interface SuggestModalProps {
  onClose: () => void
}

export const SuggestModal: React.FC<SuggestModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    country: '',
    description: '',
    specialty: '',
    address: '',
    website: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const suggestions = JSON.parse(localStorage.getItem('pizzaSuggestions') || '[]')
      suggestions.push({
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
        status: 'pending'
      })
      localStorage.setItem('pizzaSuggestions', JSON.stringify(suggestions))
      
      setShowSuccess(true)
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (error) {
      console.error('Error submitting suggestion:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close">×</CloseButton>
        
        <Header>
          <Title>
            ✨ Suggest a Pizza Place for Suu! 🍕
          </Title>
          <Subtitle>
            Help Suu discover her next amazing pizza adventure! Share your favorite spot and it might make it onto the map.
          </Subtitle>
        </Header>

        {showSuccess ? (
          <SuccessMessage>
            <h3>🎉 Thank you!</h3>
            <p>Your suggestion has been sent to Suu! She'll check it out on her next food adventure.</p>
          </SuccessMessage>
        ) : (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">🍕 Restaurant Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="e.g., Mario's Authentic Pizzeria"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="city">🏙️ City</Label>
              <Input
                id="city"
                name="city"
                type="text"
                placeholder="e.g., Bangkok"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="country">🌍 Country</Label>
              <Input
                id="country"
                name="country"
                type="text"
                placeholder="e.g., Thailand"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="specialty">⭐ What makes it special?</Label>
              <Input
                id="specialty"
                name="specialty"
                type="text"
                placeholder="e.g., Wood-fired Neapolitan pizza, Thai fusion"
                value={formData.specialty}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="description">📝 Tell Suu why she'll love it!</Label>
              <TextArea
                id="description"
                name="description"
                placeholder="Share what makes this place amazing! The atmosphere, the flavors, the story - Suu loves hearing about the experience."
                value={formData.description}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="address">📍 Address (optional)</Label>
              <Input
                id="address"
                name="address"
                type="text"
                placeholder="e.g., 123 Pizza Street, Old Town"
                value={formData.address}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="website">🌐 Website (optional)</Label>
              <Input
                id="website"
                name="website"
                type="url"
                placeholder="e.g., https://mariospizza.com"
                value={formData.website}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">📞 Phone (optional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="e.g., +66 2 123 4567"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>

            <ButtonGroup>
              <CancelButton type="button" onClick={onClose}>
                Cancel
              </CancelButton>
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? '🚀 Sending to Suu...' : '✨ Send Suggestion'}
              </SubmitButton>
            </ButtonGroup>
          </Form>
        )}
      </Modal>
    </Overlay>
  )
}
