import React from 'react'
import NavBar from '../component/NavBar/NavBar'
import Hero from '../component/Hero/Hero'
import travel from './../assets/img/packages-bg.png'
import logo from './../assets/img/logo.png'
import List from '../component/List/List'
import Footer from '../component/Footer/Footer'

const PackagesPage = () => {
  return (
    <div>
        <NavBar menu={[{title:'home', path:'/'},{title:'About',path:'/about'},{title:'Packages',path:'/packages'},{title:'Services',path:'/Services'}]} logo={logo} btn="Get in Touch"/>
        <Hero image={travel} subtitle='Travel With Us'/>
        <List/>
        <Footer/>

       
    </div>
  )
}

export default PackagesPage