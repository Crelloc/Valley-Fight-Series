import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { TICKETS_URL, PPV_URL, SHOPIFY_MERCH_URL } from '../constants';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenPpvModal: () => void;
}

const NavButton: React.FC<{
  page: Page;
  currentPage: Page;
  onClick: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, onClick, children }) => (
  <button
    onClick={() => onClick(page)}
    className={`px-3 py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
      currentPage === page ? 'text-red-600' : 'text-white hover:text-red-500'
    }`}
  >
    {children}
  </button>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="px-3 py-2 text-sm text-white uppercase tracking-wider transition-colors duration-300 hover:text-red-500"
  >
    {children}
  </a>
);

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenPpvModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  const handleMobileNav = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const handleMobilePpv = () => {
    onOpenPpvModal();
    setIsMobileMenuOpen(false);
  };

  const MobileMenuItem: React.FC<{ onClick: () => void; isActive?: boolean; children: React.ReactNode }> = ({ onClick, isActive, children }) => (
    <button onClick={onClick} className={`block text-left w-full px-4 py-3 text-sm uppercase tracking-wider hover:bg-red-600 transition-colors ${isActive ? 'text-red-500 font-bold' : 'text-white'}`}>
      {children}
    </button>
  );

  const MobileMenuLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
     <a href={href} target="_blank" rel="noopener noreferrer" className="block text-left w-full px-4 py-3 text-sm text-white uppercase tracking-wider hover:bg-red-600 transition-colors">
      {children}
    </a>
  );

  return (
    <header className="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img src="/logo.jpg" alt="Valley Fight Series Logo" width="75" height="75" />

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <button 
                onClick={onOpenPpvModal}
                className="px-3 py-2 text-sm text-white uppercase tracking-wider transition-colors duration-300 hover:text-red-500"
            >
              Buy PPV
            </button>
            <NavLink href={SHOPIFY_MERCH_URL}>Merch</NavLink>
            <NavButton page="previous-events" currentPage={currentPage} onClick={onNavigate}>Previous Events</NavButton>
            <NavButton page="ring-girls" currentPage={currentPage} onClick={onNavigate}>Ring Girls</NavButton>
            <NavButton page="venue" currentPage={currentPage} onClick={onNavigate}>Venue</NavButton>
            <NavButton page="fight-for-us" currentPage={currentPage} onClick={onNavigate}>Fight For Us</NavButton>
            {/* <NavButton page="media-press" currentPage={currentPage} onClick={onNavigate}>Media/Press</NavButton>
            <NavButton page="contact-us" currentPage={currentPage} onClick={onNavigate}>Contact Us</NavButton> */}
          </div>

          {/* Call to Action */}
          <div className="hidden md:flex items-center">
            <a
              href={TICKETS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white font-bebas text-lg px-6 py-2 rounded-md tracking-wider hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
            >
              Buy Tickets
            </a>
          </div>

           {/* Mobile Menu */}
           <div className="md:hidden" ref={mobileMenuRef}>
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
            </button>

            {isMobileMenuOpen && (
              <div className="absolute top-20 right-4 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-2 max-h-[calc(100vh-7rem)] overflow-y-auto">
                <MobileMenuLink href={TICKETS_URL}>Buy Tickets</MobileMenuLink>
                <MobileMenuItem onClick={handleMobilePpv}>Buy PPV</MobileMenuItem>
                <MobileMenuLink href={SHOPIFY_MERCH_URL}>Merch</MobileMenuLink>
                <div className="border-t border-gray-700 my-2"></div>
                <MobileMenuItem onClick={() => handleMobileNav('home')} isActive={currentPage === 'home'}>Home</MobileMenuItem>
                <MobileMenuItem onClick={() => handleMobileNav('previous-events')} isActive={currentPage === 'previous-events'}>Previous Events</MobileMenuItem>
                <MobileMenuItem onClick={() => handleMobileNav('ring-girls')} isActive={currentPage === 'ring-girls'}>Ring Girls</MobileMenuItem>
                <MobileMenuItem onClick={() => handleMobileNav('venue')} isActive={currentPage === 'venue'}>Venue</MobileMenuItem>
                <MobileMenuItem onClick={() => handleMobileNav('fight-for-us')} isActive={currentPage === 'fight-for-us'}>Fight For Us</MobileMenuItem>
                <MobileMenuItem onClick={() => handleMobileNav('media-press')} isActive={currentPage === 'media-press'}>Media/Press</MobileMenuItem>
                <MobileMenuItem onClick={() => handleMobileNav('contact-us')} isActive={currentPage === 'contact-us'}>Contact Us</MobileMenuItem>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;