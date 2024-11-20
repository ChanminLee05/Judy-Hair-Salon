import React from 'react';
import "./Gallery.css";
import Sample1 from "../../Assets/wtwo.jpeg";
import Sample2 from "../../Assets/wgrey.jpeg";
import Sample3 from "../../Assets/wpink.jpeg";
import Sample4 from "../../Assets/wwine.jpeg";
import Sample5 from "../../Assets/mperm.jpeg";
import Sample6 from "../../Assets/wperm.jpeg";
import Sample7 from "../../Assets/wash.jpeg";
import Sample8 from "../../Assets/wstyling.jpeg";

const images = [
    { id: 1, src: Sample1 },
    { id: 2, src: Sample2 },
    { id: 3, src: Sample3 },
    { id: 4, src: Sample4 },
    { id: 5, src: Sample5 },
    { id: 6, src: Sample6 },
    { id: 7, src: Sample7 },
    { id: 8, src: Sample8 },
];

const Gallery:React.FC = () => {
    return (
        <div className="gallery-page" id="gallery">
            <h1>Find Us on Instagram</h1>
            <div className="instagram-container">
                {images.map((image, index) => (
                    <img src={image.src} alt="" className={`sample-img instagram-img-${index}`} onClick={() => window.location.href="https://www.instagram.com/judyhairsalon/"}/>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
