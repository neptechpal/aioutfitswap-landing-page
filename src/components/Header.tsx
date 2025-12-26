'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Loader2 } from 'lucide-react';
import { useAlert } from '@/app/RootLayoutClient'; 

interface Category {
    name: string;
    slug: string;
}

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBlogHovered, setIsBlogHovered] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();
    const { openAlert } = useAlert(); 

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true);
                const res = await fetch("/api/blog-categories"); 
                if (!res.ok) throw new Error("Proxy failed");
                const data = await res.json();
                if (Array.isArray(data)) setCategories(data);
            } catch (error) {
                console.error("Header fetch failed:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCategories();
    }, []);

    const getLinkClasses = (href: string) => {
        const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
        return `font-medium transition-all duration-200 py-2 ${
            isActive ? 'text-rose-400 border-b-2 border-rose-400' : 'text-gray-100 hover:text-rose-400'
        }`;
    };

    return (
        <header className="sticky top-0 z-50 bg-[#002966] border-b border-gray-700 shadow-xl">
            <div className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
                
               
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="w-10 h-10 overflow-hidden rounded-lg bg-white/10">
                        <img src="/title.webp" alt="Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xl font-bold tracking-wider text-white uppercase ">Outfit Swap</span>
                </Link>

               
                <nav className="hidden md:flex space-x-8 items-center">
                    <Link href="/" className={getLinkClasses('/')}>Home</Link>
                    
                    <div 
                        className="relative group"
                        onMouseEnter={() => setIsBlogHovered(true)}
                        onMouseLeave={() => setIsBlogHovered(false)}
                    >
                       
                        <Link 
                            href="/blog" 
                            className={`flex items-center gap-1 transition-colors py-2 ${isBlogHovered || pathname.startsWith('/blog') ? 'text-rose-400' : 'text-gray-100'}`}
                        >
                            Blog <ChevronDown size={16} className={`transition-transform duration-300 ${isBlogHovered ? 'rotate-180' : ''}`} />
                        </Link>

                        <div className={`absolute left-0 top-full pt-2 w-64 transition-all duration-300 ${isBlogHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="bg-white rounded-2xl shadow-2xl py-3 border border-gray-100 overflow-hidden">
                                <Link href="/blog" className="block px-6 py-3 text-rose-600 font-black text-xs uppercase tracking-widest hover:bg-rose-50 border-b border-rose-50">
                                    View All Insights
                                </Link>
                
                            </div>
                        </div>
                    </div>

                    <Link href="/contact-us" className={getLinkClasses('/contact-us')}>Contact</Link>
                </nav>

              
                <div className="hidden md:block">
                    <button onClick={openAlert} className="px-6 py-2.5 text-sm font-semibold text-white bg-rose-600 rounded-full hover:bg-rose-700 hover:shadow-lg transition duration-300">
                        Download App
                    </button>
                </div>

                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

          
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top overflow-y-auto max-h-[80vh]">
                    <div className="p-6 space-y-4">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-800 font-bold text-lg">Home</Link>
                        
                        <div className="space-y-3 pt-2">
                            <p className="text-bold-xl font-black text-slate-800 uppercase tracking-[0.2em] mb-2">Blog Categories</p>
                            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block pl-2 text-rose-600 font-black text-sm uppercase">All Insights</Link>
                            
                           
                        </div>

                        <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-800 font-bold text-lg pt-4 border-t border-gray-100">Contact</Link>

                        <button 
                            onClick={() => { setIsMobileMenuOpen(false); openAlert(); }} 
                            className="w-full py-4 bg-rose-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg mt-4"
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