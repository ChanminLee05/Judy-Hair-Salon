import React, {useState} from 'react';
import "./Navbar.css";
import {HairStudio} from "../Model/HairInfo";
import Logo from "../../Assets/logo-white.png";
import KR from "../../Assets/south-korea.png";
import US from "../../Assets/united-states.png";

interface NavbarProps {
    data: HairStudio;
    text: any;
    selectedLang: "English" | "Korean";
    handleSelect: (lang: "English" | "Korean") => void;
}
const Navbar: React.FC<NavbarProps> = ({ data, text, selectedLang, handleSelect }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(prevState => !prevState);
    }


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="" className="logo-img"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#services">{text.servicesTitle}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/service-detail">{text.prices}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gallery">{text.gallery}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://examplesite.trafft.com">{text.bookOnline}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.instagram.com/judyhairsalon/" target="_blank">
                                <i className="fa-brands fa-instagram instagram-icon"></i>
                            </a>
                        </li>
                        <li className="lang-options">
                            <div className="dropdown-center dropup">
                                <button className="btn lang-btn dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded={isDropdownOpen}
                                        onClick={toggleDropdown}
                                >
                                    <img src={selectedLang === "English" ? US : KR} alt="" className="option-img"/>
                                    {selectedLang === "English" ? "English" : "한국어"}
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => handleSelect(selectedLang === "English" ? "Korean" : "English")}>
                                            <img src={selectedLang === "English" ? KR : US} alt="" className="option-img"/>
                                            {selectedLang === "English" ? "한국어" : "English"}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-address">
                            <p className="list-info">
                                {data.address.streetNumber}, {data.address.city}, {data.address.province}, {data.address.zipCode}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
