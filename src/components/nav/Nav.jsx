import React from 'react'
import './nav.css'
import {ImHome3} from 'react-icons/im'
import {FaUsers} from 'react-icons/fa'
import {MdOutlineConstruction} from 'react-icons/md'
import {FaChurch} from 'react-icons/fa'
import {BiDonateHeart} from 'react-icons/bi'
import {MdPermMedia} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#Home" onClick={() => setActiveNav('#Home')} className={activeNav=== "#Home" ? "active" : ""}><ImHome3 /></a>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav=== "#About" ? "active" : ""}><FaUsers /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav=== "#experience" ? "active" : ""}><MdOutlineConstruction /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav=== "#services" ? "active" : ""}><FaChurch /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav=== "#portfolio" ? "active" : ""}><MdPermMedia /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav=== "#contact" ? "active" : ""}><BiDonateHeart /></a>
      
    </nav>
  )
}

export default Nav
