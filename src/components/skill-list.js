import React, { useState } from 'react';
import './skill-list.css';

export const SkillList = ({type, skills}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return(
        <div className={`skill-list ${isClicked? "click": ""}`} onClick={handleClick}>
            <div className='skill-list-header'>
                <h2>{type?(`${type} Skills`):(`My Hobbies`)}</h2>
            </div>
            <div className='skill-list-list'>
                <ul>
                    {skills.map((skill, index) => {
                        return (
                            <li key={index}>
                                <h4>{skill}</h4>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
};