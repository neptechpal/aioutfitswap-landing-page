'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import { Download, ChevronsDown } from 'lucide-react'; 

const APP_MOCKUP_URL = "https://play-lh.googleusercontent.com/ZS_E6ZDkq35Fn9lgfCNKgIW1_E3ZNyk0xL7mMsYyRXGx35BI17qwED848LfDbYg19A=w480-h960-rw";

interface HeroProps {
    onDownloadClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
    
    const [tiltStyle, setTiltStyle] = useState({});
    const imageContainerRef = useRef<HTMLDivElement>(null);

   
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const container = imageContainerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5; 

        setTiltStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: 'transform 0.1s ease-out'
        });
    };

    const handleMouseLeave = () => {
        setTiltStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.5s ease-out'
        });
    };

    return (
    
        <section className="bg-gradient-to-br from-rose-50 to-pink-100 py-16 sm:py-24 pb-32 overflow-hidden">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
                
               
                <div className="flex-1 text-center lg:text-left space-y-6 order-2 lg:order-1">
                    
                   
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
                        <span className="block text-rose-700">Swap Your Style.</span>
                        <span className="block text-pink-600 mt-2">Upgrade Your Outfit.</span>
                    </h1>
                    
                    <p className="text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 pt-2 pb-6">
                        Outfit Swap is the smart, sustainable way to refresh your wardrobe—swap what you don’t wear for styles you’ll love, all within your community. 
                        <span className="inline-block text-rose-500 font-semibold ml-1">♻️✨</span>
                    </p>
                    
                 
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        
                       
                        <button
                            onClick={onDownloadClick}
                            className="w-full sm:w-auto px-8 py-3.5 text-lg font-bold text-white bg-rose-700 rounded-full hover:bg-rose-600 transition duration-300 shadow-2xl shadow-rose-400/50 transform hover:-translate-y-1 flex items-center justify-center"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download Outfit Swap 
                        </button>
                        
                        
                        <a
                            href="#how-it-works"
                            className="w-full sm:w-auto px-8 py-3.5 text-lg font-semibold text-rose-600 bg-white border-2 border-rose-300 rounded-full hover:bg-rose-50 transition duration-300 flex items-center justify-center"
                        >
                            <ChevronsDown className="w-5 h-5 mr-2 animate-bounce" style={{ animationDuration: '3s' }} />
                            See How It Works
                        </a>
                    </div>
                </div>

               
                <div 
                    ref={imageContainerRef}
                    className="flex justify-center lg:justify-end relative order-1 lg:order-2 perspective-1000" // Added perspective for 3D effect
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                 
                    <div className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full bg-pink-50 blur-3xl opacity-60 z-0 hidden lg:block"></div>

                   
                    <img
                        src={APP_MOCKUP_URL}
                        alt="Outfit Swap mobile app interface showing virtual outfit try-on"
                        style={tiltStyle} 
                        className="w-full max-w-xs sm:max-w-md lg:max-w-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-3xl object-cover h-[500px] relative z-10"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;