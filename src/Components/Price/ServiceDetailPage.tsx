import React, { useState } from 'react';
import {HairStudio} from "../Model/HairInfo";
import "./ServiceDetailPage.css";
import Navbar from '../Navbar/Navbar';
import PriceImg from "../../Assets/price-img.jpg";

interface ServiceProps {
    info: HairStudio;
    
}
const ServiceDetailPage:React.FC<ServiceProps> = ({ info }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
    const categories = Array.from(new Set(info.services.map(service => service.category)));
    const filteredServices = selectedCategory === 'ALL' ? info.services : info.services.filter(service => service.category === selectedCategory);

    return (
        <div className="service-detail-page">
            <img src={PriceImg} alt='' className='price-image'/>
            <Navbar data={info}/>
            <h1>Services</h1>
            <div className="services">
                <div className="categories">
                    <button onClick={() => setSelectedCategory('ALL')}>ALL</button>
                    {categories.map(category => (
                        <button key={category} onClick={() => setSelectedCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className="service-list">
                    {filteredServices.map((service, index) => (
                        <div key={index} className="service-item">
                            <div className="item-top">
                                <h6>{service.subCategory}</h6>
                                <p>{service.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p><i className="fa-solid fa-scissors"></i> {info.notice}</p>
            </div>
        </div>
    );
};

export default ServiceDetailPage;
