
import React from 'react';

interface TestimonialProps {
    quote: string;
    name: string;
    location: string;
    initials: string;
}


const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, location, initials }) => (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-left transform hover:scale-[1.02] transition duration-300">
    
        <div className="text-amber-400 text-xl mb-4">★★★★★</div>
        <p className="text-gray-700 mb-6 text-lg ">{quote}</p>
        
        <div className="flex items-center">
        
            <div className={`
                w-10 h-10 rounded-full 
                bg-rose-200 
                flex items-center justify-center 
                text-rose-700 
                font-bold mr-3
            `}>
                {initials}
            </div>
            
            <div>
              
                <h4 className={`font-bold text-rose-600`}>{name}</h4>
                <span className="text-sm text-gray-500">{location}</span>
            </div>
        </div>
    </div>
);


const testimonialsData: TestimonialProps[] = [
    {
        quote: "I was skeptical about swapping at first, but the community is so nice. I found a vintage denim jacket I've been looking for years!",
        name: "Jessica D.",
        location: "Brooklyn, NY",
        initials: "JD",
    },
    {
        quote: "Finally, an app that actually cares about quality. The verification process gives me peace of mind when trading my designer pieces.",
        name: "Marcus R.",
        location: "Austin, TX",
        initials: "MR",
    },
    {
        quote: "The size matching tool is a game-changer! No more guessing games or wasted shipping. Every item fits perfectly.",
        name: "Sarah W.",
        location: "Seattle, WA",
        initials: "SW",
    },
    {
        quote: "I've refreshed my entire wardrobe this year without spending a dime. It's the most sustainable and fun way to shop. Zero waste!",
        name: "Chris L.",
        location: "London, UK",
        initials: "CL",
    },
    {
        quote: "Used the local meetup feature for the first time—it was so easy and I met a new friend! Highly recommend Outfit Swap.",
        name: "Emily K.",
        location: "Toronto, CA",
        initials: "EK",
    },
    {
        quote: "My closet used to be stale. Now, with the AI match feature, I swap something new every month. My style has never evolved faster!",
        name: "Alex B.",
        location: "Miami, FL",
        initials: "AB",
    },
    {
        quote: "Listing an item takes less than a minute. The interface is intuitive and making a swap offer is completely seamless.",
        name: "Daniel F.",
        location: "Chicago, IL",
        initials: "DF",
    },
    {
        quote: "I used to spend hundreds a month on clothes. Now I get the same thrill for free. I've saved a fortune since joining Outfit Swap.",
        name: "Rachel H.",
        location: "San Diego, CA",
        initials: "RH",
    },
    {
        quote: "Found the exact brand and style I wanted within two days of signing up. I'm telling all my friends—this app is brilliant.",
        name: "Jordan P.",
        location: "Sydney, AU",
        initials: "JP",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 bg-rose-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900 mb-4">
                    Loved by Over 50,000 Swappers
                </h2>
                <p className="text-lg text-pink-600 mb-12 max-w-2xl mx-auto">
                    Hear from the members of the Outfit Swap community who are refreshing their closets sustainably.
                </p>

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;