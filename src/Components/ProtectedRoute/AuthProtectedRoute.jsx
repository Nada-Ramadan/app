import React, { createContext, useContext } from 'react'
import { authContext } from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function AuthProtectedRoute( { children } ) {
    const { userIsLoggedIn,setUserIsLoggedIn } = useContext(authContext)
  return (
    <>
      {userIsLoggedIn ? <Navigate to={"/home"} /> : children}
    </>
  )
}
