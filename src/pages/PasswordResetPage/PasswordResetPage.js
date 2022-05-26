import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PasswordReset from '../../components/Forms/PasswordReset'
import PrimaryLink from '../../components/PrimaryLink'
import Title from '../../components/Title'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--bg-color);
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

const PasswordResetPage = () => {
  return (
    <Section>
      <GlobalStyle />
      <Title text='Atjaunot paroli' />
      <PasswordReset />
      <Subtitle>
        <PrimaryLink path='/login' text='Ieiet sava kontā' bold />
      </Subtitle>
    </Section>
  )
}

export default PasswordResetPage
