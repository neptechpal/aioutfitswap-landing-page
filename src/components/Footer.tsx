import React from 'react';
import { Download, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
    onDownloadClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onDownloadClick }) => {
    const navigation = {
        product: [
            { name: 'How It Works', href: '/#how-it-works' },
            { name: 'Features', href: '/#features' },
            { name: 'Testimonials', href: '/#testimonials' },
        ],
        company: [
            { name: 'Contact Us', href: '/contact-us' },
            { name: 'Careers', href: '/careers' },
            { name: 'Blog', href: '/blog' },
        ],
        resources: [
            { name: 'FAQ', href: '/#faq' },
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Terms of Service', href: '/terms-of-service' },
        ],
    };

    return (
        <footer className="bg-rose-100   ">
            
            <div className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
        
                <div className="xl:grid xl:grid-cols-4 xl:gap-24 border-b pb-16 border-rose-200/60">
                    
                  
                    <div className="space-y-8 mb-16 xl:mb-0 flex flex-col items-center text-center xl:items-start xl:text-left">
                        <div className="flex items-center space-x-3">
                            <img src="title.webp" alt="Outfit Swap Logo" className="w-10 h-10 object-contain"/>
                            <span className="text-2xl font-black text-rose-900 tracking-tight">Outfit Swap</span>
                        </div>
                        
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-sm xl:pr-4">
                            The future of fashion is sustainable and shared. Join the swap community today!
                        </p>
                        
                        <button
                            onClick={onDownloadClick}
                            className="w-full sm:w-auto px-10 py-4 text-sm font-bold text-white bg-rose-700 rounded-full hover:bg-rose-600 transition-all duration-300 shadow-xl shadow-rose-400/40 transform hover:-translate-y-1 flex items-center justify-center uppercase tracking-widest"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download 
                        </button>
                    </div>

                    
                    <div className="grid grid-cols-2 gap-x-8 gap-y-12 xl:col-span-3 md:grid-cols-3">
                      
                        <div>
                            <h3 className="text-[11px] font-black text-rose-800 tracking-[0.2em] uppercase mb-8">Product</h3>
                            <ul role="list" className="space-y-5">
                                {navigation.product.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-700 hover:text-rose-500 transition-colors font-medium">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    
                        <div>
                            <h3 className="text-[11px] font-black text-rose-800 tracking-[0.2em] uppercase mb-8">Company</h3>
                            <ul role="list" className="space-y-5">
                                {navigation.company.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-700 hover:text-rose-500 transition-colors font-medium">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                      
                        <div>
                            <h3 className="text-[11px] font-black text-rose-800 tracking-[0.2em] uppercase mb-8">Resources</h3>
                            <ul role="list" className="space-y-5">
                                {navigation.resources.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-700 hover:text-rose-500 transition-colors font-medium">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            
                <div className="mt-12 pt-4 flex flex-col-reverse md:flex-row items-center justify-between gap-y-10">
                    <p className="text-sm font-medium text-rose-500/70 text-center md:text-left">
                        &copy; {new Date().getFullYear()} AI Outfit Swap. All rights reserved.
                    </p>

                    <div className="flex space-x-10">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-700 transition-all transform hover:scale-110">
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-700 transition-all transform hover:scale-110">
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-700 transition-all transform hover:scale-110">
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-700 transition-all transform hover:scale-110">
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;