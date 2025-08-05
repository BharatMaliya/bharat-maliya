import React from 'react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Tripkliq: AI-Enhanced Social Travel Planning Platform",
            technologies: "React.js | TypeScript",
            description: "A comprehensive travel platform with AI-powered recommendations and social features",
            features: [
                "AI Trip Planner: Built an AI system for personalized itineraries based on preferences, budgets, and destinations, serving 50,000+ users",
                "Interactive Maps & Calendars: Developed dynamic trip planning tools with maps and calendar views, processing 1000+ daily recommendations",
                "Social & Collaboration: Added profiles, follow system, chat, and shared trip planning features with 10,000+ active connections",
                "Booking & Budgeting: Integrated flight/hotel bookings, budget tracking, and auto-scheduling, processing $500K+ in bookings",
                "Media Sharing Feed: Created a social feed for sharing photos, videos, and travel updates with 5,000+ daily posts"
            ]
        },
        {
            title: "BioChallenge: Unique Identification Authority of India BioChallenge",
            technologies: "Next.js | Python",
            description: "Official coding challenge platform for UIDAI in collaboration with IIIT Hyderabad - India's elite identity authority and one of India's best engineering colleges",
            features: [
                "Official Platform: Developed an official coding challenge platform for UIDAI in collaboration with IIIT Hyderabad",
                "Secure Web Portal: Built secure web portal for researchers to participate in coding contests with 500+ registered researchers",
                "Modern Frontend: Designed frontend using Next.js and TypeScript for smooth user experience with 99.9% uptime",
                "Robust Backend: Created backend with Python and Django for authentication, challenge management, and auto-grading processing 1000+ submissions",
                "Real-time Leaderboard: Integrated live leaderboard with real-time updates to display top performers with sub-second updates",
                "Instant Feedback: Enabled solution submissions with instant feedback and ranking, reducing processing time by 70%"
            ]
        },
        {
            title: "IPL Auction App: IPL Auction Command Centre",
            technologies: "Next.js | TypeScript | Python | Django",
            description: "First-ever digital auction platform for cricket, handling multi-million dollar transactions",
            features: [
                "High-Stakes Platform: Led development of the IPL Digital Auction Command Center, the first-ever digital platform for managing player auctions in the world's biggest cricket league",
                "Multi-Million Dollar Transactions: Architected platform handling $100M+ in virtual player valuations with real-time processing",
                "Real-time Monitoring: Built real-time auction monitoring and live bidding updates with millisecond response times",
                "Precise Budget Tracking: Engineered budget-tracking algorithms for 10 IPL franchises with 100% accuracy",
                "Dynamic Dashboard: Created dynamic dashboard displaying bids, available funds, and player status supporting 500+ concurrent users"
            ]
        },
        {
            title: "IPL Cricket Field Planning",
            technologies: "React.js",
            description: "High-impact field planning platform for the world's largest cricket league",
            features: [
                "Premier League Platform: Delivered high-impact field planning platform for the world's largest cricket league, the IPL",
                "Strategic Planning: Built system allowing cricket analysts and strategists to meticulously plan fielding positions against specific players for 74+ IPL matches annually",
                "Broadcast Integration: Engineered solution that transforms complex strategies into real-time broadcast graphics with sub-second latency",
                "Billion-Viewer Impact: Enhanced match analysis and fan engagement for over 1+ billion viewers on platforms like JioCinema and Hotstar",
                "Rapid Delivery: Engineered complete solution within just 10 days for IPL's live broadcasts with 100% uptime"
            ]
        },
        {
            title: "Crickstat: Enterprise Cricket Broadcast & Match Management System",
            technologies: "Python | Django | FastAPI",
            description: "Covers 75% of professional cricket broadcasting worldwide - the most comprehensive cricket broadcast system",
            features: [
                "Enterprise-Grade System: Developed large-scale, enterprise-grade cricket broadcast management system for high-profile tournaments including IPL, BPL, and Champions Trophy",
                "Multiple Applications: Built 8+ specialized applications that streamline live match operations and power automated broadcast graphics",
                "Automated Graphics: Created automated generation of dynamic on-air graphics processing 1000+ data points per second",
                "Broadcast Integration: Engineered seamless integration with live broadcasting workflows with sub-second latency",
                "Scalable Architecture: Designed scalable architecture for simultaneous multi-match operations supporting 50+ live matches annually"
            ]
        },
        {
            title: "Incentiwise Landing Page",
            technologies: "Next.js | Python",
            description: "High-converting marketing landing page for incentive automation platform",
            features: [
                "High-Converting Design: Designed and developed a high-converting landing page to showcase features of the incentive automation platform",
                "Modern UI: Focused on clean, modern UI with clear messaging to highlight product benefits for HR and finance teams",
                "Performance Optimized: Optimized for fast load times, SEO, and responsive design across devices",
                "Lead Generation: Integrated lead capture forms and call-to-action sections to drive sign-ups and inquiries",
                "Maintainable Code: Developed using modern web technologies for easy maintenance and scalability"
            ]
        },
        {
            title: "Incentiwise: SaaS Platform for Employee Incentives & Payouts",
            technologies: "Next.js | TypeScript | Python",
            description: "Comprehensive SaaS platform for automated employee incentive and commission management",
            features: [
                "Automated Management: Developed a SaaS platform for automated employee incentive and commission management",
                "Complex Plans: Built tools for creating, managing, and tracking complex incentive plans across departments",
                "Intuitive Dashboards: Designed intuitive dashboards for HR and finance teams to monitor payouts and performance",
                "Rule-Based Automation: Integrated automation for calculating incentives based on predefined rules and KPIs",
                "Enterprise Ready: Built with modern web technologies for scalability, security, and ease of use"
            ]
        },
        {
            title: "Tripkliq InRoom: Smart QR-Based Concierge System",
            technologies: "Next.js | AI | TypeScript",
            description: "Innovative QR-based smart concierge platform for enhanced hotel guest experiences",
            features: [
                "Innovative Platform: Developed an innovative QR-based smart concierge platform designed to enhance hotel guest experiences",
                "Instant Access: Enabled hotel guests to instantly access personalized city recommendations, experiences, and services by scanning QR codes deployed across 25+ hotels",
                "Personalized Recommendations: Built personalized city guides and recommendations based on hotel location and guest travel dates serving 10,000+ monthly users",
                "Seamless UX: Created seamless and intuitive user experience to explore local attractions, dining, events, and more with 99.9% user satisfaction",
                "Hotel Integration: Designed for easy integration into hotel systems and room environments with zero downtime deployment"
            ]
        }
    ];

    return (
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Projects</h2>
                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{project.technologies}</p>
                                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                            </div>
                            <div className="space-y-3">
                                {project.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1">•</span>
                                        <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 