import React, { useContext } from 'react';
import { TranslationContext } from '../App.js'; // Import TranslationContext
import NavLink from './NavLink.js'; // Import NavLink component

const Header = ({ setCurrentPage, t, toggleLanguage, language }) => {
  return (
    <header className="bg-[#003399] shadow-sm fixed top-0 left-0 right-0 z-50 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Party Name - Clickable to go to home page */}
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700] rounded-lg p-1 -ml-1"
        >
          <img
            src="/images/favicon.png" // Path to your favicon image
            alt="United Russia Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-oswald font-semibold text-white">{t.partyName}</span>
        </button>

        {/* Navigation Links (hidden on small screens, shown on medium and up) */}
        <nav className="hidden md:flex space-x-6">
          <NavLink onClick={() => setCurrentPage('who-we-are')}>{t.whoWeAre}</NavLink>
          <NavLink onClick={() => setCurrentPage('where-we-stand')}>{t.whereWeStand}</NavLink>
          <NavLink onClick={() => setCurrentPage('take-action')}>{t.takeAction}</NavLink>
          <NavLink onClick={() => setCurrentPage('shop')}>{t.shopPageTitle}</NavLink>
        </nav>

        {/* Donate Button and Language Selector */}
        <div className="flex items-center space-x-4">
          <a
            href="https://canary.discord.com/channels/894566680741703721/1186475117883166732/1391538853344448553" // Example Discord link for donation
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D52B1E] hover:bg-[#b2201a] text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            {t.donate}
          </a>
          <button
            onClick={toggleLanguage} // Call the toggleLanguage function from App.js
            className="text-white hover:text-[#D52B1E] font-medium font-oswald uppercase"
          >
            {language === 'en' ? t.inRussian : t.inEnglish}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
