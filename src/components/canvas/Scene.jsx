'use client'

import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Preload, View } from '@react-three/drei'

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas shadows {...props} onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}>
      <View.Port />
      <Preload all />
    </Canvas>
  )
}

export const Common = ({ color, controls }) => (
  <>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={Math.PI} />
    <directionalLight decay={0} position={[10, 10, 5]} intensity={5} castShadow />
    <pointLight decay={0} position={[-10, -0, -10]} color='blue' intensity={3} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
    {controls && <OrbitControls />}
  </>
)
