import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import WhoWeArePage from './pages/WhoWeArePage.js';
import WhereWeStandPage from './pages/WhereWeStandPage.js';
import ShopPage from './pages/ShopPage.js';
import PartyCharterPage from './pages/PartyCharterPage.js';
import PartyPlatformPage from './pages/PartyPlatformPage.js';
import LeadershipPage from './pages/LeadershipPage.js';
import PartyProjectsPage from './pages/PartyProjectsPage.js';
import ContactPage from './pages/ContactPage.js';
import RegionDetailPage from './pages/RegionDetailPage.js';

// Import data
import { translations } from './data/translations.js';
import { partyCharterContent, partyCharterPages } from './data/partyCharterContent.js';
import { partyPlatformContent } from './data/partyPlatformContent.js';

// Create Translation Context
export const TranslationContext = createContext();

const App = () => {
  const [language, setLanguage] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRegion, setSelectedRegion] = useState(null); // State for selected region

  // Custom project counts for regions (from your original code)
  const customRegionProjectCounts = {
    "MOSCOW": 25,
    "SAINT PETERSBURG": 18,
    "NOVOSIBIRSK OBLAST": 12,
    "SVERDLOVSK OBLAST": 15,
    "TATARSTAN": 20,
    "KRASNODAR KRAI": 10,
    "NIZHNY NOVGOROD OBLAST": 8,
    "ROSTOV OBLAST": 14,
    "BASHKORTOSTAN": 17,
    "CHECHEN REPUBLIC": 5
  };

  const t = translations[language];

  // Simple routing logic based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage t={t} setCurrentPage={setCurrentPage} />;
      case 'who-we-are':
        return <WhoWeArePage t={t} setCurrentPage={setCurrentPage} />;
      case 'where-we-stand':
        return <WhereWeStandPage t={t} setCurrentPage={setCurrentPage} />;
      case 'shop':
        return <ShopPage t={t} />;
      case 'party-charter':
        return <PartyCharterPage t={t} partyCharterContent={partyCharterContent} partyCharterPages={partyCharterPages} />;
      case 'party-platform':
        return <PartyPlatformPage t={t} partyPlatformContent={partyPlatformContent} />;
      case 'leadership':
        return <LeadershipPage t={t} />;
      case 'party-projects':
        return <PartyProjectsPage t={t} setCurrentPage={setCurrentPage} setSelectedRegion={setSelectedRegion} customRegionProjectCounts={customRegionProjectCounts} />;
      case 'contact':
        return <ContactPage t={t} />;
      case 'region-detail':
        return <RegionDetailPage t={t} regionName={selectedRegion} customRegionProjectCounts={customRegionProjectCounts} />;
      case 'our-party':
        return <OurPartyPage t={t} />;
      default:
        return <HomePage t={t} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <TranslationContext.Provider value={t}>
      <div className="min-h-screen flex flex-col">
        <Header t={t} language={language} setLanguage={setLanguage} setCurrentPage={setCurrentPage} />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer t={t} setCurrentPage={setCurrentPage} />
      </div>
    </TranslationContext.Provider>
  );
};

export default App;