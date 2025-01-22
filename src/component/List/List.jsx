import Child from '../Child/Child'
import './ListStyle.css'
import bg from './../../assets/img/giza.png'


const List = () => {
    let card =[
        {
           
            image : <img src="city-1.png"/>,
            title: '27,September 2023',
            countery:'Maldives',
            sub: '30+people',
            text: 'Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.',
            price:'3000 $',
            svg:  <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <path d="M3.41542 16.1912C3.05039 16.3988 2.6362 16.035 2.70996 15.5706L3.49485 10.6114L0.163302 7.09277C-0.147819 6.76355 0.013888 6.16174 0.430923 6.09674L5.06275 5.36701L7.12807 0.830354C7.31436 0.421457 7.8184 0.421457 8.00469 0.830354L10.07 5.36701L14.7018 6.09674C15.1189 6.16174 15.2806 6.76355 14.9685 7.09277L11.6379 10.6114L12.4228 15.5706C12.4966 16.035 12.0824 16.3988 11.7173 16.1912L7.56496 13.8259L3.41447 16.1912H3.41542Z" fill="#FFBA0A"/>
        </svg> 5.0</p>                 
        },
        {
          image : <img src="city-2.png"/>,          
            title: '13,October 2023',
            sub: '120+people',
            countery:'Switzerland',
            text: 'Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.',
            price:'1200 $',
            svg:   <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <path d="M3.41542 16.1912C3.05039 16.3988 2.6362 16.035 2.70996 15.5706L3.49485 10.6114L0.163302 7.09277C-0.147819 6.76355 0.013888 6.16174 0.430923 6.09674L5.06275 5.36701L7.12807 0.830354C7.31436 0.421457 7.8184 0.421457 8.00469 0.830354L10.07 5.36701L14.7018 6.09674C15.1189 6.16174 15.2806 6.76355 14.9685 7.09277L11.6379 10.6114L12.4228 15.5706C12.4966 16.035 12.0824 16.3988 11.7173 16.1912L7.56496 13.8259L3.41447 16.1912H3.41542Z" fill="#FFBA0A"/>
        </svg> 4.9</p>                 
        },
        {
          image : <img src="city-3.png"/>, 
          title: '2,November 2022',
          sub: '139+people',
          countery:'Berlin',
          text: 'Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.',
          price:'2790 $',
          svg:   <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <path d="M3.41542 16.1912C3.05039 16.3988 2.6362 16.035 2.70996 15.5706L3.49485 10.6114L0.163302 7.09277C-0.147819 6.76355 0.013888 6.16174 0.430923 6.09674L5.06275 5.36701L7.12807 0.830354C7.31436 0.421457 7.8184 0.421457 8.00469 0.830354L10.07 5.36701L14.7018 6.09674C15.1189 6.16174 15.2806 6.76355 14.9685 7.09277L11.6379 10.6114L12.4228 15.5706C12.4966 16.035 12.0824 16.3988 11.7173 16.1912L7.56496 13.8259L3.41447 16.1912H3.41542Z" fill="#FFBA0A"/>
        </svg> 5.0</p>                 
                     
        },
        {
          image : <img src="city-4.png"/>, 
          title: '14,December 2022',
          sub: '50+people',
          countery:'Torronto',
          text: 'Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.',
          price:'1110 $',
          svg:  <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <path d="M3.41542 16.1912C3.05039 16.3988 2.6362 16.035 2.70996 15.5706L3.49485 10.6114L0.163302 7.09277C-0.147819 6.76355 0.013888 6.16174 0.430923 6.09674L5.06275 5.36701L7.12807 0.830354C7.31436 0.421457 7.8184 0.421457 8.00469 0.830354L10.07 5.36701L14.7018 6.09674C15.1189 6.16174 15.2806 6.76355 14.9685 7.09277L11.6379 10.6114L12.4228 15.5706C12.4966 16.035 12.0824 16.3988 11.7173 16.1912L7.56496 13.8259L3.41447 16.1912H3.41542Z" fill="#FFBA0A"/>
        </svg> 4.0</p>                 
                     
        },
        {
          image : <img src="city-5.png"/>,
          title: '20,September 2022',
          sub: '80+people',
          countery:'Baku',
          text: 'Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.',
          price: '1220 $',
          svg: <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <path d="M3.41542 16.1912C3.05039 16.3988 2.6362 16.035 2.70996 15.5706L3.49485 10.6114L0.163302 7.09277C-0.147819 6.76355 0.013888 6.16174 0.430923 6.09674L5.06275 5.36701L7.12807 0.830354C7.31436 0.421457 7.8184 0.421457 8.00469 0.830354L10.07 5.36701L14.7018 6.09674C15.1189 6.16174 15.2806 6.76355 14.9685 7.09277L11.6379 10.6114L12.4228 15.5706C12.4966 16.035 12.0824 16.3988 11.7173 16.1912L7.56496 13.8259L3.41447 16.1912H3.41542Z" fill="#FFBA0A"/>
        </svg> 4.5</p>                 
        },
        {
          image : <img src="city-6.png"/>,
          title: '27,August 2022',
          sub: '100+people',
          countery:'Chinese',
          text: 'Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.',
          price:'2500 $',
          svg:   <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <path d="M3.41542 16.1912C3.05039 16.3988 2.6362 16.035 2.70996 15.5706L3.49485 10.6114L0.163302 7.09277C-0.147819 6.76355 0.013888 6.16174 0.430923 6.09674L5.06275 5.36701L7.12807 0.830354C7.31436 0.421457 7.8184 0.421457 8.00469 0.830354L10.07 5.36701L14.7018 6.09674C15.1189 6.16174 15.2806 6.76355 14.9685 7.09277L11.6379 10.6114L12.4228 15.5706C12.4966 16.035 12.0824 16.3988 11.7173 16.1912L7.56496 13.8259L3.41447 16.1912H3.41542Z" fill="#FFBA0A"/>
        </svg> 5 </p>
          
                     
        }
    ]
  return (
    <div className='s'>
        {/* <Child title={card[0].title} image={card[0].image} /> */}
        {
          card.map(element=>{
            return(
              <Child key={element.id} image={element.image} title={element.title}
               sub={element.sub} countery={element.countery} text={element.text} price={element.price} svg={element.svg} />

            )
          })
        }
    </div>
  )
}

export default List