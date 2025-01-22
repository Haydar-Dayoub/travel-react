import './HeroStyle.css'


const Hero = ({image,title,subtitle}) => {
  return (
    <div className='hero' style={{backgroundImage:`url(${image})`}} >
        {/* <img src={image} alt="" /> */}
        {title ? <h1>{title}</h1> :<></>}
        {
          subtitle ? <h1 className='sub'>{subtitle}</h1> :<></>
        }
        

    </div>
  )
}

export default Hero