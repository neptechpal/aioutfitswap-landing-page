'use client';

import React, { useState } from 'react';


interface FAQItemProps {
    question: string;
    answer: string;
}

interface FAQProps {
   
    onDownloadClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

   
    return (
        <div className="border-b border-rose-200 py-4 ">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex justify-between items-center focus:outline-none group" 
                aria-expanded={isOpen} 
                aria-controls={`faq-panel-${question.slice(0, 10).replace(/\s/g, '-')}`} 
            >
                <h3 className="text-lg font-semibold text-rose-900 group-hover:text-pink-600 transition duration-200">{question}</h3>
                <svg
                    className={`w-5 h-5 text-rose-600 group-hover:text-pink-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <p 
                    className="mt-3 text-gray-700 leading-relaxed pr-6 animate-fade-in transition-opacity duration-500"
                    id={`faq-panel-${question.slice(0, 10).replace(/\s/g, '-')}`} 
                >
                    {answer}
                </p>
            )}
        </div>
    );
};


const faqData: FAQItemProps[] = [
    {
        question: "How does Outfit Swap work? Am I swapping real clothes?",
        answer: "No, Outfit Swap is a virtual styling app. You upload a base photo of yourself, and our AI technology allows you to digitally 'swap' the clothes in that photo with garments from our vast virtual library. The result is a brand new image of you in a different outfit, which you can save and share."
    },
    {
        question: "What technology is used to swap the outfits in my photo?",
        answer: "We use advanced Generative AI and image segmentation models. This technology detects the exact position, folds, and lighting of the clothes in your original photo and seamlessly overlays the chosen virtual garment, creating a realistic, high-quality image output."
    },
    {
        question: "What kind of images give the best results?",
        answer: "The best results come from clear, well-lit, full-body or half-body photos where your existing outfit is not heavily patterned or baggy. Simple, neutral backgrounds work best for accurate AI processing."
    },
    {
        question: "Can I try on outfits that don't exist in my size?",
        answer: "Yes! Since the process is entirely digital, you can try any virtual item, regardless of physical size limitations. This feature is perfect for experimenting with new styles or seeing how aspirational clothes would look on you."
    },
    {
        question: "How do I save the new outfit image?",
        answer: "Once you are satisfied with the final look, simply tap the 'Download' button within the app. The high-resolution generated image will be saved directly to your phone's photo gallery, ready to be used or shared."
    },
    {
        question: "Is there a limit to how many outfits I can swap/generate?",
        answer: "Basic users typically have a daily or monthly limit on the number of generations. Premium users can unlock unlimited swaps and access exclusive features and higher-resolution outputs. Check the app's pricing page for details."
    },
    {
        question: "Is there a fee to use Outfit Swap?",
        answer: "The core functionality—uploading a photo and basic outfit swapping—is free. We offer premium subscription tiers that unlock unlimited generations, access to premium wardrobe items, and zero-wait processing times."
    },
];

const FAQ: React.FC<FAQProps> = ({ onDownloadClick }) => {
    return (
    
        <section id="faq" className="py-24 bg-gradient-to-t from-rose-50 to-rose-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-pink-600 max-w-2xl mx-auto">
                        Got questions about our AI styling and virtual try-on features? We've got answers.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto" role="list">
                    {faqData.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>

               
                <div className="mt-16 text-center">
                    <p className="text-xl text-pink-700 mb-6">
                        Ready to try on your new style? Download Outfit Swap today!
                    </p>
                    <button
                        onClick={onDownloadClick}
                        className="px-10 py-4 text-lg font-semibold text-white bg-pink-600 rounded-full hover:bg-pink-700 transition duration-300 shadow-xl shadow-pink-300/50 transform hover:-translate-y-1 flex items-center justify-center mx-auto"
                    >
                        
                        Download App & Start Swapping
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;