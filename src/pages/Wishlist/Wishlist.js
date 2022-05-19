import React, { useContext, useEffect, useState } from "react"
import { Context } from "../../context/context"
import styled from "styled-components"
import WishlistItem from "../../components/WishlistItem"
import { Button } from "reactstrap"
import Title from "../../components/Title"
import Loading from "../../components/Loading"
import { remove } from "../../utils/utils"

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

const Wishlist = () => {
  const { wishlistItems, setWishlistItems, user } = useContext(Context)
  const [loading, setLoading] = useState(false)

  const getCourses = () => {
    setLoading(true)
    user.get().then((doc) => {
      setWishlistItems(doc.data()["wishlistItems"])
      setLoading(false)
    })
  }

  useEffect(() => {
    getCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clearAllCourses = () => {
    user.update({ wishlistItems: [] })
    setWishlistItems([])
  }

  const courses = wishlistItems.map((item) => {
    const removeItem = (id) => {
      const newItems = remove(user, wishlistItems, "wishlistItems", id, item)
      setWishlistItems(newItems)
    }

    return <WishlistItem key={item.id} {...item} removeItem={removeItem} />
  })

  if (loading) {
    return <Loading />
  }

  if (courses.length === 0) {
    return <Title text="No courses saved to wishlist" />
  }

  return (
    <Section>
      {courses}
      <StyledButton color="link" onClick={clearAllCourses}>
        Clear all
      </StyledButton>
    </Section>
  )
}

export default Wishlist
