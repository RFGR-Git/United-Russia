// Data for projects, including detailed information for the new project detail pages
export const projectsData = [
  { id: 'olderGeneration', icon: '👴', name: 'olderGeneration', regionsCoveredCount: 72 },
  { id: 'safeRoads', icon: '🛣️', name: 'safeRoads', regionsCoveredCount: 60 },
  { id: 'urbanEnvironment', icon: '🏙️', name: 'urbanEnvironment', regionsCoveredCount: 75 },
  { id: 'childrensSports', icon: '⚽', name: 'childrensSports', regionsCoveredCount: 60 },
  { id: 'oneCountryAccessibleEnvironment', icon: '♿', name: 'oneCountryAccessibleEnvironment', regionsCoveredCount: 55 },
  { id: 'womensMovementOfUnitedRussia', icon: '♀️', name: 'womensMovementOfUnitedRussia', regionsCoveredCount: 45 },
  { id: 'protectionOfWildlife', icon: '🐻', name: 'protectionOfWildlife', regionsCoveredCount: 70 },
  { id: 'healthyFuture', icon: '🏥', name: 'healthyFuture', regionsCoveredCount: 65 },
  { id: 'greenEconomy', icon: '♻️', name: 'greenEconomy', regionsCoveredCount: 50 },
  { id: 'historicalMemory', icon: '📜', name: 'historicalMemory', regionsCoveredCount: 85 },
  { id: 'strongFamily', icon: '👨‍👩‍👧‍👦', name: 'strongFamily', regionsCoveredCount: 70 },
  { id: 'cultureOfTheSmallHomeland', icon: '🎭', name: 'cultureOfTheSmallHomeland', regionsCoveredCount: 60 },
  { id: 'aWorldOfPossibilities', icon: '🌐', name: 'aWorldOfPossibilities', regionsCoveredCount: 55 },
  { id: 'myCareerWithUnitedRussia', icon: '💼', name: 'myCareerWithUnitedRussia', regionsCoveredCount: 40 },
  { id: 'newSchool', icon: '🏫', name: 'newSchool', regionsCoveredCount: 78 },
  { id: 'entrepreneurship', icon: '💡', name: 'entrepreneurship', regionsCoveredCount: 62 },
  { id: 'russianVillage', icon: '🏡', name: 'russianVillage', regionsCoveredCount: 58 },
  { id: 'digitalRussia', icon: '💻', name: 'digitalRussia', regionsCoveredCount: 68 },
  { id: 'cleanCountry', icon: '🗑️', name: 'cleanCountry', regionsCoveredCount: 77 },
  { id: 'housingAndPublicUtilities', icon: '🏘️', name: 'housingAndPublicUtilities', regionsCoveredCount: 53 },
];

// Detailed project information (from interactive map.txt)
export const projectDetails = {
    "olderGeneration": { // Use the ID from projectsData
        icon: "👴",
        logo: "/images/older generation icon.jpg", // Placeholder image
        tagline: "Empowering Healthy, Active Longevity in Russia.",
        sidebarLinks: [
            { id: "justification", icon: "💡", text: "Justification of the Project" },
            { id: "objectives", icon: "🎯", text: "Project Objectives" },
            { id: "work-formats", icon: "⚙️", text: "Main Work Formats" },
            { id: "indicators", icon: "✅", text: "Individual Project Indicators" },
        ],
        contentHtml: `
            <header class="text-center mb-10">
                <h1 class="text-5xl font-bold mb-2">Older Generation Project</h1>
                <p class="text-xl text-gray-600">Empowering Healthy, Active Longevity in Russia.</p>
            </header>
            <div class="max-w-3xl mx-auto">
                <section id="justification" class="mb-10">
                    <h2 class="text-2xl font-bold mb-4 flex items-center">
                        <span class="text-3xl mr-3 accent-icon">💡</span> Justification of the Project
                    </h2>
                    <p class="text-lg leading-relaxed">
                        With increasing life expectancy and a growing proportion of seniors in the population, it's crucial to ensure that our older generation can live full, healthy, and active lives. This project addresses the unique challenges faced by seniors, from healthcare access to social engagement, contributing to a more inclusive and supportive society.
                    </p>
                </section>
                <div class="section-divider"></div>
                <section id="objectives" class="mb-10">
                    <h2 class="text-2xl font-bold mb-4 flex items-center">
                        <span class="text-3xl mr-3 accent-icon">🎯</span> Project Objectives
                    </h2>
                    <ul class="list-none space-y-3 text-lg">
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Promote healthy and active lifestyles among seniors.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Enhance digital literacy and technological access for the elderly.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Foster social inclusion and community engagement for older adults.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Ensure accessible and quality healthcare services tailored for seniors.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Support continued employment and skill development opportunities for older workers.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Improve living conditions and safety for the elderly.</li>
                    </ul>
                </section>
                <div class="section-divider"></div>
                <section id="work-formats" class="mb-10">
                    <h2 class="text-2xl font-bold mb-4 flex items-center">
                        <span class="text-3xl mr-3 accent-icon">⚙️</span> Main Work Formats (Project Activities)
                    </h2>
                    <ul class="list-none space-y-3 text-lg">
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Organizing educational seminars and workshops.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Hosting sports and recreation events for seniors.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Implementing digital literacy training programs.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Facilitating volunteer initiatives for older adults.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Conducting public awareness campaigns on healthy aging.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Collaborating with healthcare providers for specialized senior care.</li>
                    </ul>
                </section>
                <div class="section-divider"></div>
                <section id="indicators" class="mb-0">
                    <h2 class="text-2xl font-bold mb-4 flex items-center">
                        <span class="text-3xl mr-3 accent-icon">✅</span> Individual Project Indicators
                    </h2>
                    <ul class="list-none space-y-3 text-lg">
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Number of educational events held annually.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Percentage of seniors trained in computer literacy.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Number of "silver volunteers" engaged in community projects.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Total number of recreational and social events organized in senior centers.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Number of military families with elderly members receiving support.</li>
                    </ul>
                </section>
            </div>
        `
    },
    "safeRoads": { // Use the ID from projectsData
        icon: "🛣️",
        logo: "/images/safe roads icon.jpg", // Placeholder image
        tagline: "Reducing Traffic Accidents and Fatalities.",
        sidebarLinks: [
            { id: "justification-sr", icon: "💡", text: "Justification of the Project" },
            { id: "objectives-sr", icon: "🎯", text: "Project Objectives" },
            { id: "work-formats-sr", icon: "⚙️", text: "Main Work Formats" },
            { id: "indicators-sr", icon: "✅", text: "Individual Project Indicators" },
        ],
        contentHtml: `
            <header class="text-center mb-10">
                <h1 class="text-5xl font-bold mb-2">Safe Roads Project</h1>
                <p class="text-xl text-gray-600">Reducing Traffic Accidents and Fatalities.</p>
            </header>
            <div class="max-w-3xl mx-auto">
                <section id="justification-sr" class="mb-10">
                    <h2 class="text-2xl font-bold mb-4 flex items-center">
                        <span class="text-3xl mr-3 accent-icon">💡</span> Justification of the Project
                    </h2>
                    <p class="text-lg leading-relaxed">
                        Since 2003, Russia has averaged more than 130,000 traffic accidents with injuries each year. Of these, over 35,000 involved vulnerable road users—particularly pedestrians and children. Pedestrian-related accidents make up 27–30% of all reported incidents annually.
                    </p>
                    <p class="text-lg leading-relaxed mt-4">
                        Each year, road accidents result in approximately 15,000 fatalities, including more than 3,850 children. The root causes of these accidents include:
                    </p>
                    <ul class="list-disc list-inside text-lg mt-4">
                        <li>Disregard for traffic rules (responsible for up to 60% of accidents)</li>
                        <li>Poor road conditions (affecting nearly 40% of roads as of 2022)</li>
                        <li>Lack of modern road safety features and digital traffic systems.</li>
                    </ul>
                    <p class="text-lg leading-relaxed mt-4">
                        The “Safe Roads” project is a national initiative aimed at significantly reducing injuries and deaths on Russian roads by addressing these systemic issues.
                    </p>
                </section>
                <div class="section-divider"></div>
                <section id="objectives-sr" class="mb-10">
                    <h2 class="text-2xl font-bold mb-4 flex items-center">
                        <span class="text-3xl mr-3 accent-icon">🎯</span> Project Objectives
                    </h2>
                    <ul class="list-none space-y-3 text-lg">
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Reduce road accidents and fatalities—especially among pedestrians and children, who account for over 25% of all traffic injuries.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Cut the number of unsafe road sections near schools—currently estimated at over 10,000 nationwide.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Promote road safety education, particularly in schools, where fewer than 50% currently offer formal traffic safety programs.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Modernize traffic safety laws to align with global best practices; more than 60 legislative acts have been proposed or updated since 2015.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Support the national “Infrastructure for Life” project, including the modernization of over 500,000 km of roads and implementation of intelligent transport systems in over 60 urban agglomerations.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Enhance cooperation between the public and authorities—over 35% of citizens express willingness to participate in local road monitoring initiatives.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Promote civic engagement by encouraging the formation of local watchdog and public monitoring groups.</li>
                    </ul>
                </section>
                <div class="section-divider"></div>
                <section id="work-formats-sr" class="mb-10">
                    <h2 class="text-2xl font-bold mb-4 flex items-center">
                        <span class="text-3xl mr-3 accent-icon">⚙️</span> Main Work Formats (Project Activities)
                    </h2>
                    <ul class="list-none space-y-3 text-lg">
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Implement the "Home-School-Home" program: Targeting over 10,000 school zones with high accident rates for redesign and safety improvements.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Conduct annual surveys with over 100,000 participants to identify concerns and suggestions from citizens.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Organize national school competitions: "Road Safety Corner" (5,000+ schools), "Safe Roads Through the Eyes of a Child" (25,000+ entries), "Bring the Traffic Light to Life" (10,000+ entries).</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Launch public awareness campaigns that reach more than 3 million citizens yearly, with targeted materials for children and parents.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Conduct joint events with national organizations—e.g., with the Russian Red Cross and youth groups—to amplify road safety education.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Organize public inspections: Annually overseeing the use of tens of billions of rubles allocated to road construction and repairs.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Monitor smart infrastructure deployment in over 60 major cities as part of national intelligent transport system projects.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Draft and advocate for 15–20 new federal and regional road safety regulations each year.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Compile and distribute best practices from over 80 regional initiatives under the umbrella of national road safety programs.</li>
                    </ul>
                </section>
                <div class="section-divider"></div>
                <section id="indicators-sr" class="mb-0">
                    <h2 class="text-2xl font-bold mb-4 flex items-center">
                        <span class="text-3xl mr-3 accent-icon">✅</span> Individual Project Indicators
                    </h2>
                    <ul class="list-none space-y-3 text-lg">
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Annual participation in project events: 90,000+ individuals, including students, teachers, traffic officers, and local volunteers.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> By September 2026, achieve a 50% reduction in the number of unsafe road sections near educational institutions—down from approximately 10,000 to 5,000 sites.</li>
                        <li class="flex items-center"><span class="text-xl mr-3 accent-icon">•</span> Improve citizen satisfaction with local road safety from current levels (around 40%) to at least 70% by 2027, as measured by public surveys.</li>
                    </ul>
                </section>
            </div>
        `
    },
    // Add other projects here with similar detailed structure
    // Placeholder for other projects
    "urbanEnvironment": {
        icon: "🏙️", logo: "/images/urban environment icon.jpg", tagline: "Enhancing Urban Spaces for Better Living.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Urban Environment Project</h1><p class="text-xl text-gray-600">Enhancing Urban Spaces for Better Living.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Urban Environment Project is coming soon.</p>`
    },
    "childrensSports": {
        icon: "⚽", logo: "/images/children sports icon.jpg", tagline: "Promoting Youth Sports and Healthy Lifestyles.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Children's Sports Project</h1><p class="text-xl text-gray-600">Promoting Youth Sports and Healthy Lifestyles.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Children's Sports Project is coming soon.</p>`
    },
    "oneCountryAccessibleEnvironment": {
        icon: "♿", logo: "/images/accessible environment icon.jpg", tagline: "Creating Inclusive Spaces for All Citizens.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">One Country - Accessible Environment Project</h1><p class="text-xl text-gray-600">Creating Inclusive Spaces for All Citizens.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Accessible Environment Project is coming soon.</p>`
    },
    "womensMovementOfUnitedRussia": {
        icon: "♀️", logo: "/images/women movement icon.jpg", tagline: "Empowering Women in Politics and Society.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Women's Movement of United Russia Project</h1><p class="text-xl text-gray-600">Empowering Women in Politics and Society.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Women's Movement Project is coming soon.</p>`
    },
    "protectionOfWildlife": {
        icon: "🐻", logo: "/images/wildlife protection icon.jpg", tagline: "Conserving Russia's Natural Heritage.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Protection of Wildlife Project</h1><p class="text-xl text-gray-600">Conserving Russia's Natural Heritage.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Protection of Wildlife Project is coming soon.</p>`
    },
    "healthyFuture": {
        icon: "🏥", logo: "/images/healthy future icon.jpg", tagline: "Investing in Public Health and Well-being.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Healthy Future Project</h1><p class="text-xl text-gray-600">Investing in Public Health and Well-being.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Healthy Future Project is coming soon.</p>`
    },
    "greenEconomy": {
        icon: "♻️", logo: "/images/green economy icon.jpg", tagline: "Fostering Sustainable Economic Development.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Green Economy Project</h1><p class="text-xl text-gray-600">Fostering Sustainable Economic Development.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Green Economy Project is coming soon.</p>`
    },
    "historicalMemory": {
        icon: "📜", logo: "/images/historical memory icon.jpg", tagline: "Preserving Russia's Rich History and Culture.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Historical Memory Project</h1><p class="text-xl text-gray-600">Preserving Russia's Rich History and Culture.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Historical Memory Project is coming soon.</p>`
    },
    "strongFamily": {
        icon: "👨‍👩‍👧‍👦", logo: "/images/strong family icon.jpg", tagline: "Supporting Families as the Foundation of Society.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Strong Family Project</h1><p class="text-xl text-gray-600">Supporting Families as the Foundation of Society.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Strong Family Project is coming soon.</p>`
    },
    "cultureOfTheSmallHomeland": {
        icon: "🎭", logo: "/images/culture icon.jpg", tagline: "Nurturing Local Culture and Traditions.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Culture of the Small Homeland Project</h1><p class="text-xl text-gray-600">Nurturing Local Culture and Traditions.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Culture of the Small Homeland Project is coming soon.</p>`
    },
    "aWorldOfPossibilities": {
        icon: "🌐", logo: "/images/world of possibilities icon.jpg", tagline: "Expanding Opportunities for All Russians.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">A World of Possibilities Project</h1><p class="text-xl text-gray-600">Expanding Opportunities for All Russians.</p><p class="text-lg leading-relaxed mt-4">Detailed information about A World of Possibilities Project is coming soon.</p>`
    },
    "myCareerWithUnitedRussia": {
        icon: "💼", logo: "/images/career icon.jpg", tagline: "Building Career Paths with the Party.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">My Career with United Russia Project</h1><p class="text-xl text-gray-600">Building Career Paths with the Party.</p><p class="text-lg leading-relaxed mt-4">Detailed information about My Career with United Russia Project is coming soon.</p>`
    },
    "newSchool": {
        icon: "🏫", logo: "/images/new school icon.jpg", tagline: "Modernizing Education for Future Generations.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">New School Project</h1><p class="text-xl text-gray-600">Modernizing Education for Future Generations.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the New School Project is coming soon.</p>`
    },
    "entrepreneurship": {
        icon: "💡", logo: "/images/entrepreneurship icon.jpg", tagline: "Fostering Innovation and Business Growth.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Entrepreneurship Project</h1><p class="text-xl text-gray-600">Fostering Innovation and Business Growth.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Entrepreneurship Project is coming soon.</p>`
    },
    "russianVillage": {
        icon: "🏡", logo: "/images/russian village icon.jpg", tagline: "Revitalizing Rural Communities Across Russia.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Russian Village Project</h1><p class="text-xl text-gray-600">Revitalizing Rural Communities Across Russia.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Russian Village Project is coming soon.</p>`
    },
    "digitalRussia": {
        icon: "💻", logo: "/images/digital russia icon.jpg", tagline: "Advancing Digital Transformation and Connectivity.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Digital Russia Project</h1><p class="text-xl text-gray-600">Advancing Digital Transformation and Connectivity.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Digital Russia Project is coming soon.</p>`
    },
    "cleanCountry": {
        icon: "🗑️", logo: "/images/clean country icon.jpg", tagline: "Promoting Environmental Purity and Sustainability.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Clean Country Project</h1><p class="text-xl text-gray-600">Promoting Environmental Purity and Sustainability.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Clean Country Project is coming soon.</p>`
    },
    "housingAndPublicUtilities": {
        icon: "🏘️", logo: "/images/housing icon.jpg", tagline: "Improving Housing and Public Services.",
        sidebarLinks: [{ id: "overview", icon: "💡", text: "Overview" }],
        contentHtml: `<h1 class="text-5xl font-bold mb-2">Housing and Public Utilities Project</h1><p class="text-xl text-gray-600">Improving Housing and Public Services.</p><p class="text-lg leading-relaxed mt-4">Detailed information about the Housing and Public Utilities Project is coming soon.</p>`
    },
};

// Mock data for federal subjects and their project assignments
// This function will be called once the GeoJSON data (containing federal subject names) is loaded
export const projectsPerFederalSubject = new Map(); // Map: federalSubjectName -> Set of project IDs
export const federalSubjectsPerProject = new Map(); // Map: project ID -> Set of federalSubjectNames

export const assignMockProjectRegions = (allFederalSubjects) => {
    // Clear previous assignments
    projectsPerFederalSubject.clear();
    projectsData.forEach(p => federalSubjectsPerProject.set(p.id, new Set()));

    // Shuffle federal subjects to pick randomly
    const shuffledFederalSubjects = [...allFederalSubjects].sort(() => 0.5 - Math.random());

    // Assign regions for each project based on its regionsCoveredCount
    projectsData.forEach(project => {
        // Ensure we don't try to get more regions than available
        const numRegionsToAssign = Math.min(project.regionsCoveredCount, shuffledFederalSubjects.length);
        const projectRegions = shuffledFederalSubjects.slice(0, numRegionsToAssign);

        projectRegions.forEach(federalSubject => {
            if (!projectsPerFederalSubject.has(federalSubject)) {
                projectsPerFederalSubject.set(federalSubject, new Set());
            }
            projectsPerFederalSubject.get(federalSubject).add(project.id);
            federalSubjectsPerProject.get(project.id).add(federalSubject);
        });
        // Rotate the shuffled list for the next project to get different regions
        shuffledFederalSubjects.push(...shuffledFederalSubjects.splice(0, numRegionsToAssign));
    });
};

// Total unique regions covered by any project (calculated dynamically)
export const getTotalRegionsCovered = () => {
    let allCoveredRegions = new Set();
    projectsPerFederalSubject.forEach((projects, region) => {
        if (projects.size > 0) {
            allCoveredRegions.add(region);
        }
    });
    return allCoveredRegions.size;
};

// Total number of current party projects (from projectsData array length)
export const getTotalProjectsCount = () => projectsData.length;
