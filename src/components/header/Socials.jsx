import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiTwotoneMail} from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className = "socials">
      <a href = "mailto:nzi0007@auburn.edu" target = "_blank" className='social'> <AiTwotoneMail/> </a> 
      <a href = "https://www.linkedin.com/in/nkelvinobi/" target = "_blank" className='social'> <BsLinkedin/> </a>
      <a href = "https://github.com/nnamdixobi" target = "_blank" className='social'> <BsGithub/> </a>
        
    </div>
  )
}

export default Socials