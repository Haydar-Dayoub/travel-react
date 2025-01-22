import React from 'react'
import NavBar from '../component/NavBar/NavBar'
import Hero from '../component/Hero/Hero'
import bg from './../assets/img/about-bg.png'
import logo from './../assets/img/logo.png'
import CardsAbout from '../component/CardsAbout/CardsAbout'
import prom from './../assets/img/promotion_img.png'
import Section from '../component/Section/Section'
import video from './../assets/img/video-banner.png'
import About4 from '../component/About4/About4'
import tour from './../assets/img/TourPlans-img.png'
import Footer from '../component/Footer/Footer'
import foot from './../assets/img/footer-bg.png'




const AboutPage = () => { 
  return (
    <div>
        <NavBar menu={[{title:'home', path:'/'},{title:'About',path:'/about'},{title:'Packages',path:'/packages'},{title:'Services',path:'/Services'}]} logo={logo} btn="Get in Touch"/>
        <Hero image={bg} subtitle='about us'/>
        
          <CardsAbout title='PROMOTION' subtitle="We Provide You Best Europe Sightseeing Tours"
           desc='Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
            Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut
             optio quibusdam!'
           btn='view packages' img={prom}/>
           <Section image={video} title='Wanderlust' />
           <About4 img={tour} title='TREND' subtitle=" Our Popular Tour Plans"
           desc='Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.'
             percent='78%' word='VACATIONS' percent2='55%' word2='HONEYYMOON'/>
             <Footer image={foot}/>           
    </div>
  )
}

export default AboutPage