import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Signup from "../../components/Forms/Signup";
import PrimaryLink from "../../components/PrimaryLink";
import Title from "../../components/Title";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--bg-color);
  }
`;

const Section = styled.section`
  width: 400px;
  display: block;
  margin: 0 auto;
  margin-top: 200px;
`;

const Subtitle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const SignupPage = () => {
  return (
    <Section>
      <GlobalStyle />
      <Title text="Sign up" />
      <Signup />
      <Subtitle>
        <PrimaryLink path="login" text="Log in" bold />
      </Subtitle>
    </Section>
  );
};

export default SignupPage;
