// 1

import React, { useEffect } from 'react';
import { FaStar, FaPlay, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experiences = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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

  return (
    <div className="min-h-screen bg-[#FFF6D5] flex flex-col items-center py-8 md:py-[60px] px-4 md:px-[40px] font-['Times_New_Roman']">
      
      {/* Featured Label */}
      <div className="flex items-center mb-12 md:mb-[80px] w-full max-w-[400px]" data-aos="fade-up" data-aos-duration="1500">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#000000] to-transparent"></div>
        <span className="text-sm md:text-[17px] font-medium text-[#C87C38] to-[#FFC200]  tracking-[3px] md:tracking-[6px] mx-4 md:mx-[30px] font-sans">
          EVENTS
        </span>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#000000] to-transparent"></div>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-8 md:mb-[50px]">
        <h1
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[128px] font-normal m-0 leading-[0.85] tracking-[-1px] md:tracking-[-3px] 
                     text-[#000000]  bg-clip-text font-['Didot,_Bodoni,_Playfair_Display']"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          EXTRAORDINARY
        </h1>
        <h2
  className="text-2xl sm:text-4xl md:text-5xl lg:text-[72px] font-normal mt-2 md:mt-[15px] mb-0 leading-[0.85] tracking-[-1px] md:tracking-[-2px] 
             bg-gradient-to-r from-[#C87C38] to-[#E44B2D] text-transparent bg-clip-text font-['Playfair_Display,_Georgia']"
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
                  <div className="bg-gradient-to-r from-[#C87C38] to-[#9B6B6B] text-white px-3 py-1 rounded-full text-sm font-medium">
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
                <button className="px-[140px] py-3 bg-gradient-to-r from-[#C87C38] to-[#F06A4D] text-white font-sans rounded-[30px] hover:from-[#F7931E] hover:to-[#A3842E] transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;


// 2

// import React from 'react';
// import { FaStar, FaPlay, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

// const Experiences = () => {
//   const events = [
//     {
//       id: 1,
//       title: "Royal Symphony Gala",
//       description: "An evening of classical music featuring world-renowned orchestras and soloists.",
//       date: "March 15, 2024",
//       time: "7:00 PM",
//       location: "Grand Opera House, Mumbai",
//       price: "From ₹5,000",
//       type: "Invitation Only",
//       image: "https://i.pinimg.com/1200x/fb/74/41/fb7441092892f3245d68593f79f8973b.jpg",
//       video: "v1.mp4",
//       rating: 4.9,
//       category: "Star Luxury"
//     },
//     {
//       id: 2,
//       title: "Contemporary Art Showcase",
//       description: "Interactive art exhibition showcasing contemporary artists and their masterpieces.",
//       date: "March 22, 2024",
//       time: "6:00 PM",
//       location: "Heritage Gallery, Delhi",
//       price: "From ₹12,000",
//       type: "Limited Seats",
//       image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       video: "v2.mp4",
//       rating: 4.7,
//       category: "Premium Art"
//     },
//     {
//       id: 3,
//       title: "Culinary Constellation",
//       description: "A gastronomic journey featuring world-class chefs and exotic cuisines.",
//       date: "March 29, 2024",
//       time: "8:00 PM",
//       location: "Sky Terrace, Bangalore",
//       price: "From ₹15,000",
//       type: "VIP Access",
//       image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       video: "v3.mp4",
//       rating: 4.8,
//       category: "Gourmet"
//     },
//     {
//       id: 4,
//       title: "Jazz Under the Stars",
//       description: "Open-air jazz concert with international performers under the night sky.",
//       date: "April 5, 2024",
//       time: "9:00 PM",
//       location: "Moonlight Gardens, Chennai",
//       price: "From ₹8,500",
//       type: "Outdoor Event",
//       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       video: "v4.mp4",
//       rating: 4.6,
//       category: "Music Night"
//     },
//     {
//       id: 5,
//       title: "Fashion Forward",
//       description: "Exclusive runway show featuring emerging designers and avant-garde collections.",
//       date: "April 12, 2024",
//       time: "7:30 PM",
//       location: "Crystal Hall, Hyderabad",
//       price: "From ₹10,000",
//       type: "Front Row Access",
//       image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       video: "v5.mp4",
//       rating: 4.5,
//       category: "Luxury Fashion"
//     },
//     {
//       id: 6,
//       title: "Wine & Whiskey Tasting",
//       description: "Premium tasting experience with rare vintages and aged single malts.",
//       date: "April 19, 2024",
//       time: "6:30 PM",
//       location: "Vintage Cellar, Pune",
//       price: "From ₹18,000",
//       type: "Exclusive Event",
//       image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       video: "v6.mp4",
//       rating: 4.9,
//       category: "Elite Tasting"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#fafafa] flex flex-col items-center py-8 md:py-[60px] px-4 md:px-[40px] font-['Times_New_Roman']">
//       {/* Featured Label with Lines */}
//       <div className="flex items-center mb-12 md:mb-[80px] w-full max-w-[400px]">
//         <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent"></div>
//         <span className="text-sm md:text-[17px] font-medium text-[#8A2BE2] tracking-[3px] md:tracking-[6px] mx-4 md:mx-[30px] font-sans">
//           FEATURED
//         </span>
//         <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent"></div>
//       </div>

//       {/* Main Heading */}
//       <div className="text-center mb-8 md:mb-[50px]">
//         <h1
//           className="text-4xl sm:text-6xl md:text-8xl lg:text-[128px] font-normal text-[#1a1a1a] m-0 leading-[0.85] tracking-[-1px] md:tracking-[-3px] font-['Didot, Bodoni, Playfair Display']"
//           data-aos="fade-up"
//           data-aos-duration="1000">
//           EXTRAORDINARY
//         </h1>
//         <h2
//           className="text-2xl sm:text-4xl md:text-5xl lg:text-[72px] font-normal text-[#2563eb] mt-2 md:mt-[15px] mb-0 leading-[0.85] tracking-[-1px] md:tracking-[-2px] font-['Playfair Display, Georgia']"
//           data-aos="fade-up"
//           data-aos-duration="1500">
//           EXPERIENCES
//         </h2>
//       </div>

//       {/* Description */}
//       <p
//         className="text-base md:text-[18px] text-[#666666] text-center max-w-[800px] leading-[1.7] m-0 font-normal font-sans px-4 mb-12"
//         data-aos="fade-up"
//         data-aos-duration="2000">
//         Discover extraordinary experiences crafted with passion and precision
//       </p>

//       {/* Events Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
//         {events.map((event) => (
//           <div 
//             key={event.id} 
//             className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//             data-aos="fade-up">
            
//             {/* Image/Video Container with Overlay */}
//             <div className="relative h-64 w-full overflow-hidden">
//               {/* Image */}
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
//               />
              
//               {/* Video */}
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//               >
//                 <source src={event.video} type="video/mp4" />
//               </video>
              
//               {/* Overlay Elements */}
//               <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-between p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
//                 {/* Top Row - Star Rating and Price */}
//                 <div className="flex justify-between items-start">
//                   <div className="flex items-center bg-white bg-opacity-80 px-2 py-1 rounded-full">
//                     <FaStar className="text-yellow-400 mr-1" />
//                     <span className="text-sm font-medium">{event.rating}</span>
//                   </div>
//                   <div className="bg-[#8A2BE2] text-white px-3 py-1 rounded-full text-sm font-medium">
//                     {event.price}
//                   </div>
//                 </div>
                
//                 {/* Bottom Row - Category and Play Button */}
//                 <div className="flex justify-between items-end">
//                   <div className="bg-white bg-opacity-80 px-2 py-1 rounded-full">
//                     <span className="text-sm font-medium">{event.category}</span>
//                   </div>
//                   <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
//                     <FaPlay className="text-[#8A2BE2]" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Event Content */}
//             <div className="p-6 bg-white font-sans"> {/* Added font-sans here */}
//               <div className="flex justify-between items-start mb-2">
//                 <span className="text-lg font-bold text-[#8A2BE2]">{event.price}</span>
//                 <span className="text-sm font-medium text-gray-500">{event.type}</span>
//               </div>
              
//               <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Didot, Bodoni, Playfair Display'] group-hover:text-[#8A2BE2] transition-colors duration-300">
//                 {event.title}
//               </h3>
              
//               <p className="text-gray-600 mb-4">{event.description}</p>
              
//               <div className="space-y-3 text-sm text-gray-500">
//                 <div className="flex items-center">
//                   <FaCalendarAlt className="w-4 h-4 mr-2 text-[#8A2BE2]" />
//                   <p>{event.date}</p>
//                 </div>
//                 <div className="flex items-center">
//                   <FaClock className="w-4 h-4 mr-2 text-[#8A2BE2]" />
//                   <p>{event.time}</p>
//                 </div>
//                 <div className="flex items-center">
//                   <FaMapMarkerAlt className="w-4 h-4 mr-2 text-[#8A2BE2]" />
//                   <p>{event.location}</p>
//                 </div>
//               </div>

//               {/* Added View Details Button */}
//               <div className="flex justify-between mt-6">
//                 <button className="px-4 py-2 bg-[#8A2BE2] text-white rounded-md hover:bg-[#6a1fc1] transition-colors duration-300">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experiences;

