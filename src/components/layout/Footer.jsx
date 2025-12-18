import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import footerLogo from '../../assets/footerLogo.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-8 border-t border-white/5">
            <div className="max-w-[1980px] mx-auto px-6 md:px-12 lg:px-20">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    <div className="flex flex-col items-start">
                        <img src={footerLogo} alt="HPIT Logo" className="h-16 w-auto mb-6" />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Top IT Consulting Delivering Custom Innovation Solutions
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6">About us</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Company</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Capabilities</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Industries</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Insights</a></li>
                            <li className="flex items-center gap-2">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
                                <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">We're hiring</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Suppliers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">EEO</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Employee Tools</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Social Media</h3>
                        <p className="text-gray-400 text-sm mb-6 max-w-xs">
                            Don't Miss to follow us on our social networks accounts
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Facebook size={18} className="text-gray-300" />
                            </a>
                            <a href="#" className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Instagram size={18} className="text-gray-300" />
                            </a>
                            <a href="#" className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Linkedin size={18} className="text-gray-300" />
                            </a>
                            <a href="#" className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Youtube size={18} className="text-gray-300" />
                            </a>
                            <a href="#" className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Twitter size={18} className="text-gray-300" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-white text-sm font-medium">
                        2024 HighPoint Information Technology
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
