import React from 'react';
import {HairStudio} from "../Model/HairInfo";
import "./ServicePage.css";
import Color from "../../Assets/hair-color.jpg";
import Perm from "../../Assets/perm.jpg";
import Styling from "../../Assets/hair-styling.jpg";
import Spa from "../../Assets/hair-spa.jpg";
import {useNavigate} from "react-router-dom";

interface ServiceProps {
    text: any;
}
const ServicePage:React.FC<ServiceProps> = ({ text }) => {
    const navigate = useNavigate();

    function goToServiceDetailPage() {
        navigate('/service-detail')
    }
    return (
        <div className="service-page" id="services">
            <h1>{text.servicesTitle}</h1>
            <div className="service-category-container">
                <div className="service-category hair-color">
                    <img src={Color} alt="" className="service-img"/>
                    <div className="service-desc">
                        <h3>{text.services.hairColoring.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: text.services.hairColoring.description }} />
                    </div>
                </div>
                <div className="service-category hair-perm">
                    <img src={Perm} alt="" className="service-img"/>
                    <div className="service-desc">
                        <h3>{text.services.hairPerm.title}</h3>
                        <p>{text.services.hairPerm.description}</p>
                    </div>
                </div>
                <div className="service-category hair-style">
                    <img src={Styling} alt="" className="service-img"/>
                    <div className="service-desc">
                        <h3>{text.services.kBeautyStyling.title}</h3>
                        <p>{text.services.kBeautyStyling.description}</p>
                    </div>
                </div>
                <div className="service-category hair-spa">
                    <img src={Spa} alt="" className="service-img"/>
                    <div className="service-desc">
                        <h3>{text.services.hairSpa.title}</h3>
                        <p>{text.services.hairSpa.description}</p>
                    </div>
                </div>
            </div>
            <button className="price-btn" onClick={goToServiceDetailPage}>More Details<i className="fa-solid fa-chevron-right"></i></button>
        </div>
    );
};

export default ServicePage;
