import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Bar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  background: #fff9f0ee;
  backdrop-filter: blur(4px);
  padding: 0.75rem 1rem;
  z-index: 1000;
`

const Link = styled(NavLink)`
  text-decoration: none;
  color: #b52b1c;
  font-weight: 600;
  &.active {
    border-bottom: 2px solid #e8a628;
  }
`

export function Navigation() {
  return (
    <Bar>
      <Link to="/">Home</Link>
      <Link to="/map">Pizza Map</Link>
      <Link to="/suggest">Suggest a Place</Link>
    </Bar>
  )
}
