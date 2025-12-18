import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import heroBg from '../../assets/homebanner.jpg';
import empoweringImg from '../../assets/empowingVision.jpg';
import transformingImg from '../../assets/transformingLandscape.jpg';
import drivingImg from '../../assets/digitalIntelligance.jpg';
import creativityImg from '../../assets/creativity.jpg';

const HeroSection = () => {
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    const slides = [
        {
            id: 1,
            image: heroBg,
            titleLine1: "Innovation",
            titleLine2: "At Every Step"
        },
        {
            id: 2,
            image: empoweringImg,
            titleLine1: "Empowering",
            titleLine2: "Your Vision"
        },
        {
            id: 3,
            image: transformingImg,
            titleLine1: "Transforming",
            titleLine2: "Digital Landscapes"
        },
        {
            id: 4,
            image: drivingImg,
            titleLine1: "Driving for",
            titleLine2: "Digital Excellence"
        },
        {
            id: 5,
            image: creativityImg,
            titleLine1: "Creativity In",
            titleLine2: "Our Blood Line"
        }
    ];

    return (
        <div className="relative w-full h-[calc(100vh-80px)] bg-black group">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect={'fade'}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={{
                    prevEl,
                    nextEl,
                }}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] ease-out hover:scale-105"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/70 to-transparent"></div>
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14 lg:px-12">
                            <div className="mt-[-80px]">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-2 leading-tight">
                                    <span
                                        className="block text-transparent bg-clip-text"
                                        style={{
                                            WebkitTextStroke: '1px white',
                                            color: 'transparent'
                                        }}
                                    >
                                        {slide.titleLine1}
                                    </span>
                                    <span className="block mt-2">
                                        {slide.titleLine2}
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-10 left-6 md:left-12 z-20 flex gap-4">
                <button
                    ref={setPrevEl}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-red-500/50 text-white flex items-center justify-center hover:bg-red-500/10 transition-colors backdrop-blur-sm group cursor-pointer z-50"
                    aria-label="Previous Slide"
                >
                    <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="absolute bottom-10 right-6 md:right-12 z-20 flex gap-4">
                <button
                    ref={setNextEl}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-red-500/50 text-white flex items-center justify-center hover:bg-red-500/10 transition-colors backdrop-blur-sm group cursor-pointer z-50"
                    aria-label="Next Slide"
                >
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
