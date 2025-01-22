import React from 'react'
import './ChildStyle.css'

const Child = ({title,image,sub,countery,text,price,svg}) => {
  return (
    <div>
      <div className='people'>
        {image}
        <p className='r'>{title} <span>{sub}</span></p>
        <div className='group'>
        <h2 className='country'>{countery}</h2>
        <p className='text'>{text}</p>
        <div className='coll'>
        <p className='price'>{price}</p>
        <p className='svg'>{svg}</p>
        </div>


        </div>

      </div>
      
    </div>
  )
}

export default Child