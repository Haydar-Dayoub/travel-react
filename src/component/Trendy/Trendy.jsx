import './TrendyStyle.css'
const Trendy = ({children}) => {
  return (
    <div className='trendy'>
        <h4 className='tre'>Trendy</h4>
        <h1 className='pack'>Our Trending Tour Packages</h1>
        {children}

    </div>
  )
}

export default Trendy