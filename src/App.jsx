
import './App.css'
import NavBar from './component/NavBar/NavBar'
import logo from './assets/img/logo.png'
import bg from './assets/img/header-bg.png'
import Hero from './component/Hero/Hero'
import Servies from './component/Servies/Servies'
import Container from './component/Container/Container'
import Cards from './component/Cards/Cards'
import img1 from './assets/img/service-1.png'
import img2 from './assets/img/service-2.png'
import img3 from './assets/img/service-3.png'
import img4 from './assets/img/service-4.png'
import Explore from './component/Explore/Explore'
import CardExplore from './component/CardExplore/CardExplore'
import ph1 from './assets/img/e1.png'
import ph2 from './assets/img/e2.png'
import Trendy from './component/Trendy/Trendy'
import Container2 from './component/Container2/Container2'
import CardTrendy from './component/CardTrendy/CardTrendy'
import swiz from'./assets/img/swizraland.png'
import flag1 from './assets/img/flag-1.png'
import flag2 from './assets/img/flag-2.png'
import flag3 from './assets/img/flag-3.png'
import amaz from './assets/img/amazon.png'
import giza from './assets/img/giza.png'
import Footer from './component/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import PackagesPage from './Pages/PackagesPage'
import List from './component/List/List'
import Child from './component/Child/Child'


 
function App() {

  return (
    <>


<Routes>
  <Route path="/"  element={<HomePage/>}/>
  <Route path='/about'  element={<AboutPage/>}/>
  <Route path='/packages'  element={<PackagesPage/>}/>
</Routes>













{/*     <NavBar menu={['Home','About','Packages','Services']} logo={logo} btn="Get in Touch"/>
    <Hero image={bg} title='No matter where you’re going to, we’ll take you there'/>
    <Servies>
      <Container>
      <Cards image={img1} title='Guided Tours' 
      desc='sunt qui repellat saepe quo velit aperiam id aliquam placeat.'></Cards>
      <Cards image={img2} title='Best Flights Options' 
      desc='sunt qui repellat saepe quo velit aperiam id aliquam placeat.'></Cards>
      <Cards image={img3} title='Religious Tours' 
      desc='sunt qui repellat saepe quo velit aperiam id aliquam placeat.'></Cards>
      <Cards image={img4} title='Medical insurance' 
      desc='sunt qui repellat saepe quo velit aperiam id aliquam placeat.'></Cards>
      </Container>
    </Servies>
    <Explore>
      <CardExplore image={ph1} subtitle='Promotion' title='Explore Nature' btn='View Packages' />
      <CardExplore image={ph2} subtitle='Promotion' title='Explore Cities' btn='View Packages' />
    </Explore>
    <Trendy>
      <Container2>
        <CardTrendy image={swiz} flag={flag1} day='8 Days' people='30 people Going' 
        title='Switzerland' desc='Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.'
        btn='Explore Now' />
        <CardTrendy image={amaz} flag={flag2} day='8 Days' people='60 people Going' 
        title='Amazon  ' desc='Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.'
        btn='Explore Now' />
        <CardTrendy image={giza} flag={flag3} day='8 Days' people='120 people Going' 
        title='Giza' desc='Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.'
        btn='Explore Now' />
      </Container2>
    </Trendy>
    <Footer/> */}












    </>
  )
}

export default App
/*  */