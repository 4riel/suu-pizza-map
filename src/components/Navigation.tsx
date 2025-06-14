import { useState } from 'react'
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
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${theme.transitions.normal};
  
  &:hover {
    background: rgba(255, 255, 255, 0.98);
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md} ${theme.spacing.xl};
  }
`

const Logo = styled.div`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.sizes.lg};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary};
  text-decoration: none;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.xl};
  }
`

const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${theme.zIndex.nav + 1};
  
  span {
    width: 100%;
    height: 2px;
    background: ${theme.colors.text.primary};
    border-radius: 1px;
    transition: all 0.3s ease;
    transform-origin: center;
  }
  
  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  &.open span:nth-child(2) {
    opacity: 0;
  }
  
  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: ${theme.spacing.xl};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    background: ${theme.colors.background.primary};
    box-shadow: ${theme.colors.shadow.xl};
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transform: translateX(${props => props.$isOpen ? '0' : '100%'});
    transition: transform 0.3s ease;
    z-index: ${theme.zIndex.nav};
  }
`

const NavOverlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${props => props.$isOpen ? 1 : 0};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    z-index: ${theme.zIndex.nav - 1};
  }
`

const NavLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${props => props.$isActive ? theme.colors.primary : theme.colors.text.primary};
  font-weight: ${props => props.$isActive ? theme.typography.weights.semibold : theme.typography.weights.normal};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.full};
  transition: ${theme.transitions.normal};
  position: relative;
  display: block;
  text-align: center;
  
  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.primaryLight};
  }
  
  ${props => props.$isActive && `
    background: ${theme.colors.primaryLight};
  `}
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0.5rem 1rem;
    display: inline-block;
    text-align: left;
  }
`

export const Navigation: React.FC = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)
  
  return (
    <>
      <Nav>
        <Logo>🍕 Suu's Pizza Map</Logo>
        <MobileMenuButton 
          className={isMenuOpen ? 'open' : ''} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
        <NavLinks $isOpen={isMenuOpen}>
          <NavLink 
            to="/" 
            $isActive={location.pathname === '/'}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/map" 
            $isActive={location.pathname === '/map'}
            onClick={closeMenu}
          >
            Pizza Map
          </NavLink>
          <NavLink 
            to="/suggest" 
            $isActive={location.pathname === '/suggest'}
            onClick={closeMenu}
          >
            Suggest a Place
          </NavLink>
        </NavLinks>
      </Nav>
      <NavOverlay $isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  )
} 