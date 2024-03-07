import React from "react";
import './social-links.css';

import socials from '../resources/socials.json';
import x_icon from '../resources/icons/x.png';
import linkedin_icon from '../resources/icons/linkedin.png';

const SocialLinks = () => {
    const handleClickX = () => {
        console.log(`Navigating to ${socials['X'].link}`);
        window.open(socials['X'].link, '_blank');
    };
    const handleClickLI = () => {
        console.log(`Navigating to ${socials['LinkedIn'].link}`);
        window.open(socials['LinkedIn'].link, '_blank');
    };
    return(
        <div className="social-media-links">
            <div className="link" onClick={handleClickX}>
                <img src={x_icon} alt={"X"} />
                <span>{"X"}</span>
            </div>
            <div className="link"  onClick={handleClickLI}>
                <img src={linkedin_icon} alt={"LinkedIn"} />
                <span>{"LinkedIn"}</span>
            </div>
        </div>
    );
};

export { SocialLinks };