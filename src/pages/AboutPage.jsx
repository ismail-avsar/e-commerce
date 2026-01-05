import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import TeamPage from "./TeamPage";

const AboutPage = () => {
    const stats = [
        { value: "15K", label: "Happy Customers" },
        { value: "150K", label: "Monthly Visitors" },
        { value: "15", label: "Countries Worldwide" },
        { value: "100+", label: "Top Partners" }
    ];


    return (
        <div className="w-full bg-white">
            {/* 1. Hero Section */}
            <section className="bg-white py-12 md:py-0 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        {/* Sol - Text Content */}
                        <div className="flex flex-col gap-8 text-center md:text-left md:w-1/2">
                            <h5 className="text-base font-bold text-primary-dark uppercase tracking-wide">
                                ABOUT COMPANY
                            </h5>
                            <h1 className="text-4xl md:text-6xl font-bold text-primary-dark leading-tight">
                                ABOUT US
                            </h1>
                            <p className="text-xl text-text-gray leading-relaxed max-w-md mx-auto md:mx-0">
                                We know how large objects will act, but things on a small scale
                            </p>
                            <button className="bg-brand-blue text-white px-10 py-4 text-sm font-bold rounded-md w-fit mx-auto md:mx-0 hover:bg-blue-600 transition-colors">
                                Get Quote Now
                            </button>
                        </div>

                        {/* Sağ - Image */}
                        <div className="md:w-1/2 relative">
                            <div className="relative">
                                {/* Shopping Girl */}
                                <img
                                    src="/assets/about/about-1.jpg"
                                    alt="Shopping Girl"
                                    className="relative z-10 w-full max-w-md mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Problems Section */}
            <section className="bg-white py-12 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                        {/* Sol */}
                        <div className="md:w-1/2">
                            <p className="text-xl text-danger mb-6 font-normal">Problems trying</p>
                            <h3 className="text-2xl font-bold text-primary-dark leading-relaxed">
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                            </h3>
                        </div>
                        {/* Sağ */}
                        <div className="md:w-1/2">
                            <p className="text-xl text-text-gray leading-relaxed">
                                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Stats Section */}
            <section className="bg-white py-20 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-around gap-12 md:gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <h1 className="text-6xl font-bold text-primary-dark">{stat.value}</h1>
                                <p className="text-base font-bold text-text-gray">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Video Section */}
            <section className="bg-white py-12 px-6">
                <div className="container mx-auto">
                    <div className="relative h-[300px] md:h-[540px] rounded-2xl overflow-hidden">
                        <img
                            src="/assets/about/video.jpg"
                            alt="Video Background"
                            className="w-full h-full object-cover"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-2xl">
                                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Meet Our Team */}
            <TeamPage />

            {/* 6. Big Companies */}
            <section className="bg-light-gray py-12 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-12 flex flex-col gap-4">
                        <h2 className="text-4xl font-bold text-primary-dark">Big Companies Are Here</h2>
                        <p className="text-sm text-text-gray max-w-lg mx-auto">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-8 md:gap-12">
                        <img src="/assets/brands/fa-brands-1.png" alt="hooli" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/assets/brands/fa-brands-2.png" alt="lyft" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/assets/brands/fa-brands-3.png" alt="brand" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/assets/brands/fa-brands-4.png" alt="stripe" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/assets/brands/fa-brands-5.png" alt="aws" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/assets/brands/fa-brands-6.png" alt="reddit" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </section>

            {/* 7. Work With Us */}
            <section className="bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row">
                        {/* Sol - Mavi Section */}
                        <div className="bg-[#2A7CC7] text-white md:w-1/2 h-auto md:h-[640px] flex items-center justify-center py-20 px-6 md:pl-28 md:pr-12">
                            <div className="max-w-md flex flex-col gap-6">
                                <h5 className="text-base font-bold uppercase tracking-wide">WORK WITH US</h5>
                                <h2 className="text-4xl font-bold leading-tight">Now Let's grow Yours</h2>
                                <p className="text-sm leading-relaxed text-white/90">
                                    The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                                </p>
                                <button className="border border-white text-white px-10 py-4 text-sm font-bold rounded-md w-fit hover:bg-white hover:text-[#2A7CC7] transition-colors">
                                    Button
                                </button>
                            </div>
                        </div>

                        {/* Sağ - Image */}
                        <div className="md:w-1/2 h-[500px] md:h-[640px] hidden md:block">
                            <img
                                src="/assets/about/about-2.jpg"
                                alt="Work With Us"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        {/* Mobile Image */}
                        <div className="w-full h-[500px] md:hidden">
                            <img
                                src="/assets/about/about-2.jpg"
                                alt="Work With Us"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;