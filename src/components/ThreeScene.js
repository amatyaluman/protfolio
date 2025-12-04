import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function FloatingBox() {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.getElapsedTime() * 0.5;
    ref.current.rotation.y = clock.getElapsedTime() * 0.3;
    ref.current.position.y = Math.sin(clock.getElapsedTime()) * 1.5;
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-80 md:h-96">
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <FloatingBox />
        <OrbitControls enableZoom={false} />
        <Stars />
      </Canvas>
    </div>
  );
}
