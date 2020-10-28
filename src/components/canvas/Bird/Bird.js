import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei'

const Bird = ({ speed, factor, url, ...props }) => {
  const gltf = useGLTF(url)
  const group = useRef()
  const [mixer] = useState(() => new THREE.AnimationMixer())

  useEffect(() => void mixer.clipAction(gltf.animations[0], group.current).play(), [gltf.animations, mixer])

  useFrame((state, delta) => {
    if (group.current && gltf && gltf.animations) {
      group.current.rotation.y += Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5
      mixer.update(delta * speed)
    }
  })

  return (
    <group ref={group}>
      <group name='Scene' {...props}>
        <mesh
          name='Object_0'
          morphTargetDictionary={gltf.nodes['Object_0'].morphTargetDictionary}
          morphTargetInfluences={gltf.nodes['Object_0'].morphTargetInfluences}
          rotation={[1.5707964611537577, 0, 0]}
        >
          <bufferGeometry attach='geometry' {...gltf.nodes['Object_0'].geometry} />
          <meshStandardMaterial attach='material' {...gltf.materials['Material_0_COLOR_0']} />
        </mesh>
      </group>
    </group>
  )
}

export default Bird
