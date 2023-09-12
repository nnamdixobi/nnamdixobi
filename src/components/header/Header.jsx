import React from 'react'
import './header.css'
import CTA from './CTA'
import headshot from '../../assets/headshot.jpg'
import Socials from './Socials'


export const Header = () => {
  return (
    <header id = "home">  
      <div className="container header__container">
        <h4>Hello I'm</h4>
        
        <h1 className = "name">Nnamdi Ikenna-Obi</h1>
        
        
        <CTA />
        <Socials/>

        <div className = "me">

        <img src = {headshot} alt = " " />

        </div>

      </div>
</header>
    
   
  )
}

export default Header