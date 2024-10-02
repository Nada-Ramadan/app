import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <>
        <div className='py-5 my-5 text-center'>
            <h1>404</h1>
            <h2 className='my-3'>Page Not Found</h2>
            <Link to={"/"}>
                <button className='btn btn-outline dark'>Go To Home</button>
            </Link>
            
        </div>
      
    </>
  )
}
