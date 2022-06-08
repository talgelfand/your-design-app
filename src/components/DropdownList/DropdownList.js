import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
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
      setError('Neizdevās iziet no konta')
    }
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <StyledDropdown caret>{currentUser.email}</StyledDropdown>
      <DropdownMenu>
        <DropdownItem onClick={handleLogout}>Izlogoties no konta</DropdownItem>
        {error && <DropdownItem disabled>{error}</DropdownItem>}
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropdownList
