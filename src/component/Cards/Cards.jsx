import './CardsStyle.css'

const Cards = ({image , title, desc}) => {
  return (
    <div className='card'>
    <img src={image} alt="" />
    <h4 className='title'>{title}</h4>
    <p>{desc}</p>
  </div>
  
  )
}

export default Cards