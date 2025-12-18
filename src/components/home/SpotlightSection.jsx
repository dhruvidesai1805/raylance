import React from 'react';
import ArrowButton from '../common/ArrowButton';

// Images
import blobImage from '../../assets/spotlight/spotlight-effect.png';
import blogsImage from '../../assets/spotlight/blogs.jpg';
import caseStudiesImage from '../../assets/spotlight/casestudies.jpg';
import reportImage from '../../assets/spotlight/report.jpg';
import successStoryImage from '../../assets/spotlight/successstory.jpg';

const SpotlightSection = () => {
    return (
        <div className="w-full bg-hpit-purple-bg text-white py-20 overflow-hidden relative">

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="mb-16 relative z-10  px-6 md:px-12 lg:px-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">SpotLight</h2>
                <p className="text-[#DADBDD] text-lg">
                    SpotLight showcases the people, projects, and ideas driving innovation and impact across HPIT
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 pr-6 md:pr-14 lg:pr-12">

                <div className="flex flex-col gap-6">
                    <div className="flex items-start ml-[-55px] justify-start relative min-h-[200px]">
                        <img
                            src={blobImage}
                            alt="Spotlight Effect"
                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_50px_rgba(168,85,247,0.4)]"
                        />
                    </div>

                    <div className="relative group overflow-hidden rounded-lg bg-gray-800 h-[370px] ml-8 border-b border-white border-b-[4px]">
                        <img
                            src={caseStudiesImage}
                            alt="Case Study"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                        />
                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <h3 className="text-lg font-bold uppercase tracking-wider">CASE STUDY</h3>
                            <ArrowButton text="Learn more" />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">

                    <div className="relative group overflow-hidden rounded-lg p-8 flex flex-col justify-between bg-gradient-to-br from-blue-700 to-purple-800 h-[370px] border-b border-white border-b-[4px]">
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-6">NEWS ARTICLES</h3>
                            <p className="text-lg text-white/90 font-medium">
                                Ensuring consistent, affordable, and efficient delivery of energy to meet growing demand.
                            </p>
                        </div>

                        <ArrowButton text="Learn more" />
                    </div>

                    <div className="relative group overflow-hidden rounded-lg bg-gray-800 h-[370px] border-b border-white border-b-[4px]">
                        <img
                            src={blogsImage}
                            alt="Blogs"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                        />
                        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                            <h3 className="text-xl font-bold uppercase tracking-wider">BLOGS</h3>
                            <ArrowButton text="Learn more" />
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-lg bg-gray-800 h-[370px] border-b border-white border-b-[4px]">
                        <img
                            src={reportImage}
                            alt="Report"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                        />
                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <h3 className="text-lg font-bold uppercase tracking-wider">REPORT REPORT</h3>
                            <ArrowButton text="Learn more" />
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-lg bg-gray-800 h-[370px] border-b border-white border-b-[4px]">
                        <img
                            src={successStoryImage}
                            alt="Success Story"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                        />
                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <h3 className="text-lg font-bold uppercase tracking-wider">SUCCESS STORY</h3>
                            <ArrowButton text="Learn more" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SpotlightSection;
