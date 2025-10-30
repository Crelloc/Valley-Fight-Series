import React, { useState } from 'react';

const NoticeBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-yellow-400 text-black p-3 text-center text-sm relative z-[100]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <span>
          Unofficial website for Valley Fight Series by{' '}
          <a
            href="https://turner.framer.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-gray-800 transition-colors"
          >
            Thomas
          </a>
          .{' '}Go to{' '}
          <a
            href="https://www.valleyfightseries.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-gray-800 transition-colors"
          >
            https://www.valleyfightseries.com/
          </a>
          {' '}for the official website.
        </span>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-black hover:text-gray-700"
          aria-label="Dismiss notice"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NoticeBanner;
