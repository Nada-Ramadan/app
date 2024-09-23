// import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation();
  const pathName = location.pathname
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">

            <Link  className={pathName == "/home" ? "nav-link active" :  "nav-link" } aria-current="page" to={"/home"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link  className={pathName == "/about" ? "nav-link active" :  "nav-link" } to={"/about"}>About</Link>
          </li>
          <li className="nav-item">
            <Link  className={pathName == "/services" ? "nav-link active" :  "nav-link" } aria-disabled="true" to={"/services"}>Services</Link>
          </li>
          <li className="nav-item">
            <Link  className={pathName == "/projects" ? "nav-link active" :  "nav-link" } aria-disabled="true" to={"/projects"}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link  className={pathName == "/movies" ? "nav-link active" :  "nav-link" } aria-disabled="true" to={"/movies"}>Movies</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}