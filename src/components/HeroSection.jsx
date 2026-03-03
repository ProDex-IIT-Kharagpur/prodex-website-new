import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Ring, Circle } from '@react-three/drei'
import * as THREE from 'three'
import heroVideo from '../assets/Hero_loop.mp4'
//kharagpur
const FloatingRing = ({ position, size, speed, offsets }) => {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()

    groupRef.current.position.x = position[0] + Math.sin(t * speed + offsets[0]) * 0.3
    groupRef.current.position.y = position[1] + Math.cos(t * speed * 0.8 + offsets[1]) * 0.3
    groupRef.current.position.z = position[2] + Math.sin(t * speed * 0.5 + offsets[2]) * 0.1

    groupRef.current.rotation.z += delta * 0.1
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1
  })

  return (
    <group ref={groupRef} position={position}>
      <Ring args={[size * 0.88, size, 64]}>
        <meshBasicMaterial color="#00f0ff" side={THREE.DoubleSide} transparent opacity={0.2} />
      </Ring>
      <Circle args={[size, 64]} position={[0, 0, -0.01]}>
        <meshBasicMaterial color="#000000" transparent opacity={0.35} />
      </Circle>
    </group>
  )
}

const FloatingSolidCircle = ({ position, size, speed, offsets }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()

    meshRef.current.position.x = position[0] + Math.sin(t * speed * 1.1 + offsets[0]) * 0.5
    meshRef.current.position.y = position[1] + Math.cos(t * speed * 0.9 + offsets[1]) * 0.4
    meshRef.current.position.z = position[2] + Math.sin(t * speed * 0.7 + offsets[2]) * 0.2
  })

  return (
    <mesh ref={meshRef} position={position}>
      <circleGeometry args={[size, 32]} />
      <meshBasicMaterial color="#00f0ff" transparent opacity={0.8} side={THREE.DoubleSide} />
    </mesh>
  )
}

const RingScene = () => {
  const ringShapes = useMemo(() => [
    { position: [7, 0, 0], size: 0.85, speed: 0.5, offsets: [0, 1, 2] },
    { position: [-6, 3, -1], size: 0.5, speed: 0.7, offsets: [2, 3, 1] },
    { position: [8, -4, -2], size: 0.4, speed: 0.9, offsets: [4, 0, 3] },
    { position: [-4, -3, 0], size: 0.6, speed: 0.6, offsets: [1, 5, 0] },
    { position: [2, 5, -4], size: 0.35, speed: 1.1, offsets: [3, 2, 5] },
  ], [])

  return (
    <group>
      {ringShapes.map((d, i) => <FloatingRing key={i} {...d} />)}
    </group>
  )
}

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <section className="relative bg-black max-w-7xl mx-auto px-4 py-16 
                        flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">

      {/* Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <RingScene />
        </Canvas>
      </div>

      {/* Left Content */}
      <div className="relative z-10 flex-1 max-w-2xl flex flex-col justify-center 
                      text-center lg:text-left items-center lg:items-start">

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[450px] h-[450px]
                        bg-[radial-gradient(circle,rgba(0,240,255,0.4)_0%,rgba(0,0,0,0)_70%)]
                        blur-[90px] -z-10 pointer-events-none" />

        {/* Badge */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=IIT+Kharagpur"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2 border border-[#00f0ff]/30 
                     rounded-full text-[#00f0ff] text-lg mb-6 bg-[#00f0ff]/5 w-fit"
        >
          IIT Kharagpur
        </a>

        {/* Heading */}
        <h1 className="text-5xl lg:text-6xl font-bold tracking-wide 
                       text-white leading-tight mb-6">
          Welcome to <br />
          <span className="bg-gradient-to-r from-[#00f0ff] to-cyan-300 
                           bg-clip-text text-transparent 
                           drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
            ProDex
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-[90%]">
          A technical society focused on promoting{" "}
          <span className="font-bold text-[#00f0ff]">Hardware modelling</span>,{" "}
          <span className="font-bold text-[#00f0ff]">Design</span> and{" "}
          <span className="font-bold text-[#00f0ff]">Innovation</span> among the students of IIT Kharagpur.
        </p>

        {/* Buttons */}
        <div className="flex gap-5 flex-wrap justify-center lg:justify-start">
          <button className="px-6 py-2 font-semibold rounded-full bg-[#00f0ff] text-black
                             shadow-[0_0_15px_rgba(0,240,255,0.4)]
                             hover:scale-105 hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]
                             transition duration-200">
            Get Started →
          </button>
          <button
            onClick={() => setShowVideo(true)}
            className="px-6 py-2 font-semibold rounded-full border-2 border-[#00f0ff]
                      text-white hover:bg-[#00f0ff]/10
                      hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]
                      transition duration-200"
          >
            Watch Video ▶
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-10 justify-center lg:justify-start">
          {[
            ["2012", "Founded"],
            ["50+", "Projects"],
            ["100+", "Members"]
          ].map(([val, label], i) => (
            <div key={i}>
              <span className="block text-3xl font-bold text-[#00f0ff]
                               drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                {val}
              </span>
              <span className="text-xs text-gray-400 tracking-widest uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
        </div>

        {/* Right Video */}
        <div className="relative z-10 w-full max-w-xl h-[380px] 
                        flex justify-center items-center mt-10 lg:mt-0">

          <div className="absolute top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2
                w-[600px] h-[600px]
                bg-[#00f0ff]/10 
                blur-[120px] 
                rounded-full -z-10" />

          <div className="absolute w-full h-full overflow-visible rounded-2xl
                          border border-[#00f0ff]/30
                          shadow-[0_0_30px_rgba(0,240,255,0.2)]">

            <video
              className="w-full h-full object-cover scale-105 opacity-90"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t
                            from-black/50 via-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
        {showVideo && (
    <div className="fixed inset-0 bg-black/80 
                    flex items-center justify-center z-50">

      <div className="relative w-[90%] max-w-3xl aspect-video">

        <button
          onClick={() => setShowVideo(false)}
          className="absolute -top-10 right-0 text-white text-2xl"
        >
          ✕
        </button>

        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/fcIHGUXnSWg?autoplay=1"
          title="ProDex Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

    </div>
  )}

    </section>
  )
}

export default HeroSection
