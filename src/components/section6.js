import React from 'react';

const RealPeopleUsePrintify = () => {
  return (
    <div className="bg-cream-100 py-16 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Top Heading */}
        <h2 className="text-3xl font-bold text-green-900 mb-12 text-center">
          Real people use Printify
        </h2>

        {/* Content - Image and Text */}
        <div className="w-full grid md:grid-cols-2 gap-12 items-center px-6">
          {/* Left Side - Image */}
          <div className="relative">
            {/* Image with purple background */}
            <div className="bg-purple-400 p-4 relative">
              <img
                src="https://printify.com/pfh/assets/christina-umerez.webp"
                alt="Christina Umeraz"
                className="w-full h-auto object-cover"
              />
              {/* Play button overlay */}
            </div>
          </div>

          {/* Right Side - Text */}
          <div>
            <p className="text-lg text-black font-bold mb-4">
              "I've been using Printify for about two years, it allowed me to quit my job within 9 months.
              Now I'm in Bali being a digital nomad and working on my store"
            </p>
            <p className="text-sm font-semibold text-gray-500 mb-2">
              Christina Umeraz, Toronto
            </p>
            <a href="#" className="text-sm font-bold text-green-700 underline">
              Read more real-life stories of success
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealPeopleUsePrintify;
