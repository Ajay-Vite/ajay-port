import React from 'react'
import './Hero.css'
import Image from '../hero/download.jfif'
import MERN from '../hero/download-removebg-preview.png'

const Hero = () => {

  return (
    <>
    <div className='hero-1'>
        <h1 className='Hero-1'>Hi,there'</h1>
        <b></b>
        <h3 id='Auto'>Iam , <span>Ajay Arumugam</span></h3>
        <br />
        <img src={MERN} alt=""  className='MERN-img'/>
        <br />
        <br />
        <br />
        <br />
        <p className='mern'><span className='m1'>MERN</span> <span className='m3'>FULL</span> STACK <span className='m2'>DEVELOPER</span></p>
        <br />
        <button className='BTN-1'>Scroll Down</button>
    </div>
    
        <div className="photo">
            <img src={Image} alt="" className='Img'/>
        </div>

    </>
    
  )
}

export default Hero