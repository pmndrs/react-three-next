import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useFrame } from '@react-three/fiber'
import { Line, useCursor } from '@react-three/drei'

export default function Logo({ route, ...props }) {
  const router = useRouter()
  const mesh = useRef(null)
  const [hovered, hover] = useState(false)
  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])

  useCursor(hovered)
  useFrame((state, delta) => {
    mesh.current.rotation.y = mesh.current.rotation.x += delta / 10
  })

  return (
    <group ref={mesh} {...props}>
      <Line worldUnits points={points} color='turquoise' lineWidth={0.2} />
      <Line worldUnits points={points} color='turquoise' lineWidth={0.2} rotation={[0, 0, 1]} />
      <Line worldUnits points={points} color='turquoise' lineWidth={0.2} rotation={[0, 0, -1]} />
      <mesh onClick={() => router.push(route)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshBasicMaterial color={route === '/' ? 'skyblue' : 'turquoise'} />
      </mesh>
    </group>
  )
}
