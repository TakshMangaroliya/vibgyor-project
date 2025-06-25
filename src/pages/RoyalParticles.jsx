import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const AnimatedStars = ({ intensity }) => {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0012;
      starsRef.current.rotation.x += 0.0008;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars
        radius={120}
        depth={80}
        count={6000 * intensity}
        factor={5}
        saturation={1}
        fade
        speed={3}
      />
    </group>
  );
};

const RoyalParticles = ({ className = '', intensity = 1 }) => {
  return (
    <div className={`absolute top-0 left-0 w-full h-full pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true }}           // ✅ Transparent background
      >
        {/* No <color attach="background" /> to let video show */}
        <ambientLight intensity={2.5} />
        <AnimatedStars intensity={intensity} />
      </Canvas>
    </div>
  );
};

export default RoyalParticles;
