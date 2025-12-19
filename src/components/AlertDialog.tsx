'use client';

import React, { useEffect, useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';

interface AlertDialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    qrCodeSrc: string; 
    googlePlayQrSrc?: string; 
    appStoreLink?: string;
    googlePlayLink?: string;
    type?: string; 
}

const AlertDialog: React.FC<AlertDialogProps> = ({
    isOpen,
    onClose,
    title,
    message,
    qrCodeSrc,
    googlePlayQrSrc,
    appStoreLink,
    googlePlayLink,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = 'unset';
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            
        
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={onClose}></div>
            
          
            <div className={`bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative text-center transform ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'} transition-all duration-300`}>
                
               
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-rose-600 transition-colors p-1"
                >
                    <X className="w-6 h-6" />
                </button>

              
                <div className="mb-4">
                    <div className=" w-16 h-16 mx-auto  flex items-center justify-center">
                        <span className=" w-10 h-10   ">
                            <img src="title.webp" alt="" />
                        </span>
                    </div>
                </div>

             
                <h2 className="text-2xl font-extrabold text-rose-700 mb-3 leading-tight">
                    {title}
                </h2>
                
              
                <p className="text-sm text-rose-500 mb-6 leading-relaxed">
                    {message}
                </p>

               
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
                    
               
                    <div className="text-center">
                        
                        <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
                            <div className="p-2 border-4 border-rose-200 rounded-2xl w-32 h-32 mx-auto bg-white shadow-sm">
                                <img 
                                    src={qrCodeSrc} 
                                    alt="App Store QR Code" 
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                            <img src="ios.png" alt="Ios"
                            className="w-35 h-10" /> 
                        </a>
                    </div>

                   
                    {googlePlayQrSrc && (
                        <div className="text-center">
                            
                            <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
                                <div className="p-2 border-4 border-rose-200 rounded-2xl w-32 h-32 mx-auto bg-white shadow-sm">
                                    <img 
                                        src={googlePlayQrSrc} 
                                        alt="Google Play QR Code" 
                                        className="w-full h-full object-contain "
                                    />
                                </div>
                                <img src="google.png" 
                                alt="Google"
                                className="w-35 h-10" />
                                
                            </a>
                        </div>
                    )}
                </div>

                
                <button 
                    onClick={onClose}
                    className="mt-4 text-sm font-medium text-rose-400 hover:text-rose-600 flex items-center justify-center mx-auto transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Close Download Window
                </button>
            </div>
        </div>
    );
};

export default AlertDialog;