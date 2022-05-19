import React, { useContext, useEffect, useState } from "react"
import { CardElement, ElementsConsumer } from "@stripe/react-stripe-js"
import { useHistory } from "react-router"
import { Form } from "reactstrap"
import PrimaryButton from "../../buttons/PrimaryButton"
import CardSection from "../../CardSection"
import CheckoutItem from "../../CheckoutItem"
import Loading from "../../Loading"
import Title from "../../Title"
import firebase from "firebase/app"
import { Context } from "../../../context/context"
import { remove } from "../../../utils/utils"

const Checkout = ({ stripe, elements }) => {
  const { cartItems, setCartItems, wishlistItems, setWishlistItems, user } =
    useContext(Context)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const getUserData = () => {
    setLoading(true)
    user.get().then((doc) => {
      setCartItems(doc.data()["cartItems"])
    })
    user.get().then((doc) => {
      setWishlistItems(doc.data()["wishlistItems"])
      setLoading(false)
    })
  }

  useEffect(() => {
    getUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const courses = cartItems.map((item) => {
    const removeItem = (id) => {
      const newItems = remove(user, cartItems, "cartItems", id, item)
      setCartItems(newItems)
    }
    return <CheckoutItem key={item.id} {...item} removeItem={removeItem} />
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    const result = await stripe.createToken(card)

    if (result.error) {
      history.push("/error")
    } else {
      cartItems.forEach((item) => {
        const newItems = wishlistItems.filter((course) => {
          return course.id !== item.id
        })

        setWishlistItems(newItems)

        wishlistItems.forEach((course) => {
          if (course.id === item.id) {
            user.update({
              wishlistItems: firebase.firestore.FieldValue.arrayRemove(course),
            })
          }
        })

        user.update({
          myCourses: firebase.firestore.FieldValue.arrayUnion(item),
        })
      })

      user.update({ cartItems: [] })
      history.push("/success")
    }
  }

  if (loading) {
    return <Loading />
  }

  if (courses.length === 0) {
    return <Title text="No courses to buy" />
  }

  return (
    <>
      <Title text="Checkout" />
      {courses}
      <Form onSubmit={handleSubmit}>
        <CardSection />
        <PrimaryButton
          margintop
          centered
          text="Buy now"
          clickEvent={handleSubmit}
        />
      </Form>
    </>
  )
}

const InjectedCheckout = () => {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <Checkout stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  )
}

export default InjectedCheckout
