import React from 'react';

const MediaPressPage: React.FC = () => {
  return (
    <div className="bg-black py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bebas tracking-wider text-white">Media & Press</h2>
          <p className="text-gray-400 mt-2 max-w-3xl mx-auto">
            Welcome to the official media hub for Valley Fight Series. Find resources, contact information, and media credential applications here.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-900/50 border border-gray-700 rounded-lg p-8 space-y-8 text-center">
            <div>
                <h3 className="text-3xl font-bebas text-red-600 tracking-wider">Media Inquiries</h3>
                <p className="text-gray-300 mt-2">
                    For all media-related questions, interviews, and credential requests, please contact our media relations team.
                </p>
                <a 
                    href="mailto:media@valleyfightseries.com" 
                    className="text-xl font-bold text-white hover:text-red-500 transition-colors duration-300 mt-2 inline-block"
                >
                    media@valleyfightseries.com
                </a>
            </div>

            <hr className="border-gray-700" />
            
            <div>
                <h3 className="text-3xl font-bebas text-red-600 tracking-wider">Press Kit</h3>
                 <p className="text-gray-300 mt-2 mb-6">
                    Download our official press kit for logos, brand guidelines, and key information about Valley Fight Series.
                </p>
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert('Press kit coming soon!'); }}
                    className="inline-block bg-red-600 text-white font-bebas text-2xl px-10 py-3 rounded-md tracking-wider hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
                >
                    Download Press Kit
                </a>
            </div>
             <hr className="border-gray-700" />

            <div>
                <h3 className="text-3xl font-bebas text-red-600 tracking-wider">Event Credentials</h3>
                 <p className="text-gray-300 mt-2">
                    Applications for media credentials for upcoming events will be available here. Please check back closer to the event date.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPressPage;
