'use client';

import React, { useState, createContext, useContext } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlertDialog from '@/components/AlertDialog';

const AlertContext = createContext({
  openAlert: () => {},
});


export const useAlert = () => useContext(AlertContext);

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleOpenAlert = () => setIsAlertOpen(true);
  const handleCloseAlert = () => setIsAlertOpen(false);

  return (

    <AlertContext.Provider value={{ openAlert: handleOpenAlert }}>
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer onDownloadClick={handleOpenAlert} />

        <AlertDialog 
          isOpen={isAlertOpen}
          onClose={handleCloseAlert} 
          title="Scan to Download"
          message="Open your phone's camera and scan the QR code for your device."
          qrCodeSrc="qrios.png" 
          googlePlayQrSrc="qrgoogle.png" 
          appStoreLink="https://apps.apple.com/us/app/ai-outfit-swap-clothes-change/id6747314181" 
          googlePlayLink="https://play.google.com/store/apps/details?id=com.neptechpal.dresserai"
        />
      </div>
    </AlertContext.Provider>
  );
}