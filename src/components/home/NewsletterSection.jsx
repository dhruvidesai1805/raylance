import React from 'react';
import newsletterImg from '../../assets/newsletter.jpg';
import ornamentRed from '../../assets/partnership/OrnamentRed.svg';

const NewsletterSection = () => {
    return (
        <section className="w-full bg-[#020202] text-white py-20 px-6 md:px-16 lg:px-24">

            <h2 className="text-4xl md:text-5xl font-bold mb-16">
                Featured <span className="text-[#B088FF]">Newsletter</span>
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                <div className="w-full lg:w-1/2 relative">
                    <div className="relative z-10 rounded-lg overflow-hidden h-[400px]">
                        <img
                            src={newsletterImg}
                            alt="Featured Newsletter"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
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
                    <h3 className="text-3xl md:text-[44px] font-bold mb-6 leading-tight">
                        Stay Ahead with the <br />
                        <span className="text-white">HPIT Edge</span>
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                        Get the latest updates from HPIT, including expert perspectives, technology breakthroughs, and news that keeps you at the forefront of digital transformation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="bg-hpit-input border border-gray-800 text-white px-6 py-4 rounded-md w-full focus:outline-none focus:border-gray-600 transition-colors"
                        />
                        <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-4 rounded-md transition-colors w-full sm:w-auto">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
