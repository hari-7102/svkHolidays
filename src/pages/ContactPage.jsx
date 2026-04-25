import React from 'react'
import Navbar from '../allComponents/Navbar'

import Footer from '../allComponents/Footer'
import Contact from '../allComponents/contactComponent/ContactHero'
import HeaderPhn from '../allComponents/homeComponent/HeaderPhn'
const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderPhn />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage
