import React from 'react';

const images = [
  { src: 'https://cdn.wallpapersafari.com/73/52/39t0W4.jpg', alt: 'Amber Fort, Jaipur' },
  { src: 'https://as2.ftcdn.net/jpg/02/57/94/47/1000_F_257944720_3Dzk4FwOWBl5O5KZSBaKHyUXpOm7x4jr.jpg', alt: 'Hawa Mahal - Palace of Winds' },
  { src: 'https://s7ap1.scene7.com/is/image/incredibleindia/mehrangarh-fort-jodhpur-rajasthan-hero?qlt=82&ts=1726660826646', alt: 'Mehrangarh Fort, Jodhpur' },
  { src: 'https://rajwadadesertcamp.com/wp-content/uploads/2024/04/Jaisalmer-fort-1024x683-1-1024x656.webp', alt: 'Jaisalmer Fort - Golden City' },
  { src: 'https://s7ap1.scene7.com/is/image/incredibleindia/city-palace-udaipur-rajasthan-1-new-attr-hero?qlt=82&ts=1742171011440', alt: 'City Palace, Udaipur' },
  { src: 'https://as1.ftcdn.net/jpg/03/65/53/24/1000_F_365532463_3Wh4GNZMM5ODyMxIp7avyQQBc2OCzUas.jpg', alt: 'Lake Pichola, Udaipur' },
  { src: 'https://static.toiimg.com/photo/53317860.cms', alt: 'Sam Sand Dunes - Desert Safari' },
  { src: 'https://foundation.rajasthan.gov.in/images/dance-7.jpg', alt: 'Folk Dance & Culture' },
];

const GalleryPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900">Glimpses of Rajasthan</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            A picture is worth a thousand words. Let these images transport you to the heart of royal India and inspire your next adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 cursor-pointer" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;