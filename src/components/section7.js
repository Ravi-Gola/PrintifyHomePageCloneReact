import React from 'react';

const ConnectAndStartSelling = () => {
  return (
    <div className=' p-4 md:p-24' style={{background:"#f5f5f0"}}>
    <div className=" py-16 w-full" style={{background:"#2f2e0c"}}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Full Width Container */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Side Div - Text */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <h2 className="text-6xl font-bold text-white mb-4">
              Connect and start selling
            </h2>
            <p className="text-lg text-white font-bold mb-4">
              Printify integrates with all the top selling platforms in the world.
            </p>
            <a href="#" className="text-white font-bold underline">
              See all integrations
            </a>
          </div>

          {/* Right Side Div - Image */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <img
              src="https://printify.com/pfh/assets/integrations-stickers.webp" // Replace with actual image URL or image import
              alt="Integration platforms"
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>

        
      </div>
    </div>
    {/* Bottom Section - As Seen In */}
   <div className='px-6 md:px-20 py-16' style={{background:"#f5f5f0"}}>
   <div className="flex justify-center">
    <p className="text-lg text-black font-bold mb-4">As seen in:</p>
  </div>
  <div className="flex flex-col md:flex-row justify-center space-x-8 items-center">
    <img width={"100px"} src="https://printify.com/pfh/assets/publishers/business-insider.svg" alt="Business Insider" />
    <img width={"150px"} src="https://printify.com/pfh/assets/publishers/daily-mail.webp" alt="Daily Mail" />
    <img width={"150px"} src="https://printify.com/pfh/assets/publishers/entrepreneur.webp" alt="Entrepreneur" />
    <img  width={"50px"}src="https://printify.com/pfh/assets/publishers/cnbc.webp" alt="CNBC" />
    <img width={"100px"} src="https://printify.com/pfh/assets/publishers/forbes.webp" alt="Forbes" />
  </div>
   </div>
  </div>
  );
};

export default ConnectAndStartSelling;
