import React from 'react';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import {HairStudio} from "./Model/HairInfo";
import "./MainPage.css";
import Cover from "./Cover/Cover";
import ServicePage from "./Services/ServicePage";

interface MainPageProps {
    info: HairStudio;
}
const MainPage:React.FC<MainPageProps> = ({ info }) => {
    return (
        <div className="main-page">
            <Navbar data={info}/>
            <Cover />
            <ServicePage info={info} />
            <Footer info={info} />
        </div>
    );
};

export default MainPage;
