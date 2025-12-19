'use client';

import React from 'react';
import { ArrowLeft, BookOpen, User, Lock, Mail } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
    
    const lastUpdated = "December 15, 2025";
    const appName = "Outfit Swap";

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 sm:p-12">

                <div className="flex items-center space-x-4 mb-8 border-b pb-4 border-rose-100">
                    <BookOpen className="w-10 h-10 text-rose-600" />
                    <h1 className="text-4xl font-extrabold text-rose-800">
                        Terms of Service
                    </h1>
                </div>

                <p className="text-sm text-gray-500 mb-10 italic">
                    Last Updated: {lastUpdated}
                </p>

            
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-rose-700 mb-4">
                        1. Acceptance of Terms
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        By accessing or using the {appName} application, you agree to be bound by these Terms of Service ("Terms") and all terms incorporated by reference. If you do not agree to all of these Terms, do not use the {appName} application.
                    </p>
                </section>

            
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-rose-700 mb-4">
                        2. User Accounts
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
                    </p>
                    <ul className="list-disc text-gray-600 leading-relaxed pl-6 mt-4">
                        <li>You must be at least 13 years old to use the Service.</li>
                        <li>You are solely responsible for the content you upload, including images of clothing.</li>
                    </ul>
                </section>

               
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-rose-700 mb-4">
                        3. Intellectual Property
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of {appName} and its licensors. You retain all rights to the images and data you upload.
                    </p>
                </section>

            
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-rose-700 mb-4">
                        4. Termination
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                    </p>
                </section>
               
                <section>
                    <h2 className="text-2xl font-bold text-rose-700 mb-4">
                        5. Governing Law
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                    </p>
                </section>
                
              
                <section className="mt-10 pt-6 border-t border-rose-100">
                    <h2 className="text-xl font-bold text-rose-700 mb-3">
                        Questions?
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        If you have any questions about these Terms, please contact us at:
                    </p>
                    <div className="flex items-center space-x-3 text-lg font-medium text-rose-600 mt-2">
                        <Mail className="w-5 h-5"/>
                        <a href="mailto:careers@neptechpal.com.np" className="hover:underline">careers@neptechpal.com.np</a>
                    </div>
                </section>
                
            </div>
        </div>
    );
};

export default TermsOfServicePage;