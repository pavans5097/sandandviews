import React from 'react';
import { Link } from 'react-router-dom';
import { FortIcon, FacebookIcon, InstagramIcon, TwitterIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
              <FortIcon />
              <span className="font-['Playfair_Display']">Sand and Views</span>
            </Link>
            <p className="mt-4 text-gray-300 text-sm">
              Your trusted partner in exploring the royal heritage of Rajasthan. Dream it. Book it. Live it.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-white transition"><FacebookIcon /></a>
              <a href="#" className="text-gray-300 hover:text-white transition"><InstagramIcon /></a>
              <a href="#" className="text-gray-300 hover:text-white transition"><TwitterIcon /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/destinations" className="hover:text-[#D4AF37] transition text-sm">Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-[#D4AF37] transition text-sm">Packages</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D4AF37] transition text-sm">Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-[#D4AF37] transition text-sm">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>Toll-Free: 1-800-ROYAL-TRIP</li>
              <li>Email: info@sandandviews.com</li>
              <li>Address: 123 Fort Road, Jaipur, Rajasthan</li>
            </ul>
          </div>
          
          <div>
             <h4 className="text-lg font-semibold tracking-wider uppercase">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-[#D4AF37] transition text-sm">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition text-sm">Terms of Service</a></li>
            </ul>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sand and Views. All Rights Reserved. Crafted with ❤️ for the Land of Kings.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;