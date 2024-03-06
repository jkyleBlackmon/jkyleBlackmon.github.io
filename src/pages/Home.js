import React from 'react';
import profile from '../resources/profile.jpg';
import './Home.css';
import { ListItem } from '../components/list-item';

export const Home = () => {
    return(
        <div className='home-container'>
            <div className="intro-container">
                <div className='left-side'>
                    <h1>Hey, I'm Kyle!</h1>
                    <h3>Join me on my journey to</h3>
                    <h2>LEARN EVERYTHING</h2>
                </div>
                <div className='right-side'>
                    <img src={profile} alt="Profile" />
                </div>
            </div>
            <div className="update-container">
                <div className='update-header'>
                    <h1>What's New?</h1>
                </div>
                <div className="updates">
                    <ListItem 
                        title={'Hello'}
                        body={'Lorem Ipsum'}
                    />
                    <ListItem 
                        title={'World'}
                        body={'Test Test'}
                    />
                    <ListItem 
                        title={'!!!!!'}
                        body={'LETS GOOO'}
                    /> 
                </div>
            </div>
        </div>
    );
};