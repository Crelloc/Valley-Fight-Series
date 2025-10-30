
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PreviousEventsPage from './pages/PreviousEventsPage';
import FightForUsPage from './pages/FightForUsPage';
import ContactUsPage from './pages/ContactUsPage';
import MediaPressPage from './pages/MediaPressPage';
import RingGirlsPage from './pages/RingGirlsPage';
import NoticeBanner from './components/NoticeBanner';
import PpvModal from './components/PpvModal';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isPpvModalOpen, setIsPpvModalOpen] = useState(false);
  const [scrollToId, setScrollToId] = useState<string | null>(null);

  const handleNavigate = (page: Page) => {
    if (page === 'venue') {
      setCurrentPage('home');
      setScrollToId('venue');
    } else {
      setCurrentPage(page);
      window.scrollTo(0, 0); // Scroll to top on normal page change
    }
  };

  useEffect(() => {
    if (scrollToId && currentPage === 'home') {
      // A small timeout allows the page component to render before we try to scroll
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setScrollToId(null); // Reset after scrolling
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scrollToId, currentPage]);

  const handleOpenPpvModal = () => setIsPpvModalOpen(true);
  const handleClosePpvModal = () => setIsPpvModalOpen(false);

  return (
    <div className="bg-black text-gray-100 min-h-screen flex flex-col">
      <NoticeBanner />
      <Header currentPage={currentPage} onNavigate={handleNavigate} onOpenPpvModal={handleOpenPpvModal} />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onOpenPpvModal={handleOpenPpvModal} />}
        {currentPage === 'previous-events' && <PreviousEventsPage />}
        {currentPage === 'fight-for-us' && <FightForUsPage />}
        {currentPage === 'contact-us' && <ContactUsPage />}
        {currentPage === 'media-press' && <MediaPressPage />}
        {currentPage === 'ring-girls' && <RingGirlsPage />}
      </main>
      <Footer currentPage={currentPage} onNavigate={handleNavigate} onOpenPpvModal={handleOpenPpvModal} />
      <PpvModal isOpen={isPpvModalOpen} onClose={handleClosePpvModal} />
    </div>
  );
};

export default App;