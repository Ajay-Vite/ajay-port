import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Services from './services/Services'
import Journey from './My Journey/Journey'
import Contact from './Contact page/Contact'
import Fotter from '../src/fotter/Fotter'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Journey />
      <Contact />
      <Fotter />
    </div>
  )
}

export default App