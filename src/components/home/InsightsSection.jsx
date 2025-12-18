import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import digitalImg from '../../assets/insights/digitalInform.jpg';
import cyberImg from '../../assets/insights/cyberForm.jpg';
import techImg from '../../assets/insights/techExpo.jpg';
import insightDecor from '../../assets/insights/insight.png';
import ArrowButton from '../common/ArrowButton';

const InsightsSection = () => {
    const [activeTab, setActiveTab] = useState('Event');

    const tabs = ['Event', 'Press Release', 'Latest News'];

    const contentData = [
        {
            id: 1,
            title: "DIGITAI SUMMIT",
            description: "Shaping the future with innovation and collaboration.",
            image: digitalImg,
            category: "Event"
        },
        {
            id: 2,
            title: "CYBER FORM",
            description: "Insights on security and resilience from global experts.",
            image: cyberImg,
            category: "Event"
        },
        {
            id: 3,
            title: "TECH EXPO",
            description: "Showcasing trends and breakthroughs across industries.",
            image: techImg,
            category: "Event"
        }
    ];

    return (
        <section className="w-full bg-[#020202] text-white py-20 px-6 md:px-14 lg:px-12 relative overflow-hidden">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 relative z-10">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Explore <span className="text-[#B088FF]">Our Latest Insights</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Explore our latest insights to stay ahead of the curve with fresh perspectives, expert analysis, and emerging trends across industries.
                    </p>
                </div>

                <div className="hidden md:block absolute -top-10 -right-[160px] pointer-events-none">
                    <img src={insightDecor} alt="" className="w-64 h-auto opacity-80" />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap mb-16 relative z-10 justify-evenly">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-20 py-3 rounded-lg border transition-all duration-300 text-lg font-medium 
                            ${activeTab === tab
                                ? 'bg-[#1a103c] border-[#3b2a6e] text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                                : 'bg-transparent border-gray-800 text-gray-300 hover:border-gray-600'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {contentData.map((card) => (
                    <div key={card.id} className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden group hover:border-gray-600 transition-colors">
                        <div className="h-64 overflow-hidden relative">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>

                        <div className="p-8">
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{card.title}</h3>
                            <p className="text-gray-400 mb-8 min-h-[48px]">{card.description}</p>

                            <ArrowButton text="Learn more" href="#" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        </section>
    );
};

export default InsightsSection;
