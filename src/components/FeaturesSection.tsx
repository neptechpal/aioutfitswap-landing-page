import React from 'react';
import { Sparkles, Palette, Zap, Box } from 'lucide-react'; 

const image1 = "2.webp"; 
const image2 = "4.webp";
const image4 = "5.webp";
const image5 = "1.webp"; 

const FeaturesSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-rose-500" />,
      title: "Instant Outfit Swaps",
      description: "Experience AI styling magic by combining your photo with any outfit in seconds. Just choose your image and generate your new look.",
      image: image1,
      alt: "App screen showing image selection for outfit swap",
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-500" />, 
      title: "Your AI Dress Changer",
      description: "Say hello to your all-in-one style hub. Try on outfits, follow trends, and create fashion-forward looks instantly.",
      image: image2,
      alt: "Onboarding screen for AI Dress Changer with a woman in a floral dress",
    },
    {
      icon: <Box className="w-8 h-8 text-rose-500" />, 
      title: "Explore Stylish Categories",
      description: "Discover outfits for every mood. Browse through diverse categories like Cocktail, T-shirts, and Suits for both men and women.",
      image: image5,
      alt: "Dresser AI app screen showing different outfit categories",
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-500" />,
      title: "See Your New Look",
      description: "Get a photorealistic preview of yourself in a new outfit, like a sharp cocktail suit. You look amazing, so why not share it?.",
      image: image4,
      alt: "App screen displaying a man in a grey suit as a cocktail outfit result",
    },
  ];

  return (
  
    <section className="bg-rose-100 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-rose-900 sm:text-4xl">
            Transform Your Style with <span className="text-pink-600">AI Magic</span>
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Explore the powerful, intuitive features that make our AI Outfit Swap app your ultimate fashion companion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
             
              className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl transition duration-300"
            >
              
          
              <div className="flex-shrink-0 relative">
                <img 
                  className="h-64 w-full object-cover" 
                  src={feature.image} 
                  alt={feature.alt} 
                />
               
                 <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
              
             
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                   
                    <div className="mb-4">{feature.icon}</div> 
                    
                  <h3 className="text-xl font-bold text-rose-700">
                    {feature.title}
                  </h3>
                  
                  <p className="mt-3 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;