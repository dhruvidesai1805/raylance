import React from 'react';
import ArrowButton from '../common/ArrowButton';
import teamMateWorks from '../../assets/teamMateWorks.jpg';

const ConnectSection = () => {
    return (
        <section className="w-full relative h-[500px] md:h-[600px] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${teamMateWorks})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-14 lg:px-12">
                <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
                        Let's Make Something <br />
                        <span className="text-white">Great Together!</span>
                    </h2>

                    <ArrowButton text="Connect HPIT" />
                </div>
            </div>
        </section>
    );
};

export default ConnectSection;
