import React from 'react'
import './nav.css'
import {ImHome3} from 'react-icons/im'
import {FaUsers} from 'react-icons/fa'
import {MdOutlineConstruction} from 'react-icons/md'
import {FaChurch} from 'react-icons/fa'
import {BiDonateHeart} from 'react-icons/bi'
import {MdPermMedia} from 'react-icons/md'

const nav = () => {
  return (
    <nav>
      <a href="#Home" className="active"><ImHome3 /></a>
      <a href="#About"><FaUsers /></a>
      <a href="#experience"><MdOutlineConstruction /></a>
      <a href="#services"><FaChurch /></a>
      <a href="#portfolio"><MdPermMedia /></a>
      <a href="#Donate"><BiDonateHeart /></a>
      
    </nav>
  )
}

export default nav
