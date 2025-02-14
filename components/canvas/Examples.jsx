import * as THREE from 'three'
import { useEffect, useRef } from 'react'

export function Chan({ scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const meshRef = useRef()
  
  useEffect(() => {
    const texture = new THREE.TextureLoader().load('/chan.png')
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    
    if (meshRef.current) {
      meshRef.current.material.map = texture
      meshRef.current.material.needsUpdate = true
    }
  }, [])

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial transparent side={THREE.DoubleSide} />
    </mesh>
  )
} 