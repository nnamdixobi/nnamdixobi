import React from 'react'
import resume from '../../assets/Nnamdi Ikenna-Obi - Resume - 9.22.2023.pdf'

const CTA = () => {
  return (
    <div className = 'cta'>
        <a href = {resume} target="_blank" className = 'btn'> Resume </a>

    </div>
  )
}

export default CTA