import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei'

const Bird = ({ speed, factor, url, ...props }) => {
  const { nodes, materials, animations } = useGLTF(url)
  const group = useRef()
  const [mixer] = useState(() => new THREE.AnimationMixer())

  const actions = useRef()

  useEffect(() => {
    if (animations.length > 0 && Object.keys(animations[0]).length > 0) {
      actions.current = {
        animation_0: mixer.clipAction(animations[0], group.current).play(),
      }
    }

    return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  }, [animations, mixer])

  useFrame((state, delta) => {
    if (group.current && nodes && animations) {
      group.current.rotation.y +=
        Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5
      mixer.update(delta * speed)
    }
  })

  return (
    <group ref={group}>
      <group name='Scene' {...props}>
        <mesh
          name='Object_0'
          geometry={nodes['Object_0'].geometry}
          material={materials['Material_0_COLOR_0']}
          morphTargetDictionary={nodes['Object_0'].morphTargetDictionary}
          morphTargetInfluences={nodes['Object_0'].morphTargetInfluences}
          rotation={[1.5707964611537577, 0, 0]}
        />
      </group>
    </group>
  )
}

export default Bird
