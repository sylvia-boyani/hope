import React from 'react'
import './testimonials.css'
import avt0 from '../../assets/concert.jpg'
import avt1 from '../../assets/kws retreats.jpg'
import avt2 from '../../assets/missions.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>News & Media</h2>   

      <Swiper className='container_testimonials-container'
      
      
       modules={[Pagination]} 
       spaceBetween={40} 
       slidesPerView={1} 
       pagination={{ clickable: true }} 
      >
              
     

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={avt0} alt="" />
          </div>
            <h5 className='client_name'>Men Conference</h5>
            <small className='client_review'>
            Lorem Ipsum is simply dummy text of the printing
             and typesetting industry. Lorem Ipsum has been 
             the industry's standard dummy text ever since 
             the 1500s, when an unknown printer took a galley 
             of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the 
              leap into electronic typesetting, remaining essentially 
              unchanged. 
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={avt0} alt="" />
          </div>
            <h5 className='client_name'>Youth Conference</h5>
            <small className='client_review'>
            Lorem Ipsum is simply dummy text of the printing
             and typesetting industry. Lorem Ipsum has been 
             the industry's standard dummy text ever since 
             the 1500s, when an unknown printer took a galley 
             of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the 
              leap into electronic typesetting, remaining essentially 
              unchanged. 
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={avt1} alt="" />
          </div>
            <h5 className='client_name'>Concerts</h5>
            <small className='client_review'>
            Lorem Ipsum is simply dummy text of the printing
             and typesetting industry. Lorem Ipsum has been 
             the industry's standard dummy text ever since 
             the 1500s, when an unknown printer took a galley 
             of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the 
              leap into electronic typesetting, remaining essentially 
              unchanged. 
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={avt2} alt="" />
          </div>
            <h5 className='client_name'>Women Conference</h5>
            <small className='client_review'>
            Lorem Ipsum is simply dummy text of the printing
             and typesetting industry. Lorem Ipsum has been 
             the industry's standard dummy text ever since 
             the 1500s, when an unknown printer took a galley 
             of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the 
              leap into electronic typesetting, remaining essentially 
              unchanged. 
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={avt0} alt="" />
          </div>
            <h5 className='client_name'>Annual General Meeting</h5>
            <small className='client_review'>
            Lorem Ipsum is simply dummy text of the printing
             and typesetting industry. Lorem Ipsum has been 
             the industry's standard dummy text ever since 
             the 1500s, when an unknown printer took a galley 
             of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the 
              leap into electronic typesetting, remaining essentially 
              unchanged. 
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">

      

          <div className='client_avatar'>
            <img src={avt0} alt="" />
          </div>
            <h5 className='client_name'>Community Outreach</h5>
            <small className='client_review'>
            Lorem Ipsum is simply dummy text of the printing
             and typesetting industry. Lorem Ipsum has been 
             the industry's standard dummy text ever since 
             the 1500s, when an unknown printer took a galley 
             of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the 
              leap into electronic typesetting, remaining essentially 
              unchanged. 
            </small>
          
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Testimonials
