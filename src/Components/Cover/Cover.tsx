import React from 'react';
import "./Cover.css";
// import CoverImg1 from "../../Assets/cover1.png";
import Video from "../../Assets/cover-video.mp4";

const Cover:React.FC = () => {
    return (
        <div className="cover-page" id="cover-page">
            <video autoPlay loop muted playsInline className="cover-video">
                <source src={Video} type="video/mp4"/>
            </video>
            <div className="cover-txt-container">
                <h1>Experience K-Beauty</h1>
                <h3>Discover Your Own Style</h3>
                <p><span>Color</span> | <span>Cut</span> | <span>Perm</span> | <span>Styling</span> | <span>Hair Spa</span></p>
                <a className="book-link" href="https://examplesite.trafft.com">Book an Appointment</a>
            </div>
        </div>
    );
};

export default Cover;
