'use client';

import React from 'react';
import { ArrowLeft, User, Camera, Mail, Lock, Eye, Server, Globe, FileText, Sparkles } from 'lucide-react';


const PrivacyPolicyPage: React.FC = () => {
    const lastUpdated = "December 15, 2025";
    const appName = " AI-Outfit Swap";

    const sections = [
        { id: "intro", title: "1. Introduction", icon: Eye },
        { id: "data-collection", title: "2. Data We Collect", icon: Server },
        { id: "data-usage", title: "3. How We Use Data", icon: Globe },
        { id: "security", title: "4. Data Security", icon: Lock },
        { id: "contact", title: "5. Contact Us", icon: Mail },
    ];

    return (
        <div className="min-h-screen bg-[#FFFBFC] text-slate-800 selection:bg-rose-100 selection:text-rose-900">

            <div className="max-w-7xl mx-auto px-6 py-16 lg:grid lg:grid-cols-12 lg:gap-16">
                
               
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-32 space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-4">Contents</p>
                        {sections.map((section) => (
                            <a 
                                key={section.id}
                                href={`#${section.id}`}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-all group"
                            >
                                <section.icon size={16} className="group-hover:scale-110 transition-transform" />
                                {section.title}
                            </a>
                        ))}
                        
                        <div className="mt-10 p-6 bg-rose-600 rounded-[2rem] text-white relative overflow-hidden shadow-xl shadow-rose-200">
                            <Lock className="absolute -right-2 -bottom-2 opacity-20 w-16 h-16 rotate-12" />
                            <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">Privacy First</p>
                            <p className="text-sm font-medium leading-relaxed">Your images are yours. We never sell your personal data.</p>
                        </div>
                    </div>
                </aside>

                
                <main className="lg:col-span-9">
                    <header className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-[10px] font-black uppercase tracking-widest mb-6">
                            <FileText size={12} /> Legal Document
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                            Privacy <span className="text-rose-600">Policy</span>
                        </h1>
                        <p className="text-slate-500 font-medium text-lg">
                            Last Updated on <span className="text-slate-900 decoration-rose-300 underline-offset-4">{lastUpdated}</span>
                        </p>
                    </header>

                    <div className="prose prose-slate max-w-none">
                        
                    
                        <section id="intro" className="scroll-mt-32 mb-20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 font-bold">01</div>
                                <h2 className="text-2xl font-black text-slate-900 m-0">Introduction</h2>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Welcome to <strong>{appName}</strong>. We respect your privacy and are committed to protecting your personal data. 
                                This policy outlines how we handle your information when you use our AI-powered transformation services 
                                and explains your legal rights in the digital dressing room ecosystem.
                            </p>
                        </section>

                       
                        <section id="data-collection" className="scroll-mt-32 mb-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 font-bold">02</div>
                                <h2 className="text-2xl font-black text-slate-900 m-0">Data We Collect</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                                <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                                    <User className="text-rose-500 mb-4" size={28} />
                                    <h3 className="font-bold text-slate-900 mb-2">Registration Data</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Name and email address collected during account creation to sync your wardrobe across devices.</p>
                                </div>
                                <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                                    <Camera className="text-rose-500 mb-4" size={28} />
                                    <h3 className="font-bold text-slate-900 mb-2">Outfit Assets</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Images uploaded for AI processing. These are stored on secure servers and never shared with third parties.</p>
                                </div>
                                <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                                    <Globe className="text-rose-500 mb-4" size={28} />
                                    <h3 className="font-bold text-slate-900 mb-2">Usage Analytics</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Technical data including session duration and feature interaction to help our engineers optimize the AI model performance.</p>
                                </div>
                            </div>
                        </section>

                       
                        <section id="data-usage" className="scroll-mt-32 mb-20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 font-bold">03</div>
                                <h2 className="text-2xl font-black text-slate-900 m-0">How We Use Your Data</h2>
                            </div>
                            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden">
                                <Sparkles className="absolute top-4 right-4 text-rose-500 opacity-20" size={80} />
                                <ul className="space-y-4 m-0 p-0 list-none relative z-10">
                                    {[
                                        "Maintaining and securing your personal virtual wardrobe.",
                                        "Improving the realism of our AI outfit transformation models.",
                                        "Sending critical security alerts and app update notifications.",
                                        "Preventing fraudulent use of our digital fashion tools."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-slate-300 font-medium border-b border-white/5 pb-4 last:border-0">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                       
                        <section id="security" className="scroll-mt-32 mb-20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 font-bold">04</div>
                                <h2 className="text-2xl font-black text-slate-900 m-0">Data Security</h2>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We utilize industry-standard <strong>AES-256 encryption</strong> for all images at rest. 
                                Our servers are protected by multi-layer firewalls, and we perform regular 
                                vulnerability assessments to ensure your "digital self" remains private.
                            </p>
                        </section>

                       
                        <section id="contact" className="scroll-mt-32">
                            <div className="p-10 bg-rose-50 border border-rose-100 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8">
                                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-rose-600 shrink-0 rotate-3">
                                    <Mail size={32} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 m-0 mb-2">Questions?</h2>
                                    <p className="text-slate-500 font-medium mb-4">Our legal and support team is ready to help you with any privacy concerns.</p>
                                    <a href="mailto:careers@neptechpal.com.np" className="inline-flex items-center gap-2 font-black text-rose-600 hover:gap-4 transition-all">
                                        contact@neptechpal.com.np <ArrowLeft className="rotate-180" size={16} />
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>

            
        </div>
    );
};

export default PrivacyPolicyPage;