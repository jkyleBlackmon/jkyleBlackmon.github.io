import React, { useState, useEffect } from 'react';
import profile from '../resources/profile.jpg';
import './Home.css';
import { ListItem } from '../components/list-item';
import { SocialLinks } from '../components/social-links';

import projects from '../resources/projects.json';

export const Home = () => {
    const [recents, setRecents] = useState([]);

    const getRecentProjects = (x) => {
        const last_i = projects.length-1;
        const first_i = last_i-x+1;
        let arr = [];
        for(let index = first_i; index <= last_i; index++){
            arr.push(projects[index]);
        }
        return arr;
    };

    useEffect(() => {
        setRecents(getRecentProjects(3));
    },[])

    return(
        <div className='home-container'>
            <div className="intro-container">
                <div className='left-side'>
                    <h1>Hey, I'm Kyl3!</h1>
                    <h3>Join me on my journey to</h3>
                    <h2>LEARN EVERYTHING</h2>
                </div>
                <div className='right-side'>
                    <img src={profile} alt="Profile" />
                    <SocialLinks className="socials"/>
                </div>
            </div>
            <div className="update-container">
                <div className='update-header'>
                    <h1>What's New?</h1>
                </div>
                <div className="updates">
                    {
                        recents.map((obj) => {
                            return(
                                <ListItem title={obj.name} body={obj.details.description}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};