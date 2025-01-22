import './ServiesStyle.css'




const Servies = ({children}) => {
  return (
    <div className='servies'>
        <h4 className='cate'>CATEGORY</h4>
        <h1>We Offer Best Services</h1>
        {children}

    </div>
  )
}

export default Servies