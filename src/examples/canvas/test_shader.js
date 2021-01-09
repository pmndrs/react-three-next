import * as THREE from 'three'
import { useFrame, extend } from 'react-three-fiber'
import { a, useSpring } from '@react-spring/three'
import { useRef, useState } from 'react'
import useStore from '@/helpers/store'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'glslify'

import vertex from './glsl/shader.vert'

// yarn add -D glsl-random to try pragma
const fragment = glsl`
  uniform float time;
  uniform vec3 color;
  varying vec2 vUv;
  #pragma glslify: random = require(glsl-random)

  void main() {
    gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
  }
`

const ColorShiftMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.05, 0.0, 0.025),
  },
  vertex,
  fragment
)

extend({ ColorShiftMaterial })

const TestShader = (props) => {
  const mesh = useRef(false)
  const [hovered, setHover] = useState(false)
  const router = useStore((state) => state.router)

  const { scale } = useSpring({ scale: hovered ? 7 : 5, from: { scale: 5 } })

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    }
    if (mesh.current.material) {
      mesh.current.material.uniforms.time.value +=
        Math.sin(delta / 2) * Math.cos(delta / 2)
    }
  })

  return (
    <a.mesh
      ref={mesh}
      scale={scale.to((s) => [s, s, s])}
      onClick={() => {
        router.push(`/box`)
      }}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      {...props}
    >
      <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
      <colorShiftMaterial attach='material' time={3} />
    </a.mesh>
  )
}

export default TestShader
