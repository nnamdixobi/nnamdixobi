import React from 'react'
import './about.css'
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
    "Java",
    "C++"
    
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
            I am a senior in Computer Science at {"  "}<a href="https://www.auburn.edu/" target = "_blank">Auburn University</a>. I currently work as an undergraduate research assistant for the Samuel Ginn College of Engineering at Auburn University and as a learning consultant for the Auburn University Biggio Center. Additionally, I serve as a co-leader of the Auburn 
            University Web Development Club. My passion lies in software development, particularly in web and mobile
             applications, where creativity and problem-solving intersect. Furthermore, I have a keen interest in 
             data science and artificial intelligence.
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

              <p>
                Outside of work I am interested in following the developments of science & technology. I also enjoy 
                working out, watching sports, music & anime, especially one piece.
              </p>


          </div>


      </div>
    
     
    </section>
  )
}

export default about