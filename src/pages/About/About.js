import React from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'

const Description = styled.p`
  padding: 50px 500px;
`

const About = () => {
  return (
    <>
      <Title text="About our brand" />
      <Description>
        <strong>The brand was found on 24th of February, 2022.</strong>
        <br /> <br /> The brand was developed by third-year students of the DITF department - 
        Milana Venediktova, Taļa Geļfande, Evita Bebre and Eduards Cveks. The brand is based 
        on an online store of hand embroidery and drawings on clothes or bags. The online 
        store designer allows the buyer to choose both an element of clothing or an accessory, 
        as well as the type and idea of decor. You can choose both the finished product 
        and the design of the product.
      </Description>
    </>
  )
}

export default About
