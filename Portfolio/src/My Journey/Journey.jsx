import React from 'react'
import '../My Journey/Journey.css'
import Road from '../My Journey/download.png'

const Journey = () => {
  return (
    <>
    <div>
        <p className="display" id='jor'>My MERN Journey</p>
    </div>

    <div className="j-img">
        <img src={Road} alt="" />
    </div>
    </>
  )
}

export default Journey