
import React from 'react';
import { YOUTUBE_URL, INSTAGRAM_URL, TICKETS_URL, PPV_URL, SHOPIFY_MERCH_URL } from '../constants';
import { Page } from '../types';

interface FooterProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenPpvModal: () => void;
}

const FooterLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button onClick={onClick} className="text-gray-400 hover:text-white transition-colors duration-300 text-center md:text-left">
        {children}
    </button>
);

const FooterExtLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPpvModal }) => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1: Brand & Copyright */}
          <div>
            <button onClick={() => onNavigate('home')} className="text-2xl font-bebas tracking-widest text-white inline-block">
              VALLEY <span className="text-red-600">FIGHT</span> SERIES
            </button>
            <p className="text-gray-500 text-sm mt-2">
              &copy; {new Date().getFullYear()} Valley Fight Series. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Created by <a href="https://turner.framer.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Thomas</a>.
            </p>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-bebas text-lg tracking-wider text-white uppercase mb-4">Navigation</h3>
            <div className="flex flex-col space-y-2 items-center md:items-start">
                <FooterLink onClick={() => onNavigate('previous-events')}>Previous Events</FooterLink>
                <FooterLink onClick={() => onNavigate('ring-girls')}>Ring Girls</FooterLink>
                <FooterLink onClick={() => onNavigate('venue')}>Venue</FooterLink>
                <FooterLink onClick={() => onNavigate('fight-for-us')}>Fight For Us</FooterLink>
                <FooterLink onClick={() => onNavigate('media-press')}>Media/Press</FooterLink>
                <FooterLink onClick={() => onNavigate('contact-us')}>Contact Us</FooterLink>
            </div>
          </div>

          {/* Column 3: Actions & Social */}
          <div>
            <h3 className="font-bebas text-lg tracking-wider text-white uppercase mb-4">Actions</h3>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <FooterExtLink href={TICKETS_URL}>Buy Tickets</FooterExtLink>
              <FooterLink onClick={onOpenPpvModal}>Buy PPV</FooterLink>
              <FooterExtLink href={SHOPIFY_MERCH_URL}>Merch</FooterExtLink>
              <FooterLink onClick={() => onNavigate('venue')}>Directions To Venue</FooterLink>
            </div>
             <div className="flex items-center space-x-6 justify-center md:justify-start mt-6">
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418ZM9.75 15.562V8.438L15.25 12 9.75 15.562Z" clipRule="evenodd" /></svg>
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919 4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44s-1.44-.645-1.44-1.44.646-1.44 1.44-1.44 1.44.645 1.44 1.44z"/></svg>
                </a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;