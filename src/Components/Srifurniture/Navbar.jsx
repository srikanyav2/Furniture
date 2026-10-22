import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand " to="/">srikanya <span className="text-danger">Furniture</span></Link>
      </div>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">Product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/catagires">Catagires</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-danger me-3" to="/login">Adminlogin</Link>

          </li>
        </ul>

      </div>
    </nav>

  )
}

export default Navbar