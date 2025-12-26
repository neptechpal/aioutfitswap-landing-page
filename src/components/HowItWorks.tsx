'use client';

import React from 'react';
import { Camera, Zap, Gift, Download, CheckCircle, Sparkles, ArrowRight, MousePointer2 } from 'lucide-react'; 

interface HowItWorksProps {
    onDownloadClick: () => void;
}

const setupSteps = [
    {
        icon: Camera,
        title: "Choose Your Swap Target",
        description: "Start by selecting which outfit you want to transform. Choose options which you like the most."
    },
    {
        icon: Zap,
        title: "Upload Your Base Photo",
        description: "Upload an existing photo from your gallery. This image provides the AI with your body shape, pose, and background details."
    },
    {
        icon: Gift,
        title: "AI Style Transformation",
        description: "Our advanced AI engine goes to work, digitally removing the target garment and seamlessly replacing it with your new selection using realistic lighting and textures."
    },
];

const resultSteps = [
    {
        icon: CheckCircle,
        title: "Preview Your New Look",
        description: "View the transformed result instantly. Our engine generates a high-fidelity preview so you can see exactly how the new clothes fit your body and style."
    },
    {
        icon: Download, 
        title: "Download image",
        description: "Download your finished outfit swap directly to your gallery. Your AI-powered transformation is ready to be shared, saved, or used as your next profile picture!"
    },
];

const HowItWorks: React.FC<HowItWorksProps> = ({ onDownloadClick }) => {
    return (
        <section id="how-it-works" className="py-24 bg-rose-100 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                            Your Digital <span className="text-rose-600">Dressing Room</span>
                        </h3>
                    </div>
                    
                </div>

                <div className="grid grid-cols-1 gap-4">
                    
                
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-rose-100/50">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-2 bg-white rounded-lg shadow-sm border border-rose-100">
                                <MousePointer2 className="w-4 h-4 text-rose-600" />
                            </div>
                            <h4 className="font-bold text-slate-800 text-lg">Step 01: The Creation Phase</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {setupSteps.map((step, index) => (
                                <div key={index} className="relative group">
                                    <div className="mb-6 inline-flex relative">
                                        <div className="absolute inset-0 bg-rose-200 blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                                        <step.icon className="w-8 h-8 text-rose-600 relative z-10 transition-transform group-hover:-translate-y-1" />
                                    </div>
                                    <h5 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <span className="text-rose-300 font-mono text-sm uppercase">0{index + 1}</span> 
                                        {step.title}
                                    </h5>
                                    <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    
                    <div className="flex justify-center -my-6 relative z-10">
                        <div className="bg-white px-6 py-2 rounded-full border border-rose-100 shadow-xl flex items-center gap-3">
                            <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-bounce"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-bounce [animation-delay:0.2s]"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-bounce [animation-delay:0.4s]"></span>
                            </div>
                            <span className="text-[10px] font-black uppercase text-rose-600 tracking-widest">Neural Engine Processing</span>
                        </div>
                    </div>

                   
                    <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                       
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-rose-600/20 rounded-full blur-[100px]"></div>
                        
                        <div className="flex items-center gap-3 mb-10 relative z-10">
                            <div className="p-2 bg-white/10 rounded-lg border border-white/10">
                                <Sparkles className="w-4 h-4 text-rose-400" />
                            </div>
                            <h4 className="font-bold text-white text-lg">Step 02: The Success Phase</h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                            {resultSteps.map((step, index) => (
                                <div key={index} className="group">
                                    <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-rose-900/40">
                                        <step.icon className="w-5 h-5" />
                                    </div>
                                    <h5 className="text-xl font-bold text-white mb-3 tracking-tight">{step.title}</h5>
                                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                
                <div className="mt-16 text-center">
                    <button
                        onClick={onDownloadClick} 
                        className="group bg-rose-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-rose-700 transition-all shadow-2xl shadow-rose-200 flex items-center gap-4 mx-auto"
                    >
                        Start Your Try-On
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;