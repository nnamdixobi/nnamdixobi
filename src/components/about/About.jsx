import React from 'react'
import './about.css'
import headshot from '../../assets/headshot.jpg'
import FadeInSection from '../FadeInSection'

const about = () => {
  const tech_stack = [
    "Python",
    "Javascript ES6+",
    "React.js",
    "HTML & CSS",
    "Java",
    "C++",
    "SQL",
    "SQLite"
  ];

  return (
    <section id = 'about'>
      
      <h2> About Me </h2>

      <div className = "container about__container">

        <div className = "about__me">
          <div className="about__me-image">
            <img src = {headshot} alt = "me" />

          </div>

          </div>

          <div className = "about__content">
            <div className = "about__cards">
              <article className = "">

              </article>


            </div>

            <p>
            I am currently a student at {"  "}<a href="https://www.auburn.edu/" target = "_blank">Auburn University</a> majoring in Computer Science. I am also an undergrad research assistant focusing on 
            software engineering for my team, a learning consultant helping with classroom technology and one of the co-leaders of the web development club at Auburn University. I have a great interest in software development, especially in web and mobile,
            development, that requires both creativity and problem solving. I am also interested in data science and artificial intelligence.
            </p>
            {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>


          </div>


      </div>
    
     
    </section>
  )
}

export default about