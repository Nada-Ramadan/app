import { createContext, useState } from "react";
import React from 'react'

const authContext = createContext

export default function AuthContextProvider( {children} ) {
    const [isLogged,setIsLogged] = useState(false)
  return <authContext.provider >
  {children}
  </authContext.provider>
}
