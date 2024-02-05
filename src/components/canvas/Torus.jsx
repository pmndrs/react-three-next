'use client'

import { OrbitControls, OrthographicCamera, useMatcapTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'

export default function Torus({ controls = true }) {
  const [matcap, url] = useMatcapTexture(
    107, // index of the matcap texture https://github.com/emmelleppi/matcaps/blob/master/matcap-list.json
    1024, // size of the texture ( 64, 128, 256, 512, 1024 )
  )

  const meshRef = useRef()

  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta * 0.1
    meshRef.current.rotation.y += delta * 0.1
  })

  const size = useThree((state) => state.size)

  return (
    <>
      <mesh ref={meshRef} scale={size.width / 3.7}>
        <torusKnotGeometry args={[1, 0.33, 128, 128, 1, 3]} />
        <meshMatcapMaterial matcap={matcap} />
      </mesh>
      <OrthographicCamera makeDefault position={[0, 0, size.width]} />
      {controls && <OrbitControls enableZoom={false} enablePan={false} />}
    </>
  )
}
