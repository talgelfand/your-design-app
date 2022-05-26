import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.section`
  margin-top: 250px;
  text-align: center;
`

const StyledLink = styled(Link)`
  display: block;
  margin-top: 50px;
  color: var(--dark-color);
  font-weight: bold;
  font-size: 20px;
  transition: all 0.5s;
  &:hover {
    color: var(--primary-color);
    transform: scale(1.2);
  }
`

const ErrorPage = () => {
  return (
    <Section>
      <h1>Notika kļūda. Parbaudiet adresa pareizību.</h1>
      <StyledLink to='/'>Atgriezties mājas lapā</StyledLink>
    </Section>
  )
}

export default ErrorPage
