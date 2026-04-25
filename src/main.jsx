// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React , { lazy , Suspense } from 'react'

import App from './App' 
import Loader from './pages/Loader'


createRoot(document.getElementById('root')).render(
    <Suspense fallback={<Loader/>}>
      <App />
    </Suspense>
  
)
