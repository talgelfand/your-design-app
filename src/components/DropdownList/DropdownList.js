import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap'
import styled from 'styled-components'
import { Context } from '../../context/context'

const StyledDropdown = styled(DropdownToggle)`
  background-color: var(--accent-color);
  border-color: var(--accent-color);
`

const DropdownList = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const [error, setError] = useState('')
  const { currentUser, logout } = useContext(Context)
  const history = useHistory()

  const handleLogout = async () => {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <StyledDropdown caret>{currentUser.email}</StyledDropdown>
      <DropdownMenu>
        <DropdownItem onClick={handleLogout}>Log out</DropdownItem>
        {error && <DropdownItem disabled>{error}</DropdownItem>}
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropdownList
