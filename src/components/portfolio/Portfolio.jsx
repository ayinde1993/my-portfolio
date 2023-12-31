import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpeg'
import IMG10 from '../../assets/portfolio10.jpg'


const data = [
  {
id:1,
image: IMG1,
title:'grocery bud',
github:'https://github.com/ayinde1993/grocery-bud',
demo:'https://azol93-grocery-bud.netlify.app/'
},

{
  id:2,
  image: IMG8,
  title:'stripe clone',
  github:'https://github.com/ayinde1993/stripe-clone',
  demo:'https://azol-stripe-clone.netlify.app/'
  },

  {
    id:3,
    image: IMG7,
    title:'Review App',
    github:'https://github.com/ayinde1993/review-app',
    demo:'https://azol-review-app.netlify.app'
    },

    {
      id:4,
      image: IMG4,
      title:'Menu App',
      github:'https://github.com/ayinde1993/choose-your-menu-project',
      demo:'https://azol-menu.netlify.app'
      },

      {
        id:5,
        image: IMG5,
        title:'Share My Secrets App',
        github:'https://github.com/ayinde1993/loginProject',
        demo:'https://github.com/ayinde1993/loginProject'
        },

        {
          id:6,
          image: IMG3,
          title:'experiences Tabs',
          github:'https://github.com/ayinde1993/jobs-tabs',
          demo:'https://azol-jobs-tabs.netlify.app'
          },

          {
            id:7,
            image: IMG2,
            title:'Tours App',
            github:'https://github.com/ayinde1993/tour-app',
            demo:'https://azol-tour-app.netlify.app/'
            },

          {
            id:8,
            image: IMG6,
            title:'Accordion',
            github:'https://github.com/ayinde1993/accordion-project',
            demo:'https://azol-accordion.netlify.app'
            },
          
              {
            id:9,
            image: IMG9,
            title:'text Generator',
            github:'https://github.com/ayinde1993/lorem-ipsum-generator',
            demo:'https://azol-text-generator.netlify.app'
            },
              {
            id:10,
            image: IMG10,
            title:'Color Generator',
            github:'https://github.com/ayinde1993/color-ganarator',
            demo:'https://azol-color-ganarator.netlify.app/'
            },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

<div className='container portfolio__container'>
{
  data.map(({id, image, title, github, demo}) => {
    return(
    <article key={id} className=' portfolio__item'>
    <div className='portfolio__item-image'> 
    <img src= {image} alt="title"/>
     </div>
    <h3>{title}</h3>
    <div className=' portfolio__item-cta'>
    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Visit Website</a>
    </div>
    </article>
  )
  }
 
  )
}
    

</div>
   

    </section>
  )
}

export default Portfolio