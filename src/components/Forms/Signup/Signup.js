import React, { useContext, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Form, FormGroup, Input, Label, Alert, Card, CardBody } from 'reactstrap'
import styled from 'styled-components'
import { Context } from '../../../context/context'
import PrimaryButton from '../../buttons/PrimaryButton'

const StyledCard = styled(Card)`
  margin-top: 30px;
`

const StyledLabel = styled(Label)`
  margin-top: 20px;
`

const StyledInput = styled(Input)`
  margin-top: 10px;
`

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useContext(Context)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Paroles nesakrit')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/')
      toast.success('Konts ir izveidots')
    } catch {
      setError('Kļūda veidojot jaunu kontu')
    }
    setLoading(false)
  }

  return (
    <StyledCard>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          {error && <Alert color='danger'>{error}</Alert>}
          <FormGroup>
            <StyledLabel for='email'>Email:</StyledLabel>
            <StyledInput innerRef={emailRef} type='email' id='email' required />
          </FormGroup>
          <FormGroup>
            <StyledLabel for='password'>Password:</StyledLabel>
            <StyledInput innerRef={passwordRef} type='password' id='password' required />
          </FormGroup>
          <FormGroup>
            <StyledLabel for='password-confirm'>Password confirmation:</StyledLabel>
            <StyledInput innerRef={passwordConfirmRef} type='password' id='password-confirm' required />
          </FormGroup>
          <PrimaryButton text='Sign up' disabled={loading} type='submit' centered margintop />
        </Form>
      </CardBody>
      <ToastContainer />
    </StyledCard>
  )
}

export default Signup
