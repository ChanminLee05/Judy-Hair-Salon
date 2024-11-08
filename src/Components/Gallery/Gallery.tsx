import React from 'react';
import "./Gallery.css";
import Sample1 from "../../Assets/instagram-img1.png";
import Sample2 from "../../Assets/instagram-img2.png";
import Sample3 from "../../Assets/instagram-img3.png";
import Sample4 from "../../Assets/instagram-img4.png";
const Gallery:React.FC = () => {
    return (
        <div className="gallery-page" id="gallery">
            <h1>Find Us on Instagram</h1>
            <div className="instagram-container">
                <img className="instagram-img" src={Sample1} alt="instagram-image"/>
                <img className="instagram-img" src={Sample2} alt="instagram-image"/>
                <img className="instagram-img" src={Sample3} alt="instagram-image"/>
                <img className="instagram-img" src={Sample4} alt="instagram-image"/>
                <img className="instagram-img" src={Sample1} alt="instagram-image"/>
                <img className="instagram-img" src={Sample2} alt="instagram-image"/>
                <img className="instagram-img" src={Sample3} alt="instagram-image"/>
                <img className="instagram-img" src={Sample4} alt="instagram-image"/>
            </div>
        </div>
    );
};

export default Gallery;
