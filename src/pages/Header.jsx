import React, { useState, useEffect } from "react";
import { FaSearch, FaGlobe } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link as LinkIcon } from "lucide-react";
import {Link} from "react-router-dom"

const Header = () => {
  const [showExperience, setShowExperience] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);


useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
<header
  className={`w-full px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50 font-inter transition-all duration-500 ${
    isScrolled ? 'bg-white text-[#232323]' : 'bg-transparent backdrop-blur-sm text-white'
  }`}>
      {/* Logo */}
      <div className="flex items-center space-x-3 font-inter">
 
  <div className="relative group w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center">
  {/* Base Logo Box with Gradient */}
<div
  className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-[20px] font-medium font-inter z-10 font-playfair animate-rotateYOnce"
  data-aos="zoom-in"
>
  V
</div>


  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
</div>


  {/* Text */}
  <div>
   <Link to="/"> <h1 className="text-[#1f1f1f] text-[18px] font-medium -mb-1 tracking-tight font-playfair">Vibgyor</h1></Link>
  <Link to="/">  <p className="text-[#999999] text-xs tracking-[0.2em] font-medium ">EVENTS</p></Link>
  </div>
</div>

     <nav className="hidden md:flex items-center space-x-14 text-sm font-inter text-[#333333]" data-aos="fade-down" >

  {/* Experiences Dropdown */}
  <div
  onMouseEnter={() => setShowExperience(true)}
  onMouseLeave={() => setShowExperience(false)}
  className="relative cursor-pointer"
>
  <span className="relative group flex items-center space-x-1 text-[#bdbcbc] hover:text-[#8A2BE2]">
    <span>Experiences</span>

    {/* ⬇️ Arrow with hover-rotate */}
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>

    {/* Underline */}
    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-purple-800 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
  </span>

  {/* Dropdown */}
  {showExperience && (
    <div className="absolute top-8 left-0 bg-white shadow-2xl rounded-2xl py-4 px-3 z-50 w-[260px]">
      <Link to="/wedding"
        href="/luxury-weddings"
        className="text-[15px] font-inter text-[#444] px-4 py-2 my-1 rounded-xl cursor-pointer transition-all hover:bg-[#f8f3ff] hover:text-[#8A2BE2] hover:border hover:border-[#caa8ff] block"
      >
        Luxury Weddings
      </Link>
      <a
        href="/corporate-events"
        className="text-[15px] font-inter text-[#444] px-4 py-2 my-1 rounded-xl cursor-pointer transition-all hover:bg-[#f8f3ff] hover:text-[#8A2BE2] hover:border hover:border-[#caa8ff] block"
      >
        Corporate Events
      </a>
      <a
        href="/cultural-exhibitions"
        className="text-[15px] font-inter text-[#444] px-4 py-2 my-1 rounded-xl cursor-pointer transition-all hover:bg-[#f8f3ff] hover:text-[#8A2BE2] hover:border hover:border-[#caa8ff] block"
      >
        Cultural Exhibitions
      </a>
      <a
        href="/private-celebrations"
        className="text-[15px] font-inter text-[#444] px-4 py-2 my-1 rounded-xl cursor-pointer transition-all hover:bg-[#f8f3ff] hover:text-[#8A2BE2] hover:border hover:border-[#caa8ff] block"
      >
        Private Celebrations
      </a>
    </div>
  )}
</div>


  {/* Portfolio Dropdown */}
  <div
    onMouseEnter={() => setShowPortfolio(true)}
    onMouseLeave={() => setShowPortfolio(false)}
    className="relative cursor-pointer"
  >
    <span className="relative group flex items-center space-x-1 text-[#bdbcbc] hover:text-[#8A2BE2]">
     <Link to="/portfolio"> <span>Portfolio</span> </Link>
      {/* <svg
        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg> */}

      {/* Underline */}
      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-purple-800 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
    </span>

    {/* {showPortfolio && (
      <div className="absolute top-8 left-0 bg-white shadow-xl rounded-xl py-6 px-8 z-50 space-y-4 w-[240px]">
        {[
          "Wedding Gallery",
          "Cultural Gallery",
          "Corporate Gallery",
        ].map((item, idx) => (
          <p
            key={idx}
            className="
        text-[15px] font-inter text-[#444]
        px-4 py-2 my-1 rounded-xl cursor-pointer transition-all
        hover:bg-[#f8f3ff] hover:text-[#8A2BE2] hover:border hover:border-[#caa8ff]
      "
          >
            {item}
          </p>
        ))}
      </div>
    )} */}
  </div>


 <Link
  href="#"
  className="relative group text-[#bdbcbc] hover:text-[#8A2BE2]"
>
  Services
  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 "></span>
</Link>

<Link
  href="#"
  className="relative group text-[#bdbcbc] hover:text-[#8A2BE2]"
>
  About
  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
</Link>

<Link to="/contact"
  href="#"
  className="relative group text-[#bdbcbc] hover:text-[#8A2BE2]"
>
  Contact
  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
</Link>

</nav>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#7a7979]  hover:bg-[#8A2BE2]  hover:text-white shadow-md">
          <FaSearch />
        </button>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#7a7979] shadow-md hover:bg-[#8A2BE2]  hover:text-white">
          <FaGlobe />
        </button>
       <Link to='/book'> <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:opacity-90 transition">
          Book Consultation
        </button> </Link>
      </div>
    </header>
  );
};

export default Header;
