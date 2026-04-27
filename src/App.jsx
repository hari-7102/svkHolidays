import { BrowserRouter, Routes, Route } from "react-router";
import { lazy, Suspense } from 'react'
import ScrollToTop from '../src/lib/ScrollToTop'


const Home = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const TripPage = lazy(() => import('./pages/TripPage'))
const Tripgallery = lazy(() => import('./allComponents/tripComponent/LocationGallery'))
const ReviewPage = lazy(() => import('./pages/ReviewPage'))
const Contact = lazy(() => import('./pages/ContactPage'))
const Loader = lazy(() => import('./pages/Loader'))

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/trip" element={<TripPage />} />
          <Route path="/trip/:city" element={<Tripgallery />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
