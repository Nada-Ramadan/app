import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import img1 from '../../Assets/images/1.jpg'
import img2 from '../../Assets/images/2.jpg'

export default function Home() {

  const [products , setProducts ] = useState([])

  async function getAllProduct(){
    const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products")
    setProducts(data.data)
    
  }
  useEffect(()=>{
    getAllProduct()
  }, [])
  
  return <>
  <div className='row'>
    { products.map((product)=>{
      return <div key = {product.id} className='col-md-3'>
        <Product product={product} />
      </div>
    })}
    </div>
  </>
}
