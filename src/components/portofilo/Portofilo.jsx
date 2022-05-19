import React from 'react'
import './portofilo.css'
import IMG0 from '../../images/amazon.png'
import IMG1 from '../../images/chat.png'
import IMG2 from '../../images/Grocery.png'
import IMG3 from '../../images/Covid-19.png'
import IMG4 from '../../images/firegram.png'
import IMG5 from '../../images/land.png'
import IMG6 from '../../images/curd.png'
import IMG7 from '../../images/sass.png'
import IMG8 from '../../images/weather.png'
import IMG9 from '../../images/post.jpg'
import IMG10 from '../../images/server.jpg'
import IMG11 from '../../images/moive.png'

const data = [
  {
    id:0,
    title:"Amazon Clone",
    image:IMG0,
    github:"https://github.com/mostafa-habib/Amazon-Clone",
    demo:"https://amazon-cloonee.netlify.app/",

  },
  {
    id:1,
    title:"Fullstack Realtime Chat App ",
    image:IMG1,
    github:"https://github.com/mostafa-habib/RealTime-Chat",
    demo:"https://fmrealtime-chat.000webhostapp.com/",

  },
  {
    id:2,
    title:"Grocery Ecommerce Website",
    image:IMG2,
    github:"https://github.com/mostafa-habib/Grocery-Site",
    demo:"https://fmgrocery.netlify.app/",

  },
  {
    id:3,
    title:"Covid 19 WebSite",
    image:IMG3,
    github:"https://github.com/mostafa-habib/Covid-19",
    demo:"https://fmcovid-19.netlify.app/",

  },
  {
    id:4,
    title:"FireGram Gallery Website",
    image:IMG4,
    github:"https://github.com/mostafa-habib/Firegram",
    demo:"https://mostafa-firgram.web.app/",

  },
  {
    id:5,
    title:"Chat Landing Page",
    image:IMG5,
    github:"https://github.com/mostafa-habib/landPage-using-styled-components",
    demo:"https://fmlandpage.netlify.app/",

  },
  {
    id:6,
    title:"Poducuts Managments ",
    image:IMG6,
    github:"https://github.com/mostafa-habib/Products-Managnents",
    demo:"https://fmcurd.netlify.app/",

  },
    {
    id:11,
    title:"Movie APP",
    image:IMG11,
    github:"https://lnkd.in/diagX9RP",
    demo:"https://lnkd.in/dWFPKhFw",
  },
  {
    id:7,
    title:"Development Services",
    image:IMG7,
    github:"https://bit.ly/3w0HaQ5",
    demo:"https://bit.ly/34Ew0oH",

  },
  {
    id:8,
    title:"Weather App",
    image:IMG8,
    github:"https://github.com/mostafa-habib/Weather-App",
    demo:"https://fmweather.netlify.app/",

  },
  {
    id:9,
    title:"Posting App",
    image:IMG9,
    github:"https://github.com/mostafa-habib/Making-Post-and-publish-it-with-JS",

  },
  {
    id:10,
    title:"Server",
    image:IMG10,
    github:"https://github.com/mostafa-habib/AJAX-Using-JSON-Data-From-Server",

  },

  
]

function Portofilo() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container portfolio_container'>

        {
          data.map(({id,title,image,github,demo}) => {
            return(
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item_image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item_cta'>
                  <a href={github} className='btn' target={'_blank'} rel="noreferrer">Github</a>
                  {demo && <a href={demo} className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>}
                </div>
              </article>
            )
          })
        }

        
        

      </div>

    </section>
  )
}

export default Portofilo
