import React, { useState, useEffect } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import FloatingVideoPlayer from '../components/FloatingVideoPlayer';
import { EVENT_DATE_TARGET, TICKETS_URL, PPV_URL, VENUE_MAPS_URL, VENUE_IFRAME_SRC, HERO_CAROUSEL_IMAGES } from '../constants';

interface HomePageProps {
  onOpenPpvModal: () => void;
}

const EventCard: React.FC<{ title: string; date: string; disciplines: string[] }> = ({ title, date, disciplines }) => (
  <div className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
    <h3 className="text-4xl font-bebas text-red-600 tracking-wider">{title}</h3>
    <p className="text-lg text-gray-300 font-bold mb-4">{date}</p>
    <ul className="space-y-2">
      {disciplines.map(d => (
        <li key={d} className="text-gray-200">
          <span className="text-red-600 mr-2">■</span> {d}
        </li>
      ))}
    </ul>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ onOpenPpvModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {HERO_CAROUSEL_IMAGES.map((imgSrc, index) => (
           <div 
              key={index}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-top transition-opacity duration-1000 ease-in-out"
              style={{ 
                backgroundImage: `url('${imgSrc}')`,
                opacity: index === currentImageIndex ? 1 : 0,
              }}
            ></div>
        ))}
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas text-white tracking-widest leading-none">
            VFS 23 & 24
          </h1>
          <h2 className="text-2xl md:text-4xl font-bebas text-red-600 tracking-wider mt-2 mb-8">
            NOV 21ST & 22ND
          </h2>
          
          <CountdownTimer target={EVENT_DATE_TARGET} />
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
            <a
              href={TICKETS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-block bg-red-600 text-white font-bebas text-3xl px-12 py-4 rounded-md tracking-wider hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
            >
              Buy Tickets
            </a>
            <button
              onClick={onOpenPpvModal}
              className="w-full sm:w-auto inline-block bg-transparent border-2 border-red-600 text-white font-bebas text-3xl px-12 py-3 rounded-md tracking-wider hover:bg-red-600 transition-colors duration-300 transform hover:scale-105"
            >
              Buy PPV
            </button>
          </div>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="bg-black py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bebas tracking-wider text-white">Two Nights of Action</h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              Valley Fight Series returns with back-to-back nights of combat sports, featuring professionals, amateurs, and the next generation of youth fighters.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <EventCard 
              title="VFS 23"
              date="Thursday, NOV 21ST"
              disciplines={["PRO/AM BOXING", "YOUTH BOXING", "PRO/AM MUAY THAI"]}
            />
            <EventCard 
              title="VFS 24"
              date="Friday, NOV 22ND"
              disciplines={["PRO/AM MMA", "PRO/AM BJJ", "YOUTH BJJ", "YOUTH PANKRATION"]}
            />
          </div>
           <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
            <a
              href={TICKETS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-block bg-red-600 text-white font-bebas text-3xl px-12 py-4 rounded-md tracking-wider hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
            >
              Buy Tickets
            </a>
            <button
              onClick={onOpenPpvModal}
              className="w-full sm:w-auto inline-block bg-gray-800 text-white font-bebas text-3xl px-12 py-3 rounded-md tracking-wider hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
            >
              Buy PPV
            </button>
          </div>
        </div>
      </div>
      
      {/* Venue Section */}
      <div id="venue" className="bg-gray-900 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bebas tracking-wider text-white">The Venue</h2>
            <p className="text-xl font-bebas text-gray-300 tracking-wider mt-2">
              Table Mountain Casino Resort
            </p>
            <p className="text-gray-400 mt-1">777 Jackpot Ln, Friant, CA 93626</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden shadow-2xl shadow-red-900/20 border border-gray-800 relative">
              <iframe
                src={VENUE_IFRAME_SRC}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Event Location Map"
              ></iframe>
            </div>
            <div className="mt-8 text-center">
              <a
                href={VENUE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white font-bebas text-2xl px-10 py-3 rounded-md tracking-wider hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
      <FloatingVideoPlayer />
    </>
  );
};

export default HomePage;