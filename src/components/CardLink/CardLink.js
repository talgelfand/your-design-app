import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 20px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: var(--dark-color);
  transition: all 0.3s;
  &:hover {
    color: var(--accent-color);
  }
`;

const CardLink = ({ path, text, ...props }) => {
  return (
    <StyledLink to={path} {...props}>
      {text}
    </StyledLink>
  );
};

export default CardLink;
