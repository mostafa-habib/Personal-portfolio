import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>HTML, CSS, JavaScript</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Making Desgin Contain HTML5 Semantic.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Making Desgin Contain CSS3 positioning and displying Flexbox and Grid.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Using New Animations provided by CSS3.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Fetching Data Using Ajax in JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Working With ES6 and new features from JavaScript.</p>
            </li>
          </ul>

        </article>
        {/* End of one */}
        <article className='service'>
          <div className='service_head'>
            <h3>Responsive Desgins </h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Bulit responsive Website By using Bootstarp.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Bulit responsive Website By using Tailwind CSS.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Using responsive Flexbox and Grid and media queries.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Using Sass/Scss from making dynamic website.</p>
            </li>
            
          </ul>

        </article>
        {/* End of two */}
        <article className='service'>
          <div className='service_head'>
            <h3>React JS</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Working With Reac Hooks to bulid more dynamic Components and Website.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Control State by using Context API And Redux Library.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Using Material UI and Styled Components in Styling.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Working with Axios Library For Fetch Data.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Learning Next Js To evolve my skill.</p>
            </li>
          </ul>

        </article>
        {/* End of three */}

      </div>
    </section>
  )
}

export default Services