import React from 'react'
import './cardsabout.css'

const CardsAbout = ({title,subtitle,desc,btn,img,}) => {
  return (
    <div className='cardsabout'  >
        <div className='about1'>
            <h5>{title}</h5>
            <h1>{subtitle}</h1>
            <p>{desc}</p>
            <button>{btn}</button>
        </div>
        <div>
            <img src={img}/>
        </div>
    </div>
  )
}

export default CardsAbout