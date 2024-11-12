import React, {useEffect, useState} from 'react';
import "./Navbar.css";
import {HairStudio} from "../Model/HairInfo";
import Logo from "../../Assets/logo.png";
import LogoWhite from "../../Assets/logo-white.png";
import KR from "../../Assets/south-korea.png";
import US from "../../Assets/united-states.png";
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
    data: HairStudio;
    text: any;
    selectedLang: "English" | "Korean";
    handleSelect: (lang: "English" | "Korean") => void;
}
const Navbar: React.FC<NavbarProps> = ({ data, text, selectedLang, handleSelect }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function toggleDropdown() {
        setIsDropdownOpen(prevState => !prevState);
    }

    function goToService() {
        navigate('/');
        setTimeout(() => {
            window.dispatchEvent(new Event("scrollToService"));
        }, 0);
    }



    return (
        <nav className={`navbar navbar-expand-lg ${isScrolled ? 'scrolled' : ''} fixed-top`}>
            <div className="container-fluid">
                <a className={`navbar-brand ${isScrolled ? 'scrolled' : ''}`} href="/">
                    {isScrolled ?
                        <img src={Logo} alt="" className="logo-img" />
                        : <img src={LogoWhite} alt="" className="logo-img" />
                    }
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className={`navbar-nav ${isScrolled ? 'scrolled' : ''}`}>
                        <li className="nav-item">
                            <a className="nav-link" href="#services" onClick={goToService}>{text.services.service}</a>
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
                            <a className="nav-link" href="https://www.instagram.com/judyhairsalon/" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-instagram instagram-icon"></i>
                            </a>
                        </li>
                        <li className="lang-options">
                            <div className="dropdown-center">
                                <button className={`btn lang-btn dropdown-toggle ${isScrolled ? 'scrolled' : ''}`}
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
                                        <button className="dropdown-lang" onClick={() => handleSelect(selectedLang === "English" ? "Korean" : "English")}>
                                            <img src={selectedLang === "English" ? KR : US} alt="" className="option-img"/>
                                            {selectedLang === "English" ? "한국어" : "English"}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
