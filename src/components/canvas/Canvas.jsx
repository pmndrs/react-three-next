import { Canvas as CanvasImpl } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

export default function Canvas({ children, ...props }) {
  return (
    <CanvasImpl className='absolute left-0 top-0 pointer-events-none select-none' {...props}>
      {children}
      <Preload all />
      <OrbitControls />
    </CanvasImpl>
  )
}
