import React, {useState} from 'react';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import {HairStudio} from "./Model/HairInfo";
import "./MainPage.css";
import Cover from "./Cover/Cover";
import ServicePage from "./Services/ServicePage";
import Gallery from "./Gallery/Gallery";
import languageData from "./Model/LanguageData";

interface MainPageProps {
    info: HairStudio;
}
const MainPage:React.FC<MainPageProps> = ({ info }) => {
    const [selectedLang, setSelectedLang] = useState<"English" | "Korean">("English");
    const text = languageData[selectedLang];

    const handleSelect = (lang: "English" | "Korean") => {
        setSelectedLang(lang);
    };

    return (
        <div className="main-page">
            <Navbar data={info} text={text} selectedLang={selectedLang} handleSelect={handleSelect}/>
            <Cover text={text}/>
            <ServicePage text={text} />
            <Gallery text={text}/>
            <Footer info={info} text={text}/>
        </div>
    );
};

export default MainPage;
