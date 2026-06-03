import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"

const HeroExperience = () => {
  const isTableMode = useMediaQuery({ query: '(max-width: 1024px)' })
  // const isMobileMode = useMediaQuery({ query: '(max-width: 786px)' })
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.5} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={5} />
      <OrbitControls
        enablePan={false}
        enableZoom={!isTableMode}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  )
}

export default HeroExperience