import React, { useState } from 'react';

import './hobby-card.css';

const HobbyCard = ({hobby}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        const click = !isClicked;
        setIsClicked(click);
        console.log('Card Flipped');
    };

    return(
        <div className={`card ${isClicked? "flip" : ""}`}>
            <div className='front' onClick={handleClick}>
                <h1>{hobby.name}</h1>
            </div>
            <div className='back' onClick={handleClick}>
                <p>{hobby.blurb}</p>
            </div>
        </div>
    );
};

export {HobbyCard};