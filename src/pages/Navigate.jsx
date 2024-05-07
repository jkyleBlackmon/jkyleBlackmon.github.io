import React from "react";
import { Hamburger } from "../components/hamburger";

export const Navigate = () => {
    
    return(
        <div>
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <div className="hamburger">
                    <Hamburger/>
                </div>
            </div>
            <style jsx>{`
                .navigation{
                    width: 100%;
                    height: 50px;
                }
                .navigation ul{
                    display: flex;
                    flex-wrap: wrap;
                    float: right;
                    margin: 20 0px;
                    padding: 0 25px;
                }
                .navigation ul li{
                    list-style-type: none;
                    padding-right: 10px;
                }
            `}</style>
        </div>
    );
};