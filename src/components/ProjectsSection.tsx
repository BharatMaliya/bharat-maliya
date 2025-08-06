import { projectData } from '@/data/projectData';
import Image from 'next/image';

interface ProjectsSectionProps {
    onProjectClick: (projectKey: string, projectName: string) => void;
}

export default function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
    return (
        <section id="projects" className="py-20 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">Featured Projects</h2>
                    <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Building scalable systems that serve millions of users across sports broadcasting, AI applications, and enterprise solutions.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Crickstat Project */}
                    <div
                        className="card-elevated p-6 group cursor-pointer"
                        onClick={() => onProjectClick('crickstat', 'Crickstat: Enterprise Broadcast System')}
                    >
                        <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-neutral-100">
                            <Image
                                src={projectData.crickstat.images[0]}
                                alt="Crickstat Screenshot"
                                width={400}
                                height={225}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                                🏏
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900">Crickstat</h3>
                                <p className="text-sm text-neutral-500">Enterprise Broadcast System</p>
                            </div>
                        </div>
                        <p className="text-neutral-600 mb-4">
                            Enterprise-grade cricket broadcast management system for high-profile tournaments including IPL, BPL, and Champions Trophy.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Python</span>
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Django</span>
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">FastAPI</span>
                        </div>
                        <div className="text-sm text-neutral-500 space-y-1">
                            <div>• 8+ specialized applications</div>
                            <div>• 1000+ data points per second</div>
                            <div>• 50+ live matches annually</div>
                        </div>
                        <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                            <span>View Details</span>
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    {/* BioChallenge Project */}
                    <div
                        className="card-elevated p-6 group cursor-pointer"
                        onClick={() => onProjectClick('biochallenge', 'BioChallenge: UIDAI Official Platform')}
                    >
                        <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-neutral-100">
                            <Image
                                src={projectData.biochallenge.images[0]}
                                alt="BioChallenge Screenshot"
                                width={400}
                                height={225}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                                🔐
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900">BioChallenge</h3>
                                <p className="text-sm text-neutral-500">UIDAI Official Platform</p>
                            </div>
                        </div>
                        <p className="text-neutral-600 mb-4">
                            Official coding challenge platform for UIDAI in collaboration with IIIT Hyderabad for researchers and developers.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Next.js</span>
                            <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Python</span>
                            <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Django</span>
                        </div>
                        <div className="text-sm text-neutral-500 space-y-1">
                            <div>• 500+ registered researchers</div>
                            <div>• 1000+ secure submissions</div>
                            <div>• 99.9% uptime</div>
                        </div>
                        <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                            <span>View Details</span>
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    {/* IPL Auction App */}
                    <div
                        className="card-elevated p-6 group cursor-pointer"
                        onClick={() => onProjectClick('auction', 'IPL Auction App: Digital Auction Platform')}
                    >
                        <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-neutral-100">
                            <Image
                                src={projectData.auction.images[0]}
                                alt="IPL Auction App Screenshot"
                                width={400}
                                height={225}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                                💰
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900">IPL Auction App</h3>
                                <p className="text-sm text-neutral-500">Digital Auction Platform</p>
                            </div>
                        </div>
                        <p className="text-neutral-600 mb-4">
                            First-ever digital platform for managing player auctions in the world's biggest cricket league, handling millions in transactions.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Next.js</span>
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">TypeScript</span>
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Python</span>
                        </div>
                        <div className="text-sm text-neutral-500 space-y-1">
                            <div>• $100M+ virtual valuations</div>
                            <div>• 10 IPL franchises</div>
                            <div>• 500+ concurrent users</div>
                        </div>
                        <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                            <span>View Details</span>
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Tripkliq */}
                    <div
                        className="card-elevated p-6 group cursor-pointer"
                        onClick={() => onProjectClick('tripkliq', 'Tripkliq: AI-Enhanced Travel Platform')}
                    >
                        <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-neutral-100">
                            <Image
                                src={projectData.tripkliq.images[0]}
                                alt="Tripkliq Screenshot"
                                width={400}
                                height={225}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                                ✈️
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900">Tripkliq</h3>
                                <p className="text-sm text-neutral-500">AI-Enhanced Travel Platform</p>
                            </div>
                        </div>
                        <p className="text-neutral-600 mb-4">
                            AI-powered social travel planning platform with personalized itineraries, social features, and booking integration.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">React.js</span>
                            <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">TypeScript</span>
                            <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Mapbox</span>
                        </div>
                        <div className="text-sm text-neutral-500 space-y-1">
                            <div>• 50,000+ active users</div>
                            <div>• $500K+ in bookings</div>
                            <div>• 1000+ daily recommendations</div>
                        </div>
                        <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                            <span>View Details</span>
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Field Planning */}
                    <div
                        className="card-elevated p-6 group cursor-pointer"
                        onClick={() => onProjectClick('fieldplanning', 'IPL Field Planning: Strategic Planning Platform')}
                    >
                        <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-neutral-100">
                            <Image
                                src={projectData.fieldplanning.images[0]}
                                alt="IPL Field Planning Screenshot"
                                width={400}
                                height={225}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                                🎯
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900">IPL Field Planning</h3>
                                <p className="text-sm text-neutral-500">Strategic Planning Platform</p>
                            </div>
                        </div>
                        <p className="text-neutral-600 mb-4">
                            High-impact field planning platform for IPL, allowing analysts to plan fielding positions and transform strategies into broadcast graphics.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">React.js</span>
                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">JavaScript</span>
                        </div>
                        <div className="text-sm text-neutral-500 space-y-1">
                            <div>• 74+ IPL matches annually</div>
                            <div>• 1+ billion viewers</div>
                            <div>• Sub-second latency</div>
                        </div>
                        <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                            <span>View Details</span>
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Incentiwise */}
                    <div
                        className="card-elevated p-6 group cursor-pointer"
                        onClick={() => onProjectClick('incentiwise', 'Incentiwise: SaaS Incentive Platform')}
                    >
                        <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-neutral-100">
                            <Image
                                src={projectData.incentiwise.images[0]}
                                alt="Incentiwise Screenshot"
                                width={400}
                                height={225}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                                📊
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900">Incentiwise</h3>
                                <p className="text-sm text-neutral-500">SaaS Incentive Platform</p>
                            </div>
                        </div>
                        <p className="text-neutral-600 mb-4">
                            SaaS platform for automated employee incentive and commission management with intuitive dashboards and rule-based automation.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Next.js</span>
                            <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">TypeScript</span>
                            <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Python</span>
                        </div>
                        <div className="text-sm text-neutral-500 space-y-1">
                            <div>• Enterprise-ready</div>
                            <div>• Automated calculations</div>
                            <div>• Real-time dashboards</div>
                        </div>
                        <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                            <span>View Details</span>
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}