import { NavLink } from 'react-router-dom';
import './nav-bar.css';

export const NavBar = () => {
    return(
        <div className='navbar'>
            <ul>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink exact to='/'>Home</NavLink></li>
            </ul>
        </div>
    );
};