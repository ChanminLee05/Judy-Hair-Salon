import React, { useState } from 'react';
import {HairStudio} from "../Model/HairInfo";
import "./ServiceDetailPage.css";
import Navbar from '../Navbar/Navbar';
import languageData from '../Model/LanguageData';
import PriceImg from "../../Assets/price-image1.jpg";

interface ServiceProps {
    info: HairStudio;
    
}
const ServiceDetailPage:React.FC<ServiceProps> = ({ info }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
    const categories = Array.from(new Set(info.services.map(service => service.category)));
    const filteredServices = selectedCategory === 'ALL' ? info.services : info.services.filter(service => service.category === selectedCategory);

    const [selectedLang, setSelectedLang] = useState<"English" | "Korean">("English");
    const text = languageData[selectedLang];

    const handleSelect = (lang: "English" | "Korean") => {
        setSelectedLang(lang);
    };

    return (
        <div className="service-detail-page">
            <img src={PriceImg} alt='' className='price-image'/>
            <Navbar data={info} text={text} selectedLang={selectedLang} handleSelect={handleSelect}/>
            <h1>{text.services.service}</h1>
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
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;
