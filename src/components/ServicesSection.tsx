export default function ServicesSection() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">Services</h2>
                    <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Comprehensive software engineering services from concept to deployment, specializing in high-performance systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Full-Stack Web Development */}
                    <div className="card-elevated p-8 text-center group">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-4">Full-Stack Web Development</h3>
                        <p className="text-neutral-600 mb-6">End-to-end web application development using modern frameworks like React.js, Next.js, and Django.</p>
                        <ul className="text-sm text-neutral-500 space-y-2">
                            <li>• Frontend: React.js, Next.js, Remix, TypeScript</li>
                            <li>• Backend: Python, Django, FastAPI, Node.js</li>
                            <li>• Database Design & ORM integration</li>
                            <li>• RESTful APIs & GraphQL</li>
                        </ul>
                    </div>

                    {/* AI & Machine Learning Integration */}
                    <div className="card-elevated p-8 text-center group">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-4">AI & Machine Learning Integration</h3>
                        <p className="text-neutral-600 mb-6">Custom AI solutions for personalized recommendations, data processing, and intelligent automation.</p>
                        <ul className="text-sm text-neutral-500 space-y-2">
                            <li>• AI-Powered Applications</li>
                            <li>• ML Model Integration</li>
                            <li>• Real-time Data Analysis</li>
                            <li>• Intelligent Automation</li>
                        </ul>
                    </div>

                    {/* Enterprise Software Solutions */}
                    <div className="card-elevated p-8 text-center group">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-4">Enterprise Software Solutions</h3>
                        <p className="text-neutral-600 mb-6">Scalable enterprise applications and SaaS platforms for large organizations with high-performance requirements.</p>
                        <ul className="text-sm text-neutral-500 space-y-2">
                            <li>• SaaS Platform Development</li>
                            <li>• Enterprise Applications</li>
                            <li>• Real-time Systems</li>
                            <li>• Broadcast & Media Solutions</li>
                        </ul>
                    </div>

                    {/* Cloud & DevOps */}
                    <div className="card-elevated p-8 text-center group">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-4">Cloud & DevOps</h3>
                        <p className="text-neutral-600 mb-6">AWS-based cloud infrastructure, containerization, and automated deployment pipelines for scalable applications.</p>
                        <ul className="text-sm text-neutral-500 space-y-2">
                            <li>• AWS Services: EC2, Lambda, S3, RDS</li>
                            <li>• Docker & Container Orchestration</li>
                            <li>• CI/CD Pipelines</li>
                            <li>• Performance Optimization</li>
                        </ul>
                    </div>

                    {/* UI/UX Design & Development */}
                    <div className="card-elevated p-8 text-center group">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M9 9l4 4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-4">UI/UX Design & Development</h3>
                        <p className="text-neutral-600 mb-6">Modern, responsive user interfaces with focus on user experience and interactive elements.</p>
                        <ul className="text-sm text-neutral-500 space-y-2">
                            <li>• Responsive Design</li>
                            <li>• Interactive Interfaces</li>
                            <li>• Modern UI Frameworks</li>
                            <li>• User Experience Optimization</li>
                        </ul>
                    </div>

                    {/* Database & Data Management */}
                    <div className="card-elevated p-8 text-center group">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-4">Database & Data Management</h3>
                        <p className="text-neutral-600 mb-6">Robust database architecture, data migration, and real-time analytics for high-performance applications.</p>
                        <ul className="text-sm text-neutral-500 space-y-2">
                            <li>• Database Design & Architecture</li>
                            <li>• Data Migration & Integration</li>
                            <li>• Performance Tuning</li>
                            <li>• Real-time Analytics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}