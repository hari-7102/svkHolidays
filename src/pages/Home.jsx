import React from 'react'
import Hero from "../allComponents/homeComponent/Hero"
import Navbar from '../allComponents/Navbar'
import About from "../allComponents/aboutComponent/AboutHero"
import Experience from '../allComponents/homeComponent/Experience'
import Footer from '../allComponents/Footer'
import { AnimatedTestimonialsDemo } from '../allComponents/homeComponent/Animated_test'
import HeaderPhn from "../allComponents/homeComponent/HeaderPhn"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeaderPhn />
      <Hero />
      <About />
      <AnimatedTestimonialsDemo />
      <Experience />
      
      
      <Footer />
    </div>
  )
}

export default Home
