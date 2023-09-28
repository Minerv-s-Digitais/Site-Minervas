import React from 'react';
import photo06 from "../../assets/event-photo-06-hackaton-manamano.jpg"
import photo07 from "../../assets/event-photo-07-hackaton-manamano.jpg"
import photo08 from "../../assets/event-photo-08-hackaton-manamano.jpg"
import photo09 from "../../assets/event-photo-09-hackaton-manamano.jpg"
import photo10 from "../../assets/event-photo-10-hackaton-manamano.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Gallery.scss'


const Carousel2 = () => {

    const items = [
        <div>
            <img src={photo06} className='item' alt="Foto ManaMano 01" />
        </div>,
        <div>
            <img src={photo07} className='item' alt="Foto ManaMano 02" />
        </div>,
        <div>
            <img src={photo08} className='item' alt="Foto ManaMano 03" />
        </div>,
        <div>
            <img src={photo09} className='item' alt="Foto Manamano 04" />
        </div>,
        <div>
            <img src={photo10} className='item' alt="Foto Manamano 05" />
        </div>,
        <div>
            <img src={photo09} className='item' alt="Foto Manamano 04" />
        </div>,
        <div>
            <img src={photo10} className='item' alt="Foto Manamano 05" />
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