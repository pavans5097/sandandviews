import React from 'react';

const images = [
  { src: 'https://i.imgur.com/K2yB4Wl.jpeg', alt: 'Amber Fort on a sunny day with a lake in the foreground' },
  { src: 'https://i.imgur.com/5SDEzfg.jpeg', alt: 'Udaipur City Palace illuminated at dusk, reflecting on the water' },
  { src: 'https://i.imgur.com/tX2Gq3y.jpeg', alt: 'Jaipur city street brightly lit with festive decorations at night' },
  { src: 'https://i.imgur.com/c4pS5Wl.jpeg', alt: 'Rajasthani folk dancers in colorful traditional attire performing outdoors' },
  { src: 'https://i.imgur.com/iC5nJba.jpeg', alt: 'Hawa Mahal in Jaipur with a dramatic sunset sky' },
  { src: 'https://i.imgur.com/w1iA2mG.jpeg', alt: 'Jaisalmer Fort glowing with golden lights at twilight' },
  { src: 'https://i.imgur.com/w8q3J9Z.jpeg', alt: 'Panoramic view of Udaipur city and Lake Pichola during the day' },
  { src: 'https://i.imgur.com/s4a2H0J.jpeg', alt: 'Mehrangarh Fort overlooking the city of Jodhpur at sunset' },
  { src: 'https://i.imgur.com/t3B2o0l.jpeg', alt: 'Jaisalmer Fort illuminated against a clear night sky' },
  { src: 'https://i.imgur.com/L7R5k2U.jpeg', alt: 'View of Mehrangarh Fort and the Blue City of Jodhpur at dusk' },
  { src: 'https://i.imgur.com/f0B27qS.jpeg', alt: 'Another view of Amber Fort showing the winding path up the hill' },
  { src: 'https://i.imgur.com/w0d4t6F.jpeg', alt: 'A collage of four iconic Rajasthan scenes: Amber Fort, musicians on a boat, folk dancers, and Hawa Mahal' },
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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