import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram }from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import dove from  '../../assets/dove.png'

const footer = () => {
  return (
       <footer>
      <img id ="logo" src={dove} alt="" />

       <ul className="permalinks">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#experience">Projects</a></li>
        <li><a href="#services">News</a></li>
        <li><a href="#portfolio">Support</a></li>
        <li><a href="#testimonials">Support</a></li>
        <li><a href="#contact">Support</a></li>
        </ul>
        <div className="footer_socials">
          <a href="https://facebook.com"><BsFacebook /></a>
          <a href="https://facebook.com"><FiInstagram /></a>
          <a href="https://facebook.com"><BsTwitter /></a>
        </div>

        <div className='footer_copyright'>
         <small>&copy; TUMAINI MINISTRIES. All rights reserved.</small>
        </div>
       </footer>    
  )
}

export default footer
