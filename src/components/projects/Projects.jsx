import React from 'react'
import './projects.css'
//import IMG1 from '../../assets/project1.jpg'
//import IMG2 from '../../assets/project2.jpg'
//import IMG3 from '../../assets/project3.jpg'

const data = [
  {
    id: 1,
    //image: IMG1,
    title: 'nnamdixobi',
    desc: 'Developed a portfolio website using HTML, CSS, JavaScript & the React JS library.',
    github: 'https://github.com/nnamdixobi/nnamdixobi',
    demo: 'https://nnamdixobi.com/'
  },
  {
    id: 2,
    //image: IMG2,
    title: 'Store Management System',
    desc: 'Developed a store management system using Java, Java Swing for the GUI and SQLite for the database.',
    github: 'https://github.com/nnamdixobi/Store-Management-System'
  },
  {
    id: 3,
    //image: IMG3,
    title: 'Web Server and Microservices',
    desc: 'Designed and implemented an enhanced online shopping system with a RESTful web server and integrated microservices. Utilized Java for server-side development, SQLite for database management, and Gson for JSON operations.',
    github: 'https://github.com/nnamdixobi/Webserver-and-Microservices'
  },
  {
    id: 4,
    //image: IMG4,
    title: 'Astronomy Picture Of The Day (APOD) Website',
    desc: 'Enhanced NASA’s Astronomy Picture of the Day (APOD) website by integrating their open API with JavaScript, offering users real time access to captivating astronomical content.',
    github: 'https://github.com/nnamdixobi/Web-Dev-Club/tree/apod',
    demo: 'https://nnamdixobis-apod.netlify.app/'
  },
  {
    id: 5,
    //image: IMG4,
    title: "Nnamdi's Chat Room",
    desc: 'Developed a chat room using React JS and Firebase for authentication and data storage ',
    demo: 'https://nnamdis-chat-room.netlify.app/'
  }
]


const Projects = () => {
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
                {github && (
                  <a href={github} className='btn' target='_blank' rel="noreferrer">
                    Github
                  </a>
                )}
                {demo && demo.trim() !== '' && (
                  <a href={demo} className='btn' target='_blank' rel="noreferrer">
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

    
    export default Projects;