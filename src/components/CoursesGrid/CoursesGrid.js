import React, { useContext } from 'react'
import CourseCard from '../CourseCard/CourseCard'
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

const CoursesGrid = () => {
  const { cartItems, user } = useContext(Context)

  const courses = data.courses.map((course) => {
    const addToCart = () => {
      course.list = 'cart'
      add(cartItems, course, user)
    }

    return (
      <CourseCard
        key={course.id}
        id={course.id}
        {...course}
        addToCart={addToCart}
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
