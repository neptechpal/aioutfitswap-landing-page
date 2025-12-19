'use client';

import React from 'react';
import { ArrowLeft, Shield, User, Camera, Mail } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
    
    const lastUpdated = "December 15, 2025";
    const appName = "Outfit Swap";

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 sm:p-12">

                <div className="flex items-center space-x-4 mb-8 border-b pb-4 border-rose-100">
                    <Shield className="w-10 h-10 text-rose-600" />
                    <h1 className="text-4xl font-extrabold text-rose-800">
                        Privacy Policy
                    </h1>
                </div>

                <p className="text-sm text-gray-500 mb-10 italic">
                    Last Updated: {lastUpdated}
                </p>

              
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-rose-700 mb-4">
                        1. Introduction
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Welcome to {appName}! We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you use our mobile application and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

             
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-rose-700 mb-4">
                        2. Data We Collect
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        We may collect the following types of data, depending on how you use our app:
                    </p>
                    <ul className="space-y-4 text-gray-600 pl-6">
                        <li className="flex items-start">
                            <User className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0"/>
                            <div>
                                <h3 className="font-semibold text-gray-800">Registration Data:</h3>
                                <p className="text-sm">When you create an account, we collect your name and email address.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Camera className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0"/>
                            <div>
                                <h3 className="font-semibold text-gray-800">Outfit Data:</h3>
                                <p className="text-sm">Images of your clothing items that you upload for use with the virtual swap feature. These are stored securely and used only to provide the app's service.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Mail className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0"/>
                            <div>
                                <h3 className="font-semibold text-gray-800">Usage Data:</h3>
                                <p className="text-sm">Information about how you use the app, such as session duration and features accessed (via analytics services like Google Analytics or Firebase).</p>
                            </div>
                        </li>
                    </ul>
                </section>

             
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-rose-700 mb-4">
                        3. How We Use Your Data
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Your data is used primarily to provide and improve the {appName} service. This includes:
                    </p>
                    <ul className="list-disc text-gray-600 leading-relaxed pl-6 mt-4">
                        <li>Operating and maintaining your account.</li>
                        <li>Personalizing your virtual wardrobe experience.</li>
                        <li>Analyzing usage to improve app functionality and AI model performance.</li>
                        <li>Communicating with you about service updates and security alerts.</li>
                    </ul>
                </section>

             
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-rose-700 mb-4">
                        4. Data Security
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way. All user-uploaded image data is encrypted both in transit and at rest.
                    </p>
                </section>
                
                
                <section>
                    <h2 className="text-2xl font-bold text-rose-700 mb-4">
                        5. Contact Us
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        If you have any questions about this privacy policy or our data practices, please contact us at:
                    </p>
                    <div className="flex items-center space-x-3 text-lg font-medium text-rose-600">
                        <Mail className="w-5 h-5"/>
                        <a href="mailto:careers@neptechpal.com.np" className="hover:underline">careers@neptechpal.com.np</a>
                    </div>
                </section>
                
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;