const partyCharterContent = {
    preamble: {
        title: "Preamble",
        text: "The United Russia Party (hereinafter referred to as “the Party”) is committed to promoting the values of unity, national pride, and the development of a stable and prosperous Russian Federation. These Bylaws serve as the foundation of the Party’s structure, operations, and principles, guiding all its members and ensuring adherence to the constitutional values of the Russian Federation."
    },
    article1: {
        title: "ARTICLE I: NAME AND PURPOSE",
        sections: [
            { id: "charter-article1-section1", title: "Section 1. Name", text: "The name of this organization shall be United Russia." },
            { id: "charter-article1-section2", title: "Section 2. Purpose", text: "The mission of United Russia is to ensure the political stability, economic prosperity, and security of the Russian Federation. We stand for national unity, the defense of Russian sovereignty, and the promotion of democratic principles in accordance with the Constitution of the Russian Federation. The Party’s efforts will focus on achieving these goals through strategic policy development, the election of capable leaders, and ensuring the integrity of the electoral process." }
        ]
    },
    article2: {
        title: "ARTICLE II: MEMBERSHIP",
        sections: [
            { id: "charter-article2-section1", title: "Section 1. Composition of Membership", text: "Membership shall consist of two representatives from each region of the Russian Federation. These individuals will represent the Party within their respective regions, serve on committees, and contribute to the development of the Party’s strategy at the national level." },
            { id: "charter-article2-section2", title: "Section 2. Key Positions", text: "Each region’s representatives serve as the Board of the National Committee. The entire Party membership will elect a Chairman, who will then appoint officers such as the Secretary, Co-Chair, Treasurer, and others as needed. These officers will manage the day-to-day operations of the Party." },
            { id: "charter-article2-section3", title: "Section 3. Membership Eligibility", text: "To be eligible for membership, individuals must demonstrate adherence to the values and principles outlined in the Party’s platform. Members must actively support the Party’s mission and be willing to work for the promotion of United Russia’s goals." }
        ]
    },
    article3: {
        title: "ARTICLE III: OFFICERS AND DUTIES",
        sections: [
            { id: "charter-article3-section1", title: "Section 1. Officers", text: "The Party shall elect the following officers:\nChairman\nCo-Chair\nTreasurer\nAdditional officers may be appointed as needed, including Legal Counsel, Fundraising Chair, or others in specialized roles." },
            { id: "charter-article3-section2", title: "Section 2. Chairman", text: "The Chairman is responsible for overseeing the operations of the Party. The Chairman will ensure alignment with the Party's principles, manage national election strategies, and serve as the public face of United Russia." },
            { id: "charter-article3-section3", title: "Section 3. Treasurer", text: "The Treasurer will manage the financial affairs of the Party, ensuring compliance with Russian federal laws on political contributions and funding. The Treasurer is responsible for maintaining transparency in the Party’s financial dealings." }
        ]
    },
    article4: {
        title: "ARTICLE IV: MEETINGS AND VOTING",
        sections: [
            { id: "charter-article4-section1", title: "Section 1. Meetings", text: "The Party shall hold at least one national meeting per year. Additional meetings may be called by the Chairman or requested by the membership. These meetings shall be open to all members, but only the Board of the National Committee and elected officers may vote on proposals or resolutions." },
            { id: "charter-article4-section2", title: "Section 2. Quorum", text: "A quorum for any official meeting of the Party shall consist of a majority of the voting members present. If a quorum is not reached, discussions may continue, but no binding votes may be held." },
            { id: "charter-article4-section3", title: "Section 3. Voting Procedures", text: "Votes shall be conducted in accordance with the Party’s guidelines. Proposals that require approval by the full Party membership will be voted on during the National Congress." }
        ]
    },
    article5: {
        title: "ARTICLE V: PLATFORM AND POLICIES",
        sections: [
            { id: "charter-article5-section1", title: "Article V Content", text: "United Russia supports policies that promote:\nNational Unity and stability in the Russian Federation.\nEconomic growth and development through market reforms.\nStrong national defense and the protection of Russia’s sovereignty.\nSocial policies that support traditional family values and the welfare of all Russian citizens." }
        ]
    },
    article6: {
        title: "ARTICLE VI: AMENDMENTS",
        sections: [
            { id: "charter-article6-section1", title: "Section 1. Amendments", text: "Amendments to these Bylaws may be proposed by any member of the Party. To be adopted, an amendment must receive approval by a two-thirds majority of the Board of the National Committee and be ratified by the full Party membership at the National Congress." }
        ]
    },
    article7: {
        title: "ARTICLE VII: MONITORING AND ENFORCEMENT",
        sections: [
            { id: "charter-article7-section1", title: "Section 1. Enforcement of Principles", text: "All members of the Party must adhere to the Party’s values and principles. Any member who violates these principles may be subject to disciplinary action, including removal from office or expulsion from the Party." },
            { id: "charter-article7-section2", title: "Section 2. Oath of Loyalty", text: "All new members and officers must take an Oath of Loyalty, affirming their commitment to uphold the principles of the Party and support its mission." }
        ]
    },
    signature: {
        title: "Signature",
        text: "SIGNED,\nVladimir Putin\nChairman of the United Russia Party"
    }
};

const partyCharterPages = [
    [partyCharterContent.preamble, partyCharterContent.article1, partyCharterContent.article2],
    [partyCharterContent.article3, partyCharterContent.article4, partyCharterContent.article5],
    [partyCharterContent.article6, partyCharterContent.article7, partyCharterContent.signature]
];

const partyPlatformContent = {
    preamble: {
        title: "PREAMBLE",
        text: `“A Strong Russia — United Russia” Our Nation’s history is defined by monumental struggles and heroic revival—from repelling foreign invasions to overcoming the devastation of the 1990s. In 2003, Russia has entered a new turning point. The Russian people no longer endure chaos, corruption, and instability—they yearn for unity, leadership, and national dignity. Formed in March 2003 through the merger of Unity and Fatherland–All Russia, United Russia emerged to lead Russia toward sovereignty, prosperity, and social cohesion. Under leaders like Interior Minister Boris Gryzlov and regional governor allies, we are the party of real results...`
    }
    // ... add all other sections from your original partyPlatformContent here
};
