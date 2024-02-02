'use client'

import { useMatcapTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Dog({ ...props }) {
  const [matcap, url] = useMatcapTexture(
    368, // index of the matcap texture https://github.com/emmelleppi/matcaps/blob/master/matcap-list.json
    1024, // size of the texture ( 64, 128, 256, 512, 1024 )
  )

  const meshRef = useRef()

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.2
  })

  return (
    <>
      <mesh ref={meshRef} {...props}>
        <coneGeometry args={[0.8, 1, 3, 1]} />
        <meshMatcapMaterial matcap={matcap} />
      </mesh>
    </>
  )
}
