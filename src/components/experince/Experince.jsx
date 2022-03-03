import React from 'react'
import './experince.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Experince() {
  return (
    <section id='experince'>
      <h5>What Skills I have</h5>
      <h2>My Experince</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>React Js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Sass</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Styled Components</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>

        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Node Js</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Express Js</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experince