import React from 'react'
import './experience.css'

const experience = () => {
  return (
    <section id = "experience">
      
      <h2> Work Experience </h2>
      <div className = "experience__container">
        <div className = "experience__card">
          <div className = "experience__header">
          <h2>Auburn University Program Understanding Lab</h2>
          <h2><b>Research Software Engineer</b></h2>
          <h2><i>May 2023 - December 2023</i></h2>
          </div>
          <div className = "experience__content">
            
              <ul>
              <li>Contributed to the development of Oxide, a binary analysis framework for performing analysis of executable code, by developing new plugins and modules, expanding its functionality.</li>
              <li>Strengthened system reliability with comprehensive Python unit tests for previously untested modules.</li>
              <li>Improved oxides documentation for improved user guidance.</li>
              <li>Collaborated seamlessly with a research and development team using Git for version control.</li>

</ul>        
          </div>
          </div> 

           {/* Second Card */}
        <div className="experience__card">
          <div className="experience__header">
          <h2>Auburn University Biggio Center</h2>
          <h2><b>Learning Consultant</b></h2>
          <h2><i>June 2022 - December 2023</i></h2>
          </div>
          <div className = "experience__content">
            
              <ul>
              <li>Provided top-tier support for faculty and students in using classroom technology.</li>
              <li>Demonstrated exceptional problem-solving skills and meticulous attention to detail in resolving IT-related issues.</li>
              <li>Collaborated seamlessly with OIT Classroom Support, facilitating swift resolution of complex technical issues.</li>
              <li>Delivered technical support and troubleshooting for the prestigious SRFIDIC annual conference held at Auburn University in 2023.</li>

</ul>        
          </div>
        </div>

        </div>
    
    
    
    </section>
  )
}

export default experience