import './About4.css'

const About4 = ({img,title,subtitle,desc,percent,word,percent2,word2}) => {
  return (
    <div className='about4'>
           <div>
            <img src={img}/>
        </div>
        <div className='about1'>
            <h5>{title}</h5>
            <h1>{subtitle}</h1>
            <p>{desc}</p>
           
              <div className='two'>
                <span>{percent}</span>
                <span>{percent2}</span>
              </div>
              <div className='three'>
                <span>{word}</span>
                <span>{word2}</span>
              </div>


        </div>


    </div>
  )
}

export default About4