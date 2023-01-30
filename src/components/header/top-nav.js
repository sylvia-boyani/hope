// import React from "react";
// import {useState} from 'react'


// const TopNav = () => {
//   const[activeNav, setActiveNav] = useState('#')
//     return (
//       <div className= "top">
//       <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav=== "#header" ? "active" : ""}>Home</a>
//       <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav=== "#About" ? "active" : ""}>About</a>
//       <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav=== "#experience" ? "active" : ""}>Projects</a>
//       <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav=== "#services" ? "active" : ""}>News</a>
//       <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav=== "#portfolio" ? "active" : ""}>Leaders</a>
//       <a href="#Donate" onClick={() => setActiveNav('#Donate')} className={activeNav=== "#Donate" ? "active" : ""}>Support</a>
//       </div>
//     )
//   }


//   export default TopNav

import navbar from './navbar';

const Smheader = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          Logo
        </a>
        <navbar />
      </div>
    </header>
  );
};

export default Smheader;