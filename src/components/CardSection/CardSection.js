import { CardElement } from "@stripe/react-stripe-js"
import React from "react"
import { Card, CardBody, Form, Input } from "reactstrap"
import styled from "styled-components"

const StyledCard = styled(Card)`
  padding: 20px;
  width: 600px;
  margin: auto;
  margin-top: 40px;
  background-color: var(--bg-color);
`

const StyledInput = styled(Input)`
  margin-top: 10px;
`

const StyledElement = styled(CardElement)`
  margin-top: 10px;
  color: #212529;
  padding: 10px;
`

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: false,
  style: {
    base: {
      iconColor: "#516360",
      color: "#516360",
      fontSize: "18px",
      backgroundColor: "#ced8d8",
      "::placeholder": {
        color: "#516360",
      },
    },
    invalid: {
      color: "red",
      ":focus": {
        color: "red",
      },
    },
  },
}

const CardSection = () => {
  return (
    <StyledCard>
      <CardBody>
        <Form>
          <StyledInput placeholder="Name on the card" />
          <StyledInput placeholder="Email" />
          <StyledInput placeholder="Phone" />
        </Form>
        <StyledElement options={CARD_ELEMENT_OPTIONS} />
      </CardBody>
    </StyledCard>
  )
}

export default CardSection
