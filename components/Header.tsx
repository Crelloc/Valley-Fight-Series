import React from 'react';
import { Page } from '../types';
import { TICKETS_URL, PPV_URL, SHOPIFY_MERCH_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../constants';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
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

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; label: string }> = ({ href, children, label }) => (
   <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
      <span className="sr-only">{label}</span>
      {children}
    </a>
);


const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            {/* <div className="text-3xl font-bebas tracking-widest text-white">
              VALLEY <span className="text-red-600">FIGHT</span> SERIES
            </div> */}
            <img src="/logo.jpg" alt="Valley Fight Series Logo" width="150" height="150" />

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavButton page="previous-events" currentPage={currentPage} onClick={onNavigate}>Previous Events</NavButton>
            <NavButton page="fight-for-us" currentPage={currentPage} onClick={onNavigate}>Fight For Us</NavButton>
            <NavLink href={TICKETS_URL}>Buy Tickets</NavLink>
            <NavLink href={PPV_URL}>Buy PPV</NavLink>
            <NavLink href={SHOPIFY_MERCH_URL}>Merch</NavLink>
            <NavButton page="media-press" currentPage={currentPage} onClick={onNavigate}>Media/Press</NavButton>
            <NavButton page="contact-us" currentPage={currentPage} onClick={onNavigate}>Contact Us</NavButton>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
             <SocialIcon href={INSTAGRAM_URL} label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44s-1.44-.645-1.44-1.44.646-1.44 1.44-1.44 1.44.645 1.44 1.44z"/></svg>
             </SocialIcon>
             <SocialIcon href={YOUTUBE_URL} label="YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418ZM9.75 15.562V8.438L15.25 12 9.75 15.562Z" clipRule="evenodd" /></svg>
             </SocialIcon>
          </div>

           {/* Mobile Menu */}
           <div className="md:hidden">
            <select
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.startsWith('http')) {
                    window.open(value, '_blank');
                  } else {
                    onNavigate(value as Page)
                  }
                }}
                value={currentPage}
                className="bg-gray-900 text-white border border-gray-700 rounded p-2"
              >
                <option value="home">Home</option>
                <option value="previous-events">Previous Events</option>
                <option value="fight-for-us">Fight For Us</option>
                <option value={TICKETS_URL}>Buy Tickets</option>
                <option value={PPV_URL}>Buy PPV</option>
                <option value={SHOPIFY_MERCH_URL}>Merch</option>
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