import React from 'react';

const data = [
  {
    image: 'https://printify.com/pfh/assets/resources/rockstars.webp', // Replace with the actual image path
    title: 'POD Rockstars',
    description: '25k in our community of sellers',
    linkText: 'Learn more',
  },
  {
    image: 'https://printify.com/pfh/assets/resources/youtube.webp', // Replace with the actual image path
    title: 'Printify YouTube',
    description: '100k subscribers on the channel to learn POD',
    linkText: 'Learn more',
  },
  {
    image: 'https://printify.com/pfh/assets/resources/amplified.webp', // Replace with the actual image path
    title: 'Amplified',
    description: '50k attendees at our online and in-person events',
    linkText: 'Learn more',
  },
  {
    image: '	https://printify.com/pfh/assets/resources/printing-profits.webp', // Replace with the actual image path
    title: 'Printify Podcast',
    description: '100k downloads on POD’s best podcast',
    linkText: 'Learn more',
  },
  {
    image: 'https://printify.com/pfh/assets/resources/mentorship.webp', // Replace with the actual image path
    title: 'Mentorship Program',
    description: '100s of profitable store owners have taken our free and paid courses',
    linkText: 'Learn more',
  },
  {
    image: 'https://printify.com/pfh/assets/resources/learning.webp ', // Replace with the actual image path
    title: 'Printify Learning',
    description: 'Over 600 different articles and guides to creating your business',
    linkText: 'Learn more',
  },
];

const CardGrid = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold  mb-8" style={{color:"#2f2e0c"}}>
          Everything you need to start your own online business
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray text-left" style={{color:"#2f2e0c"}}>{item.title}</p>
                <h3 className="text-xl text-left font-bold mt-2" style={{color:"#2f2e0c"}}>{item.description}</h3>
                <a href="#" className="font-semibold text-left mt-4 underline block" style={{color:"#2f2e0c"}}>
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
