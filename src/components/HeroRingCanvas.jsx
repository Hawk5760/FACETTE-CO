import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, ContactShadows, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function RingModel({ scrollProgress, isHovered }) {
  // Load glb model from public folder
  const { scene } = useGLTF('/ring_webgi.glb');
  const groupRef = useRef();

  // Clone scene so it's fresh and apply luxury materials if needed
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          // Enhancing material properties for luxury shine
          if (child.material) {
            child.material.envMapIntensity = 1.8;
            child.material.roughness = Math.max(0.12, child.material.roughness || 0.15);
            child.material.metalness = Math.min(0.95, child.material.metalness || 0.9);
          }
        }
      });
    }
  }, [scene]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Continuous slow cinematic rotation
      const baseRotationSpeed = isHovered ? 0.4 : 0.25;
      groupRef.current.rotation.y += delta * baseRotationSpeed;
      
      // Dynamic tilt responding to cursor & scroll
      const targetRotX = (state.pointer.y * 0.25) + (scrollProgress * 0.6);
      const targetRotZ = (state.pointer.x * 0.15);
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.05);

      // Camera proximity zoom based on scroll progress (as described in PDF: camera moves closer)
      const scaleMultiplier = 1 + (scrollProgress * 0.4);
      groupRef.current.scale.set(scaleMultiplier, scaleMultiplier, scaleMultiplier);
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      <primitive object={scene} scale={2.8} />
    </group>
  );
}

// Fallback procedural luxury ring in case GLB is still loading or encounters network lag
function ProceduralRingFallback() {
  const meshRef = useRef();
  const gemRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.35;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Ring Band */}
      <mesh>
        <torusGeometry args={[1.5, 0.22, 32, 100]} />
        <meshStandardMaterial
          color="#D5B581"
          metalness={0.95}
          roughness={0.15}
          envMapIntensity={2.0}
        />
      </mesh>
      {/* Gemstone Setting */}
      <mesh position={[0, 1.55, 0]} ref={gemRef}>
        <octahedronGeometry args={[0.55, 0]} />
        <meshPhysicalMaterial
          color="#05624C"
          emissive="#0E3D3D"
          emissiveIntensity={0.3}
          roughness={0.05}
          transmission={0.85}
          thickness={1.2}
          ior={1.8}
        />
      </mesh>
    </group>
  );
}

export default function HeroRingCanvas({ scrollProgress = 0 }) {
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[520px] md:h-[680px] lg:h-[760px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient Radial Spotlight */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-60 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-[#0E3D3D]/25 blur-[120px] animate-pulse"></div>
        <div className="w-[300px] h-[300px] rounded-full bg-[#D5B581]/15 blur-[90px]"></div>
      </div>

      <Canvas
        shadows
        camera={{ position: [0, 0.5, 5], fov: 42 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        {/* Cinematic Studio Lighting */}
        <ambientLight intensity={0.8} />
        
        {/* Key Light (Warm Champagne) */}
        <spotLight
          position={[6, 8, 6]}
          angle={0.4}
          penumbra={1}
          intensity={2.8}
          color="#FFF8EE"
          castShadow
        />

        {/* Rim Light for Facet Reflections (Deep Emerald Hue) */}
        <spotLight
          position={[-6, 4, -4]}
          angle={0.5}
          penumbra={1}
          intensity={2.2}
          color="#05624C"
        />

        {/* Gold Specular Highlight */}
        <directionalLight position={[0, -3, 4]} intensity={1.2} color="#D5B581" />

        <Suspense fallback={<ProceduralRingFallback />}>
          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
            {!hasError ? (
              <RingModel scrollProgress={scrollProgress} isHovered={isHovered} />
            ) : (
              <ProceduralRingFallback />
            )}
          </Float>
        </Suspense>

        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.65}
          scale={7}
          blur={2.4}
          far={4}
          color="#000000"
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.5}
          rotateSpeed={0.6}
        />
      </Canvas>

      {/* Floating Interactive Micro-Notice */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none flex items-center space-x-3 text-[10px] uppercase tracking-[0.25em] text-[#D5B581]/60 font-sans">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D5B581] animate-ping"></span>
        <span>Drag to Inspect &bull; Scroll to Deconstruct</span>
      </div>
    </div>
  );
}
