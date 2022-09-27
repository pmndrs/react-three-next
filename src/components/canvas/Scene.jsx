import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Preload } from '@react-three/drei'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      <ambientLight intensity={0.75} />
      <Environment preset='warehouse' />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  )
}
