import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio' 
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { dom } from '@fortawesome/fontawesome-svg-core';


const App = () => {
  return (
   <>
   <Header />
   <Nav />
   <About />
   <Experience />
   <Services />
   <Portfolio />
   <Testimonials />
   <Contact />
   <Footer />   
   </>
  )
}

export default App;
