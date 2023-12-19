import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Img from '../../images/leo-min.jpg'

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
              <small>35+ Completed</small>
            </article>
          </div>
          <p>Meticulous frontend software engineer with 1+ year experience passionate about web development who loves Translating designs into high-quality code,
             Proficient with Javascript and its new specifications, React.js, and nextJs ecosystem, HTML, CSS, and Responsive web development, 
            and I have Good problem-solving skills with practice in competitive programming contests.</p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>


      </div>
    </section>
  )
}

export default About
