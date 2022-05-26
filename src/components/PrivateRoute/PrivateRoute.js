import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { Context } from '../../context/context'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(Context)

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to='/login' />
      }}
    ></Route>
  )
}

export default PrivateRoute
