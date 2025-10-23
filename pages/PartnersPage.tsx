import React from 'react';

// Define a type for a single partner
interface Partner {
  name: string;
}

// Define a type for a partner category
interface PartnerCategory {
  title: string;
  partners: Partner[];
}

const partnerData: PartnerCategory[] = [
  {
    title: "Official Tourism Boards",
    partners: [
      { name: 'Rajasthan Tourism' },
      { name: 'Incredible India' },
    ],
  },
  {
    title: "Airline Partners",
    partners: [
      { name: 'Air India' },
      { name: 'Vistara' },
      { name: 'IndiGo' },
      { name: 'SpiceJet' },
    ],
  },
  {
    title: "Luxury Hotel Chains",
    partners: [
      { name: 'Taj Hotels' },
      { name: 'Oberoi Hotels & Resorts' },
      { name: 'The Leela Palaces' },
      { name: 'ITC Hotels' },
    ],
  },
    {
    title: "Travel & Insurance Partners",
    partners: [
      { name: 'MakeMyTrip' },
      { name: 'Goibibo' },
      { name: 'HDFC ERGO' },
      { name: 'TATA AIG' },
    ],
  },
];

const PartnerCard: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex justify-center items-center p-6 bg-gray-50 rounded-lg transition duration-300 hover:shadow-xl hover:bg-white border border-gray-200 h-28">
    <span className="text-center font-semibold text-slate-700">{name}</span>
  </div>
);

const PartnersPage: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900">Our Esteemed Partners</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We collaborate with the best in the industry to ensure you have a seamless and unforgettable travel experience.
          </p>
        </div>
        
        <div className="space-y-12">
          {partnerData.map((category) => (
            <div key={category.title}>
              <h2 className="text-3xl font-bold text-center text-[#003366] mb-8">{category.title}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
                {category.partners.map((partner) => (
                  <PartnerCard key={partner.name} name={partner.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
