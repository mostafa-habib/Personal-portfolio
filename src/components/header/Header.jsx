import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../images/mos.jpg'

import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header id="header">
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Mostafa Habib</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <img src={ME} alt="" /> 
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
        <a className='arrow' href='#contact'>
          <div className='arrow-span'></div>
          <div className='arrow-span'></div>
          <div className='arrow-span'></div>
      </a>
      </div>
    </header>
  )
}

export default Header