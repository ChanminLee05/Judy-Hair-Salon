import React from 'react';
import {HairStudio} from "../Model/HairInfo";
import "./ServicePage.css";
import Color from "../../Assets/hair-color.jpg";
import Perm from "../../Assets/perm.jpg";
import Styling from "../../Assets/hair-styling.jpg";
import Spa from "../../Assets/hair-spa.jpg";
import {useNavigate} from "react-router-dom";

const ServicePage:React.FC = () => {
    const navigate = useNavigate();

    function goToServiceDetailPage() {
        navigate('/service-detail')
    }
    return (
        <div className="service-page" id="services">
            <h1>Our Services</h1>
            <div className="service-category-container">
                <div className="service-category hair-color">
                    <img src={Color} alt="" className="service-img"/>
                    <div className="service-desc">
                        <h3>Hair Coloring</h3>
                        <p>All hair color services include complimentary <b>Olaplex</b> treatment to protect and strengthen your hair. Enjoy vibrant, rich color without compromising hair health!</p>
                    </div>
                </div>
                <div className="service-category hair-perm">
                    <img src={Perm} alt="" className="service-img"/>
                    <div className="service-desc">
                        <h3>Hair Perm</h3>
                        <p>Explore a variety of perm styles to suit your unique look! Our perm services include a personalized consultation to ensure the best results for your hair type.</p>
                    </div>
                </div>
                <div className="service-category hair-style">
                    <img src={Styling} alt="" className="service-img"/>
                    <div className="service-desc">
                        <h3>K-beauty Styling</h3>
                        <p>Transform with the latest K-beauty trends! From bridal styling to modern Korean looks, enjoy a personalized consultation to achieve your perfect style.</p>
                    </div>
                </div>
                <div className="service-category hair-spa">
                    <img src={Spa} alt="" className="service-img"/>
                    <div className="service-desc">
                        <h3>Hair Spa</h3>
                        <p>Revitalize your hair and scalp with our luxurious spa services. Enjoy soothing scalp massages, deep conditioning, and nutrient-rich hydration treatments for ultimate hair health.</p>
                    </div>
                </div>
            </div>
            <div className="price-btn-container">
                <button className="price-btn" onClick={goToServiceDetailPage}>More Details<i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    );
};

export default ServicePage;
