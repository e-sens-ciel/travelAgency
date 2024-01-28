import React from 'react';
import icon1 from './icons/1_icon.png';
import icon2 from './icons/2_icon.png';
import icon3 from './icons/3_icon.png';
import icon4 from './icons/4_icon.png';
import './iconsContainer.css';

const IconsContainer = () => {
    return (
        <div className="body-container">
        <div className="icons-container">
            <div className="icon-container">
                <img src={icon1} alt="Icon 1" className="icon" />
                <h2>Guidance</h2>
                <p>Expert insight & travel knowledge</p>
            </div>
            <div className="icon-container">
                <img src={icon2} alt="Icon 2" className="icon" />
                <h2>Value</h2>
                <p>Irresistible Rates, Offers & Benefits</p>
            </div>
            <div className="icon-container">
                <img src={icon3} alt="Icon 3" className="icon" />
                <h2>Peace Of mind</h2>
                <p>Reassurance to Book with Confidence</p>
            </div>
            <div className="icon-container">
                <img src={icon4} alt="Icon 4" className="icon" />
                <h2>Service</h2>
                <p>Beside You Every Step of the Way</p>
            </div>
        </div>
        </div>
    );
};

export default IconsContainer;
