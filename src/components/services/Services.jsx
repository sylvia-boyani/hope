import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

export const Services = () => {
  return (
    <section id= "services">
      <h2>Tumaini Churches Across Kenya</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
          <h3>Nairobi</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Kibera(Kisumu Ndogo)</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Raila</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>HighRidge</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Grogon</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Fuata Nyayo</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Kiambio</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Gituamba</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>New branch</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service_head">
          <h3>Mombasa</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Chwele</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Roka</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Malengo</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Changamoto</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Mapendekezo</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Hitimisho</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Sorogosa</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Saba saba-Hindi</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service_head">
          <h3>Western & Kilifi</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Busia</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Kibaoni</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Maram</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Povuni</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Mombasa</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Manda</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Nabemo</p>
            </li>

            <li>
              <BiCheck className="service_list-icon"/>
              <p>Mahamasi</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;