import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
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
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import Team from './pages/Team'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

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
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/team' element={<Team />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App