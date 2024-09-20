import React from 'react';

const InspirationSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-8">Ideas and inspiration</h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* First Image (Large image on the left) */}
        <div className="relative col-span-2 row-span-2">
          <img
            src="https://printify.com/pfh/assets/products-display/grid-image-1.webp"
            alt="Person on a couch"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Dots indicating products */}
          <div className="dotcss absolute top-1/3 left-1/4 w-4 h-4 bg-yellow-600 rounded-full"></div>
          <div className="dotcss absolute bottom-1/3 left-1/4 w-4 h-4 bg-yellow-600 rounded-full"></div>
        </div>

        {/* Second Image (Top-right) */}
        <div className="relative col-span-2">
          <img
            src="https://printify.com/pfh/assets/products-display/grid-image-2.webp"
            alt="Family cooking"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Dots indicating products */}
          <div className="dotcss absolute top-1/3 right-1/3 w-4 h-4 bg-yellow-600 rounded-full"></div>
          <div className="dotcss absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-600 rounded-full"></div>
        </div>

        {/* Third Image (Bottom-left in the right section) */}
        <div className="relative">
          <img
            src="https://printify.com/pfh/assets/products-display/grid-image-3.webp"
            alt="Dog with bandana"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Dot indicating product */}
          <div className="dotcss absolute top-1/2 right-1/3 w-4 h-4 bg-yellow-600 rounded-full"></div>
        </div>

        {/* Fourth Image (Bottom-right, same size as third image) */}
        <div className="relative">
          <img
            src="https://printify.com/pfh/assets/products-display/grid-image-4.webp"
            alt="Person with tote bag"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Dot indicating product */}
          <div className="dotcss absolute bottom-1/3 left-1/4 w-4 h-4 bg-yellow-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default InspirationSection;
