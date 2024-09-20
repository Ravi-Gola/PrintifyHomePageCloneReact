import React from 'react';

function HeroBanner() {
  return (
    <div className="hero bg-white text-black" >
      <div className="hero-content flex md:flex-row p-8  flex-col">
        <div className="md:w-2/3 text-center lg:text-left md:pl-20">
          <h1 className="herotext text-3xl md:text-4xl lg:text-6xl font-bold">CREATE AND SELL CUSTOM PRODUCTS</h1>
          <p className="py-3 md:py-6 flex flex-col md:flex-row md:gap-12">
            
              <p>100% Free to use</p>
              <p>900+ products</p>
              <p>Global delivery</p>
            
          </p>
          <button className="herobtn btn btn-primary">Get started for free</button>
          <p className="py-2">No credit card required</p>
          <p className=" flex gap-4 justify-center md:gap-12 font-bold "><p>Trusted by 10M+ sellers </p><p>|</p> <p>★★★★4.8 on</p> <p>Shopify and Trustpilot</p></p>
        </div>
        <div className="md:w-1/3">
        <video
            src="https://printify.com/pfh/assets/hero/newbies-hero-horizontal.mp4"
            autoPlay
            loop
            muted
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;