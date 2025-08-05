
const About: React.FC = () => {
    const highlights = [
        {
            number: "4+",
            label: "Years Experience",
            color: "blue"
        },
        {
            number: "15+",
            label: "Production Apps",
            color: "green"
        },
        {
            number: "1B+",
            label: "Viewers Reached",
            color: "purple"
        },
        {
            number: "75%",
            label: "Cricket Broadcasting",
            color: "orange"
        }
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
            green: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
            purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
            orange: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
        };
        return colors[color as keyof typeof colors] || colors.blue;
    };

    return (
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            I&apos;m a dedicated software developer with <strong>4+ years</strong> of experience in creating robust, scalable web applications.
                            My journey in software development has been driven by a passion for solving complex problems and building
                            user-centric solutions for high-stakes environments.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            I specialize in full-stack development with expertise in modern technologies like Python, TypeScript,
                            Django, Next.js, and React.js. My work spans across <strong>sports broadcasting</strong>, <strong>travel technology</strong>,
                            and <strong>enterprise SaaS</strong> platforms.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            <strong>Key Achievements:</strong>
                        </p>
                        <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                            <li>• <strong>Crickstat</strong> covers <strong>75% of professional cricket broadcasting</strong> worldwide</li>
                            <li>• <strong>UIDAI BioChallenge</strong> - Official platform for India&apos;s elite identity authority in collaboration with <strong>IIIT Hyderabad</strong></li>
                            <li>• <strong>IPL Digital Auction</strong> - First-ever digital auction platform handling <strong>$100M+</strong> in transactions</li>
                            <li>• <strong>1+ billion viewers</strong> reached through live broadcast solutions</li>
                        </ul>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects,
                            and staying updated with the latest industry trends.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {highlights.map((highlight, index) => (
                            <div key={index} className={`${getColorClasses(highlight.color)} p-6 rounded-lg`}>
                                <h3 className="text-xl font-semibold mb-2">{highlight.number}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{highlight.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 