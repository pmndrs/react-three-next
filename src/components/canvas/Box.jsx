import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useFrame } from '@react-three/fiber'
import { useCursor } from '@react-three/drei'

export default function BoxComponent({ route }) {
  const router = useRouter()
  const mesh = useRef(null)
  const [hovered, hover] = useState(false)

  useCursor(hovered)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime() / 2
    mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
    mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
    mesh.current.rotation.z -= delta / 4
  })

  return (
    <mesh
      ref={mesh}
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <boxGeometry />
      <meshPhysicalMaterial color={hovered ? 'hotpink' : '#1fb2f5'} />
    </mesh>
  )
}
