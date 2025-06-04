import styled from 'styled-components'
import { useState } from 'react'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const Modal = styled.div`
  position: relative;
  background: #fff;
  padding: 1rem;
  width: 300px;
  border-radius: 8px;
`

const Close = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`

interface SuggestModalProps {
  onClose: () => void
}

export const SuggestModal: React.FC<SuggestModalProps> = ({ onClose }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const suggestions = JSON.parse(localStorage.getItem('suggestions') || '[]')
    suggestions.push({ name, description, image })
    localStorage.setItem('suggestions', JSON.stringify(suggestions))
    setName('')
    setDescription('')
    setImage('')
    onClose()
  }

  return (
    <Overlay>
      <Modal>
        <Close aria-label="Close" onClick={onClose}>&times;</Close>
        <h3>Suggest a Spot for Suu</h3>
        <form onSubmit={handleSubmit}>
          <input
            style={{ width: '100%', marginBottom: '0.5rem' }}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            style={{ width: '100%', marginBottom: '0.5rem' }}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            style={{ width: '100%', marginBottom: '0.5rem' }}
            placeholder="Image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button style={{ width: '100%' }} type="submit">
            Submit
          </button>
        </form>
      </Modal>
    </Overlay>
  )
}
