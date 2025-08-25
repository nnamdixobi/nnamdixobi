import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2> Work Experience </h2>
      

      


      <div className="experience__container">

      <div className="experience__card">
          <div className="experience__header">
            <h2>Auburn University Libraries Innovation & Research Commons</h2>
            <h2><b>Graduate Assistant</b></h2>
            <h2><i>Feb 2024 - Present</i></h2>
          </div>
          <div className="experience__content">
            <ul>
              <li>Oversee operations and user engagement in the Virtual Reality (VR) area.</li>
              <li>Maintain and troubleshoot VR headsets to ensure optimal performance.</li>
              <li>Provide hands-on assistance and technical support for users engaging with VR experiences.</li>
              <li>Conduct outreach and promotional activities to increase awareness and participation in the VR area.</li>
              <li>Contriubte to the development of virtual reality applications using unity and C# that support research</li>
            </ul>        
          </div>
        </div>

      <div className="experience__card">
          <div className="experience__header">
            <h2>iCode Pearland</h2>
            <h2><b>Technical Lead</b></h2>
            <h2><i>Aug 2024 - Dec 2024</i></h2>
          </div>
          <div className="experience__content">
            <ul>
              <li>Led Programming and STEM instruction for students, fostering hands-on learning enviroment.</li>
              <li>Developed and refined curriculum and projects, tailored to various age groups and skill levels.</li>
              <li>Taught programming languages and platforms including C#, HTML, CSS, JavaScript, PHP, SQL, Scratch, and block coding.</li>
              <li>Mentored and guide students in problem-solving and creative coding techniques.</li>
              <li>Collaborated with the teaching team to improve lesson plans and ensure an engaging experience for all students.</li>
            </ul>        
          </div>
        </div>

      <div className="experience__card">
          <div className="experience__header">
            <h2>FICOM Technologies</h2>
            <h2><b>Front-End Developer</b></h2>
            <h2><i>Feb 2024 - Present</i></h2>
          </div>
          <div className="experience__content">
            <ul>
              <li>Developed user interface components for the FICOM application, creating a visually appealing and functional UI using React JS and the Material UI library to bring design mockups to life.</li>
              <li>Enhanced user experience by implementing key front-end features focusing on responsive design, intuitive navigation and interactive elements to ensure an engaging user experience.</li>
              <li>Collaborated closely with the backend team to ensure seamless integration between the frontend and backend systems, addressing technical challenges and synchronizing data flow and functionality.</li>
            </ul>        
          </div>
        </div>

        <div className="experience__card">
          <div className="experience__header">
            <h2>One Community Global</h2>
            <h2><b>Volunteer Software Engineer</b></h2>
            <h2><i>January 2024 - Aug 2024</i></h2>
          </div>
          <div className="experience__content">
            <ul>
              <li>Developed key features for One Community’s Highest Good Network Application using JavaScript and the React JS framework.</li>
              <li>Seamlessly integrated new features, improved application performance and enhanced code quality, positively impacting user experience and the efficiency of the HGN application.</li>
              <li>Collaborated with team members to address technical challenges and optimize performance.</li>
              <li>Reviewed and provided constructive feedback on GitHub pull requests, ensuring high-quality code integration.</li>
            </ul>        
          </div>
        </div>


        <div className="experience__card">
          <div className="experience__header">
            <h2>Auburn University Program Understanding Lab</h2>
            <h2><b>Research Software Engineer</b></h2>
            <h2><i>May 2023 - December 2023</i></h2>
          </div>
          <div className="experience__content">
            <ul>
              <li>Contributed to the development of Oxide, a complex binary analysis framework for performing analysis of executable code.</li>
              <li>Expanded Oxides functionality by developing new plugins and modules using python, strengthened system reliability with unit tests, and improved the frameworks documentation.</li>
              <li>Strengthened Oxides system reliability by writing comprehensive Python unit tests for each system module.</li>
              <li>Revised and improved Oxides documentation, making the framework more accessible and effective for users.</li>
            </ul>        
          </div>
        </div>
        
        <div className="experience__card">
          <div className="experience__header">
            <h2>Auburn University Biggio Center</h2>
            <h2><b>Learning Consultant</b></h2>
            <h2><i>June 2022 - December 2023</i></h2>
          </div>
          <div className="experience__content">
            <ul>
              <li>Supported faculty and students in using various classroom technologies crucial for effective teaching and learning.</li>
              <li>Resolved IT issues related to classroom technologies, providing prompt and efficient support. </li>
              <li>Managed and updated problem tickets in ServiceNow to reflect their status accurately.</li>
              <li>Maintained high levels of user satisfaction, and contributed to the smooth operation of the Biggio Center’s IT services.</li>
            </ul>        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
