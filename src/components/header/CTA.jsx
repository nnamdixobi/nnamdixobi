import React from 'react'
import resume from '../../assets/Resume - Nnamdi Ikenna-Obi - 11.16.2023.pdf'

const CTA = () => {
  return (
    <div className = 'cta'>
        <a href = {resume} target="_blank" className = 'btn'> Resume </a>

    </div>
  )
}

export default CTA