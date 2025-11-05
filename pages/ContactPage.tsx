import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900">Get in Touch</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Your royal journey awaits. Contact us today for a free consultation and let us craft your personalized Rajasthan adventure.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <form action="https://formspree.io/pavans3057@gmail.com" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]" 
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]" 
                  required 
                />
              </div>
              <div className="mb-6">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]" 
                  required 
                />
              </div>
              <div className="mb-6">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows={5} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]" 
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-[#003366] hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 w-full">
                Submit Inquiry
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              This form is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </div>

          {/* Contact Info & Why Choose Us */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-[#003366] mb-4">Contact Information</h3>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center"><span className="text-[#003366] mr-3">📞</span> Toll-Free: 1-800-ROYAL-TRIP</li>
                    <li className="flex items-center"><span className="text-[#003366] mr-3">✉️</span> Email: info@sandandviews.com</li>
                    <li className="flex items-center"><span className="text-[#003366] mr-3">📍</span> Address: 123 Fort Road, Jaipur, Rajasthan</li>
                </ul>
            </div>
             <div className="bg-[#003366] text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Why Choose Sand and Views?</h3>
                <ul className="space-y-3">
                    <li className="flex items-start"><span className="font-bold text-[#D4AF37] mr-2 mt-1">✓</span><div><strong>Expert Local Knowledge:</strong> Decades of experience crafting perfect Rajasthani itineraries.</div></li>
                    <li className="flex items-start"><span className="font-bold text-[#D4AF37] mr-2 mt-1">✓</span><div><strong>24/7 Support:</strong> Dedicated on-ground support for a seamless, worry-free trip.</div></li>
                    <li className="flex items-start"><span className="font-bold text-[#D4AF37] mr-2 mt-1">✓</span><div><strong>Customized Packages:</strong> We tailor every itinerary to your pace, preferences, and budget.</div></li>
                    <li className="flex items-start"><span className="font-bold text-[#D4AF37] mr-2 mt-1">✓</span><div><strong>Authentic Experiences:</strong> We connect you with local artisans, chefs, and performers.</div></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;