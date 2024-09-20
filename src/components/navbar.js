import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-[#32301E]">
          Printify
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#32301E] focus:outline-none"
          >
            {isOpen ? (
              // Close Icon (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links (Hidden on Mobile) */}
        <div
          className={` px-4 text-[#32301E] ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
         <div className="flex text-sm flex-col  md:flex-row md:gap-3">
         <a href="#" className="hover:text-gray-500">
            Catalog
          </a>
          <div className="relative group">
            <a href="#" className="hover:text-gray-500 underline">
              How it works
            </a>
            <div className="absolute hidden group-hover:block bg-white text-black py-2 shadow-lg mt-2">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-700"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-700"
              >
                Option 2
              </a>
            </div>
          </div>
          <a href="#" className=" hover:text-gray-500">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-500">
            Blog
          </a>
          <a href="#" className="hover:text-gray-500">
            Services
          </a>
          <a href="#" className="hover:text-gray-500">
            Use-cases
          </a>
          <a href="#" className="hover:text-gray-500">
            Need help?
          </a>
          <div className="flex flex-row">
            <button className="px-4 py-2 border border-black text-black rounded hover:bg-gray-100">
              Log in
            </button>
            <button className="ml-4 px-4 py-2 bg-lime-300 text-black rounded hover:bg-lime-400">
              Sign up
            </button>
          </div>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
