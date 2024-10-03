import React from 'react'
import './about.css'
import IMG_2821 from '../../assets/IMG_2821.JPG'
import image from '../../assets/image.jpg'
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
            <img src = {image} alt = "me" />

          </div>

          </div>

          <div className = "about__content">
            <div className = "about__cards">
              <article className = "">

              </article>


            </div>

            <p>

I am currently a Technical Lead at iCode, with a degree in Computer Science from the Samuel Ginn College of Engineering at  
<a href="https://www.auburn.edu/" target="_blank"> Auburn University</a>. I have diverse experience across Software Engineering, 
Database Management, Research, IT, and Consulting roles. My passion lies in software development, especially in web and mobile 
applications, where creativity and problem-solving meet. Additionally, I have a strong interest in Data Science, Cloud Computing, 
Computer Networking, Cyber Security, and Artificial Intelligence.
          
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
                working out, watching sports, listening to music & watching anime, with my favorite being <a href="https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece" target="_blank">"One Piece"</a>.
              </p>


          </div>


      </div>
    
     
    </section>
  )
}

export default about