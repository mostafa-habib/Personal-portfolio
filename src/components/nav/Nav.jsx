import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook , BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

function Nav() {
  const [activeNow ,setActiveNow] = useState('#');
  return (
    <nav>
      <a href='#header' title ='Home' onClick={() => setActiveNow('#')} className={activeNow === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' title='About' onClick={() => setActiveNow('#about')} className = {activeNow === '#about' ? 'active' : ''}><AiOutlineUser className='xz'/></a>
      <a href='#experince' title ='Experience'  onClick={() => setActiveNow('#experince')} className = {activeNow === '#experince' ? 'active' : ''}><BiBook /></a>
      <a href='#services' title ='Services' onClick={() => setActiveNow('#services')} className = {activeNow === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#portfolio' title ='Projects' onClick={() => setActiveNow('#contact')} className = {activeNow === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
      
    
    </nav>
  )
}

export default Nav