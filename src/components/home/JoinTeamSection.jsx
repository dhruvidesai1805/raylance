import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import jobSearchImg from '../../assets/joinOurTeam/jobSearch.jpg';
import whatWeOfferImg from '../../assets/joinOurTeam/whatWeOffer.jpg';
import whyHpitImg from '../../assets/joinOurTeam/whyHpit.jpg';
import joinTeamBg from '../../assets/joinOurTeam/joinTeamLeftBG.png';

const JoinTeamSection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false);

    const cards = [
        { id: 1, title: "WHY HPIT", description: "A place where innovation and growth come together.", image: whyHpitImg },
        { id: 2, title: "WHAT WE OFFER", description: "Benefits and opportunities to help you excel.", image: whatWeOfferImg },
        { id: 3, title: "JOB SEARCH", description: "Find roles that fit your skills and passion.", image: jobSearchImg },
        { id: 4, title: "About US", description: "Find roles that fit your skills and passion.", image: jobSearchImg },
    ];

    useEffect(() => {
        if (prevRef.current && nextRef.current) {
            setSwiperReady(true);
        }
    }, []);

    return (
        <section className="w-full bg-[#0a0514] text-white py-20 px-6 md:px-14 lg:px-12 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
            <div className="absolute top-0 right-0 h-full w-[15%] mt-10 pt-10 pointer-events-none z-0 opacity-60">
                <img src={joinTeamBg} alt="" className="w-full h-auto object-contain object-right-top scale-125" />
            </div>

            <div className="relative z-10 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Join <span className="title-highlight">Our</span> Team
                </h2>
                <p className="text-gray-400 max-w-2xl text-lg">
                    We're always looking for passionate, driven individuals to grow with us.
                    At our core, we value collaboration, creativity, and a commitment to excellence.
                </p>
            </div>

            <div className="relative z-20 mt-15">
                <Swiper
                    key={swiperReady ? 'ready' : 'not-ready'}
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3500 }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full"
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className="h-[460px] group relative rounded-lg overflow-hidden border border-white/5 bg-zinc-900">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 p-8">
                                    <h3 className="text-xl font-bold mb-2 tracking-wide uppercase">{card.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{card.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="relative z-50 flex justify-end items-center gap-4 mt-8 pr-4">
                    <button
                        ref={prevRef}
                        className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group backdrop-blur-sm"
                    >
                        <ArrowLeft size={20} className="text-white group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        ref={nextRef}
                        className="w-12 h-12 rounded-full border border-red-500 bg-transparent flex items-center justify-center hover:bg-red-500/20 transition-colors cursor-pointer group backdrop-blur-sm"
                    >
                        <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JoinTeamSection;