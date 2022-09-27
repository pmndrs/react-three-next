import { Canvas as CanvasImpl } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

export default function Canvas({ children, ...props }) {
  return (
    <CanvasImpl className='absolute left-0 top-0 pointer-events-none select-none' {...props}>
      <ambientLight />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, 10]} />
      {children}
      <Preload all />
      <OrbitControls />
    </CanvasImpl>
  )
}
