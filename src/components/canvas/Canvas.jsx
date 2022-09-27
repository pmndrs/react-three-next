import { Canvas as CanvasImpl } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

export default function Canvas({ children, ...props }) {
  return (
    <CanvasImpl {...props}>
      <ambientLight intensity={0.75} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, 10]} />
      {children}
      <Preload all />
      <OrbitControls />
    </CanvasImpl>
  )
}
