import React from 'react'
import About from '../components/About/About'
import Menu from '../components/Menu/Menu'
import Reservation from '../components/Reservation/Reservation'
import Team from '../components/Team/Team'
import Testimonial from '../components/Testimonial/Testimonial'
import Layout from '../components/Layout/Layout'
import Banner from '../components/Banner/Banner'

const HomePage = () => {
  return (
    <div className="container-xxl bg-white p-0">
    <Layout>
    <Banner />
    <About />
    <Menu />
    <Reservation />
    <Team />
    <Testimonial />
    </Layout>
    </div>
  )
}

export default HomePage