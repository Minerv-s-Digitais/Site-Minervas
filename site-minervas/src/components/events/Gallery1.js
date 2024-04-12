import React from 'react';
import photo01 from "../../assets/event-photo-01-recepcao-CPII.jpg"
import photo02 from "../../assets/event-photo-02-recepcao-CPII.jpg"
import photo03 from "../../assets/arduino-tangua01.jpeg"
import photo04 from "../../assets/arduino-tangua02.jpeg"
import photo05 from "../../assets/arduino-tangua03.jpeg"
import photo06 from "../../assets/event-jornad@s-conhecimento-01.jpg"
import photo07 from "../../assets/event-minervaJam-prototipagem-01.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Gallery.scss'


const Carousel1 = () => {

    const item = [
        <div className='container'>
            <img className='item' src={photo01} alt="Recepção alunos CP II 01" />
            <div className='text-image'>Recepção alunos do Colégio Pedro II</div>
        </div>,
        <div className='container'>
            <img className='item' src={photo02} alt="Recepção alunos CP II 02" />
            <div className='text-image'>Recepção alunos do Colégio Pedro II</div>
        </div>,
        <div className='container'>
            <img className='item' src={photo03} alt="Arduíno em Tanguá 01" />
            <div className='text-image'>Arduíno em Tanguá</div>
        </div>,
        <div className='container'>
            <img className='item' src={photo04} alt="Arduíno em Tanguá 02" />
            <div className='text-image'>Arduíno em Tanguá</div>
        </div>,
        <div className='container'>
            <img className='item' src={photo05} alt="Arduíno em Tanguá 03" />
            <div className='text-image'>Arduíno em Tanguá</div>
        </div>,
        <div className='container'>
            <img className='item' src={photo06} alt="Jornad@s: Conhecimento" />
            <div className='text-image'>Jornad@s: Conhecimento</div>
        </div>,
        <div className='container'>
            <img className='item' src={photo07} alt="MinervaJam: Prototipagem" />
            <div className='text-image'>MinervaJam: Prototipagem</div>
        </div>,
    ]
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
            dir='rtl'
            autoplay={{
                delay: 1500,
                disableOnInteraction: false

            }}
            modules={[Autoplay]}
            style={{ padding: 30 }}
        >
            <div>
                {item.map((item, index) => (
                    <SwiperSlide className='slider' key={index}>{item}</SwiperSlide>

                ))}
            </div>

        </Swiper>
    );
};

export default Carousel1;