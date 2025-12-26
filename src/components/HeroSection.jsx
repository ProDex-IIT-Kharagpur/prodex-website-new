import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Ring, Circle } from '@react-three/drei'; 
import * as THREE from 'three'; 
import './HeroSection.css'; 
import heroVideo from '../assets/Hero_loop.mp4'; 
import ScrollIndicator from './ScrollIndicator'; 

const FloatingRing = ({ position, size, speed, offsets }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    groupRef.current.position.x = position[0] + Math.sin(t * speed + offsets[0]) * 0.3;
    groupRef.current.position.y = position[1] + Math.cos(t * speed * 0.8 + offsets[1]) * 0.3;
    groupRef.current.position.z = position[2] + Math.sin(t * speed * 0.5 + offsets[2]) * 0.1;
    
    groupRef.current.rotation.z += delta * 0.1;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1; 
  });

  const outerRadius = size;
  const innerRadius = size * 0.88; 

  return (
    <group ref={groupRef} position={position}>
      <Ring args={[innerRadius, outerRadius, 64]}>
        <meshBasicMaterial color="#00E5FF" side={THREE.DoubleSide} transparent={true} opacity={0.2} />
      </Ring>
      <Circle args={[outerRadius, 64]} position={[0, 0, -0.01]}>
        <meshBasicMaterial color="#000000" transparent={true} opacity={0.35} />
      </Circle>
    </group>
  );
};

const FloatingSolidCircle = ({ position, size, speed, offsets }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    meshRef.current.position.x = position[0] + Math.sin(t * speed * 1.1 + offsets[0]) * 0.5;
    meshRef.current.position.y = position[1] + Math.cos(t * speed * 0.9 + offsets[1]) * 0.4;
    meshRef.current.position.z = position[2] + Math.sin(t * speed * 0.7 + offsets[2]) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <circleGeometry args={[size, 32]} />
      <meshBasicMaterial 
        color="#00E5FF" 
        transparent={true} 
        opacity={0.8} 
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const RingScene = () => {
  const ringShapes = useMemo(() => {
    return [
      { position: [7, 0, 0], size: 0.85, speed: 0.5, offsets: [0, 1, 2] },    
      { position: [-6, 3, -1], size: 0.5, speed: 0.7, offsets: [2, 3, 1] },  
      { position: [8, -4, -2], size: 0.4, speed: 0.9, offsets: [4, 0, 3] },  
      { position: [-4, -3, 0], size: 0.6, speed: 0.6, offsets: [1, 5, 0] },  
      { position: [2, 5, -4], size: 0.35, speed: 1.1, offsets: [3, 2, 5] },  
    ];
  }, []);

  const solidShapes = useMemo(() => {
    return [
      { position: [-9, 4, -2], size: 0.2, speed: 0.8, offsets: [5, 0, 1] },
      { position: [-12, -2, -1], size: 0.25, speed: 1.2, offsets: [1, 4, 2] },
      { position: [-8, -5, 0], size: 0.3, speed: 0.6, offsets: [0, 1, 4] },
      { position: [10, 3, -3], size: 0.2, speed: 1.0, offsets: [3, 2, 3] }, 
      { position: [11, -4, 2], size: 0.3, speed: 0.9, offsets: [2, 3, 0] },
      { position: [8, 6, -1], size: 0.42, speed: 1.1, offsets: [4, 5, 1] },
      { position: [14, 0, -4], size: 0.15, speed: 0.7, offsets: [1, 0, 5] },
      { position: [-5, 6, -2], size: 0.15, speed: 0.5, offsets: [2, 1, 0] },
      { position: [0, -6, -3], size: 0.12, speed: 0.4, offsets: [4, 2, 1] },
      { position: [-3, 1, 0], size: 0.08, speed: 1.5, offsets: [0, 5, 2] },
      { position: [6, 4, -1], size: 0.18, speed: 0.8, offsets: [3, 4, 0] },
      { position: [-10, -7, 1], size: 0.35, speed: 0.6, offsets: [1, 1, 1] },
    ];
  }, []);

  return (
    <group>
      {ringShapes.map((data, index) => (
        <FloatingRing key={'ring-' + index} {...data} />
      ))}
      {solidShapes.map((data, index) => (
        <FloatingSolidCircle key={'solid-' + index} {...data} />
      ))}
    </group>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-canvas-full">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <RingScene />
        </Canvas>
      </div>

      <div className="hero-content-left">
         <div className="text-breathing-glow"></div>
         <a href="https://www.google.com/maps/search/?api=1&query=IIT+Kharagpur" target="_blank" rel="noopener noreferrer" className="context-badge">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="location-icon">
             <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
           </svg>
           IIT Kharagpur
         </a>
         <h1>Welcome to <br /><span className="highlight">ProDex</span></h1>
         <p className="hero-subtext">A technical society focused on promoting <span className="highlight-bold">Hardware modelling</span>, <span className="highlight-bold">Design</span> and <span className="highlight-bold">Innovation</span> among the students of IIT Kharagpur.</p>
         <div className="hero-ctas">
           <button className="primary-cta-btn">Get Started →</button>
           <button className="secondary-cta-btn">▷ Watch Video</button>
         </div>
         <div className="stats-bar">
           <div className="stat-item"><span className="stat-value">2012</span><span className="stat-label">Founded</span></div>
           <div className="stat-item"><span className="stat-value">50+</span><span className="stat-label">Projects</span></div>
           <div className="stat-item"><span className="stat-value">100+</span><span className="stat-label">Members</span></div>
         </div>
      </div>

      <div className="hero-visual-right-wrapper">
        <div className="visual-glow-large"></div>
        <div className="visual-glow-main"></div>
        <div className="hero-visual-right">
          <video className="hero-video" autoPlay loop muted playsInline>
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-fade-overlay"></div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;