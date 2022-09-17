import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id ="experience">
      <h2>Current and Future Projects</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Current Projects</h3>
          <article className="experience_details">
            <BsPatchCheckFill />
           <div>
           <h4>Tumati</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill />
           <div>
           <h4>Lamu House</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill />
           <div>
           <h4>Discipleship and Rehab</h4>
            <small className="text-light">Operational</small>
           </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill />
            <div>
            <h4>Mabadiliko ya Wanadada</h4>
            <small className="text-light">Operational</small>
            </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill />
            <div>
            <h4>Tumaini Apartments</h4>
            <small className="text-light">Operational</small>
            </div>
          </article>
        </div>
       
        <div className="experienced_backend">
        <h3>Future Projects</h3>
          <article className="experience_details">
            <BsPatchCheckFill />
            <div>
            <h4>Buy land</h4>
            <small className="text-light">In Progress</small>
            </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill />
            <div>
            <h4>Farming</h4>
            <small className="text-light">Started</small>
            </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill />
            <div>
            <h4>Pastors Training</h4>
            <small className="text-light">Future</small>
            </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill />
            <div>
            <h4>Mabadiliko ya Wanaume</h4>
            <small className="text-light">Future</small>
            </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill />
            <div>
            <h4>Tumaini Real-Estate</h4>
            <small className="text-light">Future</small>
            </div>
          </article>
        </div>
      
      </div>
    </section>
  )
}

export default experience
