import React, { useContext } from 'react'
import cart from './cart.png'
import logo from './logo_transparent.png'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../../context/context'
import PrimaryButton from '../buttons/PrimaryButton'
import DropdownList from '../DropdownList'
import { FaShoppingCart } from 'react-icons/fa'

const Section = styled.section`
  position: absolute;
  top: 0;
  padding: 0 60px;
  width: 100%;
  min-height: 100px;
  background-image: linear-gradient(44.8deg, rgba(255, 221, 136, 0.28) -53%, rgba(255, 136, 102, 0.37) 90%);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const CartLink = styled(Link)`
  svg {
    width: 40px;
    height: 40px;
    fill: var(--dark-color);
  }

  margin-right: 100px;
`

const LogoLink = styled(Link)`
  width: 10%;
`

const LogoIcon = styled.img`
  width: 250px;
  height: 100px;
  object-fit: cover;
`

const Header = () => {
  const { currentUser } = useContext(Context)
  const history = useHistory()

  return (
    <Section>
      <LogoLink to='/'>
        <LogoIcon src={logo} alt='logo' />
      </LogoLink>
      <Menu>
        <CartLink to='/cart'>
          <FaShoppingCart />
        </CartLink>
        {currentUser ? <DropdownList /> : <PrimaryButton text='Sign in' clickEvent={() => history.push('/login')} darkbg />}
      </Menu>
    </Section>
  )
}

export default Header
