import React from 'react'
import Navbar from '../allComponents/Navbar'
import TripHero from '../allComponents/tripComponent/TripHero'
import Footer from '../allComponents/Footer'
import HeaderPhn from '../allComponents/homeComponent/HeaderPhn'






const TripPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderPhn />
      <TripHero />
      <Footer/>
    </div>
  )
}

export default TripPage
