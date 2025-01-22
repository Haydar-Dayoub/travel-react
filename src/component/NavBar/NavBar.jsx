import './NavBarStyle.css'
import photo from './../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({menu , logo , btn}) => {
    console.log(photo);
  return (
    <nav className='nav'>
        <img src={logo} alt="" />
        <div>
          
          
          <ul>
            {
              menu.map((element,index) =>{
                return(
                  <li key={index}><NavLink to={element.path} className={({isActive})=> isActive ? "active" : ""}>{element.title}</NavLink></li>
                )
              }
            )}
          </ul>
        </div>
        <button className='btn'>{btn}</button>
    </nav>
   
  )
}

export default NavBar