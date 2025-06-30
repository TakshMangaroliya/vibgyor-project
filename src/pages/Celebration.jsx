import React, { useEffect, useState } from 'react';
import { ArrowLeft, Star, Heart } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPaperPlane } from 'react-icons/fa';

function Celebration() {
  const [particles, setParticles] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  useEffect(() => {
    const initialParticles = [];
    for (let i = 0; i < 50; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    setParticles(initialParticles);

    const animateParticles = () => {
      setParticles(prev =>
        prev.map(p => ({
          ...p,
          x: p.x + p.speedX,
          y: p.y + p.speedY,
          x: p.x > window.innerWidth ? 0 : p.x < 0 ? window.innerWidth : p.x,
          y: p.y > window.innerHeight ? 0 : p.y < 0 ? window.innerHeight : p.y,
        }))
      );
    };

    // Keep particle movement as it's a visual effect, not an entrance animation
    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  const handleBackToHome = () => {
    console.log('Navigating to home');
    // Implement actual navigation logic here if using React Router or similar
  };

  // Function to handle package selection
  const handlePackageSelect = (packageIndex) => {
    setSelectedPackage(packageIndex);
    console.log(`Selected Package Index: ${packageIndex}`);
    // Optional: Add logic for what happens when a package is selected (e.g., navigate, open modal)
  };

  // Helper function to dynamically generate card classes, adding border and glow only on selection
  const getPackageCardClasses = (index) => {
    // Base classes applied to all cards
    const baseClasses = "relative w-full max-w-sm bg-black/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl transition-all duration-300 cursor-pointer";

    if (selectedPackage === index) {
      // If this card is selected, apply scale effect, the purple border, and the glow effect
      return `${baseClasses} scale-105 border border-purple-400`;
    } else {
      // If this card is not selected, no border by default, but subtle hover effect and a transparent border for consistent sizing
      return `${baseClasses} border border-transparent hover:scale-[1.02]`;
    }
  };


  // Helper function for button classes
  const getButtonClasses = (index) => {
    const baseButtonClasses = "w-full py-3 rounded-full font-semibold transition-colors duration-300";
    // Using custom colors for the button gradient
    const selectedButtonClasses = "bg-gradient-to-r from-[#A07e7e] to-[#c87c38] text-white shadow-lg";
    const defaultButtonClasses = "bg-white/5 hover:bg-white/10 text-white";

    if (selectedPackage === index) {
      // If this card is selected, apply the vibrant gradient button
      return `${baseButtonClasses} ${selectedButtonClasses} hover:from-[#A07e7e]/80 hover:to-[#c87c38]/80 hover:shadow-purple-700/30`;
    } else {
      // Default button styling
      return `${baseButtonClasses} ${defaultButtonClasses}`;
    }
  };


  return (
    <div className="bg-black text-white font-sans">
      {/* HERO SECTION */}
      <div className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 pointer-events-none">
          {particles.map(p => (
            <div
              key={p.id}
              className="absolute bg-white rounded-full"
              style={{
                left: `${p.x}px`,
                top: `${p.y}px`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: p.opacity,
                boxShadow: `0 0 ${p.size * 2}px rgba(255, 255, 255, 0.3)`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="flex justify-between items-start p-8">
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
              data-aos="fade-right"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium uppercase tracking-wider">Back to Home</span>
            </button>
          </div>

          <div className="flex-1 flex items-center px-8 py-12">
            <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="100">
                  <Star className="w-5 h-5 text-purple-400 fill-purple-400" />
                  <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                    Intimate Luxury
                  </span>
                </div>

                <div className="text-9xl md:text-7xl lg:text-8xl font-serif font-extralight mb-8 leading-none">
                  <h1 className="text-[52px] sm:text-[48px] md:text-[95px] leading-[1.2] font-serif text-white" style={{ color: '#FFFFFF' }} data-aos="fade-up" data-aos-delay="200">
                    PRIVATE
                  </h1>
                  <div className="overflow-visible pt-4 pb-4">
                    <h1 className="text-[52px] sm:text-[48px] md:text-[95px] leading-[1.2] font-serif text-white" style={{ color: '#b89433' }} data-aos="fade-up" data-aos-delay="300">
                      CELEBRATION
                    </h1>
                  </div>
                </div>

                <p className="text-lg lg:text-xl leading-relaxed max-w-lg text-white" data-aos="fade-up" data-aos-delay="400">
                  Personalized celebrations that reflect your unique style and create cherished memories for generations. Every intimate moment crafted with love, attention, and extraordinary care.
                </p>

                <div className="flex items-center gap-12">
                  <div className="text-center" data-aos="fade-up" data-aos-delay="500">
                    <div className="text-white text-3xl">156+</div>
                    <div className="text-sm uppercase tracking-wider text-white">Celebrations</div>
                  </div>
                  <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                    <div className="text-white text-3xl">10+</div>
                    <div className="text-sm uppercase tracking-wider text-white">Years</div>
                  </div>
                  <div className="text-center" data-aos="fade-up" data-aos-delay="700">
                    <div className="text-white text-3xl">100%</div>
                    <div className="text-sm uppercase tracking-wider text-white">Joy</div>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-[#A07e7e] to-[#c87c38] hover:from-[#A07e7e]/80 hover:to-[#c87c38]/80 text-white px-8 py-4 rounded-full font-semibold text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c87c38]/25" data-aos="zoom-in" data-aos-delay="800">
                  Create Your Celebration
                </button>
              </div>

              <div className="lg:justify-self-end w-full max-w-md h-full relative" data-aos="fade-left" data-aos-delay="400">
                <div className="absolute -top-4 -right-4 z-20" data-aos="fade-in" data-aos-delay="900">
                  <div className="bg-gradient-to-r from-[#A07e7e] to-[#c87c38] p-3 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer shadow-2xl">
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden aspect-[4/5] hover:bg-white/15 transition-all duration-300" data-aos="fade-in" data-aos-delay="1000">
                  <img
                    src="https://static3.depositphotos.com/1005782/208/i/450/depositphotos_2088021-stock-photo-red-pink-blue-light-and.jpg"
                    alt="Celebration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Celebration Services Section */}
      <div className="px-6 py-20 bg-black text-white">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4" style={{ color: '#7A7A7A' }} data-aos="fade-up">
          Celebration Services
        </h2>
        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12 text-white" data-aos="fade-up" data-aos-delay="100">
          Intimate and personalized services that make every moment special and memorable
        </p>

        <div className="grid gap-6 sm:grid-cols-6 lg:grid-cols-4 max-w-7xl mx-auto items-stretch h-full">
          {[
            "Personalized event conceptualization and design",
            "Intimate venue selection and transformation",
            "Bespoke decor and floral arrangements",
            "Customized catering and menu curation",
            "Personal entertainment and performances",
            "Memory curation and keepsake creation",
            "Photography and videography services",
            "Complete celebration coordination",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-black/30 hover:bg-black/40 transition-all duration-300 p-6 rounded-2xl border border-white/30 shadow-lg backdrop-blur-md group hover:scale-105 min-h-[250px] flex items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 200}
            >
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-purple-500 shrink-0 group-hover:rotate-12 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm sm:text-base text-white">{service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Celebration Stories Section */}
      <div className="bg-gray-900/70 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#7A7A7A' }} data-aos="fade-up">Celebration Stories</h2>
          <p className="text-lg mb-16 max-w-2xl mx-auto text-white" data-aos="fade-up" data-aos-delay="100">
            Discover the intimate celebrations that have touched hearts and created lasting memories
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Golden Anniversary Gala",
                description: "An intimate 50th anniversary celebration with family and close friends",
                location: "Private Estate, Goa",
                guests: 50,
                year: 2024,
                image: "https://wallpapercrafter.com/desktop/248367-candel-gala-private-and-party-hd.jpg",
              },
              {
                title: "Milestone Birthday Soirée",
                description: "A sophisticated 60th birthday celebration with personalized touches",
                location: "Luxury Villa, Udaipur",
                guests: 80,
                year: 2024,
                image: "https://rare-gallery.com/uploads/posts/528358-belgium-belgium.jpg",
              },
              {
                title: "Engagement Garden Party",
                description: "A romantic engagement celebration in an enchanted garden setting",
                location: "Heritage Bungalow, Mumbai",
                guests: 120,
                year: 2023,
                image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?cs=srgb&dl=pexels-cottonbro-3171837.jpg&fm=jpg",
              },
              {
                title: "Family Reunion Celebration",
                description: "A multi-generational family gathering with cultural performances",
                location: "Resort, Kerala",
                guests: 200,
                year: 2023,
                image: "https://www.shutterstock.com/image-photo/double-exposure-young-people-birthday-600nw-1323618038.jpg",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
                style={{ height: "450px" }}
                data-aos="zoom-in-up"
                data-aos-delay={index * 150 + 200}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />

                {/* Info Gradient */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-8 pt-16 pb-6">
                  <h3 className="text-white text-2xl font-bold mb-1" data-aos="fade-up" data-aos-delay="400">{event.title}</h3>
                  <p className="text-base mb-1 text-white" data-aos="fade-up" data-aos-delay="500">{event.description}</p>
                  <p className="text-sm mb-2 underline underline-offset-2 text-white" data-aos="fade-up" data-aos-delay="600">
                    {event.location}
                  </p>
                  <div className="flex justify-between text-sm text-white" data-aos="fade-up" data-aos-delay="700">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zM5 8v9h10V8z" />
                      </svg>
                      {event.guests} Guests
                    </span>
                    <span>{event.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider — Soft background break */}
      <div className="bg-gradient-to-b from-black to-[#0e0e0e] h-16 w-full" />

      {/* Celebration Packages Section */}
      <div className="bg-[#0e0e0e] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#7A7A7A' }} data-aos="fade-up">Celebration Packages</h2>
          <p className="text-lg max-w-2xl mx-auto mb-16 text-white" data-aos="fade-up" data-aos-delay="100">
            Thoughtfully designed packages for every intimate celebration
          </p>

          {/* Package Cards Container */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 ">
            {/* Intimate Elegance Package (Index 0) */}
            <div
              className={`${getPackageCardClasses(0)}`}
              onClick={() => handlePackageSelect(0)}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-purple-400 mb-2">Intimate Elegance</h3>
                <p className="text-5xl font-bold mb-2">₹5,00,000</p>
                <p className="text-sm text-white">Perfect for small gatherings with personal touches</p>
              </div>
              <ul className="text-left space-y-3 mb-10">
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Venue styling
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Custom catering
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Photography
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Personal coordination
                </li>
              </ul>
              <button
                onClick={() => handlePackageSelect(0)}
                className={`${getButtonClasses(0)}`}
              >
                Select Package
              </button>
            </div>

            {/* Luxury Celebration Package - Most Popular (Index 1) */}
            <div
              className={`${getPackageCardClasses(1)}`}
              onClick={() => handlePackageSelect(1)}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#A07e7e] to-[#c87c38] text-white text-xs font-bold px-4 py-3 rounded-full shadow-lg">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">Luxury Celebration</h3>
                <p className="text-5xl font-bold text-white mb-2">₹12,00,000</p>
                <p className="text-sm text-white">Enhanced private experience with premium amenities</p>
              </div>
              <ul className="text-left space-y-3 mb-10">
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Premium venue design
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Gourmet catering
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Entertainment
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Memory curation
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Full coordination
                </li>
              </ul>
              {/* Added Select Package Button for Most Popular Card */}
              <button
                onClick={() => handlePackageSelect(1)}
                className={`${getButtonClasses(1)}`}
              >
                Select Package
              </button>
            </div>

            {/* Bespoke Experience Package (Index 2) */}
            <div
              className={`${getPackageCardClasses(2)}`}
              onClick={() => handlePackageSelect(2)}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-purple-400 mb-2">Bespoke Experience</h3>
                <p className="text-5xl font-bold mb-2">₹25,00,000</p>
                <p className="text-sm text-white">Ultimate personalized celebration crafted to perfection</p>
              </div>
              <ul className="text-left space-y-3 mb-10">
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Completely customized
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Celebrity entertainment
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Luxury experiences
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Personal concierge
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Legacy creation
                </li>
              </ul>
              <button
                onClick={() => handlePackageSelect(2)}
                className={`${getButtonClasses(2)}`}
              >
                Select Package
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Cherished Memories Section */}
      <div className="bg-gray-900/70 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16" style={{ color: '#7A7A7A' }} data-aos="fade-up">Cherished Memories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Review Card 1 */}
            <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10" data-aos="fade-up" data-aos-delay="100">
              <div className="flex justify-center mb-4" data-aos="fade-up" data-aos-delay="200">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-lg italic mb-6 text-white" data-aos="fade-up" data-aos-delay="300">"Our 25th anniversary celebration was beyond our wildest dreams. Every detail was meticulously planned, and the atmosphere was simply magical. A truly unforgettable experience!"</p>
              <p className="text-xl font-semibold mb-1 text-white" data-aos="fade-up" data-aos-delay="400">Meera & Vikram Patel</p>
              <p className="text-sm text-white" data-aos="fade-up" data-aos-delay="500">25th Anniversary</p>
            </div>

            {/* Review Card 2 */}
            <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10" data-aos="fade-up" data-aos-delay="200">
              <div className="flex justify-center mb-4" data-aos="fade-up" data-aos-delay="300">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-lg italic mb-6 text-white" data-aos="fade-up" data-aos-delay="400">"Planning my 60th birthday felt effortless thanks to their incredible team. They understood my vision perfectly and delivered an event that was both elegant and deeply personal."</p>
              <p className="text-xl font-semibold mb-1 text-white" data-aos="fade-up" data-aos-delay="500">Sunita Sharma</p>
              <p className="text-sm text-white" data-aos="fade-up" data-aos-delay="600">60th Birthday</p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gradient-to-r from-[#1a0033] via-[#0a0a3c] to-[#000000] text-white py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#7A7A7A' }} data-aos="fade-up">Ready to Celebrate Life?</h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white" data-aos="fade-up" data-aos-delay="100">
          Let us create an intimate celebration that reflects your unique story and creates memories to last a lifetime
        </p>
        <button className="bg-gradient-to-r from-[#A07e7e] to-[#c87c38] hover:from-[#A07e7e]/80 hover:to-[#c87c38]/80 text-white px-10 py-4 rounded-full font-semibold text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg" data-aos="zoom-in" data-aos-delay="200">
          PLAN YOUR CELEBRATION <span className="ml-2">→</span>
        </button>
      </div>



      {/* New Section: Stay Connected to Luxury */}
      <section className="relative bg-gradient-to-br from-[#7B2CBF] via-[#2C1342] to-[#00332E] text-white py-20 px-6 text-center font-serif">
        {/* Optional star background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6 leading-tight" style={{ color: '#7A7A7A' }} data-aos="fade-up">
          Stay Connected to <br /> <span className="text-[#3399FF]">Luxury</span>
        </h2>

        <p className="text-xl mb-12 leading-relaxed font-light text-white" data-aos="fade-up" data-aos-delay="100">
          Be the first to discover our latest masterpieces and exclusive events
        </p>

        <form className="flex justify-center items-center flex-wrap gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex h-12 w-full border text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-md flex-1 bg-white/10 border-white/20 placeholder:text-white/50 rounded-full px-6 py-4 focus:border-[#A07e7e] transition-all duration-300 text-white"
            data-aos="fade-right"
            data-aos-delay="200"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#A07e7e] to-[#c87c38] hover:from-[#A07e7e]/80 hover:to-[#c87c38]/80 text-white px-8 py-4 rounded-full flex items-center space-x-4 transition-all duration-500 shadow-lg hover:shadow-xl"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <FaPaperPlane />
            <span>Subscribe</span>
          </button>

        </form>
      </section>

    </div>
  );
}

export default Celebration;

