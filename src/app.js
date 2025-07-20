import React, { useState, useEffect, createContext } from 'react';

// Import components
import Header from './components/Header.js';
import Footer from './components/Footer.js';

// Import pages
import HomePage from './pages/HomePage.js';
import WhoWeArePage from './pages/WhoWeArePage.js';
import WhereWeStandPage from './pages/WhereWeStandPage.js';
import ShopPage from './pages/ShopPage.js';
import PartyCharterPage from './pages/PartyCharterPage.js';
import PartyPlatformPage from './pages/PartyPlatformPage.js';
import LeadershipPage from './pages/LeadershipPage.js';
import LeadershipDetail from './pages/LeadershipDetail.js';
import PartyProjectsPage from './pages/PartyProjectsPage.js'; // This is the main one we're updating
import ContactPage from './pages/ContactPage.js';
import TakeActionPage from './pages/TakeActionPage.js';
import TheIssuesPage from './pages/TheIssuesPage.js';
import WhatWeDoPage from './pages/WhatWeDoPage.js';
import AboutThePartyPage from './pages/OurPartyPage.js';
import RegionDetailPage from './pages/RegionDetailPage.js'; // Still needed for map region clicks

// Import data
import { translations } from './data/translations.js';
import { partyCharterContent, partyCharterPages } from './data/partyCharterContent.js';
import { partyPlatformContent, partyPlatformPages } from './data/partyPlatformContent.js';

// Create Translation Context to provide translations to all components
export const TranslationContext = createContext();

const App = () => {
  // State for current page and language
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en'); // Default language is English

  // Get current language translations based on the language state
  const t = translations[language];

  // Function to toggle language between English and Russian
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'ru' : 'en'));
  };

  // Function to render different pages based on the currentPage state
  const renderPage = () => {
    // Handle dynamic routing for region detail pages (from map clicks)
    const regionDetailPrefix = 'region-detail-';
    if (currentPage.startsWith(regionDetailPrefix)) {
      const regionName = currentPage.substring(regionDetailPrefix.length).replace(/-/g, ' ');
      // Capitalize first letter of each word for display
      const formattedRegionName = regionName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      // RegionDetailPage will now use the projectsPerFederalSubject from PartyProjectsPage's context or shared data
      // For simplicity, we'll pass a dummy count here, or you can enhance RegionDetailPage to fetch its own data.
      // For this example, we'll just pass the name.
      return <RegionDetailPage regionName={formattedRegionName} t={t} />;
    }

    // Standard page routing
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} t={t} />;
      case 'who-we-are':
        return <WhoWeArePage setCurrentPage={setCurrentPage} t={t} />;
      case 'where-we-stand':
        return <WhereWeStandPage setCurrentPage={setCurrentPage} t={t} />;
      case 'take-action':
        return <TakeActionPage setCurrentPage={setCurrentPage} t={t} />;
      case 'shop':
        return <ShopPage setCurrentPage={setCurrentPage} t={t} />;
      case 'party-charter-page':
        return <PartyCharterPage t={t} partyCharterContent={partyCharterContent} partyCharterPages={partyCharterPages} />;
      case 'leadership-page':
        return <LeadershipPage setCurrentPage={setCurrentPage} t={t} />;
      case 'leadership-detail-page':
        return <LeadershipDetail t={t} />;
      case 'the-issues-page':
        return <TheIssuesPage t={t} />;
      case 'contact-page':
        return <ContactPage t={t} />;
      case 'party-platform-page':
        return <PartyPlatformPage t={t} partyPlatformContent={partyPlatformContent} partyPlatformPages={partyPlatformPages} />;
      case 'party-projects-page':
        // PartyProjectsPage now handles its own internal project detail view
        return <PartyProjectsPage setCurrentPage={setCurrentPage} t={t} />;
      case 'what-we-do-page':
        return <WhatWeDoPage t={t} />;
      case 'about-the-party-page':
        return <AboutThePartyPage t={t} />;
      default:
        // Default to home page if route is not found
        return <HomePage setCurrentPage={setCurrentPage} t={t} />;
    }
  };

  return (
    // Provide translations to all child components via context
    <TranslationContext.Provider value={t}>
      <div className="font-inter antialiased text-[#3C3C3B]">
        {/* Header component with navigation and language toggle */}
        <Header setCurrentPage={setCurrentPage} t={t} toggleLanguage={toggleLanguage} language={language} />
        {/* Main content area where pages are rendered */}
        <main className="flex-grow">
          {renderPage()}
        </main>
        {/* Footer component */}
        <Footer t={t} />
      </div>
    </TranslationContext.Provider>
  );
};

export default App;
