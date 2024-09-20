import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-lime-400 md:h-[500px] py-4" >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center ">
        {/* Left Side - Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-6xl font-extrabold text-gray-900 mb-4">
            Get started today 100% free
          </h2>
          <button className="bg-gray-900 text-white px-6 py-3 mt-4 rounded-lg text-lg font-semibold">
            Get started
          </button>
        </div>

        {/* Right Side - Image Section */}
        <div className=" mt-8 md:mt-0 md:h-[400px]"  >
          <img 
            src="https://printify.com/pfh/assets/call-to-action.webp"
            alt="Call to action"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
