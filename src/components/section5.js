import React, { useState } from 'react';

const ProductEarningsCalculator = () => {
  // State for selected product, price, and daily sales
  const [selectedProduct, setSelectedProduct] = useState('Tshirt');
  const [price, setPrice] = useState(20);
  const [dailySales, setDailySales] = useState(1);

  // Fulfillment cost and monthly earnings calculation
  const fulfillmentCost = 8.26;
  const monthlyEarnings = ((price - fulfillmentCost) * dailySales * 30).toFixed(2);

  // Handle product change
  const handleProductChange = (product) => {
    setSelectedProduct(product);
  };

  // Handle price slider change
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  // Handle daily sales slider change
  const handleSalesChange = (event) => {
    setDailySales(event.target.value);
  };

  return (
    <div className=" min-h-screen p-4 text-white flex justify-center items-center" style={{background:"#2f2e0c"}}>
      <div className="w-full max-w-4xl  rounded-lg overflow-hidden">

        {/* Top Heading */}
        <div className=" py-6 text-center text-4xl font-bold text-white" style={{background:"#2f2e0c"}}>
          See how much you can make:
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left side image */}
          <div className="md:w-1/2">
            <img
              src="https://printify.com/pfh/assets/profit-calculator/t-shirt-desktop.webp"
              alt="People with t-shirts"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side content */}
          <div className="md:w-1/2 p-2 bg-white text-black flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-4">Choose a product</h2>

              {/* Product selection buttons */}
              <div className="flex space-x-2 mb-6">
                {['Tshirt', 'Socks', 'Phone case', 'Notebook'].map((product) => (
                  <button
                    key={product}
                    onClick={() => handleProductChange(product)}
                    className={`py-2 px-4 border rounded-lg text-sm font-semibold ${
                      selectedProduct === product ? 'bg-gray-800 text-white' : 'bg-gray-300'
                    }`}
                  >
                    {product}
                  </button>
                ))}
              </div>

              <p className="text-gray-500 mb-4">Fulfillment Cost: ${fulfillmentCost}</p>

              {/* Quantity and price controls */}
              <h3 className="font-semibold mb-2">Quantity and Price</h3>
              <div className="flex items-center justify-between mb-4">
                <label>Sell it for:</label>
                <input
                  type="number"
                  value={price}
                  onChange={handlePriceChange}
                  className="w-20 border text-center"
                />
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={price}
                onChange={handlePriceChange}
                className="w-full mb-4"
              />

              {/* Daily sales input and slider */}
              <div className="flex items-center justify-between mb-4">
                <label>Daily sales:</label>
                <input
                  type="number"
                  value={dailySales}
                  onChange={handleSalesChange}
                  className="w-20 border text-center"
                />
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={dailySales}
                onChange={handleSalesChange}
                className="w-full mb-4"
              />
            </div>

            {/* Monthly earnings display */}
            <div className="bg-lime-300 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-2">Your monthly earnings:</h3>
              <p className="text-4xl font-bold">${monthlyEarnings}</p>
            </div>

            {/* CTA Button */}
            <button className="w-full py-3  text-white rounded-lg font-semibold" style={{background:"#2f2e0c"}}>
              Start designing
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-xs text-center text-white mt-4 px-8" style={{background:"#2f2e0c"}}>
          *The production cost includes the fulfillment price of one item with one print. It doesn’t include shipping fees, taxes, and other possible storefront expenses.
        </div>
      </div>
    </div>
  );
};

export default ProductEarningsCalculator;
