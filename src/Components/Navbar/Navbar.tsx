import React, {useEffect, useState} from 'react';
import "./Navbar.css";
import {HairStudio} from "../Model/HairInfo";
import Logo from "../../Assets/logo.png";
import LogoWhite from "../../Assets/logo-white.png";
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
    data: HairStudio;
}
const Navbar: React.FC<NavbarProps> = ({ data }) => {
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
                            <a className="nav-link" href="#services" onClick={goToService}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/service-detail">Prices</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://examplesite.trafft.com">Book Online</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.instagram.com/judyhairstudio/" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-instagram instagram-icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
