import React from 'react';
import logo from '../../Assets/images/freshcart-logo.svg'
import { Link } from 'react-router-dom';

export default function Navbar() {

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center">
              <i className='fab mx-2 fa-facebook'></i>
              <i className='fab mx-2 fa-twitter'></i>
              <i className='fab mx-2 fa-instagram'></i>
              <i className='fab mx-2 fa-youtube'></i>
              <i className='fab mx-2 fa-tiktok'></i>
            </li>
            <>
              <li className="nav-item">
                <Link href = "*" className="nav-link" >Login</Link>
              </li>
              <li className="nav-item">
                <Link href = "*" className="nav-link">Register</Link>
              </li>
            </>
            <li className="nav-item">
              <span className="nav-link cursor-pointer">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}