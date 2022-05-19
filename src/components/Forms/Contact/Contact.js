import React from "react";
import { Card, CardBody } from "reactstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  padding: 20px;
  width: 400px;
  display: block;
  margin: 0 auto;
  margin-top: 50px;
`;

const Span = styled.span`
  font-weight: bold;
`;

const StyledLink = styled.a`
  color: var(--dark-color);
  &:hover {
    color: var(--accent-color);
  }
`;

const Contact = () => {
  return (
    <>
      <StyledCard>
        <CardBody>
          <ul>
            <li>
              <Span>E-mail: </Span>
              <StyledLink href="mailto: artacademy@gmail.com">
                art.academy@gmail.com
              </StyledLink>
            </li>
            <li>
              <Span>Phone: </Span>{" "}
              <StyledLink href="tel:+37122345678">+371 22345678</StyledLink>
            </li>
            <li>
              <Span>Instagram: </Span> @artacademy
            </li>
            <li>
              <Span>Facebook: </Span> Art Academy
            </li>
          </ul>
        </CardBody>
      </StyledCard>
    </>
  );
};

export default Contact;
