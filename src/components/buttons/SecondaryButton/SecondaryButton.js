import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  display: block;
  margin-top: ${(props) => (props.margintop ? "20px" : "0")};
  background-color: var(--dark-color);
  border: var(--dark-color);
  &:hover {
    background-color: var(--accent-color);
  }
`;

const SecondaryButton = ({ text, clickEvent, ...props }) => {
  return (
    <StyledButton onClick={clickEvent} {...props}>
      {text}
    </StyledButton>
  );
};

export default SecondaryButton;
