import React, { useEffect } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    const socialIcons = {
        facebook: FaFacebookF,
        instagram: FaInstagram,
        twitter: FaTwitter,
        linkedin: FaLinkedinIn,
    };

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
            mirror: true
        });
    }, []);

    const values = [
        {
            name: "Passion",
            description: "Every event is crafted with genuine love and dedication.",
            iconBgColor: "bg-[#b89433]",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
        },
        {
            name: "Excellence",
            description: "We strive for perfection in every detail, no matter how small.",
            iconBgColor: "bg-[#b89433]",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.329 1.16l1.519 4.674c.3.921-.755 1.688-1.539 1.169l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.519-1.838-.248-1.539-1.169l1.519-4.674a1 1 0 00-.329-1.16l-3.976-2.888c-.784-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" />
                </svg>
            ),
        },
        {
            name: "Collaboration",
            description: "Working together to bring your vision to life.",
            iconBgColor: "bg-[#b89433]",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
        },
        {
            name: "Innovation",
            description: "Constantly pushing boundaries to create unique experiences.",
            iconBgColor: "bg-[#b89433]",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
        },
    ];

    const teamMembers = [
        {
            name: "Priya Sharma",
            role: "Founder & Creative Director",
            description: "With over 15 years in event management, Priya brings artistic vision and strategic thinking to every project.",
            image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            name: "Rajesh Kumar",
            role: "Operations Manager",
            description: "Rajesh ensures flawless execution with his meticulous attention to detail and operational expertise.",
            image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            name: "Anita Desai",
            role: "Design Specialist",
            description: "Anita transforms spaces into magical environments that perfectly capture the essence of each event.",
            image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
    ];

    return (
        <>
            {/* Our Story Section */}
            <div 
                className="flex flex-col items-center justify-center py-20 px-5 text-center bg-gradient-to-br from-gray-100 to-gray-200 font-serif"
                data-aos="fade-down"
            >
                <h1 className="text-6xl text-[#b89433] mb-5 font-normal md:text-6xl sm:text-4xl">
                    Our Story
                </h1>
                <p 
                    className="text-xl text-[#3A2F25] max-w-3xl font-inter leading-relaxed md:text-lg sm:text-base"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Born from a passion for creating extraordinary moments, Vibgyor Events has
                    been transforming celebrations into unforgettable experiences for over a
                    decade.
                </p>
            </div>

            {/* Our Mission Section */}
            <div className="bg-white py-16 px-4 md:px-6 lg:px-8 xl:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Left Column: Mission and Vision Text */}
                    <div className="space-y-14 mt-12">
                        {/* Our Mission */}
                        <div data-aos="fade-right">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl md:text-2xl font-bold text-[#b89433]">Our Mission</h2>
                            </div>
                            <p className="text-lg text-[#3A2F25] font-inter leading-relaxed">
                                To create extraordinary experiences that transcend expectations,
                                bringing people together through meticulously crafted events that
                                celebrate life's most precious moments. We believe every gathering
                                has the potential to become a masterpiece of memories.
                            </p>
                        </div>

                        {/* Our Vision */}
                        <div data-aos="fade-right" data-aos-delay="100">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-4.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl md:text-2xl font-bold text-[#b89433]">Our Vision</h2>
                            </div>
                            <p className="text-lg text-[#3A2F25] font-inter leading-relaxed">
                                To be recognized as the premier event management company that sets
                                the standard for elegance, innovation, and excellence. We envision a
                                world where every celebration becomes a work of art, leaving lasting
                                impressions on all who experience them.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div 
                        className="relative rounded-xl overflow-hidden shadow-lg bg-gray-100 hidden lg:block h-full min-h-[550px]"
                        data-aos="fade-left"
                        data-aos-delay="150"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <img
                                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Our Mission"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8 xl:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Main Heading */}
                    <h2 
                        className="text-center text-5xl md:text-4xl sm:text-3xl font-normal text-[#7A7A7A] mb-12 font-serif"
                        data-aos="fade-up"
                    >
                        Our Core Values
                    </h2>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Icon Container */}
                                <div className={`w-20 h-20 ${value.iconBgColor} rounded-2xl bg-gradient-to-r from-[#C87C38] to-[#a07e7e] flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-6`}>
                                    {value.icon}
                                </div>

                                {/* Value Name */}
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                    {value.name}
                                </h3>

                                {/* Value Description */}
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className="bg-white py-16 px-4 md:px-6 lg:px-8 xl:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Main Heading */}
                    <h2 
                        className="text-center text-5xl md:text-4xl sm:text-3xl font-normal text-[#7A7A7A] mb-12 font-serif"
                        data-aos="fade-up"
                    >
                        Meet Our Team
                    </h2>

                    {/* Team Members */}
                    <div className="flex flex-wrap justify-center gap-10">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="p-10 flex flex-col items-center text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-xs"
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                {/* Member Image */}
                                <div className="w-72 h-72 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden mb-6 shadow-md transform hover:scale-105 transition-all duration-300 group">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Member Details */}
                                <h3 className="text-2xl font-semibold text-[#b89433] mt-0 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-lg text-[#7A7A7A] mb-4 font-medium">
                                    {member.role}
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Counter Section */}
            <section className="bg-gray-900 py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center text-center space-y-12 md:space-y-0 md:space-x-8">
                    {[
                        { number: "500+", label: "Events Crafted", gradient: "from-[#c87c38] to-[#A07e7e]" },
                        { number: "100,000+", label: "Happy Guests", gradient: "from-[#c87c38] to-[#A07e7e]" },
                        { number: "50+", label: "Cities Reached", gradient: "from-[#c87c38] to-[#A07e7e]" },
                        { number: "10+", label: "Years of Excellence", gradient: "from-[#c87c38] to-[#A07e7e]" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <p className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text`}>
                                {stat.number}
                            </p>
                            <p className="text-xl md:text-2xl text-gray-300 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
           
        </>
    )
}