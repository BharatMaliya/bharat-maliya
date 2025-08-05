import React from 'react';

const Services: React.FC = () => {
    const services = [
        {
            title: "Full-Stack Web Development",
            items: [
                "Frontend Development: React.js, Next.js, Remix, TypeScript, JavaScript",
                "Backend Development: Python, Django, FastAPI, Node.js, Express",
                "Database Design: SQL, NoSQL, ORM integration (Drizzle, Django ORM)",
                "API Development: RESTful APIs, GraphQL, Microservices architecture"
            ]
        },
        {
            title: "AI & Machine Learning Integration",
            items: [
                "AI-Powered Applications: Custom AI solutions for personalized recommendations",
                "ML Model Integration: Connecting AI/ML pipelines with web applications",
                "Data Processing: Real-time data analysis and visualization",
                "Intelligent Automation: Rule-based systems and automated workflows"
            ]
        },
        {
            title: "Enterprise Software Solutions",
            items: [
                "SaaS Platform Development: End-to-end SaaS applications with subscription management",
                "Enterprise Applications: Scalable systems for large organizations",
                "Real-time Systems: Live data processing and real-time dashboards",
                "Broadcast & Media Solutions: Specialized software for live broadcasting and graphics"
            ]
        },
        {
            title: "Cloud & DevOps",
            items: [
                "AWS Services: EC2, Lambda, S3, RDS, ECS, ECR, SES, SNS",
                "Containerization: Docker deployment and container orchestration",
                "CI/CD Pipelines: Automated testing and deployment workflows",
                "Performance Optimization: Scalable architecture and load balancing"
            ]
        },
        {
            title: "UI/UX Design & Development",
            items: [
                "Responsive Design: Mobile-first, cross-platform applications",
                "Interactive Interfaces: Dynamic maps, calendars, and real-time dashboards",
                "Modern UI Frameworks: Material-UI, Tailwind CSS, custom component libraries",
                "User Experience: Intuitive navigation and seamless user flows"
            ]
        },
        {
            title: "Database & Data Management",
            items: [
                "Database Design: Relational and NoSQL database architecture",
                "Data Migration: Seamless data transfer and system integration",
                "Performance Tuning: Query optimization and database performance",
                "Real-time Analytics: Live data visualization and reporting"
            ]
        }
    ];

    return (
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Services I Offer</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                            <ul className="space-y-2">
                                {service.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-sm text-gray-600 dark:text-gray-400">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services; 