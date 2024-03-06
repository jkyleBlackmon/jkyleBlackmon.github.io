import React from 'react';
import './project-card.css';

const ProjectCard = ({name, details}) => {

    const handleClick = () => {
        console.log('Navigating to project github...');
        window.open(details.url, '_blank');
    };

    return(
        <div className='project-card-container'>
            <div className='project-card-header'>
                <h1>{name}</h1>
                <h3>{details.primaryLanguage}</h3>
                {details.secondaryLanguages.length > 0 ? 
                    (<h4>{`Frameworks: ${details.secondaryLanguages}`}</h4>)
                :
                    (<br></br>)
                }
            </div>
            <div className='project-card-body'>
                <p>{details.description}</p>
                {details.url !== "" ? 
                    (   <button onClick={handleClick} className='github-button'>
                            {`View on GitHub`}
                        </button> )
                    :
                    (   <h4>This project is not public</h4> )
                }
            </div>
        </div>
    );
};


export { ProjectCard };