import React from 'react'
import './header.css'
import HeaderSocial from "./HeaderSocials"
import TopNav from './top-nav'
import dove from  '../../assets/dove.png'
import video from '../../assets/video1.mp4'

const header = () => {
  return (
    <header>
      <video id ="vida" src={video} autoPlay loop muted />
        <TopNav /><br></br><br></br>

      <div className="container header_container">
        <h5>Hello, Welcome to</h5>
        <h1>Tumaini Ministries</h1>
        {/* <h3 className= "text-light">Needing Jesus Christ Together</h3> */}
        <img id ="logo" src={dove} alt="" />
        <HeaderSocial />
        

        <div className= "me">
        {/* <img src={first} alt= "First"/> */}
        </div>
      </div>
    </header>
  )
}

export default header
