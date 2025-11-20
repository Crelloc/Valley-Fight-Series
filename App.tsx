import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PreviousEventsPage from './pages/PreviousEventsPage';
import FightForUsPage from './pages/FightForUsPage';
import ContactUsPage from './pages/ContactUsPage';
import MediaPressPage from './pages/MediaPressPage';
import RingGirlsPage from './pages/RingGirlsPage';
// import TicketsPage from './pages/TicketsPage';
import NoticeBanner from './components/NoticeBanner';
import PpvModal from './components/PpvModal';

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.pathname);
  const [isPpvModalOpen, setIsPpvModalOpen] = useState(false);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.origin === window.location.origin && anchor.target !== '_blank' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        const newPath = anchor.pathname;
        if (newPath !== window.location.pathname) {
          window.history.pushState({ path: newPath }, '', newPath);
          setPath(newPath);
        } else if (newPath === '/venue') {
          // Handle clicking venue link when already on homepage
          const element = document.getElementById('venue');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);

    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    if (path === '/buy-ppv') {
      setIsPpvModalOpen(true);
    } else {
      setIsPpvModalOpen(false);
    }
    
    if (path === '/venue') {
      // If the user navigates to /venue, render the homepage and scroll down.
      // We replace the URL with '/' so the URL bar is clean.
      if (window.location.pathname !== '/') {
        window.history.replaceState({ path: '/' }, '', '/');
      }

      const timer = setTimeout(() => {
        const element = document.getElementById('venue');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // A small delay ensures the HomePage component is rendered
      return () => clearTimeout(timer);
    }

    // For other "real" pages, scroll to top. Exclude modals or scroll-to links.
    if (path !== '/buy-ppv') {
       window.scrollTo(0, 0);
    }
  }, [path]);

  const handleOpenPpvModal = () => {
    if (window.location.pathname !== '/buy-ppv') {
      window.history.pushState({}, '', '/buy-ppv');
    }
    setPath('/buy-ppv');
  };

  const handleClosePpvModal = () => {
    setIsPpvModalOpen(false);
    if (window.location.pathname === '/buy-ppv') {
      window.history.back();
    }
  };

  const renderPage = () => {
    // Render the HomePage as the base for the /buy-ppv modal and /venue scroll link
    const effectivePath = (path === '/buy-ppv' || path === '/venue') ? '/' : path;
    switch (effectivePath) {
      case '/':
        return <HomePage onOpenPpvModal={handleOpenPpvModal} />;
      case '/previous-events':
        return <PreviousEventsPage />;
      // case '/tickets':
      //   return <TicketsPage />;
      case '/fight-for-us':
        return <FightForUsPage />;
      case '/contact-us':
        return <ContactUsPage />;
      case '/media-press':
        return <MediaPressPage />;
      case '/ring-girls':
        return <RingGirlsPage />;
      default:
        // Fallback to home page for any unknown routes
        return <HomePage onOpenPpvModal={handleOpenPpvModal} />;
    }
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen flex flex-col">
      <NoticeBanner />
      <Header currentPath={path} onOpenPpvModal={handleOpenPpvModal} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onOpenPpvModal={handleOpenPpvModal} />
      <PpvModal isOpen={isPpvModalOpen} onClose={handleClosePpvModal} />
    </div>
  );
};

export default App;