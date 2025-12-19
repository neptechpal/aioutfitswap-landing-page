

import React from 'react';


const VIDEO_URL = "https://www.youtube.com/embed/M9t38uyW0B0"; 

const VideoShowcase: React.FC = () => {
  return (
    <section id="video" className=" bg-rose-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-rose-900 mb-4">
          See the Future of Fashion with AI
        </h2>
        <p className="text-xl text-pink-600 mb-12 max-w-3xl mx-auto">
          Learn the viral trick! Here’s a tutorial on the AI outfit swap technology that inspires the visual quality of our app.
        </p>

      
        <div className="relative mx-auto w-full max-w-4xl" style={{ paddingTop: '56.25%' }}> 
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl border-4 border-rose-600"
            src={VIDEO_URL}
            title="AI Outfit Swap Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;