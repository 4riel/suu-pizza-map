import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
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
  font-size: 1.5rem;
  font-weight: bold;
  color: #d73027;
  text-decoration: none;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

const NavLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${props => props.$isActive ? '#d73027' : '#333'};
  font-weight: ${props => props.$isActive ? '600' : '400'};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: #d73027;
    background: rgba(215, 48, 39, 0.1);
  }
  
  ${props => props.$isActive && `
    background: rgba(215, 48, 39, 0.1);
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