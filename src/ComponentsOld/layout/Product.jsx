import React, { Component } from 'react'

export default class Product extends Component {
    
  render() {
    let index = this.props.index
    let product = this.props.product
    let updateProduct = this.props.updateProduct
    let deleteProduct = this.props.deleteProduct
    return (
      <div className='product text-center p-3 rounded-3 bg-secondary text-black text-center position-relative'>
        {
            product.onSale &&
            <span className='bg-success text-white p-3 position-absolute rounded-circle  top-0 end-0 m-2'>sale</span>
        }
        <h3>Product Count:</h3>
        <h3>{product.count}</h3>
        <h1>{product.onSale + ""}</h1>
        <h3>Product Name:</h3>
        <h5>{product.name}</h5>
        <h3>Product Price:</h3>
        <h5>{product.price}</h5>
        <h3>Product Category:</h3>
        <h5>{product.category}</h5>
        <h3>Product Description:</h3>
        <h5>{product.desc}</h5>
        <div className='d-flex justify-contant-center'>
        <button onClick= {()=> {updateProduct(index,product.count + 1)}} className='btn btn-outline-warning w-25'>+</button>
        <button onClick={() => {deleteProduct(index)}} className='btn btn-danger mx-3'>Delete</button>
        <button onClick= {()=> {updateProduct(index,(product.count) - 1)}} className='btn btn-outline-warning w-25'>-</button>
        </div>
      </div>
    )
  }
}
