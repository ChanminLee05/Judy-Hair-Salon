import React, {useEffect, useRef, useState} from 'react';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import {HairStudio} from "./Model/HairInfo";
import "./MainPage.css";
import Cover from "./Cover/Cover";
import ServicePage from "./Services/ServicePage";
import Gallery from "./Gallery/Gallery";

interface MainPageProps {
    info: HairStudio;
}
const MainPage:React.FC<MainPageProps> = ({ info }) => {
    const serviceRef = useRef<HTMLDivElement>(null);

    const [hasScrolledToService, setHasScrolledToService] = useState(false);
    const [startTouchY, setStartTouchY] = useState(0);

    const scrollToService = () => {
        if (serviceRef.current) {
            window.scrollTo({
                top: serviceRef.current.offsetTop,
                behavior: 'smooth'
            })
            setHasScrolledToService(true);
        }
    }

    useEffect(() => {
        // Desktop scroll
        const handleScroll = (event: WheelEvent) => {
            if (!hasScrolledToService && window.scrollY < window.innerHeight && event.deltaY > 0) {
                scrollToService();
            }
        }
        // Mobile scroll
        const handleTouchStart = (event: TouchEvent) => {
            setStartTouchY(event.touches[0].clientY);
        };

        const handleTouchMove = (event: TouchEvent) => {
            const currentTouchY = event.touches[0].clientY;
            if (!hasScrolledToService && window.scrollY < window.innerHeight && startTouchY - currentTouchY > 50) {
                scrollToService();
            }
        }

        window.addEventListener('wheel', handleScroll);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [hasScrolledToService, startTouchY]);

    return (
        <div className="main-page">
            <Navbar data={info} />
            <Cover />
            <div ref={serviceRef}><ServicePage /></div>
            <Gallery />
           <Footer info={info} />
        </div>
    );
};

export default MainPage;
