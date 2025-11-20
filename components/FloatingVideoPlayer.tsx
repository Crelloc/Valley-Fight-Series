
import React, { useState, useRef, useEffect } from 'react';

type PlayerState = 'widget' | 'expanded' | 'button';

const FloatingVideoPlayer: React.FC = () => {
  const [playerState, setPlayerState] = useState<PlayerState>('widget');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Automatically mute/unmute based on state
  // When minimized (widget): Muted, Autoplay, Loop
  // When expanded: Unmuted, Controls enabled
  // When button: Video is essentially hidden/paused
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (playerState === 'expanded') {
        video.muted = false;
        video.controls = true;
        video.play().catch(e => console.log("Play failed", e));
      } else if (playerState === 'widget') {
        video.muted = true;
        video.controls = false;
        // Ensure we are playing if we go back to widget
        video.play().catch(e => console.log("Play failed", e));
      } else {
        // Button state
        video.pause();
      }
    }
  }, [playerState]);

  const handleExpand = () => {
    setPlayerState('expanded');
  };

  const handleMinimizeToWidget = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPlayerState('widget');
  };

  const handleCloseWidgetToButton = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayerState('button');
  };

  if (playerState === 'button') {
    return (
      <button
        onClick={handleExpand}
        className="fixed bottom-4 right-4 z-[60] bg-red-600 text-white font-bebas text-xl px-6 py-3 rounded-full shadow-lg shadow-red-900/40 hover:bg-red-700 hover:scale-105 transition-all duration-300 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Fight Preview
      </button>
    );
  }

  return (
    <>
       {/* Backdrop for maximized view - clicking background minimizes back to widget */}
      <div 
        aria-hidden="true"
        className={`fixed inset-0 z-[59] bg-black/80 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${playerState === 'expanded' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={handleMinimizeToWidget} 
      />
      
      <div
        className={`fixed z-[60] transition-all duration-500 ease-in-out ${
          playerState === 'expanded'
            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-[90vw] max-h-[90vh] shadow-2xl shadow-red-900/40'
            : 'bottom-4 right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg shadow-red-600/50 cursor-pointer hover:scale-105'
        }`}
        onClick={playerState === 'widget' ? handleExpand : undefined}
      >
        <div className={`relative w-full h-full bg-black overflow-hidden ${playerState === 'expanded' ? 'rounded-lg' : 'rounded-full border-2 border-red-600'}`}>
            <video
            ref={videoRef}
            src="/anthony-promo.mp4"
            autoPlay
            muted={playerState !== 'expanded'}
            loop
            playsInline
            controls={playerState === 'expanded'}
            className={`block w-full h-full ${playerState === 'expanded' ? 'object-contain max-h-[90vh]' : 'object-cover'}`}
            />

            {/* Widget Mode Overlays */}
            {playerState === 'widget' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                    <div className="bg-red-600/80 rounded-full p-2 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <span className="text-white font-bebas tracking-wider text-[10px] sm:text-xs drop-shadow-md">Preview</span>
                </div>
            )}

            {/* Expanded Mode Minimize Button - switches to Widget mode */}
            {playerState === 'expanded' && (
                <button
                onClick={handleMinimizeToWidget}
                className="absolute top-2 right-2 z-50 bg-black/60 rounded-full p-2 text-white hover:bg-red-600 transition-all duration-300"
                aria-label="Minimize video"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            )}
        </div>

        {/* Widget Close Button - Moved OUTSIDE inner container to stay visible on circle edge */}
        {playerState === 'widget' && (
             <button
                onClick={handleCloseWidgetToButton}
                className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 z-50 bg-gray-900 text-white rounded-full p-1.5 hover:bg-red-600 border border-gray-700 transition-all duration-300 shadow-md"
                aria-label="Close preview widget"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        )}

      </div>
    </>
  );
};

export default FloatingVideoPlayer;
