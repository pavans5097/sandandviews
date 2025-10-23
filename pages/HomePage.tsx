import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white" 
        style={{backgroundImage: "url('https://picsum.photos/seed/rajasthan_fort/1600/900')"}}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            RAJASTHAN: Where History Meets the Horizon
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            A journey through the Land of Kings with Sand and Views
          </p>
          <div className="text-3xl md:text-4xl font-semibold mb-8 italic font-['Playfair_Display']">
            “Padharo Mharo Des”
          </div>
          <Link 
            to="/packages" 
            className="bg-[#003366] hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Explore Our Tours
          </Link>
        </div>
      </section>

      {/* Snapshot Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">The Colors of the Desert</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {snapshotItems.map((item, index) => (
              <div key={index} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#003366]">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Welcome Message */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src="https://picsum.photos/seed/rajasthan_culture/800/600" alt="Rajasthan Culture" className="rounded-lg shadow-xl w-full" />
            </div>
            <div className="lg:w-1/2">
              <p className="text-sm uppercase tracking-widest text-[#003366] font-semibold">Welcome to Rajasthan</p>
              <h2 className="text-4xl font-bold text-slate-900 my-4">Live the History, Feel the Royalty</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Step into the land of valor, romance, and vibrant heritage. Rajasthan is a kaleidoscope of imposing forts, opulent palaces, shimmering lakes, and endless golden sands. With Sand and Views, you won’t just see the sights—you’ll live the history.
              </p>
              <div className="mt-6 border-l-4 border-[#D4AF37] pl-4">
                <p className="font-semibold">Best Time to Visit: October to March ☀</p>
                <p className="font-semibold">Capital: Jaipur (The Pink City)</p>
                <p className="font-semibold">Must-Try Cuisine: Dal Baati Churma</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const snapshotItems = [
  { title: 'Forts & Palaces', desc: 'Live like royalty in historic havelis and palaces.', img: 'https://picsum.photos/seed/fort_palace/400/300' },
  { title: 'Desert Adventures', desc: 'Experience the golden dunes of the Thar desert.', img: 'https://picsum.photos/seed/desert_adventure/400/300' },
  { title: 'Vibrant Culture', desc: 'Witness mesmerizing folk dances and music.', img: 'https://picsum.photos/seed/rajasthan_dance/400/300' },
  { title: 'Iconic Cityscapes', desc: 'Explore the Pink, Blue, and Golden cities.', img: 'https://picsum.photos/seed/jaipur_city/400/300' },
];

export default HomePage;