"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ImmersiveScene({ colorScheme = "royal", intensity = 1 }) {
  const mountRef = useRef(null)
  const sceneRef = useRef()
  const rendererRef = useRef()
  const particlesRef = useRef()

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Color schemes
    const colorSchemes = {
      royal: [0x9333ea, 0xf59e0b, 0x7c3aed],
      cultural: [0xef4444, 0xf97316, 0xeab308],
      celebration: [0xec4899, 0x8b5cf6, 0x06b6d4],
      corporate: [0x1f2937, 0x374151, 0x6b7280],
    }

    const colors = colorSchemes[colorScheme]

    // Particles
    const particleCount = 1000
    const positions = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20

      const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)])
      particleColors[i * 3] = color.r
      particleColors[i * 3 + 1] = color.g
      particleColors[i * 3 + 2] = color.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8 * intensity,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    camera.position.z = 5

    sceneRef.current = scene
    rendererRef.current = renderer
    particlesRef.current = particles

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.001
        particlesRef.current.rotation.y += 0.002
      }

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [colorScheme, intensity])

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.3 }} />
}
