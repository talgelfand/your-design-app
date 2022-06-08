import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  top: 160px;
`

const StyledLink = styled(Link)`
  margin: 0 30px 0 30px;
  font-size: 20px;
  text-decoration: none;
  color: var(--dark-color);
  font-weight: bold;
  transition: all 0.5s;
  &:hover {
    color: var(--primary-color);
    transform: scale(1.2);
  }
`

const Navbar = () => {
  return (
    <Section>
      <StyledLink to='/about'>Par mums</StyledLink>
      <StyledLink to='/catalogue'>Katalogs</StyledLink>
      <StyledLink to='/contacts'>Kontakti</StyledLink>
    </Section>
  )
}

export default Navbar
