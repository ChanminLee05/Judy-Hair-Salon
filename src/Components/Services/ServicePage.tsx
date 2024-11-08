import React from 'react';
import {HairStudio} from "../Model/HairInfo";
import "./ServicePage.css";
import Cut from "../../Assets/scissors.png";
import Perm from "../../Assets/perm.png";
import Color from "../../Assets/hair-dye.png";
import {Link} from "react-router-dom";

interface ServiceProps {
    info: HairStudio;
}
const ServicePage:React.FC<ServiceProps> = ({ info }) => {
    return (
        <div className="service-page" id="services">
            <h1>Service</h1>
            <div className="service-category-container">
                <div className="service-category hair-cut">
                    <img src={Cut} alt="" className="service-img"/>
                    <h3>Hair Cut</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <Link to="/service-detail" className="btn btn-dark service-detail-link">More</Link>
                </div>
                <div className="service-category hair-perm">
                    <img src={Perm} alt="" className="service-img"/>
                    <h3>Hair Perm</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <Link to="/service-detail" className="btn btn-dark service-detail-link">More</Link>
                </div>
                <div className="service-category hair-color">
                    <img src={Color} alt="" className="service-img"/>
                    <h3>Hair Color</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <Link to="/service-detail" className="btn btn-dark service-detail-link">More</Link>
                </div>
                <div className="service-category hair-cut">
                    <img src={Cut} alt="" className="service-img"/>
                    <h3>Hair Treatment</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <Link to="/service-detail" className="btn btn-dark service-detail-link">More</Link>
                </div>
                <div className="service-category hair-perm">
                    <img src={Perm} alt="" className="service-img"/>
                    <h3>Hair Styling</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <Link to="/service-detail" className="btn btn-dark service-detail-link">More</Link>
                </div>
                <div className="service-category hair-color">
                    <img src={Color} alt="" className="service-img"/>
                    <h3>Hair Spa</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <Link to="/service-detail" className="btn btn-dark service-detail-link">More</Link>
                </div>
            </div>

        </div>
    );
};

export default ServicePage;
