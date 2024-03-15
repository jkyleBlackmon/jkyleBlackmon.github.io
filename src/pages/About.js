import React from 'react';
import { SkillList } from '../components/skill-list';
import { HobbyCard } from '../components/hobby-card';
import './About.css';
import aboutMe from '../resources/aboutme.json';
import pdf_icon from '../resources/icons/pdf.png';
import resume from '../resources/resume.pdf';

const About = () => {
    const downloadResume = () => {
        console.log('Resume downloading...');
    };
    return(
        <div className='about-container'>
            <div className='about-bio'>
                <h2>About Me</h2>
                <h3>{aboutMe.degree}</h3>
                <h4>{aboutMe.school}</h4>
                <p>{aboutMe.text}</p>
                <div className='about-bio-resume-download' onClick={downloadResume}>
                    <a href={resume} download="Blackmon_James_Kyle_Resume" target="_blank" rel="noreferrer"> 
                        <img className='resume-icon' src={pdf_icon} alt='Resume.png'/>
                        <h4>Download My Resume here!</h4>
                    </a>
                </div>
            </div>
            <div className='about-skills'>
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