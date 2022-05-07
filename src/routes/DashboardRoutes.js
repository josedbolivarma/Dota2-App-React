import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../pages/Hero'

const DashboardRoutes = () => {
  return (
    <div>
      <Header />
    <Routes>
        {/* Dashboard */}
        <Route path='/' element={<App />}/>
        {/* Dashboard */}
        <Route path='/hero' element={<Hero />}/>
    </Routes>
    <Footer />
    </div>
  )
}

export default DashboardRoutes