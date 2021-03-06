import React from 'react'
import { Card, CardTitle, CardSubtitle, CardBody, CardText, CardImg } from 'reactstrap'
import styled from 'styled-components'
import SecondaryButton from '../buttons/SecondaryButton'
import PrimaryLink from '../PrimaryLink'

const StyledCard = styled(Card)`
  width: 650px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 30px;
`

const Title = styled(CardTitle)`
  font-weight: bold;
`
const Image = styled(CardImg)`
  width: 200px;
  height: 204px;
  object-fit: cover;
  filter: grayscale(30%);
`

const CartItem = ({ id, title, image, size, price, removeItem }) => {
  const handleRemoving = (id) => {
    removeItem(id)
  }

  return (
    <StyledCard key={id}>
      <CardBody>
        <Title>{title}</Title>
        <CardSubtitle>{size}</CardSubtitle>
        <CardText>{`${price} `}</CardText>
        <PrimaryLink path={`/product/${id}`} text='Produkta apraksts' />
        <SecondaryButton text='Izdzēst' margintop clickEvent={() => handleRemoving(id)} />
      </CardBody>
      <Image src={image} alt={title} />
    </StyledCard>
  )
}

export default CartItem
