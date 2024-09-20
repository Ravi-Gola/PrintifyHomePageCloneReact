import React from "react";

function StartDesign() {
  return (
    <div className="bg-gray-100">
      <div
        className="flex flex-col md:flex-row justify-between p-6 md:p-28"
        style={{ color: "#f5f5f0" }}
      >
        <div className="">
          <h1
            className="sectionheading text-4xl font-bold text-gray-800 mb-8 md:mb-16"
            style={{ color: "#2f2e0c", lineHeight: "55px" }}
          >
            Start with $0
            <br />
            investment
          </h1>
          <div className="list-decimal text-gray-600">
            <div style={{borderBottom:"1px solid grey"}}>
              <h4 className="subhead">1. Select your product</h4>
              <p style={{ color: "#2f2e0c" , marginBottom:"10px"}}>
                Choose from over 1000 top quality products including brands you
                know and love
              </p>
            </div>
            <div style={{borderBottom:"1px solid grey"}}>
              <h4 className="subhead">2. Add your design</h4>
              <p style={{ color: "#2f2e0c", marginBottom:"10px"}}>
                Designing your products is easy and fun!
              </p>
            </div>
            <div style={{borderBottom:"1px solid grey"}}>
              <h4 className="subhead">3. Start selling</h4>
              <p style={{ color: "#2f2e0c", marginBottom:"10px" }}>
                You set your profit margin, we take care of production and
                delivery
              </p>
            </div>
          </div>
          <button className="bg-blue-500 font-bold text-white py-4 px-9 rounded-md mt-4" style={{fontFamily:"sans-serif",background:"#2f2e0c"}}>
            Start designing
          </button>
          <p className="font-bold text-black mt-2 underline">Learn more</p>
        </div>
        <div className="my-4">
          <video
            src="https://printify.com/pfh/assets/steps/earn.mp4"
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default StartDesign;
