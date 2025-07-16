"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function DevTerminal() {
  const groupRef = React.useRef<THREE.Group>(null);

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (groupRef.current) {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;

        groupRef.current.rotation.x = y * 0.15;
        groupRef.current.rotation.y = x * 0.15;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <group ref={groupRef}>
      {/* Monitor Frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4.2, 2.8, 0.2]} />
        <meshStandardMaterial color="#0F172A" metalness={0.4} roughness={0.3} />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[4, 2.6, 0.02]} />
        <meshStandardMaterial color="#1E293B" />
      </mesh>

      {/* File Tabs */}
      {["index.tsx", "home.jsx", "styles.css"].map((filename, i) => (
        <mesh key={filename} position={[-1.4 + i * 1.4, 1.15, 0.12]}>
          <boxGeometry args={[1.3, 0.25, 0.01]} />
          <meshStandardMaterial color="#334155" />
        </mesh>
      ))}

      {/* Glowing Code Lines */}
      {[
        "const",
        "Hero = () => {",
        "  return (",
        '    <section className="hero">',
        "      <h1>Hello Web</h1>",
        "    </section>",
        "  );",
        "};",
      ].map((line, i) => (
        <mesh key={i} position={[-1.6, 0.8 - i * 0.3, 0.13]}>
          <boxGeometry args={[line.length * 0.05, 0.07, 0.01]} />
          <meshStandardMaterial
            color="#3B82F6"
            emissive="#3B82F6"
            emissiveIntensity={1.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeDCodePanel() {
  return (
    <div className="w-full h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 65 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <DevTerminal />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
