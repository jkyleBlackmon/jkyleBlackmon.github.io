import React from 'react';
import { SkillList } from '../components/skill-list';
import './About.css';

const aboutMe = "Hello, and welcome to my website. Take a look around at some of the projects I have been working on lately!";

const software_skills = ['HTML5', 'CSS', 'JavaScript', 'React'];
const hardware_skills = ['VHDL', 'Altium PCB Design', 'C/C++'];

const hobbies = ['Weightlifting', 'Crossword Puzzles', 'Sudoku', 'Baseball', 'The Orioles'];

const About = () => {
    return(
        <div className='about-container'>
            <div className='about-bio'>
                <div className='about-bio-header'>
                    <h2>About Me</h2>
                </div>
                <div className='about-bio-creds'>
                    <h3>B.S. Computer Engineering - University of Florida</h3>
                </div>
                <div className='about-bio-p'>
                    <p>{aboutMe}</p>
                </div>
            </div>
            <div className='about-skills'>
                <SkillList type={'Hardware'} skills={hardware_skills}/>
                <SkillList type={'Software'} skills={software_skills}/>
            </div>
            <div className='about-hobbies'>
                <div className='about-hobbies-header'>
                    <SkillList skills={hobbies} />
                </div>
            </div>
        </div>
    );
};

export { About };