import React from 'react';
import { YOUTUBE_PLAYLISTS } from '../constants';

const YouTubeIcon: React.FC = () => (
  <svg className="w-7 h-7 inline-block ml-2 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418ZM9.75 15.562V8.438L15.25 12 9.75 15.562Z" clipRule="evenodd" /></svg>
);

const PpvIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 inline-block ml-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
);

const PreviousEventsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bebas tracking-wider text-white">VFS Fight Library</h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Relive the best moments from past Valley Fight Series events. Select an event playlist to watch all the fights.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
        {YOUTUBE_PLAYLISTS.map(playlist => {
          if (!playlist.id) {
            // Case 1: ID is blank, greyed out
            return (
              <div key={playlist.name} className="flex flex-col opacity-50">
                <div className="mb-4 text-center">
                  <h3 className="text-3xl font-bebas tracking-wider text-gray-500 inline-block">
                    {playlist.name}
                  </h3>
                </div>
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl shadow-red-900/10 border border-gray-800 aspect-w-16 aspect-h-9 relative flex items-center justify-center">
                  <p className="text-gray-400 font-bold">Video Not Available</p>
                </div>
              </div>
            );
          } else if (playlist.id === 'PPV') {
            // Case 2: ID is 'PPV'
            return (
              <div key={playlist.name} className="flex flex-col">
                <a
                  href={playlist.embedSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 text-center group"
                >
                  <h3 className="text-3xl font-bebas tracking-wider text-white group-hover:text-red-600 transition-colors duration-300 inline-flex items-center">
                    {playlist.name} <PpvIcon />
                  </h3>
                </a>
                <div className="bg-black rounded-lg overflow-hidden shadow-2xl shadow-red-900/20 border border-gray-800 aspect-w-16 aspect-h-9 relative">
                  <iframe
                    src={playlist.embedSrc}
                    title={`Pay-Per-View for ${playlist.name}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full absolute top-0 left-0"
                  ></iframe>
                </div>
              </div>
            );
          } else {
            // Case 3: YouTube ID
            return (
              <div key={playlist.id} className="flex flex-col">
                <a
                  href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 text-center group"
                >
                  <h3 className="text-3xl font-bebas tracking-wider text-white group-hover:text-red-600 transition-colors duration-300 inline-flex items-center">
                    {playlist.name} <YouTubeIcon />
                  </h3>
                </a>
                <div className="bg-black rounded-lg overflow-hidden shadow-2xl shadow-red-900/20 border border-gray-800 aspect-w-16 aspect-h-9 relative">
                  <iframe
                    src={playlist.embedSrc}
                    title={`YouTube video player for ${playlist.name}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full absolute top-0 left-0"
                  ></iframe>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default PreviousEventsPage;
