import React, { useState } from 'react';
import { Search, Globe, Menu, X } from 'lucide-react';
import hpitLogo from '../../assets/hpit-logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Company', href: '#' },
        { name: 'Capabilities', href: '#' },
        { name: 'Industries', href: '#' },
        { name: 'Insight', href: '#' },
        { name: 'Career', href: '#' },
    ];

    return (
        <nav className="relative w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-black border-b border-gray-800">
            <div className="flex items-center gap-2">
                <img src={hpitLogo} alt="HPIT" className="h-12 w-auto" />
            </div>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-gray-300 hover:text-white text-[16px] tracking-wider transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            <div className="hidden md:flex items-center gap-6 text-white">
                <button className="hover:text-gray-300 transition-colors bg-transparent border-none p-0 focus:outline-none">
                    <Search size={20} />
                </button>
                <button className="hover:text-gray-300 transition-colors bg-transparent border-none p-0 focus:outline-none">
                    <Globe size={20} />
                </button>
                <button className="hover:text-gray-300 transition-colors bg-transparent border-none p-0 focus:outline-none">
                    <div className="flex flex-col gap-1.5 w-6 items-end">
                        <span className="h-0.5 w-6 bg-white block"></span>
                        <span className="h-0.5 w-4 bg-white block"></span>
                        <span className="h-0.5 w-6 bg-white block"></span>
                    </div>
                </button>
            </div>

            <button
                className="md:hidden text-white bg-transparent border-none focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-4 flex flex-col items-center gap-4 md:hidden border-t border-gray-800">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white text-lg uppercase tracking-wider"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex gap-6 mt-4 text-white">
                        <Search size={20} />
                        <Globe size={20} />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
