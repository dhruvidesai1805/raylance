import React from 'react';
import { ArrowRight } from 'lucide-react';

const ArrowButton = ({ text, href = "#", className = "" }) => {
    return (
        <a
            href={href}
            className={`flex items-center gap-0 text-white font-medium cursor-pointer group w-fit ${className}`}
        >
            <span className="text-xl">{text}</span>

            <div className="relative flex mt-[8px]  items-center justify-center w-14 h-14 group-hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full flex items-center justify-center relative">
                    <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform relative z-10" />
                </div>

                <svg className="absolute inset-0 w-full h-full -rotate-142 pointer-events-none">
                    <circle
                        cx="28"
                        cy="28"
                        r="24"
                        fill="transparent"
                        stroke="#ff3131"
                        strokeWidth="2"
                        strokeDasharray="220"
                        strokeDashoffset="100" // Partial arc
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </a>
    );
};

export default ArrowButton;
