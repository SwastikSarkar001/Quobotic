"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function Globe() {
  const pointsRef = useRef<THREE.Points>(null)
  const groupRef = useRef<THREE.Group>(null)

  useEffect(() => {
    if (!pointsRef.current) return

    // Create the points
    const geometry = new THREE.BufferGeometry()
    const count = 2000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // Create points in a sphere shape
      const radius = 5
      const phi = Math.random() * Math.PI * 2
      const theta = Math.random() * Math.PI

      const x = radius * Math.sin(theta) * Math.cos(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(theta)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Red color with some variation
      colors[i * 3] = 0.8 + Math.random() * 0.2 // Red
      colors[i * 3 + 1] = 0.1 + Math.random() * 0.1 // Green
      colors[i * 3 + 2] = 0.1 + Math.random() * 0.1 // Blue
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    // Update the points material
    if (pointsRef.current) {
      pointsRef.current.geometry = geometry
    }
  }, [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial size={0.05} vertexColors transparent opacity={0.8} sizeAttenuation />
      </points>
      {/* Add some connecting lines for effect */}
      {/* {Array.from({ length: 20 }).map((_, i) => {
        const startAngle = Math.random() * Math.PI * 2
        const endAngle = startAngle + Math.PI / 2 + Math.random() * Math.PI
        const radius = 5
        const startPoint = new THREE.Vector3(
          radius * Math.sin(startAngle) * Math.cos(startAngle),
          radius * Math.sin(startAngle) * Math.sin(startAngle),
          radius * Math.cos(startAngle),
        )
        const endPoint = new THREE.Vector3(
          radius * Math.sin(endAngle) * Math.cos(endAngle),
          radius * Math.sin(endAngle) * Math.sin(endAngle),
          radius * Math.cos(endAngle),
        )

        return (
          <Line
            key={i}
            points={[startPoint, endPoint]}
            color={new THREE.Color(0.8, 0.2, 0.2)}
            opacity={0.4}
            transparent
            lineWidth={1}
          />
        )
      })} */}
    </group>
  )
}

export default function WorldGlobe() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Globe />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.001} />
    </Canvas>
  )
}

