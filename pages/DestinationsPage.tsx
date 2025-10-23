import React from 'react';

const destinations = [
  {
    name: "Jaipur",
    title: "Where Palaces Guard the Past",
    image: "https://as2.ftcdn.net/jpg/02/57/94/47/1000_F_257944720_3Dzk4FwOWBl5O5KZSBaKHyUXpOm7x4jr.jpg",
    description: "The state capital and a UNESCO World Heritage Site. Jaipur is a treasure trove of architectural wonders, bustling bazaars, and vibrant street life. It’s the perfect blend of royal charm and modern energy.",
    landmarks: [
      { name: "Amber Fort", desc: "Majestic hilltop fort; take an elephant ride up the ramparts." },
      { name: "Hawa Mahal", desc: "The iconic 'Palace of Winds' with 953 intricate windows." },
      { name: "City Palace", desc: "A sprawling complex housing museums and royal residences." },
      { name: "Jantar Mantar", desc: "An astronomical observatory with colossal instruments." },
    ]
  },
  {
    name: "Udaipur",
    title: "The Venice of the East",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/city-palace-udaipur-rajasthan-1-new-attr-hero?qlt=82&ts=1742171011440",
    description: "A romantic, serene, and beautiful city of artificial lakes and breathtaking architecture. Known for its majestic palaces set against the backdrop of the Aravalli Hills.",
    landmarks: [
      { name: "Lake Pichola", desc: "Enjoy a sunset boat cruise with stunning palace views." },
      { name: "City Palace", desc: "A grand structure overlooking the lake with intricate mosaic artwork." },
      { name: "Jag Mandir", desc: "An island palace perfect for picnics and panoramic views." },
      { name: "Saheliyon Ki Bari", desc: "The 'Garden of the Maidens' with beautiful fountains and kiosks." },
    ]
  },
  {
    name: "Jaisalmer",
    title: "The Golden City of Sands",
    image: "https://rajwadadesertcamp.com/wp-content/uploads/2024/04/Jaisalmer-fort-1024x683-1-1024x656.webp",
    description: "Rising from the heart of the Thar Desert, this city is dominated by the 'living' Jaisalmer Fort. It's the gateway to incredible desert adventures and cultural experiences.",
    landmarks: [
      { name: "Jaisalmer Fort", desc: "A massive sandstone fort, still inhabited, known as 'Sonar Kila'." },
      { name: "Patwon Ki Haveli", desc: "A cluster of five intricately carved sandstone havelis." },
      { name: "Sam Sand Dunes", desc: "Experience a desert safari and a cultural evening under the stars." },
      { name: "Gadisar Lake", desc: "A serene, historic artificial reservoir surrounded by temples and shrines." },
    ]
  }
];

const DestinationsPage: React.FC = () => {
  return (
    <div className="animate-fadeIn py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900">Explore the Jewels of Rajasthan</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Each city in Rajasthan tells its own story through its vibrant colors, magnificent forts, and rich traditions. Discover the unique charm of our most iconic destinations.
          </p>
        </div>

        <div className="space-y-20">
          {destinations.map((dest, index) => (
            <div key={dest.name} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-3/5">
                <img src={dest.image} alt={dest.name} className="rounded-lg shadow-2xl w-full h-auto object-cover" />
              </div>
              <div className="lg:w-2/5">
                <h2 className="text-4xl font-bold text-[#003366]">{dest.name}</h2>
                <p className="text-xl text-blue-700 italic mt-1 mb-4">{dest.title}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{dest.description}</p>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Must-Visit Landmarks</h3>
                <ul className="space-y-3">
                  {dest.landmarks.map(landmark => (
                    <li key={landmark.name} className="flex items-start">
                      <svg className="w-5 h-5 text-[#003366] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <div>
                        <span className="font-semibold">{landmark.name}:</span>
                        <span className="text-gray-600"> {landmark.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;