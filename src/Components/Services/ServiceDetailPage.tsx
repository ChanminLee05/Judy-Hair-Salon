import React from 'react';
import {HairStudio} from "../Model/HairInfo";
import "./ServiceDetailPage.css";

interface ServiceProps {
    info: HairStudio;
}
const ServiceDetailPage:React.FC<ServiceProps> = ({ info }) => {
    return (
        <div className="service-detail-page">
            <ul>
                {Array.from(new Set(info.services.map(data => data.category))).map((category, index) => (
                    <li key={index} className="service-item">
                        {category}
                        <ul>
                            {info.services.filter(service => service.category === category).map((service, subIndex) => (
                                <li key={subIndex} className="sub-service-item">
                                    {service.subCategory}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            {/*<ul>*/}
            {/*    {info.services.map((data) => (*/}
            {/*        <li key={data.category} className="service-item">{data.subCategory}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </div>
    );
};

export default ServiceDetailPage;
