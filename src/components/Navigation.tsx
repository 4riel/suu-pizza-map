import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { theme } from '../styles/theme'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.navBackground};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${theme.colors.border.medium};
  z-index: ${theme.zIndex.nav};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${theme.transitions.normal};
  
  &:hover {
    background: rgba(255, 255, 255, 0.98);
  }
`

const Logo = styled.div`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.xl};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary};
  text-decoration: none;
`

const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  align-items: center;
`

const NavLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${props => props.$isActive ? theme.colors.primary : theme.colors.text.primary};
  font-weight: ${props => props.$isActive ? theme.typography.weights.semibold : theme.typography.weights.normal};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  transition: ${theme.transitions.normal};
  position: relative;
  
  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.primaryLight};
  }
  
  ${props => props.$isActive && `
    background: ${theme.colors.primaryLight};
  `}
`

export const Navigation: React.FC = () => {
  const location = useLocation()
  
  return (
    <Nav>
      <Logo>🍕 Suu's Pizza Map</Logo>
      <NavLinks>
        <NavLink to="/" $isActive={location.pathname === '/'}>
          Home
        </NavLink>
        <NavLink to="/map" $isActive={location.pathname === '/map'}>
          Pizza Map
        </NavLink>
        <NavLink to="/suggest" $isActive={location.pathname === '/suggest'}>
          Suggest a Place
        </NavLink>
      </NavLinks>
    </Nav>
  )
} 