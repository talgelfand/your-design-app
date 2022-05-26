import React, { useContext } from "react";
import cart from "./cart.png";
import logo from "./logo.jpg";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../../context/context";
import PrimaryButton from "../buttons/PrimaryButton";
import DropdownList from "../DropdownList";

const Section = styled.section`
  position: fixed;
  top: 0;
  padding: 0 60px 0 60px;
  width: 100%;
  min-height: 100px;
  background-color: var(--dark-color);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const Title = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 32px;
  &:hover {
    color: #fff;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CartLink = styled(Link)`
  width: 10%;
`;

const CartIcon = styled.img`
  width: 70%;
`;

const LogoLink = styled(Link)`
  width: 10%;
`;

const LogoIcon = styled.img`
  width: 90%;
`;

const Header = () => {
  const { currentUser } = useContext(Context);
  const history = useHistory();

  return (
    <Section>
      <LogoLink to="/">
        <LogoIcon src={logo} alt="logo" />
      </LogoLink>
      <Menu>
        <CartLink to="/cart">
          <CartIcon src={cart} alt="cart" />
        </CartLink>
        {currentUser ? (
          <DropdownList />
        ) : (
          <PrimaryButton
            text="Sign in"
            clickEvent={() => history.push("/login")}
            darkbg
          />
        )}
      </Menu>
    </Section>
  );
};

export default Header;
