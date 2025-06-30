"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { FaPlay, FaStar, FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { MdSummarize, MdSpa } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";

import {
  Crown,
  Users,
  Palette,
  Music,
  ArrowRight,
  Utensils,
  Camera,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Play,
  Volume2,
  VolumeX,
  Gem,
  ArrowUpRight
} from "lucide-react";
import { AnimatePresence } from "framer-motion";


import Particles from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

import AOS from "aos";
import "aos/dist/aos.css";


import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// Custom Components
import MagneticButton from "../component/ui/magnetic-button";
import ParallaxText from "../component/ui/parallax-text";
import RoyalParticles from "./RoyalParticles";

// Assets
import videoSrc from "../assets/vibgyor5.mp4";
import partyvideo from "../assets/party.mp4";
import artistvideo from "../assets/wollvideo.mp4";
import artistphoto from "../assets/wollvideo.jpeg";
import reunionimage from "../assets/reunion.jpeg";
import reunionvideo from "../assets/reunion.mp4";
import ImageRef from "../assets/fashion.jpg";
import { useNavigate } from "react-router-dom";

// import { FaStar, FaPlay, FaCalendarAlt, FaClock } from 'react-icons';

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "Royal Weddings",
    subtitle: "MAJESTIC CELEBRATIONS",
    count: "89+ Celebrations",
    desc: "Transform your special day into a timeless royal affair with unparalleled luxury and elegance that transcends ordinary celebrations",
    icon: Crown,
    tag: "Luxury",
    bgColor: "from-pink-400 to-rose-500",
    hoverBg: "hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50",
  },
  {
    title: "Corporate Excellence",
    subtitle: "PROFESSIONAL SOPHISTICATION",
    count: "67+ Events",
    desc: "Elevate your corporate events with sophisticated design and flawless execution that impresses stakeholders",
    icon: Users,
    bgColor: "from-blue-400 to-cyan-500",
    hoverBg: "hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50",
  },
  {
    title: "Cultural Exhibitions",
    subtitle: "ARTISTIC SHOWCASES",
    count: "45+ Exhibitions",
    desc: "Immersive cultural experiences that celebrate art, heritage, and creativity in stunning environments",
    icon: Palette,
    bgColor: "from-purple-400 to-indigo-500",
    hoverBg: "hover:bg-gradient-to-br hover:from-purple-50 hover:to-indigo-50",
  },
  {
    title: "Symphonic Concerts",
    subtitle: "MUSICAL MASTERPIECES",
    count: "32+ Concerts",
    desc: "World-class musical performances with exceptional acoustics and atmospheric staging that touches souls",
    icon: Music,
    tag: "Luxury",
    bgColor: "from-emerald-400 to-teal-500",
    hoverBg: "hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50",
  },
  {
    title: "Culinary Experiences",
    subtitle: "GASTRONOMIC JOURNEYS",
    count: "51+ Tastings",
    desc: "Exquisite culinary showcases blending flavor, presentation, and storytelling for unforgettable taste journeys",
    icon: Utensils,
    tag: "Luxury",
    bgColor: "from-red-400 to-yellow-500",
    hoverBg: "hover:bg-gradient-to-br hover:from-red-50 hover:to-yellow-50",
  },
  {
    title: "Fashion Showcases",
    subtitle: "STYLE & ELEGANCE",
    count: "38+ Shows",
    desc: "Runway events that spotlight emerging trends, designers, and high-end fashion in a glamorous setting",
    icon: Camera,
    bgColor: "from-fuchsia-400 to-pink-500",
    hoverBg: "hover:bg-gradient-to-br hover:from-fuchsia-50 hover:to-pink-50",
  },
  {
    title: "Private Celebrations",
    subtitle: "INTIMATE GATHERINGS",
    count: "76+ Parties",
    desc: "Tailored private events that capture personal stories and moments with warmth, style, and exclusivity",
    icon: Sparkles,
    tag: "Luxury",
    bgColor: "from-orange-400 to-amber-500",
    hoverBg: "hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-50",
  },
  {
    title: "Innovation Summits",
    subtitle: "FUTURISTIC FORUMS",
    count: "29+ Summits",
    desc: "Dynamic conferences that foster innovation, knowledge exchange, and thought leadership across industries",
    icon: MdSummarize,
    bgColor: "from-gray-600 to-gray-800",
    hoverBg: "hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200",
  },
];

const FadeInStatCards = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative z-20 py-16 px-6 text-center">
      {/* Cards */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20"
      >
        {[
          { icon: '👥', end: 100000, label: 'Happy Guests' },
          { icon: '🎭', end: 500, label: 'Events Crafted' },
          { icon: '🌍', end: 50, label: 'Cities Reached' },
        ].map((item, i) => (
          <div
            key={i}
            // Added transition and hover scale for stat cards as per hover effects
            className="bg-white bg-opacity-5 backdrop-blur-md p-8 rounded-xl border border-white border-opacity-20 text-white
                                   transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-3xl font-extrabold bg-black inline-block px-3 py-1 rounded">
              <CountUp end={item.end} duration={2.5} separator="," />+
            </h3>
            <p className="mt-2 text-gray-300 text-lg">{item.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const testimonials = [
  {
    quote: "Vibgyor Events transformed our wedding into a fairy tale beyond our wildest dreams. Every detail was executed with precision and artistry that left our guests speechless. The level of luxury and attention to detail was simply extraordinary.",
    author: "Priya & Arjun Sharma",
    position: "Luxury Wedding Clients",
    location: "Udaipur Palace Wedding",
    image: "https://plus.unsplash.com/premium_photo-1713720662526-ac4f14abf84b?q=80&w=716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: "../assets/video/luxury-cta-bg.mp4",
    // image: "/placeholder.svg?height=150&width=150",
    // video: "/testimonial-1.mp4",
    rating: 5,
    event: "Royal Palace Wedding",
    year: "2024",
    luxury: true,
    bgImage: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Wedding",
  },
  {
    quote: "The corporate gala they organized for our company was nothing short of spectacular. The seamless blend of professionalism and creativity created an atmosphere that impressed all our stakeholders and clients.",
    author: "Rajesh Kumar",
    position: "CEO, TechCorp Industries",
    location: "Mumbai Convention Center",
    image: "https://plus.unsplash.com/premium_photo-1713720662526-ac4f14abf84b?q=80&w=716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: "/video/luxury-cta-bg.mp4",
    rating: 5,
    event: "Annual Corporate Gala",
    year: "2024",
    luxury: false,
    bgImage: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Corporate",
  },
  {
    quote: "Working with Vibgyor Events was a revelation. They didn't just organize an event; they created an experience that our guests are still talking about months later. Truly exceptional service and unmatched creativity.",
    author: "Kavya Desai",
    position: "Art Gallery Director",
    location: "Delhi Art District",
    image: "https://plus.unsplash.com/premium_photo-1713720662526-ac4f14abf84b?q=80&w=716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: "/testimonial-3.mp4",
    rating: 5,
    event: "Contemporary Art Exhibition",
    year: "2024",
    luxury: true,
    bgImage: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Cultural",
  },
  {
    quote: "The attention to detail and creative vision exceeded all our expectations. Every moment was crafted with such care and precision that our celebration became a masterpiece of memories.",
    author: "Michael & Emma Chen",
    position: "Private Celebration Clients",
    location: "Goa Beach Resort",
    image: "https://plus.unsplash.com/premium_photo-1713720662526-ac4f14abf84b?q=80&w=716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: "/video/luxury-cta-bg.mp4",
    rating: 5,
    event: "Anniversary Celebration",
    year: "2024",
    luxury: true,
    bgImage: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // bgImage: "/placeholder.svg?height=800&width=1200",
    category: "Private",
  },
]

const events = [
  {
    id: 1,
    title: "Royal Symphony Gala",
    description: "An evening of classical music featuring world-renowned orchestras and soloists.",
    date: "March 15, 2024",
    time: "7:00 PM",
    location: "Grand Opera House, Mumbai",
    price: "Star Luxury",
    type: "Invitation Only",
    image: "https://bridelifestyle.com/storage/photos/july2023/wedding-music-genres-for-every-type-of-celebration-radio-kings-band.webp",
    video: "v1.mp4",
    rating: 4.9,
    category: "From ₹5,000"
  },
  {
    id: 2,
    title: "Contemporary Art Showcase",
    description: "Interactive art exhibition showcasing contemporary artists and their masterpieces.",
    date: "March 22, 2025",
    time: "6:00 PM",
    location: "Heritage Gallery, Delhi",
    price: "Invitation Only",
    type: "Limited Seats",
    image: "https://images.unsplash.com/photo-1625076932159-61a032e2b7ad?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMGV2ZW50fGVufDB8fDB8fHww",
    video: "v3.mp4",
    rating: 4.8,
    category: "₹12,000"
  },
  {
    id: 3,
    title: "Culinary Constellation",
    description: "A gastronomic journey featuring world-class chefs and exotic cuisines.",
    date: "March 29, 2025",
    time: "8:00 PM",
    location: "Sky Terrace, Bangalore",
    price: "Luxury",
    type: "VIP Access",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    video: "v2.mp4",
    rating: 4.9,
    category: "From ₹12,000"
  },
  {
    id: 4,
    title: "Jazz Under the Stars",
    description: "Open-air jazz concert with international performers under the night sky.",
    date: "April 5, 2025",
    time: "9:00 PM",
    location: "Moonlight Gardens, Chennai",
    price: "Music Night",
    type: "Outdoor Event",
    image: "https://static.vecteezy.com/system/resources/previews/035/996/213/non_2x/ai-generated-silhouette-of-a-bride-and-groom-on-the-background-of-the-night-sky-a-dreamy-night-wedding-beneath-a-sky-full-of-stars-ai-generated-free-photo.jpg",
    video: "v4.mp4",
    rating: 4.6,
    category: "From ₹8,500"
  },
  {
    id: 5,
    title: "Fashion Week Finale",
    description: "Runway show featuring emerging and established designers.",
    date: "April 12, 2025",
    time: "7:30 PM",
    location: "Crystal Hall, Hyderabad",
    price: "Luxury Fashion",
    type: "Front Row Access",
    image: "https://images.pexels.com/photos/6119559/pexels-photo-6119559.jpeg",
    video: "v3.mp4",
    rating: 4.5,
    category: "From ₹10,000"
  },
  {
    id: 6,
    title: "Wine & Whiskey Tasting",
    description: "Premium tasting experience with rare vintages and aged single malts.",
    date: "April 19, 2024",
    time: "6:30 PM",
    location: "Vintage Cellar, Pune",
    price: "Elite Tasting",
    type: "Exclusive Event",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMHdpbmV8ZW58MHx8MHx8fDA%3D",
    video: "v1.mp4",
    rating: 4.9,
    category: "From ₹18,000"
  }
];


const Homepage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false) // ✅ Moved inside component
  const [isVisible, setIsVisible] = useState(false);
  // const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const particlesInit = async (engine) => {
    console.log("Particles Init", engine);
    await loadBasic(engine);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  // philosophy section 
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphsRef = useRef([]); // To hold refs for multiple paragraphs
  const clientSectionRef = useRef(null); // Ref for the client circles section
  const discoverButtonRef = useRef(null); // Ref for the discover button
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef();
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardsRef = useRef([]);
  const gridRef = useRef(null); // Ref for the grid container
  const videoRef = useRef(null);
  const contentRef = useRef(null); // Ref for the main hero content div
  const statsSectionRef = useRef(null); // Ref for the stats and actions section to trigger parallax
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const testimonialRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const navigate = useNavigate();





  const addToParagraphsRef = (el) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el);
    }
  };

  const clientNumbers = [1, 2, 3, 4, 5]; // Data for the circular client indicators

  // specturm
  useEffect(() => {
    setIsVisible(true);
    AOS.init({
      duration: 1200,
      offset: 100,
      once: true,
      easing: "ease-out"

    });

    const ctx = gsap.context(() => {
      const title = sectionRef.current?.querySelector(".spectrum-title");
      if (title) {
        gsap.fromTo(
          title,
          {
            opacity: 0,
            y: 200,
            rotationX: 45,
            scale: 0.7,
            filter: "blur(20px)",
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 2.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reset",
            },
          }
        );
      }

      // Animate all cards
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 150,
              scale: 0.7,
              rotationY: 90,
              rotationX: 45,
              z: -200,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              rotationX: 0,
              z: 0,
              duration: 2,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: card,
                start: "top bottom", // 👈 updated
                toggleActions: "play none none reset",
              },
              delay: index * 0.2, // still works for staggered effect
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current

    if (!section || !title) return

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    })

    titleTl
      .fromTo(
        title.querySelector(".title-main"),
        {
          opacity: 0,
          y: 200,
          rotationX: 45,
          scale: 0.7,
          filter: "blur(30px)",
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 2.5,
          ease: "power4.out",
        },
      )
      .fromTo(
        title.querySelector(".title-sub"),
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1.5",
      )

    gsap.fromTo(
      testimonialRef.current,
      {
        opacity: 0,
        y: 200,
        scale: 0.8,
        rotationY: 45,
        z: -200,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        z: 0,
        duration: 2.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.to(".testimonial-bg-1", {
      yPercent: -30,
      xPercent: 20,
      rotation: 45,
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    })

    gsap.to(".testimonial-bg-2", {
      yPercent: -40,
      xPercent: -15,
      rotation: -60,
      scale: 1.3,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    })

    gsap.to(".testimonial-bg-3", {
      yPercent: -25,
      xPercent: 10,
      rotation: 30,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 3,
      },
    })
  }, [])

  useEffect(() => {
    if (testimonialRef.current) {
      const tl = gsap.timeline()

      tl.to(testimonialRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        rotationY: 10,
        filter: "blur(5px)",
        duration: 0.4,
        ease: "power2.in",
      }).fromTo(
        testimonialRef.current,
        {
          opacity: 0,
          y: -50,
          scale: 0.95,
          rotationY: -10,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
      )
    }
  }, [currentIndex])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying)
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const currentTestimonial = testimonials[currentIndex]


  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    location: "",
    vision: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    alert("Thank you for your inquiry! We will contact you within 24 hours.");
  };

  const handleMouseEnter = () => {
    setIsVideoPlaying(true);
    videoRef.current?.play().catch((e) => {
      console.error("Video play failed:", e);
    });
  };

  const handleMouseLeave = () => {
    setIsVideoPlaying(false);
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };



  return (
    <>

      {/* Hero section  */}
      <section className="relative w-full h-screen overflow-hidden font-inter">

        {/* 🎥 Video - z-0 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* ✨ Royal Particles Overlay - z-10 */}
        <RoyalParticles className="z-10" intensity={0.8} size={4} />


        {/* Overlay Tint - z-20 */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-20"></div>


        {/* 💡 Main Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-[12.5rem] sm:text-[12rem] md:text-[15rem] font-playfair font-light tracking-tight leading-none mt-[-2rem] flex gap-2 justify-center">
            {['V', 'I', 'B', 'G', 'Y', 'O', 'R'].map((char, idx) => (
              <span
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="inline-block"
              >
                {char}
              </span>
            ))}
          </h1>

          <p className="mt-6 text-[3rem] font-inter font-[200] tracking-wide text-white/50" data-aos="fade-up"
            data-aos-delay="1000"
          >
            WHERE LUXURY TRANSCENDS REALITY
          </p>

          {/* 🎯 CTA Buttons */}
          <div className="mt-12 flex flex-col md:flex-row gap-6 items-center">
            {/* Left Button - Gradient + Blur Background */}
            {/* Left Button - Blur Glass + Scale */}
            <button
              className="backdrop-blur-lg bg-white/10 text-white px-12 py-5 rounded-sm text-base tracking-[0.2em] font-light uppercase shadow-md border border-white hover:bg-gradient-to-r from-[#b59fb2] to-[#a0abaf] transform transition-transform hover:scale-105 duration-200"
              data-aos="flip-left"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              EXPLORE COLLECTION
            </button>

            {/* Right Button - Transparent Border + Scale */}
            <button
              className="flex items-center gap-3 border border-white px-10 py-5 rounded-sm text-base tracking-[0.2em] font-light uppercase text-white hover:bg-white hover:text-black transform hover:scale-105 transition-transform duration-300"
              data-aos="flip-left"
              data-aos-delay="1000"
              data-aos-duration="1500"
            >
              <FaPlay size={14} />
              WATCH FILM
            </button>



          </div>

          {/* Stats Section */}
          <div className="mt-20 flex flex-col md:flex-row gap-10 md:gap-20 text-center text-white/80">
            <div>
              <div className="text-[3.5rem] font-[200] leading-none hover:text-[#8A2BE2]">500+</div>
              <div className="mt-2 text-[0.8rem] tracking-[0.25em] uppercase">Masterpieces Created</div>
            </div>
            <div>
              <div className="text-[3.5rem] font-[200] leading-none hover:text-[#8A2BE2]">XV</div>
              <div className="mt-2 text-[0.8rem] tracking-[0.25em] uppercase">Years of Excellence</div>
            </div>
            <div>
              <div className="text-[3.5rem] font-[200] leading-none hover:text-[#8A2BE2]">L+</div>
              <div className="mt-2 text-[0.8rem] tracking-[0.25em] uppercase">Global Destinations</div>
            </div>
          </div>


          {/* ⬇️ Scroll Hint */}
          <div className="absolute bottom-6 flex flex-col items-center text-white/70 text-xs tracking-[0.2em]">
            <div className="animate-bounce">&#x25BC;</div>
            <p>SCROLL</p>
          </div>
        </div>
      </section>


      {/* philosohy section  */}
      <div ref={sectionRef} className="relative bg-[#FFFFFF] text-gray-900 py-32 px-6 overflow-hidden" data-aos="fade-up">
        {/* Background Decorative Circles */}
        <div className="absolute top-1/4 -left-40 w-96 h-96  animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-[#8A2BE2]/15 to-[#FFD700]/15 rounded-full blur-3xl opacity-50 animate-float" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">




          {/* Left Column */}
          <div className="w-full lg:-ml-12 px-[-2px]">
            {/* OUR PHILOSOPHY with Line */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-0.5 w-full max-w-[100px] bg-[#b89433]"></div>
              <p ref={subheadingRef} className="text-[#b89433] tracking-[0.3em] text-md font-semibold uppercase">
                Our Philosophy
              </p>
            </div>

            {/* Heading */}
            <h2 ref={headingRef} className="text-5xl md:text-8xl font-playfair tracking-tight leading-tight mb-10">
              <span className="block text-black">CRAFTING</span>
              <span className="block bg-gradient-to-r from-[#C87C38] to-[#a07e7e] text-transparent bg-clip-text">
                PERFECTION
              </span>
            </h2>

            {/* Paragraphs */}
            <p ref={addToParagraphsRef} className="text-xl leading-relaxed max-w-2xl text-black/85 mb-6 font-inter" data-aos="fade-up" data-aos-duration="1000">
              At Vibgyor Events, we don't merely organize gatherings—we architect experiences
              that transcend the boundaries of imagination and reality.
            </p>
            <p ref={addToParagraphsRef} className="text-base leading-relaxed max-w-2xl text-black/70 mb-6 font-inter" data-aos="fade-up" data-aos-duration="2000">
              Each celebration becomes a masterpiece, meticulously crafted with the precision
              of a Swiss timepiece and the artistry of a Renaissance painting. Our philosophy
              centers on the belief that luxury lies not in excess, but in the perfect harmony
              of every detail.
            </p>
            <p ref={addToParagraphsRef} className="text-base leading-relaxed max-w-2xl text-black/70 mb-6 font-inter " data-aos="fade-up" data-aos-duration="2500">
              From intimate soirées to grand spectacles, we orchestrate moments that resonate
              through time, creating legacies that span generations. Your vision becomes our
              obsession, your dreams our blueprint for excellence.
            </p>

            {/* Trusted Clients Section */}
            <div
              ref={clientSectionRef}
              className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 mb-12"

            >
              {/* Overlapping Number Circles */}
              <div className="flex -space-x-3" data-aos="fade-up"
                data-aos-delay="500">
                {clientNumbers.map((num) => (
                  <div
                    key={num}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-[#C87C38] to-[#a07e7e] flex items-center justify-center text-white font-semibold text-lg border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300 font-inter"
                  >
                    {num}
                  </div>
                ))}
              </div>

              {/* Trust Text */}
              <div className="text-center md:text-left mt-6 md:mt-0 md:ml-6" data-aos="fade-up"
                data-aos-delay="500">
                <p className="text-gray-900 font-semibold text-md tracking-wide font-inter">
                  TRUSTED BY 500+ DISCERNING CLIENTS
                </p>
                <p className="text-gray-600 text-sm uppercase tracking-wide font-inter">
                  EXCELLENCE IN EVERY DETAIL
                </p>
              </div>
            </div>


            {/* Button */}
            <div ref={discoverButtonRef} className="mt-8 flex justify-center lg:justify-start">
              <button className="relative px-8 py-4 bg-black text-white uppercase tracking-widest text-sm font-medium border border-transparent hover:border-[#6A1B9A] bg-gradient-to-r from-[ #C87C38] to-[  #a07e7e] transition-all duration-300 group overflow-hidden font-inter" data-aos="fade-up" data-aos-delay="300">
                <span className="relative z-10">DISCOVER OUR LEGACY</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] to-[#6A1B9A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              <img
                ref={imageRef}
                src={ImageRef} // Make sure this is a valid imported image or correct path
                alt="Crafting Perfection at Vibgyor Events"
                className="shadow-2xl w-full h-[780px] object-cover transform transition-transform duration-700 group-hover:scale-105" // Height increased + no rounded corners
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-5 bg-gradient-to-r from-[#C87C38] to-[#a07e7e] w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-xs transform rotate-12 shadow-lg z-20 text-center leading-tight">
                LUXURY<br />EVENTS
              </div>
            </div>
          </div>
        </div>


      </div>



      {/* Experience Section  */}
      <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center py-8 md:py-[60px] px-4 md:px-[40px] font-['Times_New_Roman']">

        {/* Featured Label */}
        <div className="flex items-center mb-12 md:mb-[80px] w-full max-w-[400px]" data-aos="fade-up" data-aos-duration="1500">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#000000] to-transparent"></div>
          <span className="text-sm md:text-[17px] font-medium text-[#7a7a7a] to-[#FFC200]  tracking-[3px] md:tracking-[6px] mx-4 md:mx-[30px] font-sans">
            EVENTS
          </span>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#000000] to-transparent"></div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-[50px]">
          <h1
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[128px] font-normal m-0 leading-[0.85] tracking-[-1px] md:tracking-[-3px] 
                     text-[#b89433]  bg-clip-text font-['Didot,_Bodoni,_Playfair_Display']"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            EXTRAORDINARY
          </h1>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[72px] font-normal mt-2 md:mt-[15px] mb-0 leading-[0.85] tracking-[-1px] md:tracking-[-2px] 
            text-[#7a7a7a]  font-['Playfair_Display,_Georgia']"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            EXPERIENCES
          </h2>

        </div>

        {/* Description */}
        <p
          className="text-base md:text-[18px] text-[#3A2F25] text-center max-w-[800px] leading-[1.7] m-0 font-normal font-sans px-4 mb-12"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Discover extraordinary experiences crafted with passion and precision
        </p>

        {/* Events Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-8xl" data-aos="fade-up" data-aos-duration="2500">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
            >
              {/* Image/Video Section */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <source src={event.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-between p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center bg-white bg-opacity-80 px-2 py-1 rounded-full">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{event.rating}</span>
                    </div>
                    <div className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.price}
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="bg-white bg-opacity-80 px-2 py-1 rounded-full flex items-center">
                      <span className="font-medium font-serif">{event.category}</span>
                    </div>
                    <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
                      <FaPlay className="text-[#E44B2D]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 bg-white">
                <h3 className="text-3xl text-gray-900 mb-2 font-serif group-hover:text-[#C87C38] transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-[#3A2F25] mb-4 font-sans">{event.description}</p>

                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center">
                    <FaCalendarAlt className="w-4 h-4 mr-2 text-[#E44B2D]" />
                    <p className="font-sans">{event.date}</p>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="w-4 h-4 mr-2 text-[#C87C38]" />
                    <p className="font-sans">{event.time}</p>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2 text-[#3A2F25]" />
                    <p className="font-sans">{event.location}</p>
                  </div>
                </div>

                <div className="flex justify-center mt-5">
                  <button className="px-[140px] py-3 bg-gradient-to-r from-[#C87C38] to-[#a07e7e] text-white font-sans rounded-[30px] hover:text-black transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      










      {/* spectrum  */}
      {/* <div className="relative overflow-hidden" data-aos="fade-up">
        <RoyalParticles className="z-0" intensity={0.3} />
        <div className="container mx-auto relative z-10">
          <section className="w-full text-center overflow-hidden py-10">
            <div className="relative z-10 px-4 sm:px-6">
          

              <div
                className={`flex items-center justify-center mb-6 transition-all duration-700 ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                  }`}
              >
               <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#000000] to-transparent"></div>
                <h4 className="text-sm sm:text-base md:text-lg font-semibold tracking-widest text-violet-600 uppercase mx-3 sm:mx-5">
                  Our Spectrum
                </h4>
               <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#000000] to-transparent"></div>
              </div>

      

              <div
                className={`transition-all duration-700 ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                  }`}
              >
                <h2 className="spectrum-title text-[2.3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[7.5rem] font-serif font-bolder text-slate-900 leading-tight tracking-tight">
                  SPECTRUM OF
                </h2>
                <h3 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-serif font-bolder bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent mt-1">
                  EXCELLENCE
                </h3>
              </div>

           

              <p
                className={`max-w-5xl mx-auto mt-6 text-sm sm:text-base md:text-lg text-gray-500 px-2 leading-relaxed transition-all duration-700 ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                  }`}
              >
                From intimate gatherings to grand celebrations, we craft experiences
                across every spectrum of human emotion and celebration. Each category
                represents a unique facet of our expertise and artistic vision.
              </p>
            </div>
          </section>

        

          {selectedCardIndex === null && (
            <section className="py-6" ref={sectionRef}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-[1400px] mx-auto px-6">
                {cardData.map((card, index) => {
                  const IconComponent = card.icon;
                  return (
                    <div
                      key={index}
                      onClick={() => navigate(`/details/${index}`)}
                      ref={(el) => (cardRefs.current[index] = el)}
                      className="spectrum-card group relative bg-white rounded-3xl shadow-lg border border-gray-200 transition-all duration-300 ease-out p-8 flex flex-col justify-between h-full min-h-[400px] cursor-pointer box-border overflow-hidden hover:shadow-xl hover:border-violet-300 hover:min-h-[395px]"
                      data-aos="fade-up"
                    >
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#d8f3ff] to-[#f3e8ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                      <div className="absolute left-2 top-3 flex flex-col items-center gap-3 h-full z-10">
                        <div className="absolute top-1 left-3 w-2.5 h-2.5 bg-violet-500 rounded-full z-20 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
                        <div className="w-1 h-full bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full transform scale-y-0 group-hover:scale-y-100 mt-0 transition-transform duration-500 origin-top" />
                      </div>

                      {card.tag && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg group-hover:scale-110 transition-all duration-300 rotate-0 group-hover:rotate-2">
                          <span className="text-yellow-300">💎</span>
                          {card.tag}
                        </div>
                      )}

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white mb-4 text-xl shadow-lg">
                          <IconComponent size={28} />
                        </div>

                        <p className="text-purple-600 text-xs font-bold tracking-wide uppercase mb-1">
                          {card.subtitle}
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {card.title}
                        </h3>

                        <div className="inline-flex items-center bg-purple-100 text-sm text-purple-700 px-3 py-1 rounded-full mb-3 w-fit">
                          {card.count}
                        </div>

                        <p className="text-gray-600 text-sm leading-snug mb-5">
                          {card.desc}
                        </p>

                        <div className="h-[1px] w-full bg-gradient-to-r from-violet-500 to-indigo-500 mb-3" />

                        <div className="flex items-center justify-between text-blue-800 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                          <span>EXPLORE</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          

          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center space-y-8">
              <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
                Can't find what you're looking for? We create bespoke experiences
                tailored to your vision.
              </p>
              <div className="flex justify-center">
                <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center">
                  <span>EXPLORE CUSTOM SOLUTIONS</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div> */}







      {/* testimonials  */}



      {/* <section
        ref={sectionRef}
        className="relative py-32 px-4 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] overflow-hidden"
        data-aos="fade-up" >
        <div ref={particlesRef}>
          <RoyalParticles className="z-0" intensity={0.5} />
        </div>

        <div className="absolute inset-0 opacity-8">
          <div className="testimonial-bg-1 absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-r from-[#8A2BE2] to-[#0056B3] rounded-full blur-3xl"></div>
          <div className="testimonial-bg-2 absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-gradient-to-l from-[#7bacac] to-[#bca2d5] rounded-full blur-3xl"></div>
          <div className="testimonial-bg-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#0056B3] to-[#008080] rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-8xl mx-auto text-center relative z-10">
          <div className="mb-24">
            <div className="flex items-center justify-center space-x-8 mb-16">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="flex items-center space-x-4">
                <Crown className="w-8 h-8 text-[#8A2BE2]" />
                <span className="text-sm font-medium text-white/80 tracking-[0.4em] uppercase">Royal Testimonials</span>
                <Gem className="w-8 h-8 text-[#0056B3]" />
              </div>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>

            <div ref={titleRef}>
              <ParallaxText speed={0.3}>
                <h2 className="title-main text-7xl md:text-9xl lg:text-[12rem] font-serif font-extralight text-white mb-8 leading-none tracking-tight">
                  VOICES OF
                </h2>
              </ParallaxText>
              <div className="title-sub text-5xl md:text-6xl lg:text-8xl bg-gradient-to-r from-[#caabe8] via-[#a6c4e3] to-[#acdbdb] bg-clip-text text-transparent font-light mb-8">
                EXCELLENCE
              </div>
            </div>

            <p className="text-2xl text-white/70 max-w-5xl mx-auto leading-relaxed font-light">
              Hear from our distinguished clients who have experienced the magic of Vibgyor Events firsthand
            </p>
          </div>

          <div
            ref={testimonialRef}
            className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] p-16 md:p-20 shadow-2xl mb-20 overflow-hidden border border-white/20"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute inset-0 opacity-15">
              <img
                src={currentTestimonial.bgImage || "/placeholder.svg"}
                alt="Background"
                className="w-full h-full object-cover rounded-[3rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 rounded-[3rem]"></div>
            </div>

            {isVideoPlaying && (
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
                <video
                  ref={videoRef}
                  muted={isMuted}
                  loop
                  className="w-full h-full object-cover opacity-25"
                  onLoadedData={() => videoRef.current?.play()}
                >
                  <source src={currentTestimonial.video} type="video/mp4" />
                </video>

                <div className="absolute top-8 right-8 flex space-x-3">
                  <MagneticButton
                    onClick={toggleMute}
                    className="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-500 shadow-lg"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </MagneticButton>
                  <MagneticButton
                    onClick={toggleVideo}
                    className="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-500 shadow-lg"
                  >
                    <Play className="w-5 h-5 ml-0.5" />
                  </MagneticButton>
                </div>
              </div>
            )}

            <div className="absolute top-8 left-8 flex space-x-3">
              {currentTestimonial.luxury && (
                <div className="bg-gradient-to-r from-[#8A2BE2] to-[#0056B3] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 shadow-xl">
                  <Crown className="w-4 h-4" />
                  <span>Royal Experience</span>
                </div>
              )}
              <div className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                {currentTestimonial.category}
              </div>
            </div>

            <div className="relative mb-12">
              <Quote className="w-24 h-24 text-[#8A2BE2] mx-auto opacity-40 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8A2BE2] to-[#0056B3] rounded-full opacity-20 animate-ping"></div>
              </div>
            </div>

            <div className="relative z-10 min-h-[500px] flex items-center justify-center">
              <div className="text-center max-w-6xl">
                <div className="flex justify-center mb-12">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <div key={i} className="relative">
                      <Star
                        className="w-8 h-8 text-yellow-400 fill-current animate-pulse mx-1"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                      <div className="absolute inset-0 w-8 h-8 bg-yellow-400 rounded-full opacity-20 blur-lg animate-pulse mx-1"></div>
                    </div>
                  ))}
                </div>

                <p className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-relaxed mb-16 italic tracking-wide">
                  "{currentTestimonial.quote}"
                </p>

                <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
                  <div className="relative group">
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-700">
                      <img
                        src={currentTestimonial.image || "/placeholder.svg"}
                        alt={currentTestimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <MagneticButton
                      onClick={toggleVideo}
                      className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-r from-[#8A2BE2] to-[#0056B3] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-500"
                    >
                      <Play className="w-5 h-5 ml-0.5" />
                    </MagneticButton>

                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#0056B3] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700"></div>
                  </div>

                  <div className="text-center lg:text-left">
                    <h4 className="text-3xl font-serif text-white mb-3">{currentTestimonial.author}</h4>
                    <p className="text-white/80 text-xl mb-2">{currentTestimonial.position}</p>
                    <p className="text-[#8A2BE2] text-lg font-medium mb-1">{currentTestimonial.event}</p>
                    <p className="text-white/60 text-sm">
                      {currentTestimonial.location} • {currentTestimonial.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-12 mt-16">
              <MagneticButton
                onClick={prevTestimonial}
                className="w-16 h-16 bg-white/10 backdrop-blur-xl hover:bg-gradient-to-r hover:from-[#8A2BE2] hover:to-[#0056B3] text-white rounded-full flex items-center justify-center transition-all duration-700 shadow-xl border border-white/20"
              >
                <ChevronLeft className="w-7 h-7" />
              </MagneticButton>

              <div className="flex space-x-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`relative transition-all duration-700 ${index === currentIndex
                      ? "w-12 h-4 bg-gradient-to-r from-[#8A2BE2] to-[#0056B3] rounded-full shadow-lg"
                      : "w-4 h-4 bg-white/30 hover:bg-white/50 rounded-full hover:scale-125"
                      }`}
                  >
                    {index === currentIndex && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] to-[#0056B3] rounded-full blur-lg opacity-50"></div>
                    )}
                  </button>
                ))}
              </div>

              <MagneticButton
                onClick={nextTestimonial}
                className="w-16 h-16 bg-white/10 backdrop-blur-xl hover:bg-gradient-to-r hover:from-[#8A2BE2] hover:to-[#0056B3] text-white rounded-full flex items-center justify-center transition-all duration-700 shadow-xl border border-white/20"
              >
                <ChevronRight className="w-7 h-7" />
              </MagneticButton>
            </div>

            <div className="w-full h-2 bg-white/10 rounded-full mt-12 overflow-hidden backdrop-blur-sm">
              <div
                className="h-full bg-gradient-to-r from-[#8A2BE2] via-[#0056B3] to-[#008080] transition-all duration-700 ease-linear shadow-lg relative"
                style={{
                  width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] to-[#0056B3] blur-sm opacity-50"></div>
              </div>
            </div>

            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b from-[#8A2BE2] via-[#0056B3] to-[#008080] opacity-30 rounded-l-[3rem]"></div>

            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-tr-[3rem]"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-bl-[3rem]"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Distinguished Clients", icon: "👑" },
              { number: "4.9/5", label: "Excellence Rating", icon: "⭐" },
              { number: "98%", label: "Royal Retention", icon: "💎" },
              { number: "15+", label: "Years of Mastery", icon: "🏆" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-white/5 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-white/10 hover:scale-105 hover:bg-white/10"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-700">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-extralight text-white mb-3 group-hover:text-[#8A2BE2] transition-colors duration-700">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm tracking-wide uppercase font-medium">{stat.label}</div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#8A2BE2] to-[#0056B3] opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section> */}





      {/* portfolio  */}

      <div className="relative min-h-screen bg-black text-white font-inter overflow-hidden" data-aos="fade-up" >
        {/* main element remains the overall container for content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-1">

          {/* First section: Particles will appear only here */}
          {/* Added 'overflow-hidden' to ensure particles are clipped within this section */}
          <section ref={sectionRef} className="text-center relative z-10 w-full py-20 flex flex-col justify-center items-center overflow-hidden">
            {/* Canvas is now inside this section and positioned to fill it */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 pointer-events-none z-0"
              style={{ background: 'transparent' }}
            />
            {/* <RoyalParticles intensity={0.8} size={7} /> */}

            {/* Content within the first section, placed on top of the canvas */}
            <div className="relative z-10"> {/* Added relative z-10 to ensure content is above canvas */}
              <div className="flex items-center space-x-4 mb-4 md:mb-6 justify-center">
                <hr className="w-12 border-t border-gray-600" />
                <p className="text-sm uppercase tracking-widest text-gray-400">Portfolio</p>
                <hr className="w-12 border-t border-gray-600" />
              </div>

              <h1
                ref={titleRef}
                style={{ fontFamily: 'Playfair Display, serif' }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-2 md:mb-4 leading-tight" data-aos="fade-up" data-aos-duration="1000"
              >
                MASTERPIECES
              </h1>

              <h2
                ref={subTitleRef}
                className="text-4xl md:text-6xl lg:text-7xl font-sans font-semibold mb-6 md:mb-8" data-aos="fade-up" data-aos-duration="1500"
                style={{
                  background: 'linear-gradient(to right, #c87c38, #b77c5d, #A07e7e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'Playfair Display, serif',
                }}
              >
                IN MOTION
              </h2>

              <p
                ref={paragraphRef}
                style={{ fontFamily: 'Inter, sans-serif' }}
                className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-duration="2000"
              >
                Each creation tells a story of uncompromising excellence and artistic vision
              </p>
            </div>
          </section>

          {/* This second section will NOT have particles as the canvas is not here */}
          <section
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="relative z-10 -mt-15 px-4 text-center"
          >
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto" data-aos="zoom-out-up" data-aos-duration="2000">

              {/* Card 1 - Weddings */}
              <div
                ref={el => cardsRef.current[0] = el} // Assign ref
                className="relative group overflow-hidden shadow-lg flex flex-col justify-end p-6 h-96 w-full"
                style={{ background: 'linear-gradient(to bottom, #2a2a2a, #4a4a4a)' }}
              >
                <img src="src/assets/wedding.jpeg" alt="Wedding" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0 z-0" />
                <video src="src/assets/wadding.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <i className="fas fa-crown text-6xl text-white/60"></i>
                </div>
                <div className="relative z-20 text-left w-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300 text-xs uppercase tracking-wider">Weddings</span>
                    <span className="text-gray-300 text-xs">2023</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Royal Wedding Ceremony</h4>
                  <p className="text-gray-400 text-sm mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a href="#" className="flex items-center group-hover:underline">
                      VIEW PROJECT
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

              {/* Card 2 - Corporate */}
              <div
                ref={el => cardsRef.current[1] = el} // Assign ref
                className="relative group overflow-hidden shadow-lg flex flex-col justify-end p-6 h-96 w-full"
                style={{ background: 'linear-gradient(to bottom, #2a2a2a, #4a4a4a)' }}
              >
                <img src="src/assets/reunion.jpeg" alt="Corporate" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0 z-0" />
                <video src="src/assets/reunion.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <i className="fas fa-play text-6xl text-white/60"></i>
                </div>
                <div className="relative z-20 text-left w-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300 text-xs uppercase tracking-wider">Corporate</span>
                    <span className="text-300 text-xs">2023</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Corporate Gala</h4>
                  <p className="text-gray-400 text-sm mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a href="#" className="flex items-center group-hover:underline">
                      VIEW PROJECT
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

              {/* Card 3 - Cultural */}
              <div
                ref={el => cardsRef.current[2] = el} // Assign ref
                className="relative group overflow-hidden shadow-lg flex flex-col justify-end p-6 h-96 w-full"
                style={{ background: 'linear-gradient(to bottom, #2a2a2a, #4a4a4a)' }}
              >
                <img src="src/assets/party.jpeg" alt="Art" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0 z-0" />
                <video src="src/assets/party.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <i className="fas fa-star text-6xl text-white/60"></i>
                </div>
                <div className="relative z-20 text-left w-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300 text-xs uppercase tracking-wider">Cultural</span>
                    <span className="text-gray-300 text-xs">2023</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Art Exhibition</h4>
                  <p className="text-gray-400 text-sm mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a href="#" className="flex items-center group-hover:underline">
                      VIEW PROJECT
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

              {/* Card 4 - Entertainment */}
              <div
                ref={el => cardsRef.current[3] = el} // Assign ref
                className="relative group overflow-hidden shadow-lg flex flex-col justify-end p-6 h-96 w-full"
                style={{ background: 'linear-gradient(to bottom, #2a2a2a, #4a4a4a)' }}
              >
                <img src="src/assets/wollvideo.jpeg" alt="Music" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0 z-0" />
                <video src="src/assets/wollvideo.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <i className="fas fa-music text-6xl text-white/60"></i>
                </div>
                <div className="relative z-20 text-left w-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300 text-xs uppercase tracking-wider">Entertainment</span>
                    <span className="text-gray-300 text-xs">2023</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Music Concert</h4>
                  <p className="text-gray-400 text-sm mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a href="#" className="flex items-center group-hover:underline">
                      VIEW PROJECT
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

            </div>
            {/* <RoyalParticles intensity={0.8} size={7} /> */}
            {/* Button */}
            <div className="mt-18 flex justify-center py-16 mb-10">
              <button className="flex items-center px-10 py-4 text-lg font-medium text-white uppercase tracking-wider border border-gray-600 bg-white/10 animate-fadeInUp transition-all duration-700 hover:bg-white hover:border-gray-500 hover:text-black group-hover:opacity-100
transform translate-y-4 group-hover:translate-y-0">
                VIEW COMPLETE PORTFOLIO
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>

          </section>
        </main>
      </div>


      {/* video section  */}


      <div className="relative min-h-screen overflow-hidden bg-black text-white font-inter"> {/* Added font-inter here */}
        {/* Background Video */}
        <video
          ref={videoRef} // Attach ref for GSAP animation
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="src/assets/reunion.mp4"
          autoPlay
          loop
          muted
          playsInline
        // Framer Motion initial/animate properties removed as GSAP handles video animation
        />

        {/* Dark Overlay for Video with cinematic gradient */}
        {/* Added bg-gradient-to-t from-black/80 to-transparent for cinematic vignette */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-70 z-[1] bg-gradient-to-t from-black/80 to-transparent" />

        {/* Particle Canvas */}
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-10"
          style={{ background: 'transparent' }}
        />
        <RoyalParticles intensity={0.8} size={6} />
        {/* Foreground Content */}
        {/* Attached contentRef to this div for children animation */}
        {/* min-h-screen added to ensure this section is tall enough to allow content to center */}
        <div
          ref={contentRef}
          className="relative z-20 flex flex-col justify-center items-center text-center px-6 pt-10 sm:pt-12 md:pt-14 pb-16 sm:pb-20 md:pb-24 min-h-screen"
        >
          <div className="relative mb-10">
            {/* Added animate-pulse-slow to the main icon div as per specification */}
            <div className="w-[85px] h-[85px] rounded-full bg-gradient-to-r from-[#C87C38] to-[#a07e7e] flex items-center justify-center mx-auto shadow-xl animate-pulse-slow" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white" className="w-9 h-9">
                <path d="M4 6l2.5 4L9 6l3 4 3-4 2.5 4L20 6v12H4V6zm0 14h16v2H4v-2z" />
              </svg>
            </div>
            {/* Floating Decorative Icons */}
            <div className="absolute top-0 -left-6 text-yellow-300 text-xl animate-bounce">💎</div>
            {/* Added 'floating-element' class for GSAP animation */}
            <div className="absolute top-0 left-full text-purple-300 text-lg floating-element">✨</div>
            <div className="absolute top-10 right-full text-white text-sm animate-spin">⭐</div>
          </div>

          <h1 className="text-[3.3rem] sm:text-[4.8rem] md:text-[5.5rem] font-extrabold leading-[1.15] font-playfair" data-aos="fade-up" data-duration="1000" >
            UNCOVER YOUR NEXT
          </h1>
          <h2
            className="text-[3.1rem] sm:text-[4.6rem] md:text-[5.3rem] font-bold tracking-wide bg-clip-text text-transparent bg-grand-experience-gradient"
          >
            GRAND EXPERIENCE
          </h2>

          <p className="mt-1 text-gray-300 text-lg md:text-xl max-w-2xl px-4 font-inter"> {/* Explicitly added font-inter and inline style for p tag */}
            Step into a world where every moment is crafted with precision, every detail tells a story,
            and every experience becomes a cherished memory that transcends time and creates lasting legacies.
          </p>

          <button className="mt-10 px-10 py-4 text-base sm:text-lg font-semibold uppercase tracking-wider border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-inter"> {/* Explicitly added font-inter to button */}
            Explore More
          </button>
        </div>

        {/* Stats and Actions Section - Now contains parallax elements */}
        {/* Added relative and overflow-hidden for parallax children */}
        <div ref={statsSectionRef} className="relative z-20 py-8 px-6 text-center overflow-hidden">
          {/* Parallax Background Shapes (Hidden by default, styled for blur and opacity) */}
          <div className="cta-bg-1 absolute w-60 h-60 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 -top-20 -left-20 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="cta-bg-2 absolute w-80 h-80 bg-gradient-to-tl from-green-400 to-yellow-500 rounded-full blur-3xl opacity-30 -bottom-20 -right-20 transform translate-x-1/2 translate-y-1/2"></div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#C87C38] to-[#a07e7e] text-white font-bold text-lg shadow-lg transition-all duration-300 hover:opacity-90 hover:scale-105 btn-gradient-shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-inter"> {/* Explicitly added font-inter to button */}
              VIEW ALL EXPERIENCES ➔
            </button>
            <button className="px-8 py-3 rounded-full bg-white text-black font-semibold text-lg shadow-md transition-all duration-300 hover:bg-gray-200 hover:scale-105 btn-shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 font-inter"> {/* Explicitly added font-inter to button */}
              ✨ BOOK EVENT
            </button>
          </div>
          <FadeInStatCards /> 

          <p className="mt-4 text-gray-400 text-base font-inter">Trusted by leading brands and individuals worldwide</p> {/* Explicitly added font-inter to p tag */}

          {/* Logo Grid Section */}
          <section className="text-center mt-8 px-4">
            <p className="text-gray-200 text-sm mb-8 font-inter"> {/* Explicitly added font-inter to p tag */}
              Trusted by leading brands and individuals worldwide
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-xl mx-auto ">
              {['B1', 'B2', 'B3', 'B4', 'B5'].map((box, i) => (
                <div
                  key={i}
                  className="text-white text-base font-bold bg-white bg-opacity-5 backdrop-blur-lg px-8 py-5 rounded-lg border border-white border-opacity-10 shadow-[0_0_10px_rgba(255,255,255,0.05)] transition-all duration-300 transform hover:scale-105 hover:text-[#B89433] hover:bg-opacity-10 text-center cursor-pointer font-inter" // Explicitly added font-inter to div
                >
                  {box}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-gray-400 text-xs tracking-widest font-inter"> {/* Explicitly added font-inter to div */}
              <span className="w-16 h-px bg-gray-600" />
              <i className="fas fa-crown text-xs" />
              <span>CRAFTED WITH ROYAL PRECISION</span>
              <i className="fas fa-crown text-xs" />
              <span className="w-16 h-px bg-gray-600" />
            </div>
          </section>
        </div>
      </div>



      {/* 📝 Multi-Step Form */}
      <div className="relative overflow-hidden">
        <RoyalParticles className="z-0" intensity={0.3} />
        <div className="min-h-screen bg-gradient-to-b from-black via-[#0d0d0d] to-[#121212] flex flex-col overflow-x-hidden items-center justify-center text-center px-4 py-10 sm:p-20">
          <section>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 sm:w-20 h-px bg-gray-700"></span>
              <Crown className="text-purple-500 w-6 h-6" />
              <span className="w-12 sm:w-20 h-px bg-gray-700"></span>
            </div>
            <h2 className="text-3xl sm:text-7xl font-serif font-semibold text-white">BOOK YOUR</h2>
            <h2 className="text-3xl sm:text-7xl font-serif font-semibold text-transparent bg-gradient-to-r from-[#C87C38] to-[#a07e7e] bg-clip-text  mt-1">
              ROYAL EVENT
            </h2>
            <p className="text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-xl px-2">
              Begin your journey to an extraordinary celebration. Our team will craft a bespoke experience that exceeds your wildest dreams.
            </p>
          </section>

          {/* 🌟 Form Box */}
          <div className="relative w-full max-w-4xl mx-auto mt-10 sm:mt-12 group rounded-2xl shadow-xl overflow-hidden px-2">
            <div className="absolute left-0 top-0 h-full z-30">
              <div className="w-1 h-full bg-gradient-to-r from-[#C87C38] to-[#a07e7e] rounded-full" />
            </div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#8A2BE2] to-[#0056B3] rounded-full blur-3xl opacity-50 z-0" />
            <div className="relative z-20 bg-white/10 backdrop-blur-md rounded-2xl">
              <div className="bg-[#0f0f0f]/90 backdrop-blur-xl rounded-2xl px-4 py-6 sm:px-10 sm:py-10 text-white">
                {/* Step Circles */}
                <div className="flex justify-between items-center mb-3">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${step >= s
                        ? 'bg-gradient-to-r from-[#C87C38] to-[#a07e7e] text-white'
                        : 'border-gray-600 text-gray-400'
                        }`}
                    >
                      {s}
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden mb-6">
                  <div
                    className="h-full bg-gradient-to-r from-[#C87C38] to-[#a07e7e] transition-all duration-500 ease-in-out"
                    style={{
                      width: step === 1 ? '2%' : step === 2 ? '50%' : '100%',
                    }}
                  />
                </div>

                {/* Render Step Components */}
                {step === 1 && (
                  <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />
                )}
                {step === 2 && (
                  <Step2
                    formData={formData}
                    handleChange={handleChange}
                    nextStep={nextStep}
                    prevStep={prevStep}
                  />
                )}
                {step === 3 && (
                  <Step3
                    formData={formData}
                    handleChange={handleChange}
                    prevStep={prevStep}
                    handleSubmit={handleSubmit}
                  />
                )}

                {/* Contact Info */}
                <div className="mt-10 border-t border-gray-700 pt-8 text-center">
                  <h3 className="text-lg font-semibold text-white mb-6">
                    Prefer to speak directly?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-400">
                    <div className="flex flex-col items-center gap-2">
                      <FiPhoneCall className="w-6 h-6 text-purple-500" />
                      <p className="text-white font-medium">+91 98765 43210</p>
                      <p>24/7 Available</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <HiOutlineMailOpen className="w-6 h-6 text-blue-400" />
                      <p className="text-white font-medium">hello@vibgyorevents.com</p>
                      <p>Response in 2 hours</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <AiOutlineClockCircle className="w-6 h-6 text-teal-400" />
                      <p className="text-white font-medium">Mon–Sun 9AM–9PM</p>
                      <p>Consultation Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Step 1 Component
function Step1({ formData, handleChange, nextStep }) {
  return (
    <>
      <h3 className="text-xl font-semibold font-serif mb-4 text-left">Step 1: Personal Info</h3>
      <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="mb-4 p-2 w-full rounded" />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="mb-4 p-2 w-full rounded" />
      <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="mb-6 p-2 w-full rounded" />
      <button onClick={nextStep} className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] px-6 py-2 rounded text-white">Next</button>
    </>
  );
}

// Step 2 Component
function Step2({ formData, handleChange, nextStep, prevStep }) {
  return (
    <>
      <h3 className="text-xl font-semibold font-serif mb-4 text-left">Step 2: Event Info</h3>
      <input name="eventType" placeholder="Event Type" value={formData.eventType} onChange={handleChange} className="mb-4 p-2 w-full rounded" />
      <input name="eventDate" type="date" value={formData.eventDate} onChange={handleChange} className="mb-4 p-2 w-full rounded" />
      <input name="guestCount" placeholder="Guest Count" value={formData.guestCount} onChange={handleChange} className="mb-4 p-2 w-full rounded" />
      <input name="budget" placeholder="Budget" value={formData.budget} onChange={handleChange} className="mb-4 p-2 w-full rounded" />
      <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="mb-6 p-2 w-full rounded" />
      <div className="flex gap-4">
        <button onClick={prevStep} className="bg-gray-600 px-6 py-2 rounded text-white">Back</button>
        <button onClick={nextStep} className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] px-6 py-2 rounded text-white">Next</button>
      </div>
    </>
  );
}

// Step 3 Component
function Step3({ formData, handleChange, prevStep, handleSubmit }) {
  return (
    <>
      <h3 className="text-xl font-semibold font-serif mb-4 text-left">Step 3: Final Touch</h3>
      <textarea name="vision" placeholder="Describe your event vision..." value={formData.vision} onChange={handleChange} className="mb-6 p-2 w-full rounded h-32" />
      <div className="flex gap-4">
        <button onClick={prevStep} className="bg-gray-600 px-6 py-2 rounded text-white">Back</button>
        <button onClick={handleSubmit} className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] px-6 py-2 rounded text-white">Submit</button>
      </div>
    </>


    // </>

  );
};

export default Homepage;


