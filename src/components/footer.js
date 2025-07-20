import React, { useContext } from 'react';
import { TranslationContext } from '../App.js';

const Footer = ({ setCurrentPage }) => {
  const t = useContext(TranslationContext);

  return (
    <footer className="bg-[#3C3C3B] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-oswald font-bold mb-4">{t.aboutUs}</h3>
          <p className="text-sm leading-relaxed mb-4">{t.aboutUsDescription}</p>
          <p className="text-sm leading-relaxed italic">
            {t.footerQuote}
            <span className="block mt-2 not-italic">{t.footerQuoteSource}</span>
          </p>
        </div>
        <div>
          <h3 className="text-xl font-oswald font-bold mb-4">{t.quickLinks}</h3>
          <ul className="space-y-2">
            <li><a href="https://en.kremlin.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D52B1E] transition duration-300 ease-in-out">{t.kremlin}</a></li>
            <li><a href="http://duma.gov.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D52B1E] transition duration-300 ease-in-out">{t.stateDuma}</a></li>
            <li><a href="http://www.cikrf.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D52B1E] transition duration-300 ease-in-out">{t.cec}</a></li>
            <li><a href="#" onClick={() => setCurrentPage('our-party')} className="hover:text-[#D52B1E] transition duration-300 ease-in-out">{t.ourPartyTitle}</a></li>
            <li><a href="#" onClick={() => setCurrentPage('party-charter')} className="hover:text-[#D52B1E] transition duration-300 ease-in-out">{t.partyCharter}</a></li>
            <li><a href="#" onClick={() => setCurrentPage('party-platform')} className="hover:text-[#D52B1E] transition duration-300 ease-in-out">{t.partyPlatform}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-oswald font-bold mb-4">{t.followUs}</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-[#D52B1E] transition duration-300 ease-in-out"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-[#D52B1E] transition duration-300 ease-in-out"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-[#D52B1E] transition duration-300 ease-in-out"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-[#D52B1E] transition duration-300 ease-in-out"><i className="fab fa-youtube"></i></a>
          </div>
          <h3 className="text-xl font-oswald font-bold mb-4 mt-6">{t.takeAction}</h3>
          <ul className="space-y-2">
            <li><a href="#" onClick={() => setCurrentPage('donate')} className="hover:text-[#D52B1E] transition duration-300 ease-in-out">{t.donateToParty}</a></li>
            <li><a href="#" onClick={() => setCurrentPage('leadership')} className="hover:text-[#D52B1E] transition duration-300 ease-in-out">{t.ourLeadership}</a></li>
            <li><a href="#" onClick={() => setCurrentPage('party-projects')} className="hover:text-[#D52B1E] transition duration-300 ease-in-out">{t.partyProjectsHome}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-oswald font-bold mb-4">{t.contactHome}</h3>
          <p className="text-sm mb-4">
            Email: info@unitedrussia.ru <br />
            Phone: +7 495 123 45 67 <br />
            Address: Moscow, Russia
          </p>
          <a href="#" onClick={() => setCurrentPage('contact')} className="inline-block bg-[#D52B1E] hover:bg-[#b2201a] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-lg">
            {t.sendUsAMessage}
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; 2023 {t.partyName}. {t.allRightsReserved}
      </div>
    </footer>
  );
};

export default Footer;