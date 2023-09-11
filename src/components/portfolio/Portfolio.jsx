import React from 'react'
import './portfolio.css'
//import IMG1 from '../../assets/portfolio1.jpg'
//import IMG2 from '../../assets/portfolio2.jpg'
//import IMG3 from '../../assets/portfolio3.jpg'
//import IMG4 from '../../assets/portfolio4.jpg'
//import IMG5 from '../../assets/portfolio5.png'
//import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    //image: IMG1,
    title: 'nnamdixobi',
    desc: 'Developed a portfolio website using HTML, CSS, JavaScript & the React JS library.',
    github: 'https://github.com',
    demo: 'nnamdixobi.com'
  },
  {
    id: 2,
    //image: IMG2,
    title: 'Store Management System',
    desc: 'Developed a store management system using Java, Java Swing for the GUI and SQLite for the database.',
    github: 'https://github.com/nnamdixobi/Store-Management-System'
  }
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
          <h2>Projects</h2>
    
          <div className="container portfolio__container">
            {data.map(({ id, image, title, desc, github, demo }) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    {/*<img src={image} alt={title} />}*/}
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>
                      Github
                    </a>
                    {demo && demo.trim() !== '' && (
                      <a href={demo} className='btn' target='_blank' rel='noopener noreferrer'>
                        Live Demo
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      );
    };
    
    export default Portfolio;