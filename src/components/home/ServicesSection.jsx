import React from 'react';
import { ArrowRight } from 'lucide-react';

// Images
import aiImg from '../../assets/services/artificialIntelligence.jpg';
import cloudImg from '../../assets/services/clouds.jpg';
import cyberImg from '../../assets/services/cybersecurity.jpg';
import quantumImg from '../../assets/services/quantum.jpg';
import g5Img from '../../assets/services/5gtech.jpg';
import ArrowButton from '../common/ArrowButton';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: "Artificial Intelligence",
            description: "Find your dream property without experienced guidance.",
            image: aiImg,
            align: "left",
            titleColor: "text-[#ffffff]"
        },
        {
            id: 2,
            title: "Cloud",
            description: "A cloud is a visible mass of tiny water droplets or ice crystals suspended in the Earth's atmosphere.",
            image: cloudImg,
            align: "right",
            titleColor: "text-[#ffffff]"
        },
        {
            id: 3,
            title: "Cyber",
            description: "The word cyber relates to computers, digital technology, networks, and virtual reality.",
            image: cyberImg,
            align: "left",
            titleColor: "text-[#ffffff]"
        },
        {
            id: 4,
            title: "Quantum",
            description: "The word quantum comes from physics and refers to the smallest possible unit of energy or matter.",
            image: quantumImg,
            align: "right",
            titleColor: "text-[#ffffff]"
        },
        {
            id: 5,
            title: "5G Technology",
            description: "5G technology is the latest standard for mobile networks, designed to deliver ultra-fast internet speeds and massive device connectivity.",
            image: g5Img,
            align: "left",
            titleColor: "text-[#ffffff]"
        }
    ];

    return (
        <div className="w-full bg-[#0a0514] text-white">

            <div className="py-20 text-center px-6">
                <h2 className="text-4xl md:text-[48px] font-bold mb-4">
                    Our <span className="title-highlight">Services</span>
                </h2>
                <p className="text-[#DADBDD] max-w-2xl mx-auto text-sm md:text-base">
                    These case studies highlight the challenges our clients faced, the robust solutions we provided, and the measurable results achieved.
                </p>
            </div>

            <div className="flex flex-col">
                {services.map((service) => (
                    <div key={service.id} className="relative w-full h-[400px] md:h-[570px] group overflow-hidden">

                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url(${service.image})` }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.align === 'left' ? 'from-black/90 via-black/40 to-transparent' : 'from-transparent via-black/40 to-black/90'}`}></div>
                        </div>

                        <div className={`relative z-10 h-full flex items-center px-6 md:px-12 lg:px-10 ${service.align === 'left' ? 'justify-start' : 'justify-end'}`}>
                            <div className="max-w-xl text-left">
                                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                                    {service.title.split(' ').map((word, i) => (
                                        <span key={i} className={'text-white text-[48px] font-[600]'}> {word} </span>
                                    ))}
                                </h3>
                                <p className="text-[#DADBDD] text-lg mb-8 leading-relaxed text-[20px] font-[500]">
                                    {service.description}
                                </p>
                                <ArrowButton text="View Case Study" href="#" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default ServicesSection;
