import React, { useState, useEffect, useRef } from 'react';
import { TICKETS_URL } from '../constants';
import ShopifyMerchLink from './ShopifyMerchLink';

interface HeaderProps {
  currentPath: string;
  onOpenPpvModal: () => void;
}

const NavLink: React.FC<{
  href: string;
  currentPath: string;
  children: React.ReactNode;
}> = ({ href, currentPath, children }) => (
  <a
    href={href}
    className={`px-3 py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
      currentPath === href ? 'text-red-600' : 'text-white hover:text-red-500'
    }`}
  >
    {children}
  </a>
);

const Header: React.FC<HeaderProps> = ({ currentPath, onOpenPpvModal }) => {
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

  const handleMobilePpv = () => {
    onOpenPpvModal();
    setIsMobileMenuOpen(false);
  };

  const MobileMenuItem: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button onClick={onClick} className={`block text-left w-full px-4 py-3 text-sm uppercase tracking-wider hover:bg-red-600 transition-colors text-white`}>
      {children}
    </button>
  );

  const MobileMenuLink: React.FC<{ href: string; isActive?: boolean; children: React.ReactNode; onClick?: () => void; external?: boolean; }> = ({ href, isActive, children, onClick, external = false }) => (
     <a href={href} target={external ? '_blank' : '_self'} rel={external ? 'noopener noreferrer' : ''} onClick={onClick} className={`block text-left w-full px-4 py-3 text-sm uppercase tracking-wider hover:bg-red-600 transition-colors ${isActive ? 'text-red-500 font-bold' : 'text-white'}`}>
      {children}
    </a>
  );

  return (
    <header className="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/">
            <img src="/logo.jpg" alt="Valley Fight Series Logo" width="75" height="75" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <button 
                onClick={onOpenPpvModal}
                className="px-3 py-2 text-sm text-white uppercase tracking-wider transition-colors duration-300 hover:text-red-500"
            >
              Buy PPV
            </button>
            <ShopifyMerchLink className="px-3 py-2 text-sm text-white uppercase tracking-wider transition-colors duration-300 hover:text-red-500">
              Merch
            </ShopifyMerchLink>
            <NavLink href="/previous-events" currentPath={currentPath}>Previous Events</NavLink>
            <NavLink href="/ring-girls" currentPath={currentPath}>Ring Girls</NavLink>
            <NavLink href="/venue" currentPath={currentPath}>Venue</NavLink>
            <NavLink href="/fight-for-us" currentPath={currentPath}>Fight For Us</NavLink>
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
                <MobileMenuLink href={TICKETS_URL} external onClick={() => setIsMobileMenuOpen(false)}>Buy Tickets</MobileMenuLink>
                <MobileMenuItem onClick={handleMobilePpv}>Buy PPV</MobileMenuItem>
                <ShopifyMerchLink className="block text-left w-full px-4 py-3 text-sm text-white uppercase tracking-wider hover:bg-red-600 transition-colors">
                  Merch
                </ShopifyMerchLink>
                <div className="border-t border-gray-700 my-2"></div>
                <MobileMenuLink href="/" isActive={currentPath === '/'} onClick={() => setIsMobileMenuOpen(false)}>Home</MobileMenuLink>
                <MobileMenuLink href="/previous-events" isActive={currentPath === '/previous-events'} onClick={() => setIsMobileMenuOpen(false)}>Previous Events</MobileMenuLink>
                <MobileMenuLink href="/ring-girls" isActive={currentPath === '/ring-girls'} onClick={() => setIsMobileMenuOpen(false)}>Ring Girls</MobileMenuLink>
                <MobileMenuLink href="/venue" isActive={currentPath === '/venue'} onClick={() => setIsMobileMenuOpen(false)}>Venue</MobileMenuLink>
                <MobileMenuLink href="/fight-for-us" isActive={currentPath === '/fight-for-us'} onClick={() => setIsMobileMenuOpen(false)}>Fight For Us</MobileMenuLink>
                <MobileMenuLink href="/media-press" isActive={currentPath === '/media-press'} onClick={() => setIsMobileMenuOpen(false)}>Media/Press</MobileMenuLink>
                <MobileMenuLink href="/contact-us" isActive={currentPath === '/contact-us'} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</MobileMenuLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
