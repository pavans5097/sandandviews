
import React from 'react';
import { ArchitectureIcon, DesertIcon, CultureIcon, ShoppingIcon, SunsetIcon, CuisineIcon } from '../components/Icons';

const itineraryData = [
    { day: 1, destination: "Arrival in Jaipur", highlights: "Check-in at your heritage haveli, relax and freshen up. Evening at leisure to explore a vibrant local market and sample authentic Rajasthani street food.", accommodation: "Heritage Haveli Stay", location: "Jaipur" },
    { day: 2, destination: "Jaipur Sightseeing", highlights: "Full day exploring: Amber Fort (majestic hilltop fort with elephant ride option), Hawa Mahal (Palace of Winds with 953 windows), Jantar Mantar (astronomical observatory), and City Palace (sprawling royal complex with museums).", accommodation: "Heritage Haveli Stay", location: "Jaipur" },
    { day: 3, destination: "Jaipur to Jodhpur", highlights: "Scenic drive through rural Rajasthan (approximately 5-6 hours). Check-in at your hotel. Evening visit to Mandore Gardens with beautiful cenotaphs and temples.", accommodation: "Blue City Hotel", location: "Jodhpur" },
    { day: 4, destination: "Jodhpur Sightseeing", highlights: "Explore the magnificent Mehrangarh Fort (one of India's largest forts with panoramic city views), Jaswant Thada (marble cenotaph with intricate carvings), and bustling Clock Tower Bazaar for handicraft shopping and local experiences.", accommodation: "Blue City Hotel", location: "Jodhpur" },
    { day: 5, destination: "Jodhpur to Jaisalmer", highlights: "Drive to the Golden City through the Thar Desert (approximately 5 hours). Check-in at your hotel. Evening at serene Gadisar Lake surrounded by ancient temples, perfect for sunset photography.", accommodation: "Golden City Hotel", location: "Jaisalmer" },
    { day: 6, destination: "Jaisalmer Desert Experience", highlights: "Morning: Jaisalmer Fort (Living Fort where people still reside) & Patwon Ki Haveli (intricately carved sandstone mansion). Afternoon: Desert Safari at Sam Sand Dunes on camel or Jeep. Evening: Authentic Rajasthani cultural show featuring Manganiyars and Langas folk music and mesmerizing Kalbeliya dance. Overnight in luxury desert camp under the stars.", accommodation: "Luxury Desert Camp", location: "Sam Sand Dunes" },
    { day: 7, destination: "Jaisalmer to Udaipur", highlights: "Flight/overnight train option or long scenic drive (approximately 9-10 hours by road). Arrival in the romantic City of Lakes. Evening at leisure for a brief walk around the lake and exploring local cafes.", accommodation: "Lake View Resort", location: "Udaipur" },
    { day: 8, destination: "Udaipur Sightseeing & Departure", highlights: "Morning: City Palace (grand lakeside palace with mosaic artwork and museums). Afternoon: Sunset boat ride on Lake Pichola viewing City Palace, Lake Palace, and Jag Mandir. Visit Saheliyon Ki Bari (Garden of the Maidens). Evening airport/railway station transfer for departure.", accommodation: "—", location: "Udaipur" },
];

const experiences = [
    { title: "Architecture & Heritage", desc: "Experience UNESCO World Heritage Sites, living forts, opulent palaces, and centuries-old havelis showcasing Rajputana architecture at its finest.", icon: <ArchitectureIcon className="w-10 h-10 text-[#003366] mb-4" /> },
    { title: "Desert Adventures", desc: "Witness golden sand dunes of the Thar Desert, enjoy camel safaris, stay in luxury camps, and experience authentic desert life under starlit skies.", icon: <DesertIcon className="w-10 h-10 text-[#003366] mb-4" /> },
    { title: "Cultural Immersion", desc: "Enjoy traditional folk music and dance performances, explore bustling bazaars, taste authentic cuisine, and connect with local artisans.", icon: <CultureIcon className="w-10 h-10 text-[#003366] mb-4" /> },
    { title: "Shopping Experiences", desc: "Private guided tours of Johari Bazaar for exquisite jewelry, Bandhani fabrics, blue pottery, miniature paintings, and traditional Mojari footwear.", icon: <ShoppingIcon className="w-10 h-10 text-[#003366] mb-4" /> },
    { title: "Romantic Moments", desc: "Sunset boat rides on Lake Pichola, rooftop dinners with illuminated City Palace views, and serene lakeside walks in the Venice of the East.", icon: <SunsetIcon className="w-10 h-10 text-[#003366] mb-4" /> },
    { title: "Culinary Delights", desc: "Savor Dal Baati Churma, Laal Maas, Ghevar, and other Rajasthani specialties. Optional cooking class experiences available.", icon: <CuisineIcon className="w-10 h-10 text-[#003366] mb-4" /> },
];

const ItineraryPage: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900">The Royal 8-Day Journey</h1>
          <p className="text-2xl text-blue-700 italic mt-2">Forts & Desert Circuit</p>
        </div>

        {/* Responsive Itinerary Display */}
        <div className="shadow-lg rounded-lg mb-16 overflow-hidden">
          {/* Table for medium screens and up */}
          <div className="hidden md:block">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-xs text-white uppercase bg-[#003366]">
                <tr>
                  <th scope="col" className="px-6 py-4 w-20 text-center">Day</th>
                  <th scope="col" className="px-6 py-4">Destination & Highlights</th>
                  <th scope="col" className="px-6 py-4">Accommodation</th>
                </tr>
              </thead>
              <tbody>
                {itineraryData.map((item) => (
                  <tr key={item.day} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-lg text-slate-900 text-center align-top">{item.day}</td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-lg text-[#003366]">{item.destination}</p>
                      <p className="mt-1 text-gray-700">{item.highlights}</p>
                    </td>
                    <td className="px-6 py-4 align-top">
                       <p className="font-semibold text-slate-800">{item.accommodation}</p>
                       <p className="text-gray-500">{item.location}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card layout for mobile screens */}
          <div className="block md:hidden">
            {itineraryData.map((item) => (
              <div key={item.day} className="p-4 border-b last:border-b-0 bg-white">
                <div className="flex items-start space-x-4">
                    <div className="bg-[#003366] text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold text-lg mt-1">
                        {item.day}
                    </div>
                    <div>
                        <p className="font-bold text-lg text-[#003366]">{item.destination}</p>
                        <div className="mt-1">
                            <p className="font-semibold text-slate-800">{item.accommodation}</p>
                            <p className="text-sm text-gray-500">{item.location}</p>
                        </div>
                    </div>
                </div>
                <p className="mt-3 text-gray-700 text-sm">{item.highlights}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Experience Highlights Section */}
        <div className="mb-16">
             <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Experience the Soul of Rajasthan</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiences.map(exp => (
                    <div key={exp.title} className="bg-gray-50 p-6 rounded-lg shadow-md text-center border border-gray-200">
                        {exp.icon}
                        <h3 className="text-xl font-bold text-[#003366] mb-2">{exp.title}</h3>
                        <p className="text-gray-600">{exp.desc}</p>
                    </div>
                ))}
             </div>
        </div>


        {/* Inclusions Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-inner max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-slate-900 mb-6">Package Inclusions</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> All Internal Travel: AC Car/Train</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 7 Nights Accommodation</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Daily Breakfast</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1 Special Desert Dinner</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> English-Speaking Guide</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> All Monument Entry Fees</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Desert Safari (Camel/Jeep)</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Cultural Show at Desert Camp</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPage;