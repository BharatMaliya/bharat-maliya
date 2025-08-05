import React from 'react';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Python", "TypeScript", "JavaScript"]
        },
        {
            title: "Frameworks & Libraries",
            skills: ["React.js", "Next.js", "Remix", "Node.js", "Express", "Django", "FastAPI", "Redux"]
        },
        {
            title: "Web Technologies",
            skills: ["HTML", "CSS", "Fabric.js", "Mapbox"]
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "Docker", "AWS (ECR, ECS, SES, SNS, Lambda, S3, RDS)"]
        },
        {
            title: "Databases & ORMs",
            skills: ["SQL", "NoSQL", "Drizzle ORM", "Django ORM"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS", "Docker", "CI/CD", "Microservices"]
        }
    ];

    return (
        <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Technical Skills</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">Key Achievements</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">75%</div>
                            <div className="text-gray-700 dark:text-gray-300">Professional Cricket Broadcasting Coverage</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">1B+</div>
                            <div className="text-gray-700 dark:text-gray-300">Viewers Reached</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">$100M+</div>
                            <div className="text-gray-700 dark:text-gray-300">Transaction Volume</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">15+</div>
                            <div className="text-gray-700 dark:text-gray-300">Production Applications</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills; 