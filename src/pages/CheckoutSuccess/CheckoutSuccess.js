import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import PrimaryLink from "../../components/PrimaryLink"
import Title from "../../components/Title"

const StyledLink = styled(Link)`
  display: block;
  margin-top: 100px;
  text-align: center;
  color: var(--dark-color);
  font-weight: bold;
  font-size: 20px;
  transition: all 0.5s;
  &:hover {
    color: var(--primary-color);
    transform: scale(1.2);
  }
`

const StyledText = styled.p`
  margin-top: 30px;
  text-align: center;
  font-size: 20px;
`

const CheckoutSuccess = () => {
  return (
    <>
      <Title text="Thank you for the purchase!" />
      <StyledText>
        To find your courses please go to
        <PrimaryLink text="My courses" path="/mycourses" />
      </StyledText>
      <StyledLink to="/">Go back home</StyledLink>
    </>
  )
}

export default CheckoutSuccess
