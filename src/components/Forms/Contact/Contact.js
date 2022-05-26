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
              <StyledLink href="mailto: your-design@gmail.com">
                your-design@gmail.com
              </StyledLink>
            </li>
            <li>
              <Span>Phone: </Span>{" "}
              <StyledLink href="tel:+37122345678">+371 22345678</StyledLink>
            </li>
            <li>
              <Span>Instagram: </Span> @your_design_brand
            </li>
            <li>
              <Span>Facebook: </Span> Your Design
            </li>
          </ul>
        </CardBody>
      </StyledCard>
    </>
  );
};

export default Contact;
