import React from 'react'
import './header.css'
// import first from '../../assets/six.jpeg'
import HeaderSocial from "./HeaderSocials"
import TopNav from './top-nav'
import dove from '../../assets/dove.png'

const header = () => {
  return (
    <header>
      <video src={""} autoPlay loop muted />
        <TopNav /><br></br><br></br>

      <div className="container header_container">
        <h5>Hello, Welcome to</h5>
        <h1>Tumaini Ministries</h1>
        <h5 className= "text-light">Needing Jesus Christ Together</h5>
        <img id ="logo" src={dove} alt="" />
        <HeaderSocial />
        

        <div className= "me">
        {/* <img src={first} alt= "First"/> */}
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>

      </div>
    </header>
  )
}

export default header
