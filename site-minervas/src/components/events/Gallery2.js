import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import photo06 from "../../assets/event-photo-06.jpg"
import photo07 from "../../assets/event-photo-07.jpg"
import photo08 from "../../assets/event-photo-08.jpg"
import photo09 from "../../assets/event-photo-09.jpg"
import photo10 from "../../assets/event-photo-10.jpg"
import  './Gallery.scss'
const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    59: { items: 2 },
    60: { items: 3 },
    61: { items: 4 },
    62: { items: 5 },
    
};

const items = [
    <div className="item" data-value="1">
        <img className='img-gallery' src={photo06} onDragStart={handleDragStart} role="presentation" alt="Foto ManaMano 01"/>  
    </div>,
    <div className="item" data-value="2">
        <img className='img-gallery' src={photo07} onDragStart={handleDragStart} role="presentation" alt="Foto ManaMano 02"/>
    </div>,
    <div className="item" data-value="3">
        <img className='img-gallery' src={photo08} onDragStart={handleDragStart} role="presentation" alt="Foto ManaMano 03"/>
    </div>,
    <div className="item" data-value="4">
        <img className='img-gallery' src={photo09} onDragStart={handleDragStart} role="presentation" alt="Foto Manamano 04"/>
    </div>,
    <div className="item" data-value="5">
        <img className='img-gallery' src={photo10} onDragStart={handleDragStart} role="presentation" alt="Foto Manamano 05"/>
    </div>,
];

const Carousel2 = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay={true}
        infinite={true}
        animationDuration={3000}
        disableButtonsControls={true}
        disableDotsControls={true}
        autoPlayDirection='rtl'
    />
);

export default Carousel2