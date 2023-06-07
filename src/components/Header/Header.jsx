/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
 const Header = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <Link  className="navbar-brand p-0" to="/">
            <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
            {/* <img src="/assets/img/logo.png" alt="Logo"/> */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
            <Link className="nav-item nav-link" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/about">About</Link>
                <Link className="nav-item nav-link" to="/service">Service</Link>
                <Link className="nav-item nav-link" to="/menu">Menu</Link>
                {/* <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                    <Link className="nav-item nav-link" to="/menu">Booking</Link>
                    <Link className="nav-item nav-link" to="/team">Team</Link>
                    <Link className="nav-item nav-link" to="/testimonial">Testimonial</Link>
                    </div>
                </div> */}
                <Link className="nav-item nav-link" to="/contact">Contact</Link>

            </div>
            <Link className="nav-item nav-link" to="/reservation">Book A Table</Link>

        </div>
    </nav>
  )
}

export default Header
