
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PreviousEventsPage from './pages/PreviousEventsPage';
import FightForUsPage from './pages/FightForUsPage';
import ContactUsPage from './pages/ContactUsPage';
import MediaPressPage from './pages/MediaPressPage';
import NoticeBanner from './components/NoticeBanner';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="bg-black text-gray-100 min-h-screen flex flex-col">
      <NoticeBanner />
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'previous-events' && <PreviousEventsPage />}
        {currentPage === 'fight-for-us' && <FightForUsPage />}
        {currentPage === 'contact-us' && <ContactUsPage />}
        {currentPage === 'media-press' && <MediaPressPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
