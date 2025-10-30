import React, { useState, useEffect } from 'react';
import { TICKETS_URL, PPV_URL, RING_GIRLS_DATA, HERO_CAROUSEL_IMAGES } from '../constants';

interface PpvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PpvModal: React.FC<PpvModalProps> = ({ isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ringGirlImages = RING_GIRLS_DATA.map(girl => girl.image);
  const modalImages = [...HERO_CAROUSEL_IMAGES, ...ringGirlImages];

  useEffect(() => {
    if (isOpen) {
      const timer = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % modalImages.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(timer);
    }
  }, [isOpen, modalImages.length]);
  
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose} aria-hidden="true"></div>
      
      {/* Modal Content */}
      <div className="relative z-10 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl shadow-red-900/30 w-[90vw] max-w-4xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 bg-black/50 rounded-full p-1.5 text-white hover:bg-red-600 transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Text and CTAs */}
          <div className="p-8 sm:p-12 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-bebas text-white tracking-wider">
              Experience it Live and <span className="text-red-600">in person!</span>
            </h2>
            <p className="text-gray-400 mt-4 mb-8">
              Experience the electrifying atmosphere of a live VFS event. Get your tickets now and feel the action up close.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href={TICKETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full sm:w-auto inline-block bg-red-600 text-white font-bebas text-2xl px-8 py-3 rounded-md tracking-wider hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
              >
                Buy Tickets
              </a>
              <a
                href={PPV_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full sm:w-auto inline-block bg-transparent border-2 border-gray-600 text-gray-300 font-bebas text-2xl px-8 py-2.5 rounded-md tracking-wider hover:bg-gray-800 hover:border-gray-800 transition-colors duration-300"
              >
                Continue to PPV
              </a>
            </div>
          </div>

          {/* Right Side: Image Carousel */}
          <div className="relative h-64 md:h-full min-h-[300px] bg-black">
            {modalImages.map((imgSrc, index) => (
              <div 
                key={index}
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                style={{ 
                  backgroundImage: `url('${imgSrc}')`,
                  opacity: index === currentImageIndex ? 1 : 0,
                }}
                aria-hidden={index !== currentImageIndex}
              ></div>
            ))}
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent md:bg-gradient-to-r md:from-gray-900 md:via-gray-900/70 md:to-transparent" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PpvModal;