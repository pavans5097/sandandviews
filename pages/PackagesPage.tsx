import React from 'react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: "The Royal Forts & Palaces Explorer",
    duration: "7 Days / 6 Nights",
    cities: "Jaipur → Jodhpur → Udaipur",
    price: "₹28,500",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/mehrangarh-fort-jodhpur-rajasthan-hero?qlt=82&ts=1726660826646",
    highlights: [
      "Elephant ride at Amer Fort",
      "Sound and Light show at Mehrangarh Fort",
      "Romantic sunset boat ride on Lake Pichola",
      "Stay in a Heritage Hotel",
    ],
  },
  {
    name: "Golden Desert Trails",
    duration: "5 Days / 4 Nights",
    cities: "Jodhpur → Jaisalmer",
    price: "₹22,000",
    image: "https://static.toiimg.com/photo/53317860.cms",
    highlights: [
      "Desert Camping with folk performance",
      "Camel or Jeep Safari in the Thar Desert",
      "Visit to the 'living' Jaisalmer Fort",
      "Explore the abandoned village of Kuldhara",
    ],
  },
  {
    name: "Wild Kingdom Safari",
    duration: "6 Days / 5 Nights",
    cities: "Jaipur → Ranthambore → Bharatpur",
    price: "₹35,000",
    image: "https://images.pexels.com/photos/1294723/pexels-photo-1294723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    highlights: [
      "Multiple Jungle Safaris for Tiger spotting",
      "Visit to the historic Ranthambore Fort",
      "Bird watching at Keoladeo National Park",
      "Nature-focused hotel stays",
    ],
  },
  {
    name: "Colours of Rajasthan",
    duration: "10 Days / 9 Nights",
    cities: "Delhi → Agra → Jaipur → Pushkar → Udaipur",
    price: "₹45,000",
    image: "https://foundation.rajasthan.gov.in/images/dance-7.jpg",
    highlights: [
      "Covers the famous 'Golden Triangle'",
      "Experience the spiritual atmosphere of Pushkar",
      "Shop for famous Rajasthani crafts",
      "Witness Mughal and Rajput architecture",
    ],
  },
];

const PackagesPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900">Packages Fit for Royalty</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Choose from our curated itineraries, each designed to offer a unique and unforgettable experience of Rajasthan's diverse landscapes and rich culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
              <img src={pkg.image} alt={pkg.name} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#003366]">{pkg.name}</h3>
                <p className="text-md text-gray-500 mt-1">{pkg.duration} | {pkg.cities}</p>
                <ul className="my-4 space-y-2 flex-grow">
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
                 <div className="mt-auto pt-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-500">Starting from</p>
                            <p className="text-2xl font-bold text-slate-900">{pkg.price}</p>
                        </div>
                        <Link to="/contact" className="bg-[#003366] hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                            Book Now
                        </Link>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;