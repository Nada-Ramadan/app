import { createContext, useEffect, useState } from "react";
import React from 'react'

export const authContext = createContext()

export default function AuthContextProvider( {children} ) {

  const [userIsLoggedIn,setUserIsLoggedIn] = useState(!!localStorage.getItem('token'))

  // useEffect(() =>{
  //   if(localStorage.getItem('token') != null){
  //     setUserIsLoggedIn(true)
  //   }
  // },[])

  return <authContext.Provider value = { { userIsLoggedIn,setUserIsLoggedIn } }>
      {children}
  </authContext.Provider>
}
