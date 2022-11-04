import React from 'react'
import './header.css'
import HeaderSocial from "./HeaderSocials"
import TopNav from './top-nav'
import tuma from  '../../assets/tuma.png'
import video from '../../assets/video1.mp4'

const header = () => {
  return (
    <section id="header">
      <header>
      <video id ="vida" src={video} autoPlay loop muted />
        <TopNav />

      <div className="container header_container">
        <h5>Hello, Welcome to</h5>
        <h1>Tumaini Ministries Centre</h1>
        {/* <h3 className= "text-light">Needing Jesus Christ Together</h3> */}
        <img id ="logo" src={tuma} alt="" />
        <HeaderSocial />
        

        <div className= "me">
        {/* <img src={first} alt= "First"/> */}
        </div>
      </div>
      </header>
    </section>
  )
}

export default header
