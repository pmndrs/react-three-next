import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

export default function BoxComponent({ route }) {
  const router = useRouter()
  const mesh = useRef(null)
  const [hovered, setHover] = useState(false)

  useFrame((state, delta) => {
    mesh.current.rotation.y = mesh.current.rotation.x += delta
  })

  return (
    <mesh
      ref={mesh}
      onClick={() => router.push(route)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.1 : 1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color={route === '/' ? 'orange' : 'hotpink'} />
    </mesh>
  )
}
