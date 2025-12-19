'use client';

import React from 'react';
import { Camera, Zap, Gift, Download, CheckCircle } from 'lucide-react'; 


interface HowItWorksProps {
    onDownloadClick: () => void;
}

const steps = [
    {
        icon: Camera,
        title: "1. Choose Your Swap Target",
        description: "Start by selecting which outfit you want to transform. Choose options which you like the most."
    },
    {
        icon: Zap,
        title: "2. Upload Your Base Photo",
        description: "Upload an existing photo from your gallery. This image provides the AI with your body shape, pose, and background details."
    },
    {
        icon: Gift,
        title: "3. AI Style Transformation",
        description: "Our advanced AI engine goes to work, digitally removing the target garment and seamlessly replacing it with your new selection using realistic lighting and textures."
    },
    {
        icon: CheckCircle,
        title: "4. Preview Your New Look",
        description: "View the transformed result instantly. Our engine generates a high-fidelity preview so you can see exactly how the new clothes fit your body and style."
    },
    {
        icon: Download, 
        title: "5. Download image",
        description: "Download your finished outfit swap directly to your gallery. Your AI-powered transformation is ready to be shared, saved, or used as your next profile picture!"
    },
];


const HowItWorks: React.FC<HowItWorksProps> = ({ onDownloadClick }) => {
    return (
        <section id="how-it-works" className="py-20 sm:py-28 bg-rose-100">
            <div className="container mx-auto px-4 max-w-6xl">
                
                <header className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold uppercase tracking-widest text-rose-600 mb-2">
                        Your Digital Dressing Room
                    </h2>
                    <p className="text-3xl font-extrabold text-pink-600 leading-tight">
                        Outfit Creation is This Simple
                    </p>
                </header>

                <div className="relative">
                    
                   
                    <div className="hidden lg:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-pink-300 opacity-60 mx-10"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 relative z-10">
                        {steps.map((step, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-rose-500 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mb-4 transform hover:scale-110 transition duration-300">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-rose-700 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-600">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                
             
                <div className="mt-20 text-center">
                    <button
                        onClick={onDownloadClick} 
                        className="inline-block px-10 py-4 text-lg font-semibold text-white bg-pink-600 rounded-full hover:bg-pink-700 transition duration-300 shadow-2xl transform hover:-translate-y-1"
                    >
                        Start Your Virtual Try-On
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;