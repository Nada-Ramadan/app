import React, { useContext } from 'react';
import logo from '../../Assets/images/freshcart-logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';
import { CartContext } from '../../Context/CartContext';

export default function Navbar() {

  const { userIsLoggedIn,setUserIsLoggedIn } = useContext(authContext)
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

   function logOut(){
    setUserIsLoggedIn(false)
    localStorage.removeItem('token')
    navigate('/login')
  }

  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link to={""} className="navbar-brand">
          <img src={logo} alt="fresh cart logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userIsLoggedIn && <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to = {"/home"}className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/cart"} className="nav-link">Cart</Link>
            </li>
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to={"/categories"} className="nav-link">Categories</Link>
            </li>
            <li className="nav-item">
              <Link to={"brands"} className="nav-link">Brands</Link>
            </li>
          </ul>}

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center">
              <i className='fa-solid fa-cart-shopping fa-1x posation-relative'>
                <span className='posaition-absolute top-0 start-100 translate-middle bg-success p-2 rounded-circle font-sm'>
                  {cart?.numOfCartItems || 0}
                </span>
              </i>
              <i className='fab mx-2 fa-facebook'></i>
              <i className='fab mx-2 fa-twitter'></i>
              <i className='fab mx-2 fa-instagram'></i>
              <i className='fab mx-2 fa-youtube'></i>
              <i className='fab mx-2 fa-tiktok'></i>
            </li>
            
              {userIsLoggedIn ? <li className="nav-item">
                <span onClick={logOut} className="nav-link cursor-pointer">Logout</span>
              </li> 
              :
              <>
               <li className="nav-item">
                <Link to={"/login"} className="nav-link" >Login</Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">Register</Link>
              </li>
             </>
            }
          </ul>
        </div>
      </div>
    </nav>
  </>
}
