import { NavLink } from 'react-router-dom';
import './nav-bar.css';
import croplogo from '../resources/kyle-logo-crop.png';

export const NavBar = () => {
    return(
        <div className='navbar'>
            <div className='logo-container'>
                <img src={croplogo} alt='kyle-logo.png'/>
            </div>
            <div className='navigation-container'>
                <ul>
                    <li>
                        <NavLink className="nav-element" to='/projects'>Projects</NavLink></li>
                    <li><NavLink className="nav-element" to='/contact'>Contact</NavLink></li>
                    <li><NavLink className="nav-element" to='/about'>About</NavLink></li>
                    <li><NavLink className="nav-element" exact to='/'>Home</NavLink></li>
                </ul>
            </div>
        </div>
    );
};