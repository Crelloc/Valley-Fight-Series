import React, { useRef, useState } from 'react';
import { RING_GIRLS_HERO_IMAGE, RING_GIRLS_DATA, TICKETS_URL } from '../constants';
import { RingGirl } from '../types';

const RingGirlCard: React.FC<{ girl: RingGirl }> = ({ girl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const TRUNCATE_LIMIT = 120;
  const isLongBio = girl.bio.length > TRUNCATE_LIMIT;

  return (
    <div className="bg-gray-900/70 border border-gray-700 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="aspect-[3/4] w-full">
        <img src={girl.image} alt={girl.name} className="object-cover w-full h-full" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-3xl font-bebas text-red-600 tracking-wider">{girl.name}</h3>
        
        <p className="text-gray-400 mt-2 text-sm mb-2 flex-grow">
          {isLongBio && !isExpanded
            ? `${girl.bio.substring(0, TRUNCATE_LIMIT)}...`
            : girl.bio}
        </p>

        {isLongBio && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-red-500 hover:text-red-400 text-sm font-bold self-start mb-4"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
        
        <a 
          href={girl.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 transition-colors mt-auto self-start"
          aria-label={`Follow ${girl.name} on Instagram`}
        >
          <span className="sr-only">Follow on Instagram</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919 4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44s-1.44-.645-1.44-1.44.646-1.44 1.44-1.44 1.44.645 1.44 1.44z"/></svg>
        </a>
      </div>
    </div>
  );
};


const RingGirlsPage: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  const handleViewGirlsClick = () => {
    gridRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-top"
          style={{ backgroundImage: `url('${RING_GIRLS_HERO_IMAGE}')` }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas text-white tracking-widest leading-none">
            Meet The VFS Ring Girls
          </h1>
          <h2 className="text-2xl md:text-4xl font-bebas text-red-600 tracking-wider mt-2 mb-8">
            The official faces of Valley Fight Series
          </h2>
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleViewGirlsClick}
              className="w-full sm:w-auto inline-block bg-transparent border-2 border-white text-white font-bebas text-3xl px-12 py-3 rounded-md tracking-wider hover:bg-white hover:text-black transition-colors duration-300 transform hover:scale-105"
            >
              View Ring Girls
            </button>
          </div>
        </div>
      </div>

      {/* Ring Girls Grid Section */}
      <div ref={gridRef} className="bg-black py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {RING_GIRLS_DATA.map(girl => (
              <RingGirlCard key={girl.name} girl={girl} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bebas tracking-wider text-white">Ready To See The Ring Girls Live?</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            The only thing better than seeing them here is seeing them in person. Buy your tickets for the next Valley Fight Series event and don't miss out!
          </p>
          <div className="mt-8">
            <a
              href={TICKETS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white font-bebas text-3xl px-12 py-4 rounded-md tracking-wider hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
            >
              Buy Tickets
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RingGirlsPage;