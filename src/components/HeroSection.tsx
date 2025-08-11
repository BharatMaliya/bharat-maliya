import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="pt-16 min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="hero-animated-bg">
                <div className="floating-shapes">
                    <div className="floating-shape"></div>
                    <div className="floating-shape"></div>
                    <div className="floating-shape"></div>
                    <div className="floating-shape"></div>
                    <div className="floating-shape"></div>
                    <div className="floating-shape"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 md:pt-20 pb-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-in-left">
                        <h1 className="hero-title bg-gradient-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6">
                            {/* desktop view */}
                            <span className="block hidden sm:block">Building</span>
                            <span className="block hidden sm:block">Software that</span>
                            <span className="block hidden sm:block">Powers Billions</span>

                            {/* mobile view */}
                            <span className="block sm:hidden">Building Software</span>
                            <span className="block sm:hidden">that Powers Billions</span>
                        </h1>

                        {/* I am proud of section */}
                        <div className="mb-8 proud-section">
                            <h3 className="text-lg font-semibold text-neutral-800 flex items-center gap-2">
                                I am proud of <span className="text-xl">✨</span>
                            </h3>
                            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                {/* Proud Card – Crickstat */}
                                <div className="proud-card p-4 flex items-start gap-3 rounded-xl bg-white/70 backdrop-blur border border-white/30 shadow-md transition-transform hover:scale-105 hover:shadow-xl">
                                    <div>
                                        <h4 className="font-semibold text-transparent bg-gradient-to-r from-primary-500 to-pink-500 bg-clip-text">Crickstat – building cricket</h4>
                                        <p className="text-neutral-700 text-sm"><span className="font-semibold text-primary-600">Powering 75% of global cricket broadcast</span></p>
                                    </div>
                                </div>
                                {/* Proud Card – UIDAI */}
                                <div className="proud-card p-4 flex items-start gap-3 rounded-xl bg-white/70 backdrop-blur border border-white/30 shadow-md transition-transform hover:scale-105 hover:shadow-xl">
                                    <div>
                                        <h4 className="font-semibold text-transparent bg-gradient-to-r from-primary-500 to-pink-500 bg-clip-text">UIDAI Government partnership</h4>
                                        <p className="text-neutral-700 text-sm"> <span className="font-semibold text-primary-600">Enterprise grade coding challange platform built with IIIT Hyderabad</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Links */}
                        <div className="flex gap-4">
                            <a
                                href="mailto:maliyabharat10@gmail.com"
                                className="btn-primary inline-flex items-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Get In Touch
                            </a>
                            <Link
                                href="https://github.com/BharatMaliya"
                                target="_blank"
                                className="btn-secondary inline-flex items-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                                View GitHub
                            </Link>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="animate-slide-in-right flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl">
                                <Image
                                    src="/images/me/imageone.jpeg"
                                    alt="Bharat Maliya - Software Engineer"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                            {/* Background decoration */}
                            <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-2xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}