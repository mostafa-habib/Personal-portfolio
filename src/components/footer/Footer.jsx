import React from 'react'
import './footer.css'
import {FaFacebook , FaGithub , FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <a href='#header' className='footer_logo'>Mostafa</a>

      <ul className='links'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experince'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
      <a href='https://www.linkedin.com/in/mostafa-habib86/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href='https://github.com/mostafa-habib' target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href='https://www.facebook.com/mostafa.habeb.18/' target="_blank" rel="noreferrer"><FaFacebook /></a>
      </div>
      <div className='footer_copyright'>
        <small>&copy; Mostafa Habib. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer