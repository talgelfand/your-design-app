import React, { useRef, useState, useContext } from 'react'
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

const PasswordReset = () => {
  const emailRef = useRef()
  const { resetPassword } = useContext(Context)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Vēstule bija nosūtīta uz e-pastu, pārbaudiet tālāko informāciju vēstulē')
    } catch {
      setError('Neizdevās atjaunot paroli')
    }
    setLoading(false)
  }

  return (
    <StyledCard>
      <CardBody>
        {error && <Alert color='danger'>{error}</Alert>}
        {message && <Alert color='success'>{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <StyledLabel for='email'>E-pasts:</StyledLabel>
            <StyledInput innerRef={emailRef} type='email' id='email' />
          </FormGroup>
          <PrimaryButton text='Atjaunot' disabled={loading} type='submit' centered margintop />
        </Form>
      </CardBody>
    </StyledCard>
  )
}

export default PasswordReset
