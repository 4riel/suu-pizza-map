import { keyframes } from '@emotion/react'
import { Box, Button, Container, Typography } from '@mui/material'

interface LandingPageProps {
  onExplore: () => void
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const LandingPage: React.FC<LandingPageProps> = ({ onExplore }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'linear-gradient(45deg, #ff8a00, #e52e71)',
        color: '#fff',
        p: 3,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          component="h1"
          sx={{ mb: 2, fontWeight: 600, animation: `${fadeIn} 0.6s ease-out both` }}
        >
          Suu's Global Pizza Journey
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ mb: 4, animation: `${fadeIn} 0.8s ease-out both` }}
        >
          Follow Suu as she scours the world tasting slice after slice in search
          of the perfect pizza.
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{ animation: `${fadeIn} 1s ease-out both` }}
          onClick={onExplore}
        >
          See the Pizzas
        </Button>
      </Container>
    </Box>
  )
}

export default LandingPage
