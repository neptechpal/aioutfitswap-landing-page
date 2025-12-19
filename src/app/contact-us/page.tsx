'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin} from 'lucide-react';

const ContactUsPage: React.FC = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        console.log("Form Submitted:", formData);
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' }); 
    };

    return (
      
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                
                <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
                    <div className="lg:grid lg:grid-cols-2">
                        
                       
                        <div className="p-8 sm:p-12">
                            <h2 className="text-3xl font-extrabold text-rose-800 mb-2">
                                Send Us a Message
                            </h2>
                            <p className="text-lg text-rose-500 mb-8">
                                We're here to help! Describe your query in detail.
                            </p>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                              
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 border p-3"
                                        placeholder="John Doe"
                                    />
                                </div>
                                
                               
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 border p-3"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 border p-3"
                                        placeholder="Issue with feature X"
                                    />
                                </div>

                               
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 border p-3"
                                        placeholder="Please provide details about your request..."
                                    ></textarea>
                                </div>
                                
                            
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors"
                                >
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>

                       
                        <div className="relative bg-rose-600 p-8 sm:p-12 text-white">
                            <h3 className="text-2xl font-bold mb-4">
                                Contact Information
                            </h3>
                            <p className="mb-8 opacity-90">
                                You can reach out to us using the details below for immediate assistance, partnerships, or press inquiries.
                            </p>
                            
                            <div className="space-y-6">
                              
                                <div className="flex items-start space-x-4">
                                    <Mail className="flex-shrink-0 w-6 h-6 text-rose-100 mt-1" />
                                    <div>
                                        <p className="text-sm font-semibold">Email Support</p>
                                        <a href="mailto:careers@neptechpal.com.np" className="text-lg font-medium hover:underline">
                                            careers@neptechpal.com.np
                                        </a>
                                    </div>
                                </div>
                                
                                
                                <div className="flex items-start space-x-4">
                                    <Phone className="flex-shrink-0 w-6 h-6 text-rose-100 mt-1" />
                                    <div>
                                        <p className="text-sm font-semibold">Phone (We typically respond within 24 hours during business days)</p>
                                        <a href="tel:9860385877" className="text-lg font-medium hover:underline">
                                            9860385877 
                                            <br />
                                            9815126740

                                        </a>
                                    </div>
                                </div>


                                <div className="flex items-start space-x-4">
                                    <MapPin className="flex-shrink-0 w-6 h-6 text-rose-100 mt-1" />
                                    <div>
                                        <p className="text-sm font-semibold">Our Office</p>
                                        <p className="text-lg font-medium">
                                            Nep Tech Pal<br/>
                                            JalpaRoad, Pokhara-8
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;