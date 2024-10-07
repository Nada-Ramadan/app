import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from '../CartProduct/CartProduct';
import Swal from 'sweetalert2'

export default function Cart() {

  const [ cart, setCart ] = useState([])
  const [ timeOutId, setTimeOutId ] = useState()

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

  async function removeProductFromCart(productId){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data }  = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart/" + productId, {
          headers: {
            token : localStorage.getItem("token")
          }
        })
    
        setCart(data.data)
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

  }

  async function clearCart(){

    const {data}  = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart", {
      headers: {
        token : localStorage.getItem("token")
      }
    })
    setCart(data)
  }

   function updateCartProductCount(productId, count){

    if (count == 0) {

      removeProductFromCart(productId)

    } else {

      clearTimeout(timeOutId)

      setTimeOutId(

        setTimeout(async () => {

          const {data} = await axios.put("https://ecommerce.routemisr.com/api/v1/cart/"+ productId ,{
            count
          }, {
            headers:{
              token : localStorage.getItem('token')
            }
          })
          console.log(data.data);
          
          setCart(data.data)
          
        }, 500)

      )

    }
  }

  useEffect(() =>{

    getLoggedInCartProduct()

  }, [])

  return <>

  {cart.products  ? 
    <div className='my-5'>
      <button onClick={clearCart} className='btn btn-outline-danger d-block ms-auto'>Clear Cart</button>

      
      {cart?.products.map((cartProduct) =>{

        return <CartProduct key={cartProduct.product._id} cartProduct={cartProduct}  removeProductFromCart= {removeProductFromCart} updateCartProductCount= {updateCartProductCount}/>
        })}
      

      <div className='d-flex justify-content-between'>
        <Link className='btn bg-main text-white'>CheckOut</Link>
        <p>Total cart Price: {cart?.totalCartPrice} EGP</p>
      </div>

    </div>
  : 
    <h2 className='alert alert-warning text-center my-5'>No products in your cart</h2>
}

   
  
    
  </>
}
