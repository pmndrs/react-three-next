import * as THREE from 'three'
import { useFrame, extend } from 'react-three-fiber'
// import { a, useSpring } from '@react-spring/three'
import { useEffect, useRef, useState } from 'react'
import useStore from '@/helpers/store'
// import { shaderMaterial } from '@react-three/drei/shaderMaterial'
// import { shaderMaterial } from '@react-three/drei/shaderMaterial'

import fragment from './glsl/MyBox.frag'
import vertex from './glsl/MyBox.vert'

// const ColorShiftMaterial = shaderMaterial(
//   {
//     time: 0,
//     color: new THREE.Color(0.05, 0.0, 0.025),
//   },
//   vertex,
//   fragment
// )

// extend({ ColorShiftMaterial })

const MyBox = (props) => {
  const mesh = useRef()
  const materialRef = useRef()
  const [hovered, setHover] = useState(false)
  const router = useStore((state) => state.router)

  // temporary fix to prevent error -> keep track of our component's mounted state
  const componentIsMounted = useRef(true)
  useEffect(() => {
    return () => {
      componentIsMounted.current = false
    }
  }, []) // Using an empty dependency array ensures this on

  // const { scale } = useSpring({ scale: hovered ? 7 : 5, from: { scale: 5 } })

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    }
    // if (materialRef.current) {
    //   materialRef.current.uniforms.time.value +=
    //     Math.sin(delta / 2) * Math.cos(delta / 2)
    // }
  })

  return (
    <mesh
      ref={mesh}
      // scale={scale.to((s) => [s, s, s])}
      scale={[5, 5, 5]}
      onClick={() => {
        router.push(`/birds`)
      }}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => {
        // temporary fix to prevent error -> keep track of our component's mounted state
        if (componentIsMounted.current) {
          setHover(false)
        }
      }}
      {...props}
    >
      <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
      {/* <meshBasicMaterial ref={materialRef} color={0xffffff} /> */}
      {/* <colorShiftMaterial ref={materialRef} attach='material' time={3} /> */}
    </mesh>
  )
}

export default MyBox
