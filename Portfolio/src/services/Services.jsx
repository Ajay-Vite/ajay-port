import React from 'react'
import '../services/Services.css'
import img1 from '../services/download.jfif'
import img2 from '../services/download (1).jfif'
import img3 from '../services/download (2).jfif'

const Services = () => {
  return (
    <>
    <div>
        <h1 className='ser-h1' id='cards'>Services</h1>
    </div>

   <div className="cards">
     <div className="card-1">
        <img src={img1} alt="" />
     </div>

     <div className="card-2">
        <img src={img2} alt="" />
     </div>
     <div className="card-3">
     <img src={img3} alt="" />
     </div>
   </div>

    </>
  )
}

export default Services