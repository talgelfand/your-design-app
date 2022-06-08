import React, { useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useSpring, config, animated } from 'react-spring'
import styled from 'styled-components'
import CardLink from '../CardLink/CardLink'

const Section = styled.section`
  position: relative;
  padding: 30px;
  padding-bottom: 0;
  width: 300px;
  height: 300px;
  background-color: var(--bg-color);
  box-shadow: 0 0 5px var(--dark-color);
  transition: all 1s;
`

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  filter: grayscale(50%);
`

const Subtitle = styled.h2`
  font-size: 18px;
  margin-top: 10px;
`

const Span = styled.span`
  font-weight: bold;
`
const Wrapper = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 65px;
  display: flex;
  justify-content: center;
`

const Icon = styled.div`
  margin: 0 30px;
  transform: scale(1.2);
  cursor: pointer;
  transition: all 0.3s;
  color: var(--dark-color);
  &:hover {
    transform: scale(1.5);
    color: var(--accent-color);
  }
`

const ProductCard = ({ id, image, title, price, size, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  const handleHoverLeave = () => {
    setIsHovered(!isHovered)
  }

  const handleAddingToCart = () => {
    addToCart()
  }

  const fadeStyles = useSpring({
    config: { ...config.stiff, friction: 18 },
    from: { opacity: 1 },
    to: {
      opacity: !isHovered ? 1 : 0,
    },
  })

  if (!isHovered) {
    return (
      <animated.div style={fadeStyles}>
        <Image src={image} alt={title} onMouseEnter={handleHover} />
      </animated.div>
    )
  }

  return (
    <Section onMouseLeave={handleHoverLeave}>
      <Subtitle>
        <Span>Produkta nosaukums:</Span> {title}
      </Subtitle>
      <Subtitle>
        <Span>Izmērs:</Span> {size}
      </Subtitle>
      <Subtitle>
        <Span>Cena:</Span> {price}
      </Subtitle>
      <Wrapper>
        <Icon>
          <FaCartPlus onClick={handleAddingToCart} />
        </Icon>
      </Wrapper>
      <CardLink path={`product/${id}`} text='Produkta apraksts' bold />
    </Section>
  )
}

export default ProductCard
