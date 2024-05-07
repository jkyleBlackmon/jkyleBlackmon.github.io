import React from "react";
import './hamburger.css';

export const Hamburger = ({onClick}) => { 
    return (
        <div className="hamburger-container">
            <div className="hamburger" onClick={onClick}>
                <div className="burger burger1"/>
                <div className="burger burger2"/>
                <div className="burger burger3"/>
            </div>
        </div>
    );
};