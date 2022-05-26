import React from 'react'
import { Card, CardTitle, CardSubtitle, CardBody, CardText, CardImg } from 'reactstrap'
import styled from 'styled-components'
import PrimaryLink from '../PrimaryLink'

const Image = styled(CardImg)`
  width: 200px;
  height: 150px;
  object-fit: cover;
  filter: grayscale(30%);
`

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

const CatalogueItem = ({ id, title, image, size, price }) => {
  return (
    <StyledCard key={id}>
      <CardBody>
        <Title>{title}</Title>
        <CardSubtitle>{size}</CardSubtitle>
        <CardText>{price + ' euros'}</CardText>
        <PrimaryLink path={`/product/${id}`} text='View more' margintop />
      </CardBody>
      <Image src={image} alt={title} />
    </StyledCard>
  )
}

export default CatalogueItem
