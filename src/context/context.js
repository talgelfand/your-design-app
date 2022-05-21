import React, { createContext, useEffect, useState } from 'react'
import app, { auth } from '../firebase'
import firebase from 'firebase/app'

const Context = createContext()

const ContextProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [currentUser, setCurrentUser] = useState()
  const [authLoading, setAuthLoading] = useState(true)
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [artist, setArtist] = useState('')

  const ref = firebase.firestore().collection('users')
  const userID = app.auth().currentUser && app.auth().currentUser.uid
  const user = userID && app.firestore().collection('users').doc(userID)

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      return ref.doc(cred.user.uid).set({
        email: email,
        phone: phone,
        name: name,
        artist: artist,
        cartItems: cartItems,
      })
    })
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    return auth.signOut()
  }

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setAuthLoading(false)
    })

    return unsubscribe
  }, [])

  return (
    <Context.Provider
      value={{
        allCourses,
        cartItems,
        setAllCourses,
        setCartItems,
        signup,
        login,
        currentUser,
        logout,
        resetPassword,
        phone,
        name,
        artist,
        setPhone,
        setName,
        setArtist,
        user,
      }}
    >
      {!authLoading && children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
