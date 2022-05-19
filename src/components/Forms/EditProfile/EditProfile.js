import React, { useContext, useRef } from "react"
import { Card, CardBody, Form, Input, CardTitle, Label } from "reactstrap"
import styled from "styled-components"
import { Context } from "../../../context/context"
import PrimaryButton from "../../buttons/PrimaryButton"

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

const StyledInput = styled(Input)`
  width: 300px;
  margin-top: 20px;
`

const StyledLabel = styled(Label)`
  font-weight: bold;
  margin-top: 15px;
`

const EditProfile = () => {
  const {
    phone,
    name,
    artist,
    setPhone,
    setName,
    setArtist,
    currentUser,
    user,
  } = useContext(Context)

  const nameRef = useRef()
  const phoneRef = useRef()
  const artistRef = useRef()

  const handleChange = () => {
    setName(nameRef.current.value)
    setPhone(phoneRef.current.value)
    setArtist(artistRef.current.value)
    user.update({ name: name, phone: phone, artist: artist })
  }

  const handleSubmit = () => {
    user.update({ name: name, phone: phone, artist: artist })
  }

  return (
    <>
      <StyledCard>
        <CardBody>
          <StyledTitle>Edit your profile</StyledTitle>
          <Form onSubmit={handleSubmit}>
            <StyledLabel>Email:</StyledLabel>
            <StyledInput disabled value={currentUser.email} />
            <StyledLabel>Phone number:</StyledLabel>
            <StyledInput
              innerRef={phoneRef}
              placeholder="Enter your phone number"
              onChange={handleChange}
            />
            <StyledLabel>Name:</StyledLabel>
            <StyledInput
              innerRef={nameRef}
              placeholder="Enter your name"
              onChange={handleChange}
            />
            <StyledLabel>Favourite artist:</StyledLabel>
            <StyledInput
              innerRef={artistRef}
              placeholder="Enter the artist name"
              onChange={handleChange}
            />
            <PrimaryButton text="Submit" type="submit" margintop />
          </Form>
        </CardBody>
      </StyledCard>
    </>
  )
}

export default EditProfile
