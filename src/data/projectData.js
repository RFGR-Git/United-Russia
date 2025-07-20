// Data for projects (for carousel and grid)
export const projectsData = [
  { id: 'safeRoads', name: 'safeRoads', icon: '/images/safe roads icon.jpg', regions: 80, affectedRegions: ['Moscow Oblast', 'Saint Petersburg', 'Krasnodar Krai', 'Chelyabinsk Oblast', 'Sverdlovsk Oblast'] },
  { id: 'urbanEnvironment', name: 'urbanEnvironment', icon: '/images/urban environment icon.jpg', regions: 75, affectedRegions: ['Saint Petersburg', 'Novosibirsk Oblast', 'Tatarstan Republic', 'Samara Oblast', 'Nizhny Novgorod Oblast'] },
  { id: 'childrensSports', name: 'childrensSports', icon: '/images/children sports icon.jpg', regions: 60, affectedRegions: ['Krasnoyarsk Krai', 'Irkutsk Oblast', 'Kemerovo Oblast'] },
  { id: 'oneCountryAccessibleEnvironment', name: 'oneCountryAccessibleEnvironment', icon: '/images/accessible environment icon.jpg', regions: 55, affectedRegions: ['Moscow Oblast', 'Rostov Oblast'] },
  { id: 'womensMovementOfUnitedRussia', name: 'womensMovementOfUnitedRussia', icon: '/images/women movement icon.jpg', regions: 45, affectedRegions: ['Dagestan Republic', 'Chechen Republic'] },
  { id: 'protectionOfWildlife', name: 'protectionOfWildlife', icon: '/images/wildlife protection icon.jpg', regions: 70, affectedRegions: ['Kamchatka Krai', 'Primorsky Krai'] },
  { id: 'healthyFuture', name: 'healthyFuture', icon: '/images/healthy future icon.jpg', regions: 65, affectedRegions: ['Sverdlovsk Oblast', 'Rostov Oblast', 'Perm Krai', 'Volgograd Oblast'] },
  { id: 'greenEconomy', name: 'greenEconomy', icon: '/images/green economy icon.jpg', regions: 50, affectedRegions: ['Tyumen Oblast', 'Khanty-Mansi Autonomous Okrug'] },
  { id: 'historicalMemory', name: 'historicalMemory', icon: '/images/historical memory icon.jpg', regions: 85, affectedRegions: ['Vladimir Oblast', 'Pskov Oblast', 'Smolensk Oblast', 'Novgorod Oblast'] },
  { id: 'strongFamily', name: 'strongFamily', icon: '/images/strong family icon.jpg', regions: 70, affectedRegions: ['Bashkortostan Republic', 'Chuvash Republic'] },
  { id: 'cultureOfTheSmallHomeland', name: 'cultureOfTheSmallHomeland', icon: '/images/culture icon.jpg', regions: 60, affectedRegions: ['Mari El Republic', 'Mordovia Republic'] },
  { id: 'aWorldOfPossibilities', name: 'aWorldOfPossibilities', icon: '/images/world of possibilities icon.jpg', regions: 55, affectedRegions: ['Saint Petersburg', 'Moscow Oblast'] },
  { id: 'myCareerWithUnitedRussia', name: 'myCareerWithUnitedRussia', icon: '/images/career icon.jpg', regions: 40, affectedRegions: ['Kirov Oblast', 'Kostroma Oblast'] },
  { id: 'newSchool', name: 'newSchool', icon: '/images/new school icon.jpg', regions: 78, affectedRegions: ['Ulyanovsk Oblast', 'Saratov Oblast'] },
  { id: 'entrepreneurship', name: 'entrepreneurship', icon: '/images/entrepreneurship icon.jpg', regions: 62, affectedRegions: ['Penza Oblast', 'Orenburg Oblast'] },
  { id: 'russianVillage', name: 'russianVillage', icon: '/images/russian village icon.jpg', regions: 58, affectedRegions: ['Tambov Oblast', 'Oryol Oblast'] },
  { id: 'olderGeneration', name: 'olderGeneration', icon: '/images/older generation icon.jpg', regions: 72, affectedRegions: ['Lipetsk Oblast', 'Kursk Oblast'] },
  { id: 'digitalRussia', name: 'digitalRussia', icon: '/images/digital russia icon.jpg', regions: 68, affectedRegions: ['Kaluga Oblast', 'Bryansk Oblast'] },
  { id: 'cleanCountry', name: 'cleanCountry', icon: '/images/clean country icon.jpg', regions: 77, affectedRegions: ['Belgorod Oblast', 'Voronezh Oblast'] },
  { id: 'housingAndPublicUtilities', name: 'housingAndPublicUtilities', icon: '/images/housing icon.jpg', regions: 53, affectedRegions: ['Arkhangelsk Oblast', 'Murmansk Oblast'] },
];

// Define the 6 custom regions for the map
export const CUSTOM_REGIONS = [
  "Northern Frontier",
  "Volga Valley",
  "Caucasia",
  "Central Steppes",
  "Outer Mongolia",
  "Siberian Frontier"
];

// Mapping of federal subjects to their new custom regions
export const regionMapping = {
    "Republic of Karelia": "Northern Frontier",
    "Arkhangelsk Oblast": "Northern Frontier",
    "Murmansk Oblast": "Northern Frontier",
    "Vologda Oblast": "Northern Frontier",
    "Komi Republic": "Northern Frontier",
    "Nenets Autonomous Okrug": "Northern Frontier",
    "Yamalo-Nenets Autonomous Okrug": "Northern Frontier",
    "Kirov Oblast": "Northern Frontier",
    "Perm Krai": "Northern Frontier",
    "Moscow": "Volga Valley",
    "Moscow Oblast": "Volga Valley",
    "Tver Oblast": "Volga Valley",
    "Smolensk Oblast": "Volga Valley",
    "Kaluga Oblast": "Volga Valley",
    "Bryansk Oblast": "Volga Valley",
    "Vladimir Oblast": "Volga Valley",
    "Yaroslavl Oblast": "Volga Valley",
    "Ivanovo Oblast": "Volga Valley",
    "Ryazan Oblast": "Volga Valley",
    "Tula Oblast": "Volga Valley",
    "Nizhny Novgorod Oblast": "Volga Valley",
    "Chuvash Republic": "Volga Valley",
    "Mari El Republic": "Volga Valley",
    "Mordovia Republic": "Volga Valley",
    "Ulyanovsk Oblast": "Volga Valley",
    "Penza Oblast": "Volga Valley",
    "Saratov Oblast": "Volga Valley",
    "Tambov Oblast": "Volga Valley",
    "Voronezh Oblast": "Volga Valley",
    "Lipetsk Oblast": "Volga Valley",
    "Kursk Oblast": "Volga Valley",
    "Belgorod Oblast": "Volga Valley",
    "Oryol Oblast": "Volga Valley",
    "Krasnodar Krai": "Caucasia",
    "Rostov Oblast": "Caucasia",
    "Republic of Adygea": "Caucasia",
    "Republic of Kalmykia": "Caucasia",
    "Stavropol Krai": "Caucasia",
    "Republic of Dagestan": "Caucasia",
    "Chechen Republic": "Caucasia",
    "Republic of Ingushetia": "Caucasia",
    "Republic of North Ossetia-Alania": "Caucasia",
    "Kabardino-Balkar Republic": "Caucasia",
    "Karachay-Cherkess Republic": "Caucasia",
    "Republic of Tatarstan": "Central Steppes",
    "Bashkortostan Republic": "Central Steppes",
    "Samara Oblast": "Central Steppes",
    "Orenburg Oblast": "Central Steppes",
    "Chelyabinsk Oblast": "Central Steppes",
    "Kurgan Oblast": "Central Steppes",
    "Sverdlovsk Oblast": "Central Steppes",
    "Udmurt Republic": "Central Steppes",
    "Altai Krai": "Central Steppes",
    "Altai Republic": "Central Steppes",
    "Novosibirsk Oblast": "Central Steppes",
    "Tomsk Oblast": "Central Steppes",
    "Kemerovo Oblast": "Central Steppes",
    "Omsk Oblast": "Central Steppes",
    "Republic of Tuva": "Outer Mongolia",
    "Republic of Khakassia": "Outer Mongolia",
    "Zabaykalsky Krai": "Outer Mongolia",
    "Buryatia Republic": "Outer Mongolia",
    "Irkutsk Oblast": "Outer Mongolia",
    "Krasnoyarsk Krai": "Siberian Frontier",
    "Sakha Republic": "Siberian Frontier",
    "Amur Oblast": "Siberian Frontier",
    "Magadan Oblast": "Siberian Frontier",
    "Kamchatka Krai": "Siberian Frontier",
    "Chukotka Autonomous Okrug": "Siberian Frontier",
    "Khabarovsk Krai": "Siberian Frontier",
    "Primorsky Krai": "Siberian Frontier",
    "Jewish Autonomous Oblast": "Siberian Frontier",
    "Sakhalin Oblast": "Siberian Frontier",
    "Republic of Crimea": "Volga Valley",
    "Sevastopol": "Volga Valley",
};

// Colors for the new custom regions on the map
export const regionColors = {
    "Northern Frontier": "#4CAF50", // Green
    "Volga Valley": "#D52B1E",    // Patriotic Red
    "Caucasia": "#FFEB3B",        // Yellow
    "Central Steppes": "#FF9800", // Orange
    "Outer Mongolia": "#FFF9C4",  // Cream Yellow
    "Siberian Frontier": "#003399" // United Blue
};

// Dummy project counts per NEW custom region for display
export const customRegionProjectCounts = CUSTOM_REGIONS.reduce((acc, region) => {
    acc[region] = Math.floor(Math.random() * 10) + 1; // Random count between 1 and 10
    return acc;
}, {});
