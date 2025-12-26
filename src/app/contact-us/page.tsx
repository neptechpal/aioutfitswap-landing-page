'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Sparkles, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactUsPage: React.FC = () => {
   
    const [state, handleSubmit] = useForm("your_form_id");

    if (state.succeeded) {
        return (
            <div className="min-h-screen bg-[#FFF5F7] flex items-center justify-center px-4">
                <div className="max-w-md w-full bg-white p-10 rounded-[3rem] shadow-2xl text-center border border-rose-100 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 mb-2">Message Sent!</h2>
                    <p className="text-slate-500 mb-8 font-medium">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="w-full py-4 bg-rose-600 text-white rounded-2xl font-bold hover:bg-rose-700 transition-all shadow-lg shadow-rose-200"
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FFFafa] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-100/50 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-500 text-xs font-bold uppercase tracking-widest mb-4">
                        <Sparkles size={14} /> Get in Touch
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                        Let's Start a <span className="text-rose-600">Conversation</span>
                    </h1>
                </header>

                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                    
                    
                    <div className="lg:col-span-4 bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-rose-500/20 transition-all duration-700" />
                        
                        <div>
                            <h3 className="text-2xl font-bold mb-6 ">Contact Information</h3>
                            <p className="text-slate-400 mb-10 leading-relaxed">
                                Have a specific inquiry or just want to say hi? Fill out the form and our team will get back to you shortly.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-5 group/item">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover/item:bg-rose-600 transition-colors border border-white/10">
                                        <Mail size={20} className="text-rose-400 group-hover/item:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Us</p>
                                        <a href="mailto:contact@neptechpal.com.np" className="text-sm font-medium hover:text-rose-400 transition-colors">contact@neptechpal.com.np</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 group/item">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover/item:bg-rose-600 transition-colors border border-white/10">
                                        <Phone size={20} className="text-rose-400 group-hover/item:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Call Us</p>
                                        <a href="tel:9860385877" className="text-sm font-medium hover:text-rose-400 transition-colors">+977 9815126740</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 group/item">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover/item:bg-rose-600 transition-colors border border-white/10">
                                        <MapPin size={20} className="text-rose-400 group-hover/item:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Visit Us</p>
                                        <p className="text-sm font-medium text-slate-200">Pokhara-8, JalpaRoad, Nepal</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5 flex gap-4">
                            <a href="https://facebook.com" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-rose-600 transition-all"><Facebook size={18} /></a>
                            <a href="https://instagram.com" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-rose-600 transition-all"><Instagram size={18} /></a>
                            <a href="https://twitter.com" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-rose-600 transition-all"><Twitter size={18} /></a>
                        </div>
                    </div>

                   
                    <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-rose-50">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="full-name" className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                    <input
                                        id="full-name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-rose-300 focus:ring-4 focus:ring-rose-50 transition-all outline-none text-slate-800"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                    <input
                                        id="email"
                                        type="email" 
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-rose-300 focus:ring-4 focus:ring-rose-50 transition-all outline-none text-slate-800"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-rose-500 mt-1 ml-1" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    required
                                    placeholder="How can we help?"
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-rose-300 focus:ring-4 focus:ring-rose-50 transition-all outline-none text-slate-800"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell us more about your inquiry..."
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-rose-300 focus:ring-4 focus:ring-rose-50 transition-all outline-none text-slate-800 resize-none"
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-rose-500 mt-1 ml-1" />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full group bg-rose-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-rose-700 transition-all shadow-xl shadow-rose-100 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {state.submitting ? (
                                    <>
                                        <Loader2 className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;