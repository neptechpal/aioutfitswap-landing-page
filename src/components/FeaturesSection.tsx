'use client';


import { Sparkles, Palette, Zap, Box, ArrowRight } from 'lucide-react';

const image1 = "2.webp"; 
const image2 = "4.webp";
const image4 = "5.webp";
const image5 = "1.webp"; 

const FeaturesSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-rose-600" />,
      title: "Instant Outfit Swaps",
      description: "Experience AI styling magic by combining your photo with any outfit in seconds. Just choose your image and generate your new look.",
      image: image1,
      color: "bg-rose-50",
      accent: "text-rose-600"
    },
    {
      icon: <Palette className="w-6 h-6 text-pink-600" />, 
      title: "Your AI Dress Changer",
      description: "Say hello to your all-in-one style hub. Try on outfits, follow trends, and create fashion-forward looks instantly.",
      image: image2,
      color: "bg-pink-50",
      accent: "text-pink-600"
    },
    {
      icon: <Box className="w-6 h-6 text-rose-600" />, 
      title: "Explore Stylish Categories",
      description: "Discover outfits for every mood. Browse through diverse categories like Cocktail, T-shirts, and Suits for both men and women.",
      image: image5,
      color: "bg-orange-50/50",
      accent: "text-rose-500"
    },
    {
      icon: <Zap className="w-6 h-6 text-pink-600" />,
      title: "See Your New Look",
      description: "Get a photorealistic preview of yourself in a new outfit. You look amazing, so why not share it with the world?",
      image: image4,
      color: "bg-purple-50",
      accent: "text-pink-500"
    },
  ];

  return (
    
    <section id="featuresSection"
     className="bg-rose-100 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
    
          <h1 className="text-3xl font-extrabold text-rose-700 sm:text-4xl">
            Transform Your Style with <span className="text-pink-600">AI Magic</span>
          </h1>

          <p className="mt-4 text-xl text-gray-700">
            Explore the powerful, intuitive features that make our AI Outfit Swap app your ultimate fashion companion.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative flex flex-col bg-gradient-to-l from rose-00 to-pink-200 rounded-[2.5rem] border border-rose-100/50 shadow-sm hover:shadow-2xl hover:shadow-rose-100/50 transition-all duration-500 overflow-hidden"
            >
             
              <div className="relative h-[300px] overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className={`absolute top-6 left-6 w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg`}>
                  {feature.icon}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
              </div>

              
              <div className="p-10 pt-6 relative">
                <h3 className="text-2xl font-black text-rose-700 mb-4 tracking-tight flex items-center gap-3">
                  {feature.title}
                </h3>
                <p className="text-slate-700 font-medium leading-relaxed mb-8">
                  {feature.description}
                </p>
                
                
                <button className={`flex items-center gap-2 text-sm font-black uppercase tracking-widest ${feature.accent} group-hover:gap-4 transition-all duration-300`}>
                  Try it now
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;