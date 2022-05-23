import React, { useContext } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styled from 'styled-components'
import { Context } from '../../context/context'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { add } from '../../utils/utils'
import Loading from '../Loading'
import data from '../../data/data.json'

const Section = styled.section`
  position: relative;
  margin: 0 auto;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  justify-content: center;
  gap: 10px;
`

const ProductsGrid = () => {
  const { cartItems, user } = useContext(Context)

  const products = data.products.map((product) => {
    const addToCart = () => {
      product.list = 'cart'
      add(cartItems, product, user)
    }

    return (
      <ProductCard
        key={product.id}
        id={product.id}
        {...product}
        addToCart={addToCart}
      />
    )
  })

  return (
    <Section>
      {products || <Loading />}
      <ToastContainer />
    </Section>
  )
}

export default ProductsGrid
