import React from 'react';
import "./Cover.css";
import CoverImg1 from "../../Assets/cover1.png";

interface coverProps {
    text: any;
}
const Cover:React.FC<coverProps> = ({ text }) => {
    return (
        <div className="cover-page" id="cover-page">
            <img src={CoverImg1} alt="" className="cover-img"/>
            <div className="cover-txt-container">
                <h1>Experience K-Beauty</h1>
                <h3>{text.discoverStyle}</h3>
                <p><span>{text.services.color}</span> | <span>{text.services.cut}</span> | <span>{text.services.perm}</span> | <span>{text.services.styling}</span> | <span>{text.services.hairSpa.title}</span></p>
                <a className="book-link" href="https://examplesite.trafft.com">{text.bookAppointment}</a>
            </div>
        </div>
    );
};

export default Cover;
