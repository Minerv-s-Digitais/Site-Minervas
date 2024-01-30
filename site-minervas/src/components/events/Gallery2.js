import React from 'react';
import photo08 from "../../assets/event-photo-06-hackaton-manamano.jpg"
import photo09 from "../../assets/event-photo-07-hackaton-manamano.jpg"
import photo10 from "../../assets/event-photo-08-hackaton-manamano.jpg"
import photo11 from "../../assets/event-photo-09-hackaton-manamano.jpg"
import photo12 from "../../assets/event-photo-10-hackaton-manamano.jpg"
import photo13 from "../../assets/event-visita-tecnica-sesc-01.jpg"
import photo14 from "../../assets/event-snct-01.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Gallery.scss'


const Carousel2 = () => {

    const items = [
        <div className='container'>
            <img src={photo08} className='item' alt="Foto ManaMano 01" />
            <div className='text-image'>ManaMano</div>
        </div>,
        <div className='container'>
            <img src={photo09} className='item' alt="Foto ManaMano 02" />
            <div className='text-image'>ManaMano</div>
        </div>,
        <div className='container'>
            <img src={photo10} className='item' alt="Foto ManaMano 03" />
            <div className='text-image'>ManaMano</div>
        </div>,
        <div className='container'>
            <img src={photo11} className='item' alt="Foto Manamano 04" />
            <div className='text-image'>ManaMano</div>
        </div>,
        <div className='container'>
            <img src={photo12} className='item' alt="Foto Manamano 05" />
            <div className='text-image'>ManaMano</div>
        </div>,
        <div className='container'>
            <img src={photo13} className='item' alt="Visita técnica no SESC" />
            <div className='text-image'>Visita técnica no SESC</div>
        </div>,
        <div className='container'>
            <img src={photo14} className='item' alt="Semana Nacional de Ciência e Tecnologia" />
            <div className='text-image'>Semana Nacional de Ciência e Tecnologia</div>
        </div>,


    ];
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={5}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                500: {
                    slidesPerView: 2,
                },
                750: {
                    slidesPerView: 3,
                },
                1100: {
                    slidesPerView: 4,
                },
                1350: {
                    slidesPerView: 5,
                },
                1500: {
                    slidesPerView: 6,
                }
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            dir='ltr'
            autoplay={{
                delay: 1500,
                disableOnInteraction: false

            }}
            modules={[Autoplay]}
            style={{ padding: 30 }}
        >
            <div>
                {items.map((item, index) => (
                    <SwiperSlide className='slider' key={index}>{item}</SwiperSlide>

                ))}
            </div>

        </Swiper>
    );
};

export default Carousel2;