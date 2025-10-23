import React, { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-4 focus:outline-none"
      >
        <span className="text-lg font-medium text-slate-800">{question}</span>
        <span className="transform transition-transform duration-300">
          <svg className={`w-6 h-6 text-[#003366] ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-4 pb-5 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};


const faqs = [
    { question: "What does the standard Rajasthan tour package typically include?", answer: "A typical package usually includes accommodation (hotels, heritage stays, or desert camps), transportation (private car with driver), daily breakfast, guided sightseeing, and transfers (airport/railway station pick-up and drop-off)." },
    { question: "Can the itinerary be customized to my interests and duration?", answer: "Yes, we specialize in customizable itineraries. You can choose your preferred cities, duration, type of accommodation, and specific activities like camel safaris, cooking classes, or cultural shows to create your perfect trip." },
    { question: "What are the must-visit cities you recommend for a first-timer?", answer: "The most popular cities are Jaipur (Pink City), Udaipur (City of Lakes), Jodhpur (Blue City), and Jaisalmer (Golden City). This combination offers a fantastic mix of forts, palaces, lakes, and desert experiences." },
    { question: "How many days are needed for an ideal Rajasthan tour?", answer: "An ideal, comprehensive tour covering the major cities takes about 7 to 10 days. A shorter trip of 4-6 days can cover 2-3 cities, while a longer tour of 12-15 days allows for deeper exploration of hidden gems." },
    { question: "Are entry fees to monuments and activities included?", answer: "This depends on the package you select. We offer both all-inclusive packages and more flexible options. Please clarify with our travel consultant during the booking process to ensure everything you want is included." },
    { question: "What kind of transport is used between cities?", answer: "Private, air-conditioned car with a dedicated, professional driver is our standard and most comfortable option. For longer distances, we can also arrange domestic flights or train travel as per your preference." },
    { question: "Is travel insurance included, and is it necessary?", answer: "Travel insurance is not included in our standard packages. We highly recommend purchasing a comprehensive policy to cover unforeseen circumstances like trip cancellation, medical emergencies, or lost luggage." },
    { question: "What documents do I need to carry?", answer: "You must carry a valid photo ID. For international travelers, a passport and a valid Indian visa are required. For domestic travelers, an Aadhar Card or Driving License is sufficient. Always keep a digital copy of your documents." },
    { question: "What is your cancellation and refund policy?", answer: "Our cancellation policy is detailed in the terms and conditions provided with your booking confirmation. It varies based on how far in advance you cancel. We recommend reviewing it carefully before confirming your trip." },
    { question: "Who is my point of contact in case of an emergency during the tour?", answer: "Upon booking, you will be provided with a 24/7 dedicated support number and the contact details of your trip coordinator. Your driver will also be a key point of contact for any immediate on-ground assistance." }
];


const FaqPage: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Have questions? We have answers. Here are some of the most common queries from our travelers to help you plan your trip.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;