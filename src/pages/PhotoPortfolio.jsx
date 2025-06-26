"use client"

import { useState, useMemo, useEffect } from "react"
import {
  Search,
  Grid,
  List,
  Calendar,
  MapPin,
  ImageIcon,
  ArrowLeft,
  Heart,
  Share2,
  Download,
  Camera,
  Users,
} from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const PhotoPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState("ALL COLLECTIONS")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState("grid")
  const [selectedCollection, setSelectedCollection] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  // Sample data for all collections
  const allCollections = [
    {
      id: 1,
      title: "Royal Wedding Ceremony",
      category: "WEDDINGS",
      imageCount: 45,
      date: "December 15, 2023",
      location: "Udaipur Palace, Rajasthan",
      image:
        "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://www.ptaufiqphotography.com/wp-content/uploads/2024/06/ptaufiq-indian-wedding-rajkot-India-ceremony-couple-portraits.jpg",
      description:
        "An opulent celebration of love set against the majestic backdrop of Udaipur's royal palace. Every detail meticulously crafted to create an unforgettable experience.",
      client: "The Sharma Family",
      duration: "3 Days",
      totalImages: 8,
      photographer: "Arjun Mehta",
      guests: "500+ Guests",
      galleryImages: [
        "https://cdn0.weddingwire.in/article/1405/3_2/960/jpg/125041-indian-wedding-photography-timeline-shutterdown.jpeg",
        "https://lifestoryeventz.in/wp-content/uploads/2019/11/wed.jpg",
        "https://image.wedmegood.com/resized/720X/uploads/member/713320/1738405553_17_wedding_reception.jpg",
        "https://www.brides.com/thmb/ZeoE3HTrY5cOE1cmsxn7mEKKEUs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-7b6422ce9ac04516994d449dba5e2b96.jpg",
        "https://static.wixstatic.com/media/86622c_ecabd79f25de4d79adb0f22479c3964f~mv2.jpg/v1/fill/w_640,h_414,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/86622c_ecabd79f25de4d79adb0f22479c3964f~mv2.jpg",
        "https://www.brides.com/thmb/wsr0Mj20xZwh-BYJlB9Dwwzxg2w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/winslow-and-angus-wedding-29-2ea33a526fa3406ba0519bd200c0115d.jpg",
        "https://anilevents.in/wp-content/uploads/2020/02/WhatsApp-Image-2020-02-19-at-1.10.38-AM.jpeg",
        "https://media-api.xogrp.com/images/93ddc5c5-e090-432a-b781-90835b5aea3c~rs_768.h"
      ],
    },
    {
      id: 2,
      title: "Tech Summit 2023",
      category: "CORPORATE",
      imageCount: 32,
      date: "November 20, 2023",
      location: "Mumbai Convention Center",
      image: "https://www.starseventdesign.com/wp-content/uploads/2015/07/Corporate-Events.jpg",
      description:
        "A groundbreaking technology summit bringing together industry leaders and innovators. Capturing the essence of innovation and collaboration in the corporate world.",
      client: "TechCorp Industries",
      duration: "2 Days",
      totalImages: 32,
      photographer: "Arjun Mehta",
      guests: "800+ Attendees",
      galleryImages: [
        "https://mythsmusic.com/wp-content/uploads/2019/08/Corporate-Event-Management.jpg",
        "https://grandfestive.com/img/corporate-event-management-services.jpg",
        "https://www.brandway.co.in/wp-content/uploads/2019/11/corporate-Events.jpg",
        "https://5.imimg.com/data5/BW/WO/MY-38679691/corporate-event-management.jpg",
        "https://tavitsphotography.com/wp-content/uploads/2019/10/Troon-Global-Leadership-Conference-2019-109.jpg",
        "https://www.fredericpaulussen.be/wp-content/uploads/2020/05/photography-prices-for-events-1.jpg",
        "https://icorporateevents.in/wp-content/uploads/2025/03/Promote-Special-Events-in-goajpeg-1.jpeg",
        "https://www.brandway.co.in/wp-content/uploads/2019/11/corporate-Events.jpg"
      ],
    },
    {
      id: 3,
      title: "Classical Music Evening",
      category: "CONCERTS",
      imageCount: 28,
      date: "October 15, 2023",
      location: "Delhi Opera House",
      image:
        "https://imageio.forbes.com/specials-images/imageserve//628c06f838d3f4bcb05ca2cd/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      description:
        "An enchanting evening of classical music featuring renowned artists. The perfect harmony of tradition and elegance captured in every frame.",
      client: "Delhi Cultural Society",
      duration: "1 Day",
      totalImages: 28,
      photographer: "Arjun Mehta",
      guests: "300+ Music Lovers",
      galleryImages: [
        "https://images.moneycontrol.com/static-mcnews/2024/03/Darshan-Raval-2.jpeg?impolicy=website&width=770&height=431",
        "https://res.cloudinary.com/simpleview/image/upload/v1476755307/clients/denver/red-rocks-winter-concert-1_567ca252-f0ae-5102-065b6b925d495a29.jpg",
        "https://brownpalace.wordpress.com/wp-content/uploads/2013/04/screen-shot-2013-04-24-at-1-29-42-pm.png",
        "https://www.tottenhamhotspur.com/media/ogcdr1h4/concerts-events-ths-16x9.jpg?anchor=center&mode=crop&quality=90&width=750",
        "https://www.ischgl.com/deskline/events/events/Top%20of%20the%20Mountain%20Closing%20Concert_109143845/152221875/image-thumb__152221875__hero/closing_118929697.jpg",
        "https://utsav.gov.in/public/uploads/event_picture_image/event_124/1662711901284147996.png",
        "https://networksites.livenationinternational.com/networksites/lnxx-event-discovery-placeholder.jpg?format=webp&width=3840&quality=75",
        "https://www.winsport.ca/assets/images/Events/Event-Facility-Rentals/Event-Centre/Winsport_CAPL-3291__ScaleWidthWzEyNTVd.jpg"
      ],
    },
    {
      id: 4,
      title: "Destination Wedding Goa",
      category: "WEDDINGS",
      imageCount: 67,
      date: "January 2024",
      location: "Goa Beach Resort",
      image: "https://cdn.eventplanner.co.uk/img4/lp/wedding/lp-wedding-venue.jpg",
      description:
        "A dreamy beachside wedding celebration with the golden sunset as the backdrop. Romance meets paradise in this unforgettable destination wedding.",
      client: "The Patel Family",
      duration: "4 Days",
      totalImages: 67,
      photographer: "Arjun Mehta",
      guests: "200+ Guests",
      galleryImages: [
        "https://cdn0.weddingwire.in/article/1405/3_2/960/jpg/125041-indian-wedding-photography-timeline-shutterdown.jpeg",
        "https://lifestoryeventz.in/wp-content/uploads/2019/11/wed.jpg",
        "https://image.wedmegood.com/resized/720X/uploads/member/713320/1738405553_17_wedding_reception.jpg",
        "https://www.brides.com/thmb/ZeoE3HTrY5cOE1cmsxn7mEKKEUs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-7b6422ce9ac04516994d449dba5e2b96.jpg",
        "https://static.wixstatic.com/media/86622c_ecabd79f25de4d79adb0f22479c3964f~mv2.jpg/v1/fill/w_640,h_414,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/86622c_ecabd79f25de4d79adb0f22479c3964f~mv2.jpg",
        "https://www.brides.com/thmb/wsr0Mj20xZwh-BYJlB9Dwwzxg2w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/winslow-and-angus-wedding-29-2ea33a526fa3406ba0519bd200c0115d.jpg",
        "https://anilevents.in/wp-content/uploads/2020/02/WhatsApp-Image-2020-02-19-at-1.10.38-AM.jpeg",
        "https://media-api.xogrp.com/images/93ddc5c5-e090-432a-b781-90835b5aea3c~rs_768.h"
      ],
    },
    {
      id: 5,
      title: "Corporate Annual Meet",
      category: "CORPORATE",
      imageCount: 24,
      date: "September 2023",
      location: "Bangalore Tech Park",
      image: "https://www.aleitevents.com/wp-content/uploads/2019/02/220805_ABSA_008.jpg",
      description:
        "Annual corporate gathering showcasing achievements and future vision. Professional photography capturing the spirit of teamwork and success.",
      client: "Bangalore Tech Solutions",
      duration: "1 Day",
      totalImages: 24,
      photographer: "Arjun Mehta",
      guests: "150+ Employees",
      galleryImages: [
        "https://mythsmusic.com/wp-content/uploads/2019/08/Corporate-Event-Management.jpg",
        "https://grandfestive.com/img/corporate-event-management-services.jpg",
        "https://www.brandway.co.in/wp-content/uploads/2019/11/corporate-Events.jpg",
        "https://5.imimg.com/data5/BW/WO/MY-38679691/corporate-event-management.jpg",
        "https://tavitsphotography.com/wp-content/uploads/2019/10/Troon-Global-Leadership-Conference-2019-109.jpg",
        "https://www.fredericpaulussen.be/wp-content/uploads/2020/05/photography-prices-for-events-1.jpg",
        "https://icorporateevents.in/wp-content/uploads/2025/03/Promote-Special-Events-in-goajpeg-1.jpeg",
        "https://www.brandway.co.in/wp-content/uploads/2019/11/corporate-Events.jpg"
      ],
    },
    {
      id: 6,
      title: "Rock Concert Live",
      category: "CONCERTS",
      imageCount: 89,
      date: "August 2023",
      location: "Mumbai Stadium",
      image:
        "https://cdn.rwsglobal.com/wp-content/uploads/2024/11/Festivals-Concerts_Event-Mangement.jpg?strip=all&lossy=1&ssl=1",
      description:
        "High-energy rock concert with electrifying performances. Capturing the raw energy and passion of live music in its purest form.",
      client: "Mumbai Music Festival",
      duration: "1 Day",
      totalImages: 89,
      photographer: "Arjun Mehta",
      guests: "5000+ Rock Fans",
      galleryImages: [
         "https://images.moneycontrol.com/static-mcnews/2024/03/Darshan-Raval-2.jpeg?impolicy=website&width=770&height=431",
        "https://res.cloudinary.com/simpleview/image/upload/v1476755307/clients/denver/red-rocks-winter-concert-1_567ca252-f0ae-5102-065b6b925d495a29.jpg",
        "https://brownpalace.wordpress.com/wp-content/uploads/2013/04/screen-shot-2013-04-24-at-1-29-42-pm.png",
        "https://www.tottenhamhotspur.com/media/ogcdr1h4/concerts-events-ths-16x9.jpg?anchor=center&mode=crop&quality=90&width=750",
        "https://www.ischgl.com/deskline/events/events/Top%20of%20the%20Mountain%20Closing%20Concert_109143845/152221875/image-thumb__152221875__hero/closing_118929697.jpg",
        "https://utsav.gov.in/public/uploads/event_picture_image/event_124/1662711901284147996.png",
        "https://networksites.livenationinternational.com/networksites/lnxx-event-discovery-placeholder.jpg?format=webp&width=3840&quality=75",
        "https://www.winsport.ca/assets/images/Events/Event-Facility-Rentals/Event-Centre/Winsport_CAPL-3291__ScaleWidthWzEyNTVd.jpg"
      ],
    },
    {
      id: 7,
      title: "Art Gallery Opening",
      category: "EXHIBITIONS",
      imageCount: 15,
      date: "July 2023",
      location: "Delhi Art Center",
      image: "https://4.imimg.com/data4/TU/GV/MY-20979260/events.jpg",
      description:
        "Sophisticated art gallery opening featuring contemporary works. Elegant documentation of art, culture, and refined social gathering.",
      client: "Delhi Art Foundation",
      duration: "1 Day",
      totalImages: 15,
      photographer: "Arjun Mehta",
      guests: "100+ Art Enthusiasts",
      galleryImages: [
        "https://www.gl-events.com/sites/default/files/styles/max_2600x2600/public/2019-03/global-industry-salon-exhibitions.jpg?itok=xTtCSeRs",
        "https://www.dreamcast.in/blog/wp-content/uploads/2024/07/Exhibitions-and-Trade-Shows.jpg",
        "https://images.squarespace-cdn.com/content/v1/582af0705016e1e43d9b1231/1485341423669-7BVGEO0P3F7D93KRSEE1/Exhbition+%26+Event+Mangement.jpg?format=1000w",
        "https://knect365.imgix.net/uploads/20240612-124316-2--6a6b5f980294585c9839668a476166d2.jpg?auto=format&fit=max&w=412&dpr=5",
        "https://www.wdsoft.in/wp-content/uploads/2024/08/Stall-design-service-by-wdsoft-agency.webp",
        "https://media.licdn.com/dms/image/v2/D5612AQFsVuYXRP38Nw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691544755974?e=2147483647&v=beta&t=RqnF6Cs_sqZu124BM103066oIzS378eKqcyFI-lFs_Y",
        "https://msblogs.thesourcemediaassets.com/2024/02/Joanna-Blog-image_960x540.png",
        "https://images.squarespace-cdn.com/content/v1/5bf4b28efcf7fd808913da83/1616454956123-35Q7SNR1253JQO4BYFYA/FRD-WAM-WildLife-2.jpg"
      ],
    },
    {
      id: 8,
      title: "Fashion Week Backstage",
      category: "EXHIBITIONS",
      imageCount: 42,
      date: "June 2023",
      location: "Mumbai Fashion Hub",
      image: "https://t4.ftcdn.net/jpg/03/64/84/17/360_F_364841766_qc35nrh5wUCWEsBQTxQmqleNQX8C5W2m.jpg",
      description:
        "Behind-the-scenes glimpse of fashion week preparations. Capturing the creativity, chaos, and beauty of the fashion industry.",
      client: "Mumbai Fashion Council",
      duration: "3 Days",
      totalImages: 42,
      photographer: "Arjun Mehta",
      guests: "Fashion Industry",
      galleryImages: [
        "https://www.gl-events.com/sites/default/files/styles/max_2600x2600/public/2019-03/global-industry-salon-exhibitions.jpg?itok=xTtCSeRs",
        "https://www.dreamcast.in/blog/wp-content/uploads/2024/07/Exhibitions-and-Trade-Shows.jpg",
        "https://images.squarespace-cdn.com/content/v1/582af0705016e1e43d9b1231/1485341423669-7BVGEO0P3F7D93KRSEE1/Exhbition+%26+Event+Mangement.jpg?format=1000w",
        "https://knect365.imgix.net/uploads/20240612-124316-2--6a6b5f980294585c9839668a476166d2.jpg?auto=format&fit=max&w=412&dpr=5",
        "https://www.wdsoft.in/wp-content/uploads/2024/08/Stall-design-service-by-wdsoft-agency.webp",
        "https://media.licdn.com/dms/image/v2/D5612AQFsVuYXRP38Nw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691544755974?e=2147483647&v=beta&t=RqnF6Cs_sqZu124BM103066oIzS378eKqcyFI-lFs_Y",
        "https://msblogs.thesourcemediaassets.com/2024/02/Joanna-Blog-image_960x540.png",
        "https://images.squarespace-cdn.com/content/v1/5bf4b28efcf7fd808913da83/1616454956123-35Q7SNR1253JQO4BYFYA/FRD-WAM-WildLife-2.jpg"
      ],
    },
    {
      id: 9,
      title: "Charity Gala Night",
      category: "GALAS",
      imageCount: 33,
      date: "May 2023",
      location: "Delhi Grand Hotel",
      image:
        "https://eventologists.co.uk/wp-content/uploads/photo-gallery/Eventologists-Gala-Award-Dinner-styling-ideas-2.jpg?bwg=1703198084",
      description:
        "Elegant charity gala bringing together philanthropists for a noble cause. Sophisticated event photography capturing generosity and glamour.",
      client: "Delhi Charity Foundation",
      duration: "1 Day",
      totalImages: 33,
      photographer: "Arjun Mehta",
      guests: "250+ Philanthropists",
      galleryImages: [
        "https://media.istockphoto.com/id/1480109377/photo/success-hands-or-toast-in-a-party-for-goals-winning-deal-or-new-year-at-luxury-social-event.jpg?s=612x612&w=0&k=20&c=7O7m7lG6LVXY-rzr1NE4aVgkJhxjAnS25PkSM_jTN9c=",
        "https://d1uayvjp8uj8kk.cloudfront.net/static/magazine/67c5ef087cd91900010ff56b-b.webp",
        "https://soletsparty.co.uk/wp-content/uploads/2017/02/crystal-inspired-decorations-ice.png",
        "https://thumbs.dreamstime.com/b/decor-candles-lamps-corporate-event-gala-dinner-pink-purple-decor-candles-lamps-corporate-event-119332610.jpg",
        "https://media.istockphoto.com/id/1038049758/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.jpg?s=612x612&w=0&k=20&c=DYW6MLLqUZ7Z6Cys3itVslOBkDsa-17cexOxtln5Oi0=",
        "https://i.pinimg.com/originals/30/f0/d5/30f0d5c92d80c2c8da586a363a6033dd.jpg",
        "https://thumbs.dreamstime.com/b/red-carpet-gala-event-spotlights-starry-backdrop-awards-366947039.jpg",
        "https://cleancomedians.com/wp-content/uploads/2021/12/A-gala-is-the-perfect-type-of-event-to-boost-brand-awareness-and-network-with-other-companies-and-organizations-1024x661.jpg"
      ],
    },
    {
      id: 10,
      title: "Awards Ceremony",
      category: "GALAS",
      imageCount: 56,
      date: "April 2023",
      location: "Mumbai Convention Hall",
      image: "https://www.paperlesspost.com/blog/wp-content/uploads/Blog02_GalaThemes_BlackAndWhiteGala.png",
      description:
        "Prestigious awards ceremony celebrating excellence across industries. Formal event photography capturing moments of recognition and achievement.",
      client: "Mumbai Business Awards",
      duration: "1 Day",
      totalImages: 56,
      photographer: "Arjun Mehta",
      guests: "400+ Industry Leaders",
      galleryImages: [
        "https://media.istockphoto.com/id/1480109377/photo/success-hands-or-toast-in-a-party-for-goals-winning-deal-or-new-year-at-luxury-social-event.jpg?s=612x612&w=0&k=20&c=7O7m7lG6LVXY-rzr1NE4aVgkJhxjAnS25PkSM_jTN9c=",
        "https://d1uayvjp8uj8kk.cloudfront.net/static/magazine/67c5ef087cd91900010ff56b-b.webp",
        "https://soletsparty.co.uk/wp-content/uploads/2017/02/crystal-inspired-decorations-ice.png",
        "https://thumbs.dreamstime.com/b/decor-candles-lamps-corporate-event-gala-dinner-pink-purple-decor-candles-lamps-corporate-event-119332610.jpg",
        "https://media.istockphoto.com/id/1038049758/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.jpg?s=612x612&w=0&k=20&c=DYW6MLLqUZ7Z6Cys3itVslOBkDsa-17cexOxtln5Oi0=",
        "https://i.pinimg.com/originals/30/f0/d5/30f0d5c92d80c2c8da586a363a6033dd.jpg",
        "https://thumbs.dreamstime.com/b/red-carpet-gala-event-spotlights-starry-backdrop-awards-366947039.jpg",
        "https://cleancomedians.com/wp-content/uploads/2021/12/A-gala-is-the-perfect-type-of-event-to-boost-brand-awareness-and-network-with-other-companies-and-organizations-1024x661.jpg"
      ],
    },
    {
      id: 11,
      title: "Traditional Wedding Rajasthan",
      category: "WEDDINGS",
      imageCount: 78,
      date: "March 2024",
      location: "Jaipur Heritage Hotel",
      image: "https://i.pinimg.com/564x/42/9b/af/429baf18cbb66c62afa1fcb44918dd6e.jpg",
      description:
        "Rich traditional Rajasthani wedding steeped in culture and heritage. Vibrant colors, ancient rituals, and timeless traditions beautifully documented.",
      client: "The Rajput Family",
      duration: "5 Days",
      totalImages: 78,
      photographer: "Arjun Mehta",
      guests: "600+ Guests",
      galleryImages: [
        "https://cdn0.weddingwire.in/article/1405/3_2/960/jpg/125041-indian-wedding-photography-timeline-shutterdown.jpeg",
        "https://lifestoryeventz.in/wp-content/uploads/2019/11/wed.jpg",
        "https://image.wedmegood.com/resized/720X/uploads/member/713320/1738405553_17_wedding_reception.jpg",
        "https://www.brides.com/thmb/ZeoE3HTrY5cOE1cmsxn7mEKKEUs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-7b6422ce9ac04516994d449dba5e2b96.jpg",
        "https://static.wixstatic.com/media/86622c_ecabd79f25de4d79adb0f22479c3964f~mv2.jpg/v1/fill/w_640,h_414,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/86622c_ecabd79f25de4d79adb0f22479c3964f~mv2.jpg",
        "https://www.brides.com/thmb/wsr0Mj20xZwh-BYJlB9Dwwzxg2w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/winslow-and-angus-wedding-29-2ea33a526fa3406ba0519bd200c0115d.jpg",
        "https://anilevents.in/wp-content/uploads/2020/02/WhatsApp-Image-2020-02-19-at-1.10.38-AM.jpeg",
        "https://media-api.xogrp.com/images/93ddc5c5-e090-432a-b781-90835b5aea3c~rs_768.h"
      ],
    },
    {
      id: 12,
      title: "Product Launch Event",
      category: "CORPORATE",
      imageCount: 19,
      date: "February 2024",
      location: "Chennai Tech Center",
      image: "https://www.oyorooms.com/blog/wp-content/uploads/2018/02/Locate-Your-Events-Purpose.jpg",
      description:
        "Innovative product launch event showcasing cutting-edge technology. Professional documentation of corporate milestone and market introduction.",
      client: "Chennai Innovations Ltd",
      duration: "1 Day",
      totalImages: 19,
      photographer: "Arjun Mehta",
      guests: "120+ Industry Experts",
      galleryImages: [
       "https://mythsmusic.com/wp-content/uploads/2019/08/Corporate-Event-Management.jpg",
        "https://grandfestive.com/img/corporate-event-management-services.jpg",
        "https://www.brandway.co.in/wp-content/uploads/2019/11/corporate-Events.jpg",
        "https://5.imimg.com/data5/BW/WO/MY-38679691/corporate-event-management.jpg",
        "https://tavitsphotography.com/wp-content/uploads/2019/10/Troon-Global-Leadership-Conference-2019-109.jpg",
        "https://www.fredericpaulussen.be/wp-content/uploads/2020/05/photography-prices-for-events-1.jpg",
        "https://icorporateevents.in/wp-content/uploads/2025/03/Promote-Special-Events-in-goajpeg-1.jpeg",
        "https://www.brandway.co.in/wp-content/uploads/2019/11/corporate-Events.jpg"
      ],
    },
  ]

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts = {
      "ALL COLLECTIONS": allCollections.length,
      WEDDINGS: 0,
      CORPORATE: 0,
      CONCERTS: 0,
      EXHIBITIONS: 0,
      GALAS: 0,
    }

    allCollections.forEach((item) => {
      counts[item.category]++
    })

    return counts
  }, [allCollections])

  // Filter collections based on active category and search term
  const filteredCollections = useMemo(() => {
    let filtered = allCollections

    // Filter by category
    if (activeCategory !== "ALL COLLECTIONS") {
      filtered = filtered.filter((item) => item.category === activeCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    return filtered
  }, [activeCategory, searchTerm, allCollections])

  const categories = ["ALL COLLECTIONS", "WEDDINGS", "CORPORATE", "CONCERTS", "EXHIBITIONS", "GALAS"]

  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection)
  }

  const handleBackToGallery = () => {
    setSelectedCollection(null)
  }

  // Detail View Component
  const DetailView = ({ collection }) => {
    return (
      <div className="min-h-screen bg-gray-50 p-6 mt-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800" onClick={handleBackToGallery}>
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">BACK TO GALLERY</span>
          </button>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Heart size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Share2 size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Download size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Side */}
          <div className="space-y-6">
            {/* Category Tag */}
            <div className="inline-block">
              <span className="text-purple-600 text-sm font-semibold tracking-wide uppercase">
                {collection.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-serif font-semibold text-gray-900 leading-tight">
              {collection.title}
            </h1>
            {/* Description */}
            <p className="text-gray-600 text-[18px] font-light font-sans leading-relaxed max-w-lg">
              {collection.description}
            </p>

            {/* Event Details */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-purple-600" />
                <span className="text-gray-700 text-[14px]">{collection.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Camera size={20} className="text-purple-600" />
                <span className="text-gray-700 text-[14px] ">{collection.photographer}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-purple-600" />
                <span className="text-gray-700 text-[14px]">{collection.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users size={20} className="text-purple-600" />
                <span className="text-gray-700 text-[14px]">{collection.guests}</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8 mt-[50px]">
            {/* Collection Details */}
            <div className="bg-white w-full sm:w-[90%] md:w-[600px] h-auto min-h-[320px] rounded-lg p-6 sm:p-8 shadow-sm mx-auto">
              <h2 className="text-xl sm:text-2xl text-[20px] text-[#1A1A1A] font-serif text-gray-900 mb-4">
                Collection Details
              </h2>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 gap-2 sm:gap-0">
                  <span className="text-gray-600 text-[16px] text-[#666666]">Client:</span>
                  <span className="text-gray-900 text-[16px] text-[#1A1A1A] text-right sm:text-left">
                    {collection.client}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <span className="text-gray-600  text-[16px] text-[#666666]">Duration:</span>
                  <span className="text-gray-900 text-[16px] text-[#1A1A1A] text-right sm:text-left">
                    {collection.duration}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <span className="text-gray-600  text-[16px] text-[#666666]">Total Images:</span>
                  <span className="text-gray-900 text-[16px] text-[#1A1A1A] text-right sm:text-left">
                    {collection.totalImages}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <span className="text-gray-600  text-[16px] text-[#666666]">Photographer:</span>
                  <span className="text-gray-900 text-[16px] text-[#1A1A1A] text-right sm:text-left">
                    {collection.photographer}
                  </span>
                </div>
                <button className="w-full bg-gray-900 text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-4">
                  Request Similar Event
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="mb-8">
            <h2 className="text-3xl font-light text-gray-900 mb-2">Gallery</h2>
            <p className="text-gray-600">View all images from this collection</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collection.galleryImages?.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:opacity-75 transition-opacity cursor-pointer transform hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
                data-aos-duration="600"
                onClick={() => {
                  setSelectedImage(image)
                  setSelectedImageIndex(index)
                }}
              >
                <img
                  src={image || "/placeholder.svg?height=300&width=300"}
                  alt={`${collection.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal/Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Previous Button */}
              {selectedImageIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const newIndex = selectedImageIndex - 1
                    setSelectedImageIndex(newIndex)
                    setSelectedImage(collection.galleryImages[newIndex])
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Next Button */}
              {selectedImageIndex < collection.galleryImages.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const newIndex = selectedImageIndex + 1
                    setSelectedImageIndex(newIndex)
                    setSelectedImage(collection.galleryImages[newIndex])
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Full size view"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {selectedImageIndex + 1} / {collection.galleryImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // If a collection is selected, show detail view
  if (selectedCollection) {
    return <DetailView collection={selectedCollection} />
  }

  // Otherwise show gallery view
  return (
    <>
      {/* Gallery-1 */}
      <div className="min-h-[50vh] bg-[#F8F8F8] px-4 sm:px-6 py-8 mt-12">
        {/* Back to Home Link */}
        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-duration="2000">
          {/* <div className="flex justify-center items-center mb-5">
            <button
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              style={{ border: "none" }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              BACK TO HOME
            </button>
          </div> */}

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl  text-[#1A1A1A] mb-6 sm:mb-8 tracking-tight font-bold font-['serif'] font-light">
              GALLERY
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#666666] font-light leading-relaxed max-w-3xl font-sanc mx-auto">
              A curated collection of our finest moments, captured in timeless elegance.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery-2 */}
      <div className="min-h-screen bg-[#F6F6F6] p-6">
        <div className="max-w-7xl mx-auto">
          {/* Navigation and Search */}
          <div className="w-full bg-light">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category Navigation - Improved for mobile */}
              <div className="flex flex-wrap gap-2 w-full lg:w-auto" data-aos="fade-up" data-aos-duration="2000">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base transition-colors ${
                      activeCategory === category
                        ? "bg-black text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category} <span className="hidden sm:inline">({categoryCounts[category]})</span>
                  </button>
                ))}
              </div>

              {/* Search and View Controls - Improved responsiveness */}
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full lg:w-auto mb-4 sm:mb-0"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {/* Search Bar - Responsive width */}
                <div className="relative w-full sm:w-48 md:w-64 mb-12">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search collections..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent w-full"
                  />
                </div>

                {/* View Mode Toggle - Better mobile spacing */}
                <div className="flex bg-white border mb-12 border-gray-200 rounded-lg self-start sm:self-auto hover:border-[#8A2BE2] border-[3px] rounded-lg ">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-l-lg ${
                      viewMode === "grid" ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-r-lg ${
                      viewMode === "list" ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <List className="w-4 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6" data-aos="fade-up" data-aos-duration="2000">
            <p className="text-gray-600">
              Showing {filteredCollections.length} collection{filteredCollections.length !== 1 ? "s" : ""}
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          {/* Collections Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredCollections.map((collection, index) => {
                // Calculate animation delay based on position
                const animationDelay = `${(index % 3) * 150 + Math.floor(index / 3) * 100}ms`

                return (
                  <div
                    key={collection.id}
                    className="overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
                    data-aos="fade-up"
                    data-aos-delay={animationDelay}
                    data-aos-duration="800"
                    data-aos-easing="ease-out-cubic"
                    onClick={() => handleCollectionClick(collection)}
                  >
                    <div className="relative group">
                      <img
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.title}
                        className="w-full h-[40vh] object-cover group-hover:opacity-75 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="p-4"
                      data-aos="fade-up"
                      data-aos-delay={`${Number.parseInt(animationDelay) + 200}ms`}
                      data-aos-duration="600"
                    >
                      <h3 className="text-lg font-sans text-gray-900 hover:text-[#8A2BE2] mb-2 transition-colors duration-300">
                        {collection.title}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm mb-1">
                        <Calendar className="w-4 h-4 mr-2 text-[#0056E3]" />
                        {collection.date}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-[#008080]" />
                        {collection.location}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            // List view with enhanced animations
            <div className="space-y-4">
              {filteredCollections.map((collection, index) => (
                <div
                  key={collection.id}
                  className="bg-white h-auto md:h-[46vh] shadow-md p-4 md:p-6 hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02]"
                  data-aos="slide-up"
                  data-aos-delay={`${index * 150}`}
                  data-aos-duration="800"
                  data-aos-easing="ease-out-cubic"
                  onClick={() => handleCollectionClick(collection)}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img
                          src={collection.image || "/placeholder.svg"}
                          alt={collection.title}
                          className="w-full md:w-[381px] h-auto md:h-[286px] object-cover transition-transform duration-500 group-hover:scale-110"
                          data-aos="fade-right"
                          data-aos-delay={`${index * 150 + 200}`}
                          data-aos-duration="600"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                      </div>
                      <div className="w-full">
                        <h3
                          className="text-2xl md:text-[36px] font-gray-500 mb-2 md:mb-4 font-serif hover:text-[#8A2BE2] transition-colors duration-300"
                          data-aos="fade-up"
                          data-aos-delay={`${index * 150 + 100}`}
                          data-aos-duration="600"
                        >
                          {collection.title}
                        </h3>
                        <div
                          className="flex flex-col sm:flex-row sm:items-center text-[14px] md:text-[16px] text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4 mt-1 mb-4"
                          data-aos="fade-up"
                          data-aos-delay={`${index * 150 + 250}`}
                          data-aos-duration="600"
                        >
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {collection.date}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {collection.location}
                          </div>
                        </div>
                        <button
                          className="flex items-center text-[#8A2BE2] text-[14px] hover:text-gray-800 transition-colors duration-300 mt-1 group"
                          style={{ border: "none" }}
                          data-aos="fade-up"
                          data-aos-delay={`${index * 150 + 300}`}
                          data-aos-duration="600"
                        >
                          View Collection
                          <svg
                            className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredCollections.length === 0 && (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No collections found</h3>
              <p className="text-gray-600">
                {searchTerm
                  ? `No collections match "${searchTerm}". Try a different search term.`
                  : "No collections available in this category."}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default PhotoPortfolio
