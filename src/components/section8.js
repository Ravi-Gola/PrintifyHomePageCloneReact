import React from 'react';

const PrintifyCustomerLocations = () => {
  return (
    <div className="bg-blue-200 py-16 w-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Heading Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4" style={{color:"#2f2e0c"}}>
            Printify is where your customers are:
          </h3>
          <p className="text-lg text-gray-800">
            Our partner network delivers around the world, fast.
          </p>
        </div>

        {/* Full Width Container */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          
          {/* Left Side Div - Stats */}
          <div className="lg:w-1/3 w-full mb-8 lg:mb-0 text-left">
            <div className="mb-8">
              <h2 className="text-5xl font-bold text-green-900" style={{borderTop:"2px solid #2f2e0c"}}>59M+</h2>
              <p className="text-lg text-gray-800">Total orders completed</p>
            </div>
            <div className="mb-8">
              <h2 className="text-5xl font-bold text-green-900" style={{borderTop:"2px solid #2f2e0c"}}>209</h2>
              <p className="text-lg text-gray-800">Countries and territories</p>
            </div>
            <div className="mb-8">
              <h2 className="text-5xl font-bold text-green-900" style={{borderTop:"2px solid #2f2e0c"}}>141</h2>
              <p className="text-lg text-gray-800">Facilities</p>
            </div>
          </div>

          {/* Right Side Div - Map Image */}
          <div className="lg:w-2/3 w-full flex justify-center lg:justify-end">
            <img
              src="https://printify.com/pfh/assets/print-provider-map.svg"
              alt="Printify Customer Locations Map"
              className="w-full max-w-2xl h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintifyCustomerLocations;
