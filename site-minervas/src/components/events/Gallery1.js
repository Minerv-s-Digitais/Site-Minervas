import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import photo01 from "../../assets/event-photo-01-recepcao-CPII.jpg"
import photo02 from "../../assets/event-photo-02-recepcao-CPII.jpg"
import photo03 from "../../assets/arduino-tangua01.jpeg"
import photo04 from "../../assets/arduino-tangua02.jpeg"
import photo05 from "../../assets/arduino-tangua03.jpeg"
import  './Gallery.scss'
const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    59: { items: 2 },
    60: { items: 3 },
    61: { items: 4 },
    62: { items: 5 },
}
const items = [
    <div className="item" data-value="1">
        <img className='img-gallery' src={photo01} onDragStart={handleDragStart} role="presentation" alt="Recepção alunos CP II 01"/>  
    </div>,
    <div className="item" data-value="2">
        <img className='img-gallery' src={photo02} onDragStart={handleDragStart} role="presentation" alt="Recepção alunos CP II 02"/>
    </div>,
    <div className="item" data-value="3">
        <img className='img-gallery' src={photo03} onDragStart={handleDragStart} role="presentation" alt="Arduíno em Tanguá 01"/>
    </div>,
    <div className="item" data-value="4">
        <img className='img-gallery' src={photo04} onDragStart={handleDragStart} role="presentation" alt="Arduíno em Tanguá 02"/>
    </div>,
    <div className="item" data-value="5">
        <img className='img-gallery' src={photo05} onDragStart={handleDragStart} role="presentation" alt="Arduíno em Tanguá 03"/>

    </div>,
];

const Carousel1 = () => (
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
    />
);

export default Carousel1

