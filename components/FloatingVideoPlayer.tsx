import React, { useState, useRef, useEffect } from 'react';

const FloatingVideoPlayer: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mute/unmute video based on expanded state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isExpanded;
    }
  }, [isExpanded]);

  const handleContainerClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else if (!isMaximized) {
      setIsMaximized(true);
    }
  };
  
  const handleMinimizeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMaximized) {
      setIsMaximized(false); // From centered modal back to corner view
    } else if (isExpanded) {
      setIsExpanded(false); // From corner view back to circle
    }
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
  };

  if (isDismissed) {
    return null;
  }

  return (
    <>
       {/* Backdrop for maximized view */}
      <div 
        aria-hidden="true"
        className={`fixed inset-0 z-[59] bg-black/80 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${isMaximized ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleMinimizeClick} 
      />
      <div
        ref={containerRef}
        className={`fixed z-[60] overflow-hidden shadow-2xl shadow-red-900/40 border-2 border-red-600 transition-all duration-500 ease-in-out ${
          isMaximized
            ? 'w-[90vw] max-w-4xl h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg cursor-default'
            : isExpanded
            ? 'w-80 h-auto sm:w-[480px] bottom-5 right-5 rounded-lg cursor-pointer'
            : 'w-32 h-32 sm:w-40 sm:h-40 bottom-5 right-5 rounded-full cursor-pointer'
        }`}
        onClick={handleContainerClick}
      >
        <video
          ref={videoRef}
          src="/anthony-promo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          controls={isMaximized} // Only show native controls when fully maximized
        />
        
        {/* Overlay and Icons for minimized state */}
        {!isExpanded && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
            <div className="text-white text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/80 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <p className="text-xs font-bebas tracking-widest mt-1">FIGHT<br/>PREVIEW</p>
            </div>
          </div>
        )}

        {/* Dismiss Button (always visible) */}
        <button
          onClick={handleDismiss}
          className="absolute top-1 right-1 z-20 bg-black/50 rounded-full p-1 text-white hover:bg-red-600 transition-colors"
          aria-label="Dismiss video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Minimize Button (only on expanded or maximized) */}
        {isExpanded && (
           <button
              onClick={handleMinimizeClick}
              className="absolute top-1 left-1 z-20 bg-black/50 rounded-full p-1 text-white hover:bg-red-600 transition-colors"
              aria-label={isMaximized ? "Exit fullscreen" : "Minimize video"}
            >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                { isMaximized 
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4m12 4V4h-4M4 16v4h4m12-4v4h-4" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5" />
                }
              </svg>
           </button>
        )}
      </div>
    </>
  );
};

export default FloatingVideoPlayer;