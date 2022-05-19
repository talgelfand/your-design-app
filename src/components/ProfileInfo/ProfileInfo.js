import React, { useContext, useEffect, useState } from "react"
import { Card, CardBody, Form, CardTitle, Label, CardText } from "reactstrap"
import styled from "styled-components"
import { Context } from "../../context/context"
import Loading from "../Loading"

const StyledCard = styled(Card)`
  width: 500px;
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  padding: 20px;
`

const StyledTitle = styled(CardTitle)`
  text-align: center;
  font-size: 18px;
`

const StyledLabel = styled(Label)`
  font-weight: bold;
  margin-top: 15px;
`

const StyledText = styled(CardText)`
  margin-top: 15px;
`

const ProfileInfo = () => {
  const {
    phone,
    name,
    artist,
    currentUser,
    setName,
    setPhone,
    setArtist,
    user,
  } = useContext(Context)
  const [loading, setLoading] = useState(false)

  const getUserData = () => {
    setLoading(true)
    user.get().then((doc) => {
      setPhone(doc.data()["phone"])
      setName(doc.data()["name"])
      setArtist(doc.data()["artist"])
    })

    setLoading(false)
  }

  useEffect(() => {
    getUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <StyledCard>
        <CardBody>
          <StyledTitle>Profile information</StyledTitle>
          <Form onSubmit={(e) => e.preventDefault()}>
            <StyledLabel>Email:</StyledLabel>
            <StyledText>{currentUser.email}</StyledText>
            <StyledLabel>Phone number:</StyledLabel>
            <StyledText>{phone}</StyledText>
            <StyledLabel>Name:</StyledLabel>
            <StyledText>{name}</StyledText>
            <StyledLabel>Favourite artist:</StyledLabel>
            <StyledText>{artist}</StyledText>
          </Form>
        </CardBody>
      </StyledCard>
    </>
  )
}

export default ProfileInfo
