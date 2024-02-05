'use client'

import { useCursor, useMatcapTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

export default function Dog({ href, ...props }) {
  const [matcap] = useMatcapTexture(
    368, // index of the matcap texture https://github.com/emmelleppi/matcaps/blob/master/matcap-list.json
    1024, // size of the texture ( 64, 128, 256, 512, 1024 )
  )

  const [matcapHovered] = useMatcapTexture(
    532, // index of the matcap texture https://github.com/emmelleppi/matcaps/blob/master/matcap-list.json
    1024, // size of the texture ( 64, 128, 256, 512, 1024 )
  )

  const meshRef = useRef()

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.2
  })

  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  return (
    <>
      <group
        onClick={() => router.push(href)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        ref={meshRef}
        {...props}
      >
        <mesh visible={!hovered}>
          <coneGeometry args={[0.8, 1, 3, 1]} />
          <meshMatcapMaterial matcap={matcap} />
        </mesh>

        <mesh visible={hovered}>
          <coneGeometry args={[0.8, 1, 3, 1]} />
          <meshMatcapMaterial matcap={matcapHovered} />
        </mesh>
      </group>
    </>
  )
}
