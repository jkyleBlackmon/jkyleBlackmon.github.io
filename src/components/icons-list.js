import React from "react";

import './icons-list.css';

const IconsList = ({icons, type}) => {
    return(
        <div className="icons-container">
            <h2 className="icons-header">{`${type} Skills`}</h2>
            <div className="icons-wrapper">
                {icons.map((icon, index) => (
                    <img key={index} src={require(`../resources/icons/Frameworks_Skills/${type}/${icon}`)} alt={`icon-${index}`}/>
                ))}
            </div>
        </div>
    );
}

export default IconsList;