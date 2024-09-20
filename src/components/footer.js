import React from "react";

const Footer = () => {
  return (
    <>
    <footer className="bg-[#32301E] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1 - Logo */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Printify</h3>
          </div>

          {/* Column 2 - Integrations */}
          <div>
            <h4 className="font-semibold mb-4">Integrations</h4>
            <ul className="space-y-2">
              {[
                "Shopify",
                "Etsy",
                "eBay",
                "Amazon",
                "TikTok Shop",
                "PrestaShop",
                "BigCommerce",
                "Wix",
                "WooCommerce",
                "Squarespace",
                "Printify API",
                "Printify Pop-Up Store",
                "Shutterstock",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Discover */}
          <div>
            <h4 className="font-semibold mb-4">Discover</h4>
            <ul className="space-y-2">
              {[
                "Blog",
                "Guides",
                "Products",
                "Etsy print-on-demand",
                "Shopify print-on-demand",
                "Woocommerce print-on-demand",
                "Wix print-on-demand",
                "Squarespace print-on-demand",
                "Make Your Own Shirt",
                "Brands",
                "Pricing",
                "Shipping Rates",
                "Mockup Generator",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Start Selling */}
          <div>
            <h4 className="font-semibold mb-4">Start Selling</h4>
            <ul className="space-y-2">
              {[
                "Custom T-shirts",
                "Custom Hoodies",
                "Custom Mugs",
                "Custom Socks",
                "Custom Backpacks",
                "Custom Branding",
                "Sell on Etsy",
                "Sell on Social Media",
                "Free T-shirt Designs",
                "Custom Products",
                "Custom All-Over-Print Hoodies",
                "Start a Clothing Line",
                "Start POD Business",
                "Bulk Orders",
                "Transfering To Printify",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        {/* Column 5 - Printify & Others */}
          <div>
            <h4 className="font-semibold mb-4">Printify</h4>
            <ul className="space-y-2">
              {[
                "Print on Demand",
                "Print Providers",
                "Experts Program",
                "Printify Express Delivery",
                "Become a Partner",
                "About",
                "Printify Quality Promise",
                "Jobs",
                "Webinars",
                "Printing Profits Podcast",
                "Contact Us",
                "Affiliate",
                "Contact Sales",
                "POD Glossary",
                "Network Fulfillment Status",
                "Merchant Protection",
                "Security",
                "Sitemap",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Footer Bottom Links */}
      </div>
    </footer>
    <div className="p-16 text-center text-sm" style={{background:"#f5f5f0"}}>
    <ul className="flex justify-center space-x-4 mb-4">
      <li>
        <a href="#" className="text-black underline">
          Intellectual Property Policy
        </a>
      </li>
      <li>
        <a href="#" className="text-black underline">
          Terms of Service
        </a>
      </li>
      <li>
        <a href="#" className="text-black underline">
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="#" className="text-black underline">
          Security
        </a>
      </li>
    </ul>
    <p className="text-black">
      © 2024 Printify, Inc. All rights reserved.
    </p>
  </div>
  </>
  );
};

export default Footer;
