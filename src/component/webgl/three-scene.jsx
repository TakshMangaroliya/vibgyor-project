"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeScene({ className = "" }) {
  const mountRef = useRef(null)
  const sceneRef = useRef()
  const rendererRef = useRef()
  const cameraRef = useRef()
  const particlesRef = useRef()

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer

    mountRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000

    const posArray = new Float32Array(particlesCount * 3)
    const colorArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 20
      posArray[i + 1] = (Math.random() - 0.5) * 20
      posArray[i + 2] = (Math.random() - 0.5) * 20

      const colors = [
        [0.54, 0.17, 0.89], // Purple
        [0.0, 0.34, 0.7],   // Blue
        [0.0, 0.5, 0.5],    // Teal
      ]
      const colorIndex = Math.floor(Math.random() * colors.length)
      colorArray[i] = colors[colorIndex][0]
      colorArray[i + 1] = colors[colorIndex][1]
      colorArray[i + 2] = colors[colorIndex][2]
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)
    particlesRef.current = particles

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x8a2be2, 1, 100)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0005
        particlesRef.current.rotation.y += 0.001
      }

      const scrollY = window.pageYOffset
      if (cameraRef.current) {
        cameraRef.current.position.y = scrollY * 0.001
        cameraRef.current.rotation.x = scrollY * 0.0001
      }

      renderer.render(scene, camera)
    }

    animate()

    // Resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight
        cameraRef.current.updateProjectionMatrix()
        rendererRef.current.setSize(window.innerWidth, window.innerHeight)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className={`fixed inset-0 pointer-events-none ${className}`} />
}
