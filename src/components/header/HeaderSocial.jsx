import React from 'react'
import {FaFacebook , FaGithub , FaLinkedin} from 'react-icons/fa'

function HeaderSocial() {
  return (
    <div className='header_social'>
        <a href='https://www.linkedin.com/in/mostafahabibb/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href='https://github.com/mostafa-habib' target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href='https://www.facebook.com/mostafa.habeb.18/' target="_blank" rel="noreferrer"><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocial
