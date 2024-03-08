import React from 'react';
import { SkillList } from '../components/skill-list';
import { HobbyCard } from '../components/hobby-card';
import './About.css';
import aboutMe from '../resources/aboutme.json';

const About = () => {
    return(
        <div className='about-container'>
            <div className='about-bio'>
                <h2>About Me</h2>
                <h3>B.S. Computer Engineering - University of Florida</h3>
                <p>{aboutMe.text}</p>
            </div>
            <div className='about-skills'>
                {console.log(aboutMe.skills.hardware)}
                <SkillList type={'Hardware'} skills={aboutMe['skills']['hardware']}/>
                <SkillList type={'Software'} skills={aboutMe['skills']['software']}/>
            </div>
            <div className='hobby-box'>
                <div className='hobby-box-left'>
                    <div className='hobby-list-header'>
                        <h2>{`My Hobbies`}</h2>
                    </div>
                    <div className='hobby-list-list'>
                        <ul>
                            {aboutMe['hobbies'].map((hobby, index) => {
                                return (
                                    <li key={index}>
                                        <h4>{hobby.name}</h4>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className='hobby-box-right'>
                    <div className='hobby-card-row'>
                        <HobbyCard hobby={aboutMe['hobbies'][0]}/>
                        <HobbyCard hobby={aboutMe['hobbies'][1]}/>
                    </div>
                    <div className='hobby-card-row'>
                        <HobbyCard hobby={aboutMe['hobbies'][2]}/>
                        <HobbyCard hobby={aboutMe['hobbies'][3]}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { About };