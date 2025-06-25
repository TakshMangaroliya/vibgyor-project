"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxText({ children, speed = 0.5, className = "" }) {
  const textRef = useRef(null)

  useEffect(() => {
    const element = textRef.current
    if (!element) return

    gsap.fromTo(
      element,
      { y: 0 },
      {
        y: -100 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    )
  }, [speed])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}
