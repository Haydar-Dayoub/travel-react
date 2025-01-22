import './CardExploreStyle.css'

const CardExplore = ({image , subtitle ,title  ,btn}) => {
  return (
    <div className='cards' style={{backgroundImage :`url(${image})`}}>
        <p className='p'>{subtitle}</p>
        <h1 className='h'>{title}</h1>
        <button className='btn'>{btn}</button>

      

    </div>
  )
}

export default CardExplore