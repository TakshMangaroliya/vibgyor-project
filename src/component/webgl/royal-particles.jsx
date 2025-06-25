"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function RoyalParticles({ className = "", intensity = 1 }) {
  const mountRef = useRef(null)
  const sceneRef = useRef()
  const rendererRef = useRef()
  const cameraRef = useRef()
  const particlesRef = useRef([])

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 10
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

    // Create multiple particle systems for royal effect
    const particleSystems = []
    const colors = [
      [0.54, 0.17, 0.89], // Royal Purple
      [0.0, 0.34, 0.7],   // Royal Blue
      [0.0, 0.5, 0.5],    // Teal
      [1.0, 0.84, 0.0],   // Gold
    ]

    for (let i = 0; i < 3; i++) {
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = Math.floor(1500 * intensity)

      const posArray = new Float32Array(particlesCount * 3)
      const colorArray = new Float32Array(particlesCount * 3)
      const sizeArray = new Float32Array(particlesCount)

      for (let j = 0; j < particlesCount * 3; j += 3) {
        const radius = 15 + i * 5
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI

        posArray[j] = radius * Math.sin(phi) * Math.cos(theta)
        posArray[j + 1] = radius * Math.sin(phi) * Math.sin(theta)
        posArray[j + 2] = radius * Math.cos(phi)

        const colorIndex = Math.floor(Math.random() * colors.length)
        colorArray[j] = colors[colorIndex][0]
        colorArray[j + 1] = colors[colorIndex][1]
        colorArray[j + 2] = colors[colorIndex][2]

        sizeArray[j / 3] = Math.random() * 0.5 + 0.1
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
      particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))
      particlesGeometry.setAttribute("size", new THREE.BufferAttribute(sizeArray, 1))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.03,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      })

      const particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)
      particlesRef.current.push(particles)
      particleSystems.push(particles)
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x8a2be2, 1, 100)
    pointLight1.position.set(20, 20, 20)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x0056b3, 0.8, 100)
    pointLight2.position.set(-20, -20, 20)
    scene.add(pointLight2)

    // Animation
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.005

      particleSystems.forEach((particles, index) => {
        particles.rotation.x = time * (0.2 + index * 0.1)
        particles.rotation.y = time * (0.3 + index * 0.05)
        particles.rotation.z = time * (0.1 + index * 0.02)
      })

      const scrollY = window.pageYOffset
      if (cameraRef.current) {
        cameraRef.current.position.y = scrollY * 0.002
        cameraRef.current.rotation.x = scrollY * 0.0002
      }

      renderer.render(scene, camera)
    }

    animate()

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
  }, [intensity])

  return <div ref={mountRef} className={`fixed inset-0 pointer-events-none ${className}`} />
}
