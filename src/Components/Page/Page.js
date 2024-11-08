import React, {useEffect, useRef, useState} from 'react';
import "./Page.css";
import Cover from "../../Assets/salon-cover.jpg"
import Navbar from "../Nav/Navbar";
import HairCut from "../../Assets/scissors.png";
import HairPerm from "../../Assets/perm.png";
import HairColor from "../../Assets/hair-dye.png";
import About from "../../Assets/about.jpg";

const Page = () => {
    const coverRef = useRef(null);
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const [visibleSection, setVisibleSection] = useState({
        cover: false,
        about: false,
        service: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            const cover = coverRef.current;
            const about = aboutRef.current;
            const service = serviceRef.current;

            const checkVisibility = (ref) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    return rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
                }
                return false;
            };

            setVisibleSection({
                cover: checkVisibility(cover),
                about: checkVisibility(about),
                service: checkVisibility(service),
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="salon-page">
            <Navbar />
            <div
                className={`cover-section ${visibleSection.cover ? 'animate' : ''}`}
                ref={coverRef}
            >
                <div className="cover-txt">
                    <h1>Make Your Style</h1>
                    <h1>Best Salon in Edmonton</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut harum in totam
                        voluptatibus. Alias aliquam!
                    </p>
                    <a href="https://examplesite.trafft.com" target="_blank"><i className="fa-regular fa-calendar-check"></i>Book Online</a>
                </div>
                <img className="cover-img" src={Cover} alt="" />
            </div>
            <div
                className={`about-section ${visibleSection.about ? 'animate' : ''}`}
                id="about"
                ref={aboutRef}
            >
                <h1>About Us</h1>
                <div className="about-us">
                    <img src={About} alt="" className="about-img"/>
                    <div className="about-txt">
                        <h1>Korean Hair Dresser</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dignissimos exercitationem
                            inventore tenetur! Aliquid!</p>
                    </div>
                </div>
            </div>
            <div
                className={`service-section ${visibleSection.service ? 'animate' : ''}`}
                id="service"
                ref={serviceRef}
            >
                <h1>Services</h1>
                <div className="hair-service-container">
                    <div className="hair-service hair-cut">
                        <img src={HairCut} alt="" className="hair-img hair-cut-img"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="hair-service hair-perm">
                        <img src={HairPerm} alt="" className="hair-img hair-perm-img"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="hair-service hair-color">
                        <img src={HairColor} alt="" className="hair-img hair-color-img"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
