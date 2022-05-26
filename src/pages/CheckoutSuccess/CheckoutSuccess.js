import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../../components/Title";

const StyledLink = styled(Link)`
  display: block;
  margin-top: 100px;
  text-align: center;
  color: var(--dark-color);
  font-weight: bold;
  font-size: 20px;
  transition: all 0.5s;
  &:hover {
    color: var(--primary-color);
    transform: scale(1.2);
  }
`;

const CheckoutSuccess = () => {
  return (
    <>
      <Title text="Palsies par Jūsu pirkumu." />
      <StyledLink to="/">Atgriezties mājas lapā</StyledLink>
    </>
  );
};

export default CheckoutSuccess;
