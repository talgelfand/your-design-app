import React, { useContext, useEffect, useState } from "react"
import CourseCard from "../CourseCard/CourseCard"
import styled from "styled-components"
import { Context } from "../../context/context"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { add } from "../../utils/utils"
import Loading from "../Loading"
import app from "../../firebase"

const Section = styled.section`
  position: relative;
  margin: 0 auto;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  justify-content: center;
  gap: 10px;
`

const CoursesGrid = () => {
  const {
    allCourses,
    setAllCourses,
    cartItems,
    wishlistItems,
    myCourses,
    user,
  } = useContext(Context)
  const [loading, setLoading] = useState(false)

  const ref = app.firestore().collection("courses").orderBy("id")

  const getCourses = () => {
    setLoading(true)
    ref.get().then((snapshot) => {
      const data = []
      snapshot.forEach((doc) => {
        data.push(doc.data())
      })

      setAllCourses(data)
      setLoading(false)
    })
  }

  useEffect(() => {
    getCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <Loading />
  }

  const courses = allCourses.map((course) => {
    const addToCart = () => {
      course.list = "cart"
      add(cartItems, myCourses, course, user)
    }

    const addToWishlist = () => {
      course.list = "wishlist"
      add(wishlistItems, myCourses, course, user)
    }

    return (
      <CourseCard
        key={course.id}
        id={course.id}
        {...course}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
      />
    )
  })

  return (
    <Section>
      {courses || <Loading />}
      <ToastContainer />
    </Section>
  )
}

export default CoursesGrid
