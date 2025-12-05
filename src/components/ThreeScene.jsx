// src/components/ThreeScene.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function CrystalOrb({ position, color, scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.4;
    meshRef.current.rotation.y = t * 0.6;
    meshRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.4;
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.9}
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const pointsRef = useRef();

  const count = 1500;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const radius = 12 + Math.random() * 15;
    const theta = (i / count) * Math.PI * 2 + radius * 0.1;

    positions[i3] = Math.cos(theta) * radius;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = Math.sin(theta) * radius;

    const mix = Math.random();
    colors[i3] = 0.4 + mix * 0.3;
    colors[i3 + 1] = 0.3 + mix * 0.5;
    colors[i3 + 2] = 0.8 + mix * 0.2;
  }

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.02;
    pointsRef.current.rotation.x = Math.sin(t * 0.03) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors={true}
        transparent={true}
        opacity={0.75}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      <Canvas camera={{ position: [0, 2, 12], fov: 65 }}>
        <color attach="background" args={["#0a001f"]} />
        <fog attach="fog" args={["#0f0038", 10, 40]} />

        <ambientLight intensity={0.4} color="#a78bfa" />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          color="#8b5cf6"
        />
        <directionalLight
          position={[-8, 6, -10]}
          intensity={1}
          color="#3b82f6"
        />

        <Sparkles
          count={300}
          scale={35}
          size={3}
          speed={0.4}
          opacity={0.6}
          color="#c084fc"
        />

        <ParticleField />

        <CrystalOrb position={[-4, 1, -3]} color="#8b5cf6" scale={1.3} />
        <CrystalOrb position={[5, -1, -4]} color="#60a5fa" scale={1.1} />
        <CrystalOrb position={[0, 3, -6]} color="#a78bfa" scale={1.5} />
        <CrystalOrb position={[-2, -2.5, -5]} color="#818cf8" scale={0.9} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
