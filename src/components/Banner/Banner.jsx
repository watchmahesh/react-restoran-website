import React from 'react'
import {Link} from 'react-router-dom'
const Banner = () => {
  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
            <div className="row align-items-center g-5">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br/>Delicious Meal</h1>
                    <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <Link className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft" to="/">Book A Table </Link>
                </div>
                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img className="img-fluid" src="/assets/img/hero.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;