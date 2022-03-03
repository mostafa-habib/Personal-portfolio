import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experince from './components/experince/Experince'
import Services from './components/services/Services'
import Portofilo from './components/portofilo/Portofilo'
// import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experince />
    <Services />
    <Portofilo />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
    
    </>
  )
}

export default App