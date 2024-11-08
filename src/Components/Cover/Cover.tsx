import React from 'react';
import "./Cover.css";
import CoverImg1 from "../../Assets/cover1.png";

const Cover:React.FC = () => {
    return (
        <div className="cover-page" id="cover-page">
            <img src={CoverImg1} alt="" className="cover-img"/>
            <div className="cover-txt-container">
                <h1>Experience K-Beauty</h1>
                <h3>Discover your own style</h3>
                <p><span>Color</span> | <span>Cut</span> | <span>Perm</span> | <span>Styling</span> | <span>Hair Spa</span></p>
                <a className="book-link" href="https://examplesite.trafft.com">Book an Appointment</a>
            </div>
        </div>
    );
};

export default Cover;
