'use client'; 

import React from 'react'; 
import { useAlert } from './RootLayoutClient';
import Hero from '@/components/Hero';
import VideoShowcase from '@/components/VideoShowcase';
import Testimonials from '@/components/Testimonials';
import FeaturesSection from '@/components/FeaturesSection';
import FAQ from '@/components/FAQ';
import HowItWorks from '@/components/HowItWorks';


const LandingPage: React.FC = () => {
  
    const { openAlert } = useAlert();

    return (
        <>
            
            <Hero onDownloadClick={openAlert} /> 
            <FeaturesSection/>
            <HowItWorks onDownloadClick={openAlert}/>
            
            <section id="video">
                <VideoShowcase />
            </section>
            
            <Testimonials/>
            <FAQ onDownloadClick={openAlert}/> 
        </>
    );
};

export default LandingPage;