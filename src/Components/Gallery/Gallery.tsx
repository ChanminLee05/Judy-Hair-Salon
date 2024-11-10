import React, {useState} from 'react';
import "./Gallery.css";
import Sample1 from "../../Assets/instagram-img1.png";
import Sample2 from "../../Assets/instagram-img2.png";
import Sample3 from "../../Assets/instagram-img3.png";
import Sample4 from "../../Assets/instagram-img4.png";

interface galleryProps {
    text: any;
}
interface Image {
    id: number;
    src: string;
}

const images = [
    { id: 1, src: Sample1 },
    { id: 2, src: Sample2 },
    { id: 3, src: Sample3 },
    { id: 4, src: Sample4 },
    { id: 5, src: Sample1 },
    { id: 6, src: Sample2 },
    { id: 7, src: Sample3 },
    { id: 8, src: Sample4 },
];

const Gallery:React.FC<galleryProps> = ({ text }) => {
    const [activeImage, setActiveImage] = useState<Image | null>(null);

    return (
        <div className="gallery-page" id="gallery">
            <h1>{text.findUsOnInstagram}</h1>
            <div className="instagram-container">
                {images.map((image, index) => (
                    <button
                        key={image.id}
                        className="btn p-0"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target={`#offcanvas${image.id}`}
                        aria-controls={`offcanvas${image.id}`}
                        onClick={() => setActiveImage(image)}
                    >
                        <img className="instagram-img" src={image.src} alt={`instagram-image-${index}`} />
                    </button>
                ))}

                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className="offcanvas"
                        data-bs-scroll="false"
                        tabIndex={-1}
                        id={`offcanvas${image.id}`}
                        aria-labelledby={`offcanvasLabel${image.id}`}
                    >
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div id={`carouselExample${image.id}`} className="carousel slide">
                                <div className="carousel-inner">
                                    {images.map((carouselImage, carouselIndex) => (
                                        <div
                                            key={carouselImage.id}
                                            className={`carousel-item ${carouselImage.id === image.id ? 'active' : ''}`}
                                        >
                                            <img src={carouselImage.src} className="d-block carousel-img" alt={`carousel-image-${carouselIndex}`} />
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${image.id}`} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${image.id}`} data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
