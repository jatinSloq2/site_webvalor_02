"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function BlobMesh() {
  const meshRef = React.useRef<THREE.Mesh>(null);

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (meshRef.current) {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;

        meshRef.current.rotation.x = y * 0.3;
        meshRef.current.rotation.y = x * 0.3;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <sphereGeometry args={[1, 100, 100]} />
      <MeshDistortMaterial
        color="#3B82F6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  );
}

export function ThreeDBlob() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <BlobMesh />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}
