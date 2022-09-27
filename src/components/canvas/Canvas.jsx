import { Canvas as CanvasImpl } from '@react-three/fiber'
import { Environment, OrbitControls, Preload } from '@react-three/drei'

export default function Canvas({ children, ...props }) {
  return (
    <CanvasImpl {...props}>
      <ambientLight intensity={0.75} />
      <Environment preset='warehouse' />
      {children}
      <Preload all />
      <OrbitControls />
    </CanvasImpl>
  )
}
