import React from 'react'
import './about.css'
import IMG_2821 from '../../assets/IMG_2821.JPG'
import image from '../../assets/image.jpg'
import snowdaypic from '../../assets/snowdaypic.jpg'
import FadeInSection from '../FadeInSection'

const about = () => {
  const tech_stack = [
    "Python",
    "Javascript",
    "React.js",
    "Node.js",
    "HTML & CSS",
    "SQL",
    "PHP",
    "Java",
    "C/C++",
    "C#",
    "AWS Cloud",
    
  ];

  return (
    <section id = 'about'>
      
      <h2> About Me </h2>

      <div className = "container about__container">

        <div className = "about__me">
          <div className="about__me-image">
            <img src = {snowdaypic} alt = "me" />

          </div>

          </div>

          <div className = "about__content">
            <div className = "about__cards">
              <article className = "">

              </article>


            </div>

            <p>

I am a Computer Science and Software Engineering Graduate Student at <a href="https://www.auburn.edu/" target="_blank"> Auburn University</a> with 
a concentration in Artificial Intelligence and Cyber Security. I currently work as a Graduate Assistant for the Auburn University Libraries 
Innovation & Research Commons where I assist in managing the Virtual Reality Area and contribute to the development of virtual reality 
applications used in research.  
 I have diverse experience across Software Engineering, 
Database Management, Research, IT, and Consulting roles. My passion lies in software development, Artificial Intelligence and Cyber Security, 
where creativity and problem-solving intersect. Additionally, I have a strong interest in Data Science, Cloud Computing, 
and Computer Networking.
          
            </p>
            {"Here are some of the main technologies I work with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>

              <p>
                Outside of work I love keeping up with the developments of science & technology. I also enjoy 
                working out, watching and playing sports & listening to music.
              </p>


          </div>


      </div>
    
     
    </section>
  )
}

export default about