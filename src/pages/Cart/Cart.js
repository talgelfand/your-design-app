import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Context } from '../../context/context'
import styled from 'styled-components'
import { Button } from 'reactstrap'
import CartItem from '../../components/CartItem'
import { remove } from '../../utils/utils'
import Title from '../../components/Title'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'

const Section = styled.section`
  margin-top: 200px;
`
const StyledButton = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 22px;
  color: var(--dark-color);
  &:hover {
    color: var(--accent-color);
  }
`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`

const TotalItems = styled.h3`
  font-size: 18px;
`

const TotalPrice = styled.h2`
  margin-top: 20px;
  font-size: 20px;
`

const Wrapper = styled.div`
  display: flex;
  width: 650px;
  margin: 0 auto;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
`

const Cart = () => {
  const { cartItems, setCartItems, user } = useContext(Context)
  const [loading, setLoading] = useState(false)
  let totalPrice = 0
  const numberOfProducts = cartItems && cartItems.length
  const history = useHistory()

  const getProducts = () => {
    setLoading(true)
    user.get().then((doc) => {
      setCartItems(doc.data()['cartItems'])
      setLoading(false)
    })
  }

  const getUserData = () => {
    setLoading(true)
    user.get().then((doc) => {
      setCartItems(doc.data()['cartItems'])
    })
  }

  useEffect(() => {
    getProducts()
    getUserData()
  }, [])

  const clearAllProducts = () => {
    user.update({ cartItems: [] })
    setCartItems([])
  }

  const countTotalPrice = () => {
    cartItems.forEach((item) => {
      totalPrice += parseFloat(item.price)
    })

    return totalPrice
  }

  const products = cartItems.map((item) => {
    const removeItem = (id) => {
      const newItems = remove(user, cartItems, id, item)
      setCartItems(newItems)
    }

    return <CartItem key={item.id} {...item} removeItem={removeItem} />
  })

  if (loading) {
    return <Loading />
  }

  if (products.length === 0) {
    return <Title text='Nekadi produkti vēl nebija pievienotie grozam.' />
  }

  const handleSubmit = () => {
    user.update({ cartItems: [] })
    history.push('/success')
  }

  return (
    <>
      <Section>
        {products}
        <StyledButton color='link' onClick={clearAllProducts}>
          Nodzēst visu
        </StyledButton>
        <Wrapper>
          <div>
            <TotalItems>{`${numberOfProducts} produkti`}</TotalItems>
            <TotalPrice>{`Kopā: ${countTotalPrice()} eiro`}</TotalPrice>
          </div>
          <PrimaryButton clickEvent={handleSubmit} text={<StyledLink to='/checkout'>Apmaksāt</StyledLink>} />
        </Wrapper>
      </Section>
    </>
  )
}

export default Cart
