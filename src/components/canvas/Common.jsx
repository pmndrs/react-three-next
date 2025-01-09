'use client'

import { Suspense } from 'react'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'

export const Common = ({ color, orbit }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    {orbit && <OrbitControls />}
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)
