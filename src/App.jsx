import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ITConsulting from './pages/services/ITConsulting'
import CloudSolutions from './pages/services/CloudSolutions'
import CustomSoftware from './pages/services/CustomSoftware'
import Cybersecurity from './pages/services/Cybersecurity'
import DigitalMarketing from './pages/services/DigitalMarketing'
import SEO from './pages/services/SEO'
import Design from './pages/services/Design'

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
        <Route path='/services/it-consulting' element={<ITConsulting />} />
        <Route path='/services/cloud-solutions' element={<CloudSolutions />} />
        <Route path='/services/custom-software' element={<CustomSoftware />} />
        <Route path='/services/cybersecurity' element={<Cybersecurity />} />
        <Route path='/services/digital-marketing' element={<DigitalMarketing />} />
        <Route path='/services/seo' element={<SEO />} />
        <Route path='/services/design' element={<Design />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pages' element={<Pages />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App