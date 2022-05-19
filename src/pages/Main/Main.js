import React from "react"
import CoursesGrid from "../../components/CoursesGrid"
import Navbar from "../../components/Navbar"
import styled from "styled-components"

const Title = styled.h1`
  margin-top: 200px;
  text-align: center;
  font-size: 30px;
  color: var(--dark-color);
  font-weight: bold;
  text-shadow: 1px 1px var(--accent-color);
`

const Main = () => {
  return (
    <>
      <Navbar />
      <Title>Our best courses</Title>
      <CoursesGrid />
    </>
  )
}

export default Main
