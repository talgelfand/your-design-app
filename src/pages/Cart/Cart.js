import React, { useContext, useEffect, useState } from "react"
import { Context } from "../../context/context"
import styled from "styled-components"
import { Button } from "reactstrap"
import CartItem from "../../components/CartItem"
import { remove } from "../../utils/utils"
import Title from "../../components/Title"
import PrimaryButton from "../../components/buttons/PrimaryButton"
import { Link } from "react-router-dom"
import Loading from "../../components/Loading"

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
  const amountOfCourses = cartItems && cartItems.length

  const getCourses = () => {
    setLoading(true)
    user.get().then((doc) => {
      setCartItems(doc.data()["cartItems"])
      setLoading(false)
    })
  }

  useEffect(() => {
    getCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clearAllCourses = () => {
    user.update({ cartItems: [] })
    setCartItems([])
  }

  const countTotalPrice = () => {
    cartItems.forEach((item) => {
      totalPrice += parseFloat(item.price)
    })

    return totalPrice
  }

  const courses = cartItems.map((item) => {
    const removeItem = (id) => {
      const newItems = remove(user, cartItems, "cartItems", id, item)
      setCartItems(newItems)
    }

    return <CartItem key={item.id} {...item} removeItem={removeItem} />
  })

  if (loading) {
    return <Loading />
  }

  if (courses.length === 0) {
    return <Title text="No courses added to cart" />
  }

  return (
    <>
      <Section>
        {courses}
        <StyledButton color="link" onClick={clearAllCourses}>
          Clear all
        </StyledButton>
        <Wrapper>
          <div>
            <TotalItems>{`${amountOfCourses} course(s)`}</TotalItems>
            <TotalPrice>{`Total: ${countTotalPrice()} euros`}</TotalPrice>
          </div>
          <PrimaryButton
            text={<StyledLink to="/checkout">Go to checkout</StyledLink>}
          >
            {/* <Link to="/checkout" /> */}
          </PrimaryButton>
        </Wrapper>
      </Section>
    </>
  )
}

export default Cart
