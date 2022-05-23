import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  display: block;
  margin: ${(props) => (props.centered ? "auto" : "")};
  margin-top: ${(props) => (props.margintop ? "20px" : "0")};
  background-color: var(--accent-color);
  border: var(--accent-color);
  &:hover {
    background-color: ${(props) =>
      props.darkbg ? "var(--bg-color)" : "var(--dark-color)"};
  }
`;

const PrimaryButton = ({ text, type, clickEvent, ...props }) => {
  return (
    <StyledButton onClick={clickEvent} type={type} {...props}>
      {text}
    </StyledButton>
  );
};

export default PrimaryButton;
