import React , {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m27dnid', 'template_ku9vu7l', form.current, 'rER_objRcrPKsafP0')
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>

        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>mostafahabib866@gmail.com</h5>
            <a href='mailto:sasahabeb86@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option_icon' />
            <h4>Messenger</h4>
            <h5>Mostafa habib</h5>
            <a href='https://m.me/mostafa.habeb.18' target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon' />
            <h4>WhatsApp</h4>
            <h5>01207300696</h5>
            <a href='https://api.whatsapp.com/send?phone=+2001207300696' target="_blank" rel="noreferrer" id="whatsapp-link">Send a message</a>
          </article>
          
        </div>


        <form ref={form} onSubmit = {sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' placeholder='Your Message' rows='7' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
