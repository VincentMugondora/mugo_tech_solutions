import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

const About = () => <div className='p-8'><h2 className='text-2xl font-bold'>About Us</h2></div>
const Services = () => <div className='p-8'><h2 className='text-2xl font-bold'>Services</h2></div>
const Contact = () => <div className='p-8'><h2 className='text-2xl font-bold'>Contact Us</h2></div>
const Pages = () => <div className='p-8'><h2 className='text-2xl font-bold'>Pages</h2></div>

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pages' element={<Pages />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App