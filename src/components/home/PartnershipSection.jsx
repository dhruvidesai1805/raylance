import React from 'react';
import partnershipImg from '../../assets/partnership/partnership.jpg';
import ornamentRed from '../../assets/partnership/OrnamentRed.svg';
import ArrowButton from '../common/ArrowButton';

const PartnershipSection = () => {
    return (
        <section className="w-full bg-[#020202] relative text-white py-20 px-6 md:px-16 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                <div className="w-full lg:w-1/2 relative">
                    <div className="relative z-10 rounded-lg overflow-hidden">
                        <img
                            src={partnershipImg}
                            alt="Partnership"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>

                    <div className="absolute -bottom-0 w-full -left-10 z-0 flex flex-col gap-6">
                        <div className="grid grid-cols-2 gap-3 w-[2%]">
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-500/60"></div>
                            ))}
                        </div>

                        <div className="ml-15 absolute top-[109px] ">
                            <img src={ornamentRed} alt="" className="h-12 w-auto" />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        The Power <span className="title-highlight">of Partnership</span>
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
                        True success is built on strong collaboration. By working closely with our clients, we turn shared goals into meaningful outcomes.
                    </p>

                    <ArrowButton text="Know More" href="#" />
                </div>
            </div>

        </section>
    );
};

export default PartnershipSection;
