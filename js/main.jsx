const { useState, useEffect, useRef } = React;
const { createRoot } = ReactDOM;

// Assuming translations and partyCharterContent/partyPlatformContent are loaded globally
// due to <script type="text/babel" src="..."> in index.html.
// In a more advanced setup, you'd use import/export with a build tool like Webpack/Parcel.

// Custom hook for managing the active tab within Party Projects page
const useActiveTab = (initialTabId, defaultLanguage) => {
    const [activeTab, setActiveTab] = useState(initialTabId);
    const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

    const translatedTabs = {
        en: {
            federalProjects: "Federal Party Projects",
            projectsMap: "Projects Map",
            regionsProjects: "Regions & Projects"
        },
        ru: {
            federalProjects: "Федеральные партийные проекты",
            projectsMap: "Карта проектов",
            regionsProjects: "Регионы и проекты"
        }
    };

    return {
        activeTab,
        setActiveTab,
        translatedTabs: translatedTabs[currentLanguage]
    };
};

const customRegionProjectCounts = {
  "Adygea": 7, "Altai Krai": 12, "Amur Oblast": 8, "Arkhangelsk Oblast": 10,
  "Astrakhan Oblast": 6, "Belgorod Oblast": 11, "Bryansk Oblast": 9,
  "Republic of Buryatia": 7, "Chechen Republic": 5, "Chuvash Republic": 8,
  "Republic of Dagestan": 10, "Republic of Ingushetia": 4,
  "Irkutsk Oblast": 15, "Kaliningrad Oblast": 7, "Republic of Kalmykia": 5,
  "Kaluga Oblast": 9, "Kamchatka Krai": 6, "Republic of Karelia": 8,
  "Kemerovo Oblast": 13, "Kirov Oblast": 7, "Komi Republic": 9,
  "Kostroma Oblast": 6, "Krasnodar Krai": 18, "Krasnoyarsk Krai": 14,
  "Kurgan Oblast": 7, "Kursk Oblast": 10, "" : 0
};

// --- Reusable Components ---

const Header = ({ t, currentLanguage, toggleLanguage, setRoute }) => {
  return (
    <header className="bg-[#D52B1E] text-white p-4 shadow-lg fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center" onClick={() => setRoute('home')}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/United_Russia_logo.svg/1200px-United_Russia_logo.svg.png" alt="United Russia Logo" className="h-10 w-10 mr-2"/>
            <span className="text-xl font-bold font-oswald tracking-wide">{t.partyName}</span>
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#who-we-are" className="hover:text-gray-300 font-inter" onClick={() => setRoute('who-we-are')}>{t.whoWeAre}</a>
            <a href="#where-we-stand" className="hover:text-gray-300 font-inter" onClick={() => setRoute('where-we-stand')}>{t.whereWeStand}</a>
            <a href="#take-action" className="hover:text-gray-300 font-inter" onClick={() => setRoute('get-involved')}>{t.takeAction}</a>
            <a href="#shop" className="hover:text-gray-300 font-inter" onClick={() => setRoute('shop')}>{t.shopPageTitle}</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="bg-[#003399] hover:bg-[#002277] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-md font-inter"
          >
            {currentLanguage === 'en' ? t.inRussian : t.inEnglish}
          </button>
          <a href="#donate" className="bg-[#003399] hover:bg-[#002277] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-md font-inter" onClick={() => setRoute('donate')}>{t.donate}</a>
        </div>
      </div>
    </header>
  );
};

const Footer = ({ t, setRoute }) => {
  return (
    <footer className="bg-[#3C3C3B] text-white p-8 font-inter">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-oswald font-bold mb-4">{t.partyName}</h3>
          <p className="text-sm">{t.aboutUsDescription}</p>
        </div>
        <div>
          <h3 className="text-xl font-oswald font-bold mb-4">{t.quickLinks}</h3>
          <ul className="space-y-2">
            <li><a href="https://www.kremlin.ru/en" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">{t.kremlin}</a></li>
            <li><a href="http://duma.gov.ru/en/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">{t.stateDuma}</a></li>
            <li><a href="http://www.cikrf.ru/eng/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">{t.cec}</a></li>
            <li><a href="#party-charter" onClick={() => setRoute('party-charter')} className="hover:text-gray-300">{t.partyCharter}</a></li>
            <li><a href="#party-platform" onClick={() => setRoute('party-platform')} className="hover:text-gray-300">{t.partyPlatform}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-oswald font-bold mb-4">{t.followUs}</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Telegram</a></li>
            <li><a href="#" className="hover:text-gray-300">VKontakte</a></li>
            <li><a href="#" className="hover:text-gray-300">Odnoklassniki</a></li>
            <li><a href="#" className="hover:text-gray-300">YouTube</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-oswald font-bold mb-4">{t.contactHome}</h3>
          <p className="text-sm mb-4">{t.contactHomeDescription}</p>
          <button
            onClick={() => setRoute('contact')}
            className="bg-[#D52B1E] hover:bg-[#b2201a] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-lg w-full"
          >
            {t.sendUsAMessage}
          </button>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p className="text-lg font-bold mb-2">{t.footerQuote}</p>
        <p className="text-md mb-4">{t.footerQuoteSource}</p>
        <p>&copy; {new Date().getFullYear()} {t.partyName}. {t.allRightsReserved}</p>
      </div>
    </footer>
  );
};


const HeroSection = ({ t, setRoute }) => {
  return (
    <section
      className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-white"
      style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/2/23/2012_Russian_Presidential_election_in_Vladivostok_02.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center p-8 z-10">
        <h1 className="text-6xl font-oswald font-extrabold mb-4 animate-fade-in-up">{t.heroTitle}</h1>
        <p className="text-xl font-inter mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">{t.heroDescription}</p>
        <button
          onClick={() => setRoute('get-involved')}
          className="bg-[#D52B1E] hover:bg-[#b2201a] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up delay-400"
        >
          {t.runForOffice}
        </button>
      </div>
    </section>
  );
};

const KeyValues = ({ t }) => {
  const values = [
    { title: t.unity, description: t.unityDescription },
    { title: t.prosperity, description: t.prosperityDescription },
    { title: t.stability, description: t.stabilityDescription },
  ];

  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-oswald font-bold text-[#3C3C3B] mb-12">{t.ourKeyValues}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
              <h3 className="text-2xl font-oswald font-semibold text-[#D52B1E] mb-4">{value.title}</h3>
              <p className="text-[#3C3C3B] font-inter">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeSections = ({ t, setRoute }) => {
  const sections = [
    {
      title: t.leadershipHome,
      description: t.leadershipHomeDescription,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Vladimir_Putin_at_a_meeting_with_the_leadership_of_the_United_Russia_party_in_2016.jpg/1200px-Vladimir_Putin_at_a_meeting_with_the_leadership_of_the_United_Russia_party_in_2016.jpg",
      route: "leadership"
    },
    {
      title: t.theIssuesHome,
      description: t.theIssuesHomeDescription,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Dmitry_Medvedev_and_Vladimir_Putin_at_United_Russia%27s_12th_Congress.jpg/1200px-Dmitry_Medvedev_and_Vladimir_Putin_at_United_Russia%27s_12th_Congress.jpg",
      route: "the-issues"
    },
    {
      title: t.partyProjectsHome,
      description: t.partyProjectsHomeDescription,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Vladimir_Putin_at_a_meeting_with_the_leadership_of_the_United_Russia_party_in_2016.jpg/1200px-Vladimir_Putin_at_a_meeting_with_the_leadership_of_the_United_Russia_party_in_2016.jpg",
      route: "party-projects"
    },
    {
      title: t.contactHome,
      description: t.contactHomeDescription,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Vladimir_Putin_at_a_meeting_with_the_leadership_of_the_United_Russia_party_in_2016.jpg/1200px-Vladimir_Putin_at_a_meeting_with_the_leadership_of_the_United_Russia_party_in_2016.jpg",
      route: "contact"
    }
  ];

  return (
    <section className="py-16 bg-[#F0F0F0]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition duration-300 ease-in-out">
              <img src={section.imageUrl} alt={section.title} className="w-full md:w-1/3 h-48 md:h-auto object-cover"/>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-oswald font-bold text-[#3C3C3B] mb-3">{section.title}</h3>
                  <p className="text-[#3C3C3B] font-inter mb-4">{section.description}</p>
                </div>
                <button
                  onClick={() => setRoute(section.route)}
                  className="bg-[#003399] hover:bg-[#002277] text-white font-bold py-2 px-6 rounded-full self-start transition duration-300 ease-in-out shadow-md"
                >
                  {t.learnMore}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// --- Page Components ---

const HomePage = ({ t, setRoute }) => (
  <>
    <HeroSection t={t} setRoute={setRoute} />
    <KeyValues t={t} />
    <HomeSections t={t} setRoute={setRoute} />
  </>
);

const WhoWeArePage = ({ t }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#FFFFFF]">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-oswald font-extrabold text-[#3C3C3B] mb-6">{t.whoWeArePageTitle}</h1>
        <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed max-w-4xl mx-auto mb-10">
          {t.whoWeArePageDescription}
        </p>
        <div className="text-left max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-oswald font-bold text-[#3C3C3B] mb-6">{t.whatWeDoPageTitle}</h2>
          <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed mb-6">
            {t.whatWeDoPageDescription}
          </p>
          <div className="prose prose-lg max-w-none font-inter text-[#3C3C3B]">
            {t.whatWeDoContent.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WhereWeStandPage = ({ t }) => {
  const issues = [
    {
      title: t.nationalSecurity,
      description: t.nationalSecurityDescription,
      icon: "🛡️"
    },
    {
      title: t.economicDevelopment,
      description: t.economicDevelopmentDescription,
      icon: "💰"
    },
    {
      title: t.socialPolicy,
      description: t.socialPolicyDescription,
      icon: "⚖️"
    },
    {
      title: t.regionalDevelopment,
      description: t.regionalDevelopmentDescription,
      icon: "🏘️"
    },
    {
      title: t.cultureAndTradition,
      description: t.cultureAndTraditionDescription,
      icon: "🇷🇺"
    },
    {
      title: t.sovereigntyAndForeignPolicy,
      description: t.sovereigntyAndForeignPolicyDescription,
      icon: "🌍"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FFFFFF]">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-oswald font-extrabold text-[#3C3C3B] mb-6">{t.whereWeStandPageTitle}</h1>
        <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed max-w-4xl mx-auto mb-10">
          {t.whereWeStandPageDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {issues.map((issue, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
              <span className="text-5xl mb-4">{issue.icon}</span>
              <h3 className="text-2xl font-oswald font-semibold text-[#D52B1E] mb-3">{issue.title}</h3>
              <p className="text-[#3C3C3B] font-inter">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GetInvolvedPage = ({ t }) => {
  const actions = [
    {
      title: t.attendCongress,
      description: t.attendCongressDescription,
      icon: "🤝"
    },
    {
      title: t.helpCampaign,
      description: t.helpCampaignDescription,
      icon: "🗳️"
    },
    {
      title: t.donateToParty,
      description: t.donateToPartyDescription,
      icon: "❤️"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FFFFFF]">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-oswald font-extrabold text-[#3C3C3B] mb-6">{t.getInvolved}</h1>
        <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed max-w-4xl mx-auto mb-10">
          {t.getInvolvedDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
              <span className="text-5xl mb-4">{action.icon}</span>
              <h3 className="text-2xl font-oswald font-semibold text-[#D52B1E] mb-3">{action.title}</h3>
              <p className="text-[#3C3C3B] font-inter mb-4">{action.description}</p>
              {action.title === t.donateToParty && (
                <button className="bg-[#D52B1E] hover:bg-[#b2201a] text-white font-bold py-2 px-6 rounded-full w-full transition duration-300 ease-in-out shadow-lg">
                  {t.donateNow}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ name, price, imageUrl, t }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition duration-300 ease-in-out">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-oswald font-semibold text-[#3C3C3B] mb-2">{name}</h3>
        <p className="text-[#003399] font-bold text-xl mb-4 font-inter">{price}</p>
        <button className="bg-[#D52B1E] hover:bg-[#b2201a] text-white font-bold py-2 px-4 rounded-full w-full transition duration-300 ease-in-out shadow-lg">
          {t.buy}
        </button>
      </div>
    </div>
  );
};

const ShopPage = ({ t }) => {
  const products = [
    {
      name: t.tShirt,
      price: "$25.00",
      imageUrl: "https://via.placeholder.com/400x300?text=United+Russia+T-Shirt"
    },
    {
      name: t.mug,
      price: "$15.00",
      imageUrl: "https://via.placeholder.com/400x300?text=United+Russia+Mug"
    },
    {
      name: t.pin,
      price: "$5.00",
      imageUrl: "https://via.placeholder.com/400x300?text=Party+Lapel+Pin"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#F0F0F0]">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-oswald font-extrabold text-[#3C3C3B] mb-6">{t.shopPageTitle}</h1>
        <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed max-w-4xl mx-auto mb-10">
          {t.shopPageDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

const LeadershipPage = ({ t }) => {
  const leaders = [
    {
      name: "Vladimir Putin",
      title: "Supreme Leader",
      description: "President of the Russian Federation.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Vladimir_Putin_%282024-03-20%29.jpg/800px-Vladimir_Putin_%282024-03-20%29.jpg"
    },
    {
      name: "Dmitry Medvedev",
      title: "Party Chairman",
      description: "Deputy Chairman of the Security Council of Russia.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Dmitry_Medvedev_%282023-11-21%29.jpg/800px-Dmitry_Medvedev_%282023-11-21%29.jpg"
    },
    {
      name: "Sergei Shoigu",
      title: "Member of the Supreme Council",
      description: "Minister of Defence of the Russian Federation.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sergei_Shoigu_%282023-11-24%29.jpg/800px-Sergei_Shoigu_%282023-11-24%29.jpg"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FFFFFF]">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-oswald font-extrabold text-[#3C3C3B] mb-6">{t.leadershipPageTitle}</h1>
        <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed max-w-4xl mx-auto mb-10">
          {t.leadershipPageDescription}
        </p>

        <div className="mb-12">
          <h2 className="text-4xl font-oswald font-bold text-[#D52B1E] mb-6">{t.partyOfficers}</h2>
          <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed max-w-4xl mx-auto">
            {t.partyOfficersDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-xl transition duration-300 ease-in-out">
              <img src={leader.imageUrl} alt={leader.name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#003399]"/>
              <h3 className="text-2xl font-oswald font-semibold text-[#3C3C3B] mb-2">{leader.name}</h3>
              <p className="text-[#D52B1E] font-bold font-inter mb-2">{leader.title}</p>
              <p className="text-[#3C3C3B] font-inter">{leader.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed max-w-4xl mx-auto mb-8">
            {t.featuredLeaderDescription}
          </p>
          <button className="bg-[#003399] hover:bg-[#002277] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            {t.meetTheTeam}
          </button>
        </div>
      </div>
    </div>
  );
};

const PartyPlatformPage = ({ t }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#F0F0F0]">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-oswald font-extrabold text-[#3C3C3B] mb-6">{t.partyPlatformPageTitle}</h1>
        <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed max-w-4xl mx-auto mb-10">
          {t.partyPlatformDescription}
        </p>

        <div className="text-left max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-oswald font-bold text-[#3C3C3B] mb-6">{t.thePartyPlatform}</h2>
          <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed mb-4">
            {t.everyFourYears}
          </p>
          <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed mb-6">
            {t.platformCreated}
          </p>
          <h3 className="text-3xl font-oswald font-bold text-[#D52B1E] mb-4">{t.yearPartyPlatform}</h3>
          <div className="prose prose-lg max-w-none font-inter text-[#3C3C3B]">
            {partyPlatformContent.preamble && (
                <>
                    <h4 className="text-2xl font-oswald font-semibold text-[#003399] mb-2">{partyPlatformContent.preamble.title}</h4>
                    <p className="mb-4">{partyPlatformContent.preamble.text}</p>
                </>
            )}
            {/* You would dynamically render other sections of partyPlatformContent here */}
          </div>
        </div>
      </div>
    </div>
  );
};

const PartyCharterPage = ({ t }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = partyCharterPages.length;

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const currentPageContent = partyCharterPages[currentPage];

  return (
    <div className="pt-24 min-h-screen bg-[#F0F0F0]">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-oswald font-extrabold text-[#3C3C3B] mb-6">{t.partyCharter}</h1>
        <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed max-w-4xl mx-auto mb-10">
          {t.partyCharterDescription}
        </p>

        <div className="text-left max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          {currentPageContent.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              <h2 className="text-3xl font-oswald font-bold text-[#D52B1E] mb-4">{section.title}</h2>
              {section.text && <p className="text-lg font-inter text-[#3C3C3B] mb-4 whitespace-pre-wrap">{section.text}</p>}
              {section.sections && section.sections.map((subSection, subSectionIndex) => (
                <div key={subSectionIndex} className="mb-4 ml-4">
                  <h3 className="text-2xl font-oswald font-semibold text-[#003399] mb-2">{subSection.title}</h3>
                  <p className="text-md font-inter text-[#3C3C3B] whitespace-pre-wrap">{subSection.text}</p>
                </div>
              ))}
            </div>
          ))}

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="bg-[#003399] hover:bg-[#002277] text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-lg font-inter text-[#3C3C3B]">Page {currentPage + 1} of {totalPages}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="bg-[#003399] hover:bg-[#002277] text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PartyProjectsPage = ({ t }) => {
  const { activeTab, setActiveTab, translatedTabs } = useActiveTab('federalProjects', 'en'); // Default to English initially
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const mapRef = useRef(null);

  const projects = [
    { name: t.safeRoads, icon: "🛣️" },
    { name: t.urbanEnvironment, icon: "🏙️" },
    { name: t.childrensSports, icon: "⚽" },
    { name: t.oneCountryAccessibleEnvironment, icon: "♿" },
    { name: t.womensMovementOfUnitedRussia, icon: "♀️" },
    { name: t.protectionOfWildlife, icon: "🐻" },
    { name: t.healthyFuture, icon: "🏥" },
    { name: t.greenEconomy, icon: "🌳" },
    { name: t.historicalMemory, icon: "🏛️" },
    { name: t.strongFamily, icon: "👨‍👩‍👧‍👦" },
    { name: t.cultureOfTheSmallHomeland, icon: "🎭" },
    { name: t.aWorldOfPossibilities, icon: "🌟" },
    { name: t.myCareerWithUnitedRussia, icon: "💼" },
    { name: t.newSchool, icon: "🏫" },
    { name: t.entrepreneurship, icon: "💡" },
    { name: t.russianVillage, icon: "🏡" },
    { name: t.olderGeneration, icon: "👵👴" },
    { name: t.digitalRussia, icon: "💻" },
    { name: t.cleanCountry, icon: "🗑️" },
    { name: t.housingAndPublicUtilities, icon: "🏠💧" },
  ];

  const regions = Object.keys(customRegionProjectCounts).filter(region => region !== "");


  useEffect(() => {
    if (mapRef.current && activeTab === 'projectsMap') {
      d3.xml("https://upload.wikimedia.org/wikipedia/commons/8/87/Map_of_Russian_federal_subjects.svg").then(data => {
        const svgNode = data.documentElement;
        mapRef.current.innerHTML = ''; // Clear previous SVG if any
        mapRef.current.appendChild(svgNode);

        const svg = d3.select(svgNode);
        const tooltip = d3.select("body").append("div")
          .attr("class", "map-tooltip")
          .style("opacity", 0);

        svg.selectAll("path")
          .on("mouseover", function(event, d) {
            const regionName = d3.select(this).attr("id"); // Assuming ID is the region name
            if (regionName) {
              const projectCount = customRegionProjectCounts[regionName] || 0;
              setHoveredRegion(regionName);
              tooltip.transition()
                .duration(200)
                .style("opacity", .9);
              tooltip.html(`${t.projectsMapHover} ${regionName}: ${projectCount} ${t.projectsMapClick}`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
            }
          })
          .on("mouseout", function(d) {
            setHoveredRegion(null);
            tooltip.transition()
              .duration(500)
              .style("opacity", 0);
          });
      });
    }
  }, [activeTab, t]); // Re-run effect when activeTab or translations change

  return (
    <div className="pt-24 min-h-screen bg-[#F0F0F0]">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-oswald font-extrabold text-[#3C3C3B] mb-6">{t.partyProjectsPageTitle}</h1>
        <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed max-w-4xl mx-auto mb-10">
          {t.partyProjectsPageDescription}
        </p>

        <div className="flex justify-center mb-8">
          <button
            className={`py-2 px-6 font-bold text-lg rounded-l-full transition duration-300 ${activeTab === 'federalProjects' ? 'bg-[#D52B1E] text-white' : 'bg-gray-200 text-[#3C3C3B] hover:bg-gray-300'}`}
            onClick={() => setActiveTab('federalProjects')}
          >
            {translatedTabs.federalProjects}
          </button>
          <button
            className={`py-2 px-6 font-bold text-lg transition duration-300 ${activeTab === 'projectsMap' ? 'bg-[#D52B1E] text-white' : 'bg-gray-200 text-[#3C3C3B] hover:bg-gray-300'}`}
            onClick={() => setActiveTab('projectsMap')}
          >
            {translatedTabs.projectsMap}
          </button>
          <button
            className={`py-2 px-6 font-bold text-lg rounded-r-full transition duration-300 ${activeTab === 'regionsProjects' ? 'bg-[#D52B1E] text-white' : 'bg-gray-200 text-[#3C3C3B] hover:bg-gray-300'}`}
            onClick={() => setActiveTab('regionsProjects')}
          >
            {translatedTabs.regionsProjects}
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto">
          {activeTab === 'federalProjects' && (
            <div>
              <h2 className="text-4xl font-oswald font-bold text-[#3C3C3B] mb-8">{t.currentPartyProjects}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {projects.map((project, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                    <span className="text-3xl mr-4">{project.icon}</span>
                    <p className="text-lg font-inter text-[#3C3C3B]">{project.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'projectsMap' && (
            <div>
              <h2 className="text-4xl font-oswald font-bold text-[#3C3C3B] mb-8">{t.projectsMap}</h2>
              <div id="map-container-parent" className="w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden">
                <div id="map-svg-container" ref={mapRef} className="w-full h-full">
                  {/* SVG Map will be loaded here by D3.js */}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'regionsProjects' && (
            <div>
              <h2 className="text-4xl font-oswald font-bold text-[#3C3C3B] mb-8">{t.regionsCovered}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {regions.map((region, index) => (
                  <RegionDetailPage key={index} regionName={region} t={t} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const RegionDetailPage = ({ regionName, t }) => {
  const projectCount = customRegionProjectCounts[regionName] || 0; // Use customRegionProjectCounts
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
      <h3 className="text-xl font-oswald font-semibold text-[#D52B1E] mb-2">{regionName}</h3>
      <p className="text-md font-inter text-[#3C3C3B]">
        {t.regionProjects.replace('{regionName}', regionName).replace('{projectCount}', projectCount)}
      </p>
    </div>
  );
};


const ContactPage = ({ t }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#F0F0F0]">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-oswald font-extrabold text-[#3C3C3B] mb-6">{t.contactHome}</h1>
        <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed max-w-4xl mx-auto mb-10">
          {t.contactHomeDescription}
        </p>

        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto text-left">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-[#3C3C3B] mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D52B1E]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-[#3C3C3B] mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D52B1E]"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-[#3C3C3B] mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D52B1E]"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#D52B1E] hover:bg-[#b2201a] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 ease-in-out w-full"
            >
              {t.sendUsAMessage}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


const OurPartyPage = ({ t }) => {
    const historicalPoints = [
        {
            title: t.ourFounding,
            description: t.ourFoundingDesc,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Kremlin_Russia_2021.jpg/1280px-Kremlin_Russia_2021.jpg"
        },
        {
            title: t.victoryLegitimacy,
            description: t.victoryLegitimacyDesc,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/State_Duma_building_Moscow.jpg/1280px-State_Duma_building_Moscow.jpg"
        }
    ];

    const principles = [
        { title: t.principlesOfFormation, description: t.principlesOfFormationDesc },
        { title: t.sovereigntyPower, description: t.sovereigntyPowerDesc },
        { title: t.economicStabilityGrowth, description: t.economicStabilityGrowthDesc },
        { title: t.traditionUnity, description: t.traditionUnityDesc },
        { title: t.pragmaticCentrism, description: t.pragmaticCentrismDesc },
        { title: t.federalStrengthRegionalRoots, description: t.federalStrengthRegionalRootsDesc },
        { title: t.antiCorruptionReform, description: t.antiCorruptionReformDesc },
        { title: t.patrioticEducationCivicEngagement, description: t.patrioticEducationCivicEngagementDesc },
    ];

    const achievements = [
        { metric: t.gdpGrowth, icon: "📈" },
        { metric: t.firstMajorityParty, icon: "🥇" },
        { metric: t.infrastructureProjects, icon: "🏗️" },
        { metric: t.regionalCoordination, icon: "🌐" },
    ];

    return (
        <div className="pt-24 min-h-screen bg-[#F0F0F0]">
            <div className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/United_Russia_headquarters_%282020-03-03%29.jpg/1280px-United_Russia_headquarters_%282020-03-03%29.jpg")' }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative text-center p-8 z-10">
                    <h1 className="text-5xl font-oswald font-extrabold mb-4">{t.ourPartyHeroHeadline}</h1>
                    <p className="text-xl font-inter mb-8 max-w-3xl mx-auto">{t.ourPartyHeroSubheadline}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <section className="bg-white p-8 rounded-lg shadow-md mb-12 text-center">
                    <h2 className="text-4xl font-oswald font-bold text-[#3C3C3B] mb-6">{t.ourPartyTitle}</h2>
                    <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed max-w-4xl mx-auto">{t.ourPartyDescription}</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl font-oswald font-bold text-[#3C3C3B] text-center mb-10">Our History</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {historicalPoints.map((point, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
                                <img src={point.imageUrl} alt={point.title} className="w-full h-64 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-2xl font-oswald font-semibold text-[#D52B1E] mb-2">{point.title}</h3>
                                    <p className="text-[#3C3C3B] font-inter">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white p-8 rounded-lg shadow-md mb-12">
                    <h2 className="text-4xl font-oswald font-bold text-[#3C3C3B] text-center mb-10">Core Principles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {principles.map((principle, index) => (
                            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-2xl font-oswald font-semibold text-[#003399] mb-3">{principle.title}</h3>
                                <p className="text-[#3C3C3B] font-inter">{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl font-oswald font-bold text-[#3C3C3B] text-center mb-10">Key Achievements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((item, index) => (
                            <div key={index} className="bg-[#D52B1E] text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center justify-center h-48 hover:scale-105 transition duration-300 ease-in-out">
                                <span className="text-5xl mb-3">{item.icon}</span>
                                <p className="text-xl font-bold font-inter">{item.metric}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-4xl font-oswald font-bold text-[#3C3C3B] mb-6">{t.todayTomorrow}</h2>
                    <p className="text-lg font-inter text-[#3C3C3B] leading-relaxed max-w-4xl mx-auto">{t.todayTomorrowDesc}</p>
                </section>
            </div>
        </div>
    );
};


// --- Main App Component ---

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [route, setRoute] = useState('home'); // State to manage current route/page

  const t = translations[currentLanguage];

  const toggleLanguage = () => {
    setCurrentLanguage(prevLang => (prevLang === 'en' ? 'ru' : 'en'));
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove '#'
      if (hash) {
        setRoute(hash);
      } else {
        setRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Call once to set initial route based on URL hash

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case 'home':
        return <HomePage t={t} setRoute={setRoute} />;
      case 'who-we-are':
        return <WhoWeArePage t={t} />;
      case 'where-we-stand':
        return <WhereWeStandPage t={t} />;
      case 'get-involved':
        return <GetInvolvedPage t={t} />;
      case 'shop':
        return <ShopPage t={t} />;
      case 'leadership':
        return <LeadershipPage t={t} />;
      case 'party-platform':
        return <PartyPlatformPage t={t} />;
      case 'party-charter':
        return <PartyCharterPage t={t} />;
      case 'party-projects':
        return <PartyProjectsPage t={t} />;
      case 'contact':
        return <ContactPage t={t} />;
      case 'our-party':
          return <OurPartyPage t={t} />;
      default:
        return <HomePage t={t} setRoute={setRoute} />; // Fallback to home
    }
  };

  return (
    <div>
      <Header t={t} currentLanguage={currentLanguage} toggleLanguage={toggleLanguage} setRoute={setRoute} />
      <main>
        {renderPage()}
      </main>
      <Footer t={t} setRoute={setRoute} />
    </div>
  );
};

// Render the React application
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
