import React from 'react'
import Navbar from '../allComponents/Navbar'
import AboutHero from '../allComponents/aboutComponent/HeroAbout'
import WhyFromUs from '../allComponents/aboutComponent/WhyChoose'
import Footer from '../allComponents/Footer'
import HeaderPhn from '../allComponents/homeComponent/HeaderPhn'
const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderPhn />
      <AboutHero />
      <WhyFromUs />
      <Footer />
    </div>
  )
}

export default AboutPage
