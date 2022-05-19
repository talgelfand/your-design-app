import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import CartItem from "../../components/CartItem"
import Title from "../../components/Title"
import Loading from "../../components/Loading"
import { Context } from "../../context/context"
import { remove } from "../../utils/utils"

const Section = styled.section`
  margin-top: 200px;
  margin-left: 50px;
`

const MyCourses = () => {
  const { myCourses, setMyCourses, user } = useContext(Context)
  const [loading, setLoading] = useState(false)

  const getUserData = () => {
    setLoading(true)
    user.get().then((doc) => {
      setMyCourses(doc.data()["myCourses"])
      setLoading(false)
    })
  }

  useEffect(() => {
    getUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const courses = myCourses.map((item) => {
    const removeItem = (id) => {
      const newItems = remove(user, myCourses, "myCourses", id, item)
      setMyCourses(newItems)
    }

    return <CartItem key={item.id} {...item} removeItem={removeItem} />
  })

  if (loading) {
    return <Loading />
  }

  if (courses.length === 0) {
    return <Title text="No courses purchased" />
  }

  return (
    <>
      <Section>
        <Title text="My courses" />
        {courses}
      </Section>
    </>
  )
}

export default MyCourses
