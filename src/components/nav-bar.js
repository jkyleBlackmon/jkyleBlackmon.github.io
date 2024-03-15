import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './nav-bar.css';
import croplogo from '../resources/kyle-logo-crop.png';
import logo from '../resources/kyle-logo.png';

export const NavBar = () => {
    const [width, setWidth] = useState(0);

    const handleClick = () => {
        window.open('/', '_blank');
    };
    useEffect (() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [setWidth])
    return(
        <div className='navbar'>
            <div className='logo-container'>
                <img src={width <= 500 ?  logo: croplogo} alt='kyle-logo.png' onClick={handleClick}/>
            </div>
            <div className='navigation-container'>
                <ul>
                    <li><NavLink className="nav-element" to='/projects'>Projects</NavLink></li>
                    <li><NavLink className="nav-element" to='/contact'>Contact</NavLink></li>
                    <li><NavLink className="nav-element" to='/about'>About</NavLink></li>
                    <li><NavLink className="nav-element" exact to='/'>Home</NavLink></li>
                </ul>
            </div>
        </div>
    );
};