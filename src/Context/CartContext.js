import axios from "axios";
import { createContext, useEffect, useState } from "react";
import React from 'react'

export const CartContext = createContext()

export default function CartContextProvider( {children} ) {

  const [cart,setCart] = useState({})

  async function getLoggedInCartProduct(){

    try {

      const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
        headers:{
          token : localStorage.getItem('token')
        }
      })
      setCart(data.data)
      
    } catch (error) {
      console.log(error);
      
    } 
  }

  useEffect(() =>{
      getLoggedInCartProduct()
  },[])

  return <CartContext.Provider value = { { cart,setCart } }>
      {children}
  </CartContext.Provider>
}
