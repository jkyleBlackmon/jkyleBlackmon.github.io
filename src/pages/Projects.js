import React from 'react';
import { ProjectCard } from '../components/project-card';
import './Projects.css';

import projects from '../resources/projects.json';

export const Projects = () => {
    return(
        <div className='project-main-container'>
            <div className='project-main-header'>
                <h1>My Projects</h1>
            </div>
            <div className='projects-container'>
                <div className='in-progress-projs'>
                    <h2>In Progress</h2>
                    <ProjectCard name={projects[3].name} details={projects[3].details}/>
                    <ProjectCard name={projects[4].name} details={projects[4].details}/>
                </div>
                <div className='completed-projs'>
                    <h2>Completed</h2>
                    <ProjectCard name={projects[2].name} details={projects[2].details}/>
                    <ProjectCard name={projects[1].name} details={projects[1].details}/>
                </div>    
            </div>
        </div>
    );
};