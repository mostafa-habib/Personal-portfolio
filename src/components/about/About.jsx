import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Img from '../../images/leo.jpg'

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>

        <div className='about_me'>
          <div className='about_me_image'>
            <img src={Img} alt='About'/>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experince</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Courses</h5>
              <small>25+ Courses</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>I want to take a challenging role as Frontend Web Developer 
            in a company where I could utilize my skills in Front-End Web Development
            , Software, and use these skills in providing quality service to the company.</p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>


      </div>
    </section>
  )
}

export default About