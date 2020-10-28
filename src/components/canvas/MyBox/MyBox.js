import * as THREE from 'three'
import { useFrame, extend } from 'react-three-fiber'
import { a, useSpring } from '@react-spring/three'
import { useRef, useState } from 'react'
import useStore from '@/helpers/store'
import { shaderMaterial } from '@react-three/drei'

import fragment from './glsl/MyBox.frag'
import vertex from './glsl/MyBox.vert'

const ColorShiftMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.05, 0.0, 0.025),
  },
  vertex,
  fragment
)

extend({ ColorShiftMaterial })

const MyBox = (props) => {
  const mesh = useRef(false)
  const materialRef = useRef(false)
  const [hovered, setHover] = useState(false)
  const router = useStore((state) => state.router)

  const { scale } = useSpring({ scale: hovered ? 7 : 5, from: { scale: 5 } })

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    }
    if (materialRef.current) {
      materialRef.current.uniforms.time.value += Math.sin(delta / 2) * Math.cos(delta / 2)
    }
  })

  return (
    <a.mesh
      ref={mesh}
      scale={scale.to((s) => [s, s, s])}
      onClick={() => {
        router.push(`/birds`)
      }}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      {...props}
    >
      <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
      <colorShiftMaterial ref={materialRef} attach='material' time={3} />
    </a.mesh>
  )
}

export default MyBox
