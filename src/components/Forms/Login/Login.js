import React, { useRef, useState, useContext } from 'react'
import { useHistory } from 'react-router'
import { Form, FormGroup, Input, Label, Alert, Card, CardBody } from 'reactstrap'
import styled from 'styled-components'
import { Context } from '../../../context/context'
import PrimaryButton from '../../buttons/PrimaryButton'
import PrimaryLink from '../../PrimaryLink'

const StyledCard = styled(Card)`
  margin-top: 30px;
`

const StyledLabel = styled(Label)`
  margin-top: 20px;
`

const StyledInput = styled(Input)`
  margin-top: 10px;
`

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useContext(Context)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Lietotājs nav atrasts')
    }
    setLoading(false)
  }

  return (
    <StyledCard>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          {error && <Alert color='danger'>{error}</Alert>}
          <FormGroup>
            <StyledLabel for='email'>E-pasts:</StyledLabel>
            <StyledInput innerRef={emailRef} type='email' id='email' />
          </FormGroup>
          <FormGroup>
            <StyledLabel for='password'>Parole:</StyledLabel>
            <StyledInput innerRef={passwordRef} type='password' id='password' />
          </FormGroup>
          <PrimaryLink path='/reset-password' text='Aizmirsi paroli?' margintop />
          <PrimaryButton centered margintop text='Ieet kontā' disabled={loading} type='submit' />
        </Form>
      </CardBody>
    </StyledCard>
  )
}

export default Login
