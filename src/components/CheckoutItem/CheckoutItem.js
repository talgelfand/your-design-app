import React from "react"
import { Card, CardTitle, CardBody } from "reactstrap"
import styled from "styled-components"
import SecondaryButton from "../buttons/SecondaryButton"
import PrimaryLink from "../PrimaryLink"

const StyledCard = styled(Card)`
  width: 650px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 30px;
`

const StyledBody = styled(CardBody)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled(CardTitle)`
  font-weight: bold;
`

const CheckoutItem = ({ id, title, removeItem }) => {
  const handleRemoving = (id) => {
    removeItem(id)
  }

  return (
    <StyledCard key={id}>
      <StyledBody>
        <div>
          <Title>{title}</Title>
          <PrimaryLink path={`/course/${id}`} text="View more" />
        </div>
        <div>
          <SecondaryButton
            text="Remove"
            clickEvent={() => handleRemoving(id)}
          />
        </div>
      </StyledBody>
    </StyledCard>
  )
}

export default CheckoutItem
