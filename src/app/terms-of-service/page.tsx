'use client';

import React from 'react';
import { ArrowLeft, BookOpen, User, Lock, Mail, Gavel, ShieldCheck, Scale, AlertTriangle, Copyright } from 'lucide-react';
import Link from 'next/link';

const TermsOfServicePage: React.FC = () => {
    const lastUpdated = "December 15, 2025";
    const appName = "AI-Outfit Swap";

    const legalSections = [
        { id: "acceptance", title: "1. Acceptance", icon: ShieldCheck },
        { id: "accounts", title: "2. User Accounts", icon: User },
        { id: "ip", title: "3. Intellectual Property", icon: Copyright },
        { id: "termination", title: "4. Termination", icon: AlertTriangle },
        { id: "governing", title: "5. Governing Law", icon: Gavel },
    ];

    return (
        <div className="min-h-screen bg-[#FFFBFC] text-slate-800 selection:bg-rose-100 selection:text-rose-900">

            <div className="max-w-7xl mx-auto px-6 py-16 lg:grid lg:grid-cols-12 lg:gap-16">
                
               
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-32 space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-4">Agreement Chapters</p>
                        {legalSections.map((section) => (
                            <a 
                                key={section.id}
                                href={`#${section.id}`}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-all group"
                            >
                                <section.icon size={16} className="group-hover:scale-110 transition-transform" />
                                {section.title}
                            </a>
                        ))}
                        
                        
                        <div className="mt-10 p-6 bg-slate-900 rounded-[2rem] text-white relative overflow-hidden shadow-xl shadow-slate-200">
                            <Scale className="absolute -right-2 -bottom-2 opacity-10 w-20 h-20 -rotate-12" />
                            <h4 className="text-xs font-black uppercase tracking-widest mb-3 text-rose-400">TL;DR</h4>
                            <p className="text-xs font-medium leading-relaxed text-slate-300">
                                By using the app, you agree to these rules. You own your photos, we own the tech, and respect is mandatory.
                            </p>
                        </div>
                    </div>
                </aside>

              
                <main className="lg:col-span-9">
                    <header className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-[10px] font-black uppercase tracking-widest mb-6">
                            <Scale size={12} /> Terms of Service
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                            Terms of <span className="text-rose-600">Services</span>
                        </h1>
                        <p className="text-slate-500 font-medium text-lg">
                            Last Revised: <span className="text-slate-900 font-bold">{lastUpdated}</span>
                        </p>
                    </header>

                    <div className="prose prose-slate max-w-none">
                        
                       
                        <section id="acceptance" className="scroll-mt-32 mb-20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 font-bold">01</div>
                                <h2 className="text-2xl font-black text-slate-900 m-0">Acceptance of Terms</h2>
                            </div>
                            <div className="p-8 bg-white border-l-4 border-rose-600 rounded-r-[2rem] shadow-sm mb-6">
                                <p className="text-slate-600 text-lg leading-relaxed m-0 italic">
                                    "By accessing or using {appName}, you agree to be bound by these Terms. If you do not agree, please do not use the application."
                                </p>
                            </div>
                        </section>

                       
                        <section id="accounts" className="scroll-mt-32 mb-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 font-bold">02</div>
                                <h2 className="text-2xl font-black text-slate-900 m-0">User Accounts</h2>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                To access certain features, you must create a secure account. You are the sole guardian of your credentials.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                                <div className="p-8 bg-rose-50/50 border border-rose-100 rounded-[2rem]">
                                    <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center text-white text-xs font-bold mb-4">13+</div>
                                    <h3 className="font-bold text-slate-900 mb-2">Age Requirement</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">You must be at least 13 years of age to use the Service. We do not knowingly collect data from children under 13.</p>
                                </div>
                                <div className="p-8 bg-rose-50/50 border border-rose-100 rounded-[2rem]">
                                    <Lock className="text-rose-600 mb-4" size={24} />
                                    <h3 className="font-bold text-slate-900 mb-2">Account Security</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">You are responsible for all activity that occurs under your password. Notify us immediately of any breaches.</p>
                                </div>
                            </div>
                        </section>

                        
                        <section id="ip" className="scroll-mt-32 mb-20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 font-bold">03</div>
                                <h2 className="text-2xl font-black text-slate-900 m-0">Intellectual Property</h2>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-8 items-center">
                                <div className="text-slate-600 leading-relaxed">
                                    <p className="mb-4">The Service and its original content, features, and AI models are the exclusive property of <strong>{appName}</strong>.</p>
                                    <p><strong>Your Content:</strong> You retain 100% ownership of the images you upload. You grant us a limited license only to process them for your requested transformation.</p>
                                </div>
                                <div className="bg-rose-600 p-8 rounded-[2.5rem] text-white shadow-xl rotate-1">
                                    <Copyright size={32} className="mb-4 opacity-50" />
                                    <h4 className="font-bold mb-2">Creator Rights</h4>
                                    <p className="text-rose-100 text-sm italic">"We provide the tools, but you provide the style. Your data is your property, always."</p>
                                </div>
                            </div>
                        </section>

                        
                        <section id="termination" className="scroll-mt-32 mb-20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 font-bold">04</div>
                                <h2 className="text-2xl font-black text-slate-900 m-0">Termination</h2>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem] flex gap-6 items-start">
                                <AlertTriangle className="text-amber-500 shrink-0" size={24} />
                                <p className="text-slate-600 text-sm leading-relaxed m-0">
                                    We reserve the right to suspend or terminate accounts that violate our community standards or engage in illegal activity. This includes uploading non-consensual imagery or attempting to reverse-engineer our AI models.
                                </p>
                            </div>
                        </section>

                        
                        <section id="governing" className="scroll-mt-32 mb-20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 font-bold">05</div>
                                <h2 className="text-2xl font-black text-slate-900 m-0">Governing Law</h2>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                These Terms shall be governed and construed in accordance with the laws of <strong>Nepal</strong>, without regard to its conflict of law provisions. Any legal action must be brought in the courts located in Pokhara, Nepal.
                            </p>
                        </section>

                      
                        <section id="contact" className="p-10 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-rose-600/20 rounded-full blur-[80px]" />
                            <h2 className="text-2xl font-black text-white mb-4 relative z-10">Need Legal Clarification?</h2>
                            <p className="text-slate-400 mb-8 max-w-md mx-auto relative z-10">If you have any questions about these Terms, reach out to our legal department.</p>
                            <a 
                                href="mailto:contact@neptechpal.com.np" 
                                className="inline-flex items-center gap-3 bg-rose-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-rose-700 transition-all relative z-10 group"
                            >
                                <Mail size={18} />
                                contact@neptechpal.com.np
                                <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TermsOfServicePage;