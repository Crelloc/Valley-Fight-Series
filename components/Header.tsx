import React from 'react';
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
           <div className="md:hidden">
            <select
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === 'open_ppv_modal') {
                    onOpenPpvModal();
                  } else if (value.startsWith('http')) {
                    window.open(value, '_blank');
                  } else {
                    onNavigate(value as Page)
                  }
                }}
                value={currentPage}
                className="bg-gray-900 text-white border border-gray-700 rounded p-2"
              >
                <option value="home">Home</option>
                <option value={TICKETS_URL}>Buy Tickets</option>
                <option value="open_ppv_modal">Buy PPV</option>
                <option value={SHOPIFY_MERCH_URL}>Merch</option>
                <option value="previous-events">Previous Events</option>
                <option value="ring-girls">Ring Girls</option>
                <option value="venue">Venue</option>
                <option value="fight-for-us">Fight For Us</option>
                <option value="media-press">Media/Press</option>
                <option value="contact-us">Contact Us</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;