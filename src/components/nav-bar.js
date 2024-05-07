import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './nav-bar.css';
import croplogo from '../resources/kyle-logo-crop.png';
import logo from '../resources/kyle-logo.png';
import { Hamburger } from './hamburger';
import { Navigate } from '../pages/Navigate';

export const NavBar = () => {
    const [width, setWidth] = useState(0);
    const [tabView, setTabView] = useState(false);

    const handleClick = () => {
        setTabView(false);
        window.open('/', '_blank');
    };
    const handleNavClick = () => {
        setTabView(true);
    };

    const closeTabs = () => {
        setTabView(false);
    }

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
                <img src={width <= 750 ?  logo: croplogo} alt='kyle-logo.png' onClick={handleClick}/>
            </div>
            
                {width <= 750 ? 
                (
                    tabView? 
                    (
                        <div className='mini-tabs'>
                            <ul>                   
                                <div className="close-tabs" onClick={closeTabs}>Close</div> 
                                <li><NavLink className="nav-element-mini" to='/projects'>Projects</NavLink></li>
                                <li><NavLink className="nav-element-mini" to='/contact'>Contact</NavLink></li>
                                <li><NavLink className="nav-element-mini" to='/about'>About</NavLink></li>
                                <li><NavLink className="nav-element-mini" exact to='/'>Home</NavLink></li>
                            </ul>
                        </div>
                    ) 
                    : 
                    (
                        <Hamburger onClick={handleNavClick}/> 
                    )
                )
                :
                (
                    <div className='navigation-container'>
                        <ul>
                            <li><NavLink className="nav-element" to='/projects'>Projects</NavLink></li>
                            <li><NavLink className="nav-element" to='/contact'>Contact</NavLink></li>
                            <li><NavLink className="nav-element" to='/about'>About</NavLink></li>
                            <li><NavLink className="nav-element" exact to='/'>Home</NavLink></li>
                        </ul>
                    </div>
                )
                }
        </div>
    );
};