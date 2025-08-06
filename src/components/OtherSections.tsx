import Link from 'next/link';

export function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">Professional Summary</h2>
                    <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                        Innovative software developer with over <strong>4+ years</strong> of experience designing and delivering mission-critical solutions for high-stakes environments. Proven expertise in full-stack development using Python, JavaScript, TypeScript and modern frameworks. <strong>Delivered 15+ production applications</strong> across diverse domains including sports broadcasting, travel technology, and enterprise SaaS. Recognized for rapid development, problem-solving, and delivering robust applications for <strong>live broadcasts watched by 1+ billion viewers</strong>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600 mb-2">4+</div>
                            <div className="text-neutral-600">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                            <div className="text-neutral-600">Production Apps</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600 mb-2">1B+</div>
                            <div className="text-neutral-600">Viewers Reached</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">Technical Expertise</h2>
                    <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Comprehensive full-stack development skills with expertise in modern frameworks and cloud technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Programming Languages */}
                    <div className="bg-neutral-50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                                💻
                            </span>
                            Programming Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">Python</span>
                            <span className="px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">TypeScript</span>
                            <span className="px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">JavaScript</span>
                        </div>
                    </div>

                    {/* Frontend Frameworks */}
                    <div className="bg-neutral-50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center mr-3">
                                🎨
                            </span>
                            Frontend & Frameworks
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-2 bg-secondary-600 text-white rounded-lg text-sm font-medium">React.js</span>
                            <span className="px-3 py-2 bg-secondary-600 text-white rounded-lg text-sm font-medium">Next.js</span>
                            <span className="px-3 py-2 bg-secondary-600 text-white rounded-lg text-sm font-medium">Remix</span>
                            <span className="px-3 py-2 bg-secondary-600 text-white rounded-lg text-sm font-medium">Redux</span>
                        </div>
                    </div>

                    {/* Backend Technologies */}
                    <div className="bg-neutral-50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                                ⚙️
                            </span>
                            Backend Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">Django</span>
                            <span className="px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">FastAPI</span>
                            <span className="px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">Node.js</span>
                            <span className="px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">Express</span>
                        </div>
                    </div>

                    {/* Cloud & DevOps */}
                    <div className="bg-neutral-50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center mr-3">
                                ☁️
                            </span>
                            Cloud & DevOps
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-2 bg-secondary-600 text-white rounded-lg text-sm font-medium">AWS</span>
                            <span className="px-3 py-2 bg-secondary-600 text-white rounded-lg text-sm font-medium">Docker</span>
                            <span className="px-3 py-2 bg-secondary-600 text-white rounded-lg text-sm font-medium">Git</span>
                        </div>
                    </div>

                    {/* Specialized Technologies */}
                    <div className="bg-neutral-50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                                🚀
                            </span>
                            Specialized Tech
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">Fabric.js</span>
                            <span className="px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">Mapbox</span>
                            <span className="px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">AI/ML Integration</span>
                        </div>
                    </div>

                    {/* Database & Storage */}
                    <div className="bg-neutral-50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center mr-3">
                                🗄️
                            </span>
                            Database & Storage
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-2 bg-secondary-600 text-white rounded-lg text-sm font-medium">SQL</span>
                            <span className="px-3 py-2 bg-secondary-600 text-white rounded-lg text-sm font-medium">NoSQL</span>
                            <span className="px-3 py-2 bg-secondary-600 text-white rounded-lg text-sm font-medium">Drizzle ORM</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function ExperienceSection() {
    return (
        <section id="experience" className="py-20 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">Professional Experience</h2>
                    <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Building mission-critical software for high-stakes environments and billion-viewer broadcasts.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Tractable.ai */}
                    <div className="card-elevated p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-neutral-900">Software Developer</h3>
                                <p className="text-xl text-primary-600 font-semibold">Tractable.ai</p>
                                <p className="text-neutral-500">June 2025 – Present</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Current Role</span>
                            </div>
                        </div>

                        <p className="text-neutral-700 mb-6">
                            Contributing to AI-driven products that automate visual damage appraisal for insurance. Full-stack development across Remix (frontend) and Node.js/Express (backend), integrating with internal AI APIs for image analysis and decision automation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Key Achievements:</h4>
                                <ul className="space-y-2 text-neutral-600">
                                    <li>• Built UI processing 10,000+ damage claims daily</li>
                                    <li>• Developed backend services with 99.9% uptime</li>
                                    <li>• Reduced bugs by 40% with type-safe models</li>
                                    <li>• Improved AI accuracy by 25%</li>
                                    <li>• Reduced response times by 60%</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Remix</span>
                                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Node.js</span>
                                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Express</span>
                                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">TypeScript</span>
                                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Drizzle ORM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* wTVision */}
                    <div className="card-elevated p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-neutral-900">Software Developer (R&D Department)</h3>
                                <p className="text-xl text-primary-600 font-semibold">wTVision Solutions Pvt. Ltd.</p>
                                <p className="text-neutral-500">July 2023 – June 2025</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">2 Years</span>
                            </div>
                        </div>

                        <p className="text-neutral-700 mb-6">
                            Lead developer in the elite R&D team, architecting mission-critical broadcast solutions for the world&apos;s premier sporting events. Specializing in rapid development of high-stakes software that powers live broadcasts watched by billions.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-neutral-900 mb-3">Major Projects:</h4>

                                <div className="space-y-4">
                                    <div className="border-l-4 border-primary-500 pl-4">
                                        <h5 className="font-semibold text-neutral-800">Cricket Field Planning Platform – IPL</h5>
                                        <p className="text-neutral-600 text-sm mb-2">Delivered in just 10 days for the world&apos;s largest cricket league</p>
                                        <ul className="text-sm text-neutral-600 space-y-1">
                                            <li>• Empowered cricket experts to strategically plan field positions</li>
                                            <li>• Engineered interface for real-time JioHotstar broadcast graphics</li>
                                            <li>• Served 1+ billion viewers during IPL broadcasts</li>
                                        </ul>
                                    </div>

                                    <div className="border-l-4 border-secondary-500 pl-4">
                                        <h5 className="font-semibold text-neutral-800">Crickstat – Enterprise Broadcast Management</h5>
                                        <p className="text-neutral-600 text-sm mb-2">8+ specialized applications for match management</p>
                                        <ul className="text-sm text-neutral-600 space-y-1">
                                            <li>• Deployed in IPL, BPL, and Champions Trophy (50+ live matches annually)</li>
                                            <li>• Processing 1000+ data points per second</li>
                                            <li>• Integrated with Unreal Engine, Pixotope, and R3 for broadcast visuals</li>
                                            <li>• Reduced manual work by 80% through automation</li>
                                        </ul>
                                    </div>

                                    <div className="border-l-4 border-primary-500 pl-4">
                                        <h5 className="font-semibold text-neutral-800">IPL Digital Auction Command Center</h5>
                                        <p className="text-neutral-600 text-sm mb-2">First-ever digital auction system for IPL</p>
                                        <ul className="text-sm text-neutral-600 space-y-1">
                                            <li>• Handled $100M+ in virtual player valuations</li>
                                            <li>• Real-time budget tracking for 10 franchises</li>
                                            <li>• Dual-themed auction UIs for men&apos;s/women&apos;s auctions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Python</span>
                                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Django</span>
                                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">FastAPI</span>
                                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Next.js</span>
                                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">TypeScript</span>
                                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">React.js</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* IIIT Hyderabad */}
                    <div className="card-elevated p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-neutral-900">Software Developer</h3>
                                <p className="text-xl text-primary-600 font-semibold">Biometrics and Security Lab, IIIT Hyderabad</p>
                                <p className="text-neutral-500">January 2024 – January 2025</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">1 Year</span>
                            </div>
                        </div>

                        <p className="text-neutral-700 mb-6">
                            Built a research platform for coding challenges and performance leaderboards in collaboration with UIDAI for biometric security research.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-neutral-900 mb-3">Major Project:</h4>

                                <div className="border-l-4 border-primary-500 pl-4">
                                    <h5 className="font-semibold text-neutral-800">UIDAI BioChallenge</h5>
                                    <p className="text-neutral-600 text-sm mb-2">Official coding challenge platform for researchers and developers</p>
                                    <ul className="text-sm text-neutral-600 space-y-1">
                                        <li>• Architected web platform for 500+ registered researchers</li>
                                        <li>• Built scalable user authentication and solution grading system</li>
                                        <li>• Added real-time dashboards and leaderboards with 99.9% accuracy</li>
                                        <li>• Streamlined solution submissions with instant feedback, reducing processing time by 70%</li>
                                        <li>• Processed 1000+ secure submissions with robust security measures</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Next.js</span>
                                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">TypeScript</span>
                                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Python</span>
                                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Django</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gradient-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Let&apos;s Build Something Amazing</h2>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto">
                        Ready to bring your ideas to life? Let&apos;s discuss how we can work together to create exceptional software solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Email */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email</h3>
                        <a href="mailto:maliyabharat10@gmail.com" className="text-lg opacity-90 hover:opacity-100 transition-opacity">
                            maliyabharat10@gmail.com
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">GitHub</h3>
                        <Link href="https://github.com/BharatMaliya" target="_blank" className="text-lg opacity-90 hover:opacity-100 transition-opacity">
                            github.com/BharatMaliya
                        </Link>
                    </div>

                    {/* LinkedIn */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                        <Link href="https://www.linkedin.com/in/bharat-maliya" target="_blank" className="text-lg opacity-90 hover:opacity-100 transition-opacity">
                            linkedin.com/in/bharat-maliya
                        </Link>
                    </div>
                </div>

                <div className="text-center border-t border-white/20 pt-8">
                    <p className="opacity-75">
                        © 2025 Bharat Maliya. Built with 💔
                    </p>
                </div>
            </div>
        </section>
    );
}