import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import PackagesPage from './pages/PackagesPage';
import GalleryPage from './pages/GalleryPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import ItineraryPage from './pages/ItineraryPage';
import PartnersPage from './pages/PartnersPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-gray-50 text-slate-800 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/journey-map" element={<ItineraryPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/partners" element={<PartnersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;