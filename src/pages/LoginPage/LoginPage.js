import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Login from '../../components/Forms/Login'
import PrimaryLink from '../../components/PrimaryLink'
import Title from '../../components/Title'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #EFDAD7;
  }
`

const Section = styled.section`
  width: 400px;
  display: block;
  margin: 0 auto;
  margin-top: 200px;
`

const Subtitle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

const LoginPage = () => {
  return (
    <Section>
      <GlobalStyle />
      <Title text='Ieiet sava kontā' />
      <Login />
      <Subtitle>
        Don't have an account?
        <PrimaryLink path='signup' text='Izveidot kontu' margintop bold />
      </Subtitle>
    </Section>
  )
}

export default LoginPage
