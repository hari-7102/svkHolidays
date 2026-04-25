import React from 'react'
import Navbar from '../allComponents/Navbar'
import Review from '../allComponents/reviewComponent/ReviewHero'
import Footer from '../allComponents/Footer'
import HeaderPhn from '../allComponents/homeComponent/HeaderPhn'

const ReviewPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderPhn />
      <Review />
      <Footer />
    </div>
  )
}

export default ReviewPage
