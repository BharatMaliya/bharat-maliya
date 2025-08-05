import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            company: "Tractable.ai",
            position: "Software Developer",
            period: "June 2025 – Present",
            description: "Contributing to AI-driven products that automate visual damage appraisal for insurance. Full-stack development across Remix (frontend) and Node.js/Express (backend), integrating with internal AI APIs for image analysis and decision automation.",
            achievements: [
                "Built user interfaces in Remix for interacting with AI-generated assessments, processing 10,000+ damage claims daily",
                "Developed backend services with Node.js and Express, connecting to AI pipelines with 99.9% uptime",
                "Managed type-safe data models using Drizzle ORM and TypeScript, reducing bugs by 40%",
                "Worked with AI/ML teams to surface predictions in the UI, improving accuracy by 25%",
                "Optimized APIs for performance and scalability, reducing response times by 60%"
            ]
        },
        {
            company: "wTVision Solutions Pvt. Ltd.",
            position: "Software Developer (R&D Department)",
            period: "Jul 2023 – June 2025",
            description: "Lead developer in the elite R&D team, architecting mission-critical broadcast solutions for the world's premier sporting events. Specializing in rapid development of high-stakes software that powers live broadcasts watched by billions.",
            highlights: [
                {
                    title: "Cricket Field Planning Platform – Indian Premier League (IPL)",
                    achievements: [
                        "Delivered this cutting-edge project in just 10 days, used in the world's largest cricket league",
                        "Empowered cricket experts to strategically plan field positions for 74+ IPL matches annually",
                        "Engineered interface for real-time JioHotstar broadcast graphics for 1+ billion viewers",
                        "Delivered complete solution under IPL's high-pressure broadcast timelines with 100% uptime",
                        "Adopted by legendary cricket personalities across 10+ IPL franchises"
                    ]
                },
                {
                    title: "Crickstat – Enterprise Broadcast Management System",
                    achievements: [
                        "Developed 8+ specialized applications enhancing match management and broadcast graphics",
                        "Pioneered enterprise-scale system deployed in IPL, BPL, and Champions Trophy with 50+ live matches annually",
                        "Built Python/Django/FastAPI microservices for real-time scoring and broadcast automation, processing 1000+ data points per second",
                        "Integrated Unreal Engine, Pixotope, and R3 for next-gen broadcast visuals with sub-second latency",
                        "Built automated graphics systems for production efficiency, reducing manual work by 80%"
                    ]
                },
                {
                    title: "IPL Digital Auction Command Center",
                    achievements: [
                        "Spearheaded development of IPL's digital auction system, the first-ever digital auction platform for cricket",
                        "Architected platform handling $100M+ in virtual player valuations using Next.js, TypeScript, Python, Django",
                        "Engineered budget-tracking for 10 franchises with real-time updates",
                        "Designed men's/women's dual-themed auction UIs supporting 500+ concurrent users",
                        "Built real-time analytics dashboard for bidding decisions with millisecond response times"
                    ]
                }
            ]
        },
        {
            company: "Banff Sea Pte. Ltd.",
            position: "Frontend Developer",
            period: "Oct 2022 – Jul 2023",
            description: "Led frontend for Tripkliq, an AI-powered social travel platform.",
            highlights: [
                {
                    title: "Tripkliq – AI-Enhanced Social Travel Platform",
                    achievements: [
                        "Built React.js + Redux + Mapbox-based platform for interactive itinerary planning with 50,000+ active users",
                        "Added social features: follow system, live chat, and AI-generated recommendations serving 1000+ daily recommendations",
                        "Built budget tracker with direct bookings and a social travel feed for sharing experiences, processing $500K+ in bookings"
                    ]
                },
                {
                    title: "Tripkliq InRoom – Smart Hotel Travel Experience Platform",
                    achievements: [
                        "Created QR-based smart concierge system using React.js + AI deployed across 25+ hotels",
                        "Enabled guests to access contextual experiences by scanning location-specific QR codes, serving 10,000+ monthly users"
                    ]
                }
            ]
        },
        {
            company: "Biometrics and Security Lab, IIIT Hyderabad",
            position: "Software Developer",
            period: "Jan 2024 – Jan 2025",
            description: "Built a research platform for coding challenges and performance leaderboards.",
            highlights: [
                {
                    title: "UIDAI BioChallenge",
                    achievements: [
                        "Architected web platform for researcher participation and result tracking with 500+ registered researchers",
                        "Built frontend with Next.js + TypeScript, backend with Python/Django processing 1000+ submissions",
                        "Added scalable user auth, solution grading, real-time dashboards, and leaderboards with 99.9% accuracy",
                        "Streamlined solution submissions with instant feedback, reducing processing time by 70%"
                    ]
                }
            ]
        }
    ];

    return (
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Professional Experience</h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-8">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.position}</p>
                                <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">{exp.description}</p>

                            {exp.achievements && (
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Contributions:</h4>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, idx) => (
                                            <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {exp.highlights && (
                                <div className="space-y-6">
                                    {exp.highlights.map((highlight, idx) => (
                                        <div key={idx} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{highlight.title}</h4>
                                            <ul className="space-y-2">
                                                {highlight.achievements.map((achievement, achievementIdx) => (
                                                    <li key={achievementIdx} className="text-gray-700 dark:text-gray-300 flex items-start">
                                                        <span className="text-blue-500 mr-2">•</span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience; 