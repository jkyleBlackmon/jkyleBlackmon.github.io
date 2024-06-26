import React from 'react';
import { HobbyCard } from '../components/hobby-card';
import './About.css';
import aboutMe from '../resources/aboutme.json';
import pdf_icon from '../resources/icons/pdf.png';
import resume from '../resources/resume.pdf';
import IconsList from '../components/icons-list';

const hardware_skills = ["arduino.png", "cpp.png", "docker.png", "python.png", "vscode.png", "wireshark.png"];
const software_skills = ["365.png", "android.png", "aws.png", "css3.png","gcp.png", "git.png", "github.png",
                             "html5.png", "java.png", "jira.png", "js.png", "kotlin.png", "matlab.png", 
                             "nodejs.png", "react-native.png", "reactjs.png", "teams.png"];

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
                        <h4>Download My resume here</h4>
                    </a>
                </div>
            </div>
            <div className='about-skills'>
                <IconsList icons={hardware_skills} type={"Hardware"}/>
                <IconsList icons={software_skills} type={"Software"}/>
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
                    <div className='note'>
                        <p>Click the cards on the right to learn more</p>
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