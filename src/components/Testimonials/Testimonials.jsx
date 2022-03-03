import React from 'react'
import './testimonials.css'
import IMG from '../../images/mo.PNG'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id:1,
    image:IMG,
    title:"Mostafa Habib",
    message:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dolor beatae ad ea dolores architecto doloremque. Illo vero, ex non vitae unde ratione totamimpedit nemo quidem ullam accusamus temporibus!'
  },
  {
    id:2,
    image:IMG,
    title:"Mostafa Habib",
    message:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dolor beatae ad ea dolores architecto doloremque. Illo vero, ex non vitae unde ratione totamimpedit nemo quidem ullam accusamus temporibus!'
  },
  {
    id:3,
    image:IMG,
    title:"Mostafa Habib",
    message:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dolor beatae ad ea dolores architecto doloremque. Illo vero, ex non vitae unde ratione totamimpedit nemo quidem ullam accusamus temporibus!'
  }
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from Clinets</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials_container'
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }} 
      >

        {


           data.map(({id,image,title,message}) => {
             return(
              <SwiperSlide className='testimonials'>
              <div className='client_avatar'>
                <img src={image} alt={title} />
              </div>
              <h5 className='client_name'>{title}</h5>
                <small className='client_review'>{message}</small>
            </SwiperSlide>
             )
           })


        }


      </Swiper>
    </section>
  )
}

export default Testimonials