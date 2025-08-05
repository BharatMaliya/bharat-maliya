const Hero: React.FC = () => {
    return (
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        Bharat Maliya
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
                        Software Developer | Python, JavaScript, TypeScript, React.js, Remix, Next.js, Django, FastAPI
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto mb-12">
                        Innovative software developer with over <strong>4+ years</strong> of experience designing and delivering mission-critical solutions for high-stakes environments.
                        <strong> Delivered 15+ production applications</strong> across diverse domains including sports broadcasting, travel technology, and enterprise SaaS.
                        Recognized for rapid development, problem-solving, and delivering robust applications for <strong>live broadcasts watched by 1+ billion viewers</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="/resume/resume.md"
                            target="_blank"
                            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 