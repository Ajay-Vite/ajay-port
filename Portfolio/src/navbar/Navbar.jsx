import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    {/* Navbar basics */}
    <div className='Nav-1' id='home'>
        <h1>AJAY</h1>
        <p><a href="#home">Home</a></p>
        <p><a href="#cards">Services</a></p>
        <p><a href="#jor">My Journey</a></p>
        <p><a href="#inputs">Contact Me</a></p>

        <div className="nav-toggle" id='Navbartoggle'>
          <h1>🌫️</h1>
        </div>
    
     </div>

     <div className="side-nav" id='sidenavbar'>
        <h1 id='close'>X</h1>
        <br />
         <p><a href="">Home</a></p>
        <p><a href="">Services</a></p>
        <p><a href="">My Journey</a></p>
        <p><a href="">Contact Me</a></p>
     </div>
      </>
  )
}

export default Navbar