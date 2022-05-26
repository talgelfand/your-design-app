import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  margin-top: 200px;
  color: var(--dark-color);
  text-align: center;
`

const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>
}

export default Title
