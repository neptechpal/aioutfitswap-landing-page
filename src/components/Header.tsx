'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { blogPosts } from "@/data/post";
import { useAlert } from '@/app/RootLayoutClient'; 

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBlogHovered, setIsBlogHovered] = useState(false);
    const pathname = usePathname();
    const { openAlert } = useAlert(); 

 
    const categories = Array.from(
        new Map(blogPosts.map((post) => [post.category.slug, post.category])).values()
    );

   
    const getLinkClasses = (href: string) => {
        const isActive = pathname === href || pathname.startsWith(`${href}/`);
        return `font-medium transition-all duration-200 py-2 ${
            isActive 
            ? 'text-rose-400 border-b-2 border-rose-400' 
            : 'text-gray-100 hover:text-rose-400'
        }`;
    };

    return (
        <header className="sticky top-0 z-50 bg-[#002966] border-b border-gray-700 shadow-xl">
            <div className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
                
              
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="w-10 h-10 overflow-hidden rounded-lg">
                        <img src="/title.webp" alt="Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xl font-bold tracking-wider text-white">
                        OUTFIT SWAP
                    </span>
                </Link>

               
                <nav className="hidden md:flex space-x-8 items-center">
                    <Link href="/" className={getLinkClasses('/')}>Home</Link>
                    
                   
                    <div 
                        className="relative group"
                        onMouseEnter={() => setIsBlogHovered(true)}
                        onMouseLeave={() => setIsBlogHovered(false)}
                    >
                        <button className={`flex items-center gap-1 transition-colors py-2 ${isBlogHovered ? 'text-rose-400' : 'text-gray-100'}`}>
                            Blog <ChevronDown size={16} className={`transition-transform duration-300 ${isBlogHovered ? 'rotate-180 text-rose-400' : ''}`} />
                        </button>

                     
                        <div className={`absolute left-0 top-full pt-2 w-56 transition-all duration-300 ${isBlogHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="bg-white rounded-xl shadow-2xl py-3 border border-gray-100 overflow-hidden">
                                <Link href="/blog" className="block px-5 py-2 text-rose-600 font-bold hover:bg-rose-50 transition">
                                    All Insights
                                </Link>
                                
                               
                            </div>
                        </div>
                    </div>

                    <Link href="/contact-us" className={getLinkClasses('/contact-us')}>Contact</Link>
                </nav>

             
                <div className="hidden md:block">
                    <button
                        onClick={openAlert}
                        className="px-6 py-2.5 text-sm font-semibold text-white bg-rose-600 rounded-full hover:bg-rose-700 hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300"
                    >
                        Download App
                    </button>
                </div>

                
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                    className="md:hidden text-white p-2"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

          
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top">
                    <div className="p-6 space-y-4">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-800 font-semibold text-lg">Home</Link>
                        
                        <div className="space-y-2">
                            <p className=" font-bold text-gray-800 uppercase tracking-widest">Blog Categories</p>
                            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block pl-2 text-rose-600 font-bold">All Posts</Link>

                        </div>

                        
                        <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-800 font-semibold text-lg">Contact</Link>

                        <button 
                            onClick={() => { setIsMobileMenuOpen(false); openAlert(); }} 
                            className="w-full py-4 bg-rose-600 text-white rounded-xl font-bold shadow-lg mt-4"
                        >
                            Download App
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;