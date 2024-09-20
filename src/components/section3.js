import React, { useRef } from 'react';

const ProductCarousel = () => {
  const carouselRef = useRef(null);

  // Function to handle horizontal scroll
  const scroll = (direction) => {
    const { current } = carouselRef;
    if (direction === 'left') {
      current.scrollLeft -= 200;
    } else {
      current.scrollLeft += 200;
    }
  };

  return (
    <div className="flex flex-col items-center my-4 md:my-24 md:px-24">
      {/* Title */}
      <h2 className="text-3xl font-bold m-6 sectionheading">Your next bestseller awaits</h2>
      
      {/* Carousel Container */}
      <div className="relative w-full mx-24">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-md shadow-lg" style={{color:"white",background:"#2f2e0c"}}
        >
          <span>&larr;</span>
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll space-x-4 scrollbar-hide p-4 scroll-smooth"
        >
          {/* Product Cards */}
          <div className="flex-none w-48 p-4 bg-white rounded-lg shadow-lg">
            <img src="data:image/webp;base64,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" alt="T-shirts" className="w-full h-auto" />
            <p className="mt-4 text-center text-lg font-semibold">T-shirts</p>
          </div>
          <div className="flex-none w-48 p-4 bg-white rounded-lg shadow-lg">
            <img src="https://printify.com/pfh/assets/products-display/sweatshirt.webp" alt="Sweatshirt" className="w-full h-auto" />
            <p className="mt-4 text-center text-lg font-semibold">Sweatshirt</p>
          </div>
          <div className="flex-none w-48 p-4 bg-white rounded-lg shadow-lg">
            <img src="https://printify.com/pfh/assets/products-display/mug.webp" alt="Mugs" className="w-full h-auto" />
            <p className="mt-4 text-center text-lg font-semibold">Mugs</p>
          </div>
          <div className="flex-none w-48 p-4 bg-white rounded-lg shadow-lg">
            <img src="data:image/webp;base64,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" alt="Hoodie" className="w-full h-auto" />
            <p className="mt-4 text-center text-lg font-semibold">Hoodie</p>
          </div>
          <div className="flex-none w-48 p-4 bg-white rounded-lg shadow-lg">
            <img src="https://printify.com/pfh/assets/products-display/kids-clothing.webp" alt="Kids Clothing" className="w-full h-auto" />
            <p className="mt-4 text-center text-lg font-semibold">Kids Clothing</p>
          </div>
          <div className="flex-none w-48 p-4 bg-white rounded-lg shadow-lg">
            <img src="https://printify.com/pfh/assets/products-display/stickers.webp" alt="Kids Clothing" className="w-full h-auto" />
            <p className="mt-4 text-center text-lg font-semibold">Stickers</p>
          </div>
          <div className="flex-none w-48 p-4 bg-white rounded-lg shadow-lg">
            <img src="https://printify.com/pfh/assets/products-display/phone-cases.webp" alt="Kids Clothing" className="w-full h-auto" />
            <p className="mt-4 text-center text-lg font-semibold">Phone Cases</p>
          </div>
          <div className="flex-none w-48 p-4 bg-white rounded-lg shadow-lg">
            <img src="https://printify.com/pfh/assets/products-display/posters.webp" alt="Kids Clothing" className="w-full h-auto" />
            <p className="mt-4 text-center text-lg font-semibold">Posters</p>
          </div>
          <div className="flex-none w-48 p-4 bg-white rounded-lg shadow-lg">
            <img src="https://printify.com/pfh/assets/products-display/candles.webp" alt="Kids Clothing" className="w-full h-auto" />
            <p className="mt-4 text-center text-lg font-semibold">Candles</p>
          </div>
          <div className="flex-none w-48 p-4 bg-white rounded-lg shadow-lg">
            <img src="	https://printify.com/pfh/assets/products-display/bag.webp" alt="Kids Clothing" className="w-full h-auto" />
            <p className="mt-4 text-center text-lg font-semibold">Bags</p>
          </div>
          {/* Add more products as needed */}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-4 shadow-lg rounded-md"
        >
          <span>&rarr;</span>
        </button>
      </div>

      {/* Horizontal Scroll Indicator */}
      <div className="mt-4 flex justify-center">
        <div className="h-2 w-64 bg-gray-200 rounded-lg overflow-hidden">
          <div className="w-1/5 bg-gray-800 h-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
