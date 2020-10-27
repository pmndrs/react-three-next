import { useCallback } from 'react'
import { Canvas } from 'react-three-fiber'
import * as THREE from 'three'
import { isDesktop } from 'react-device-detect'

const LCanvas = ({ children }) => {
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => {
    if (isDesktop) {
      //mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]
    }
  }, [])

  return (
    <Canvas
      shadowMap={false}
      onPointerMove={onMouseMove}
      gl={{ powerPreference: 'high-performance', antialias: false, stencil: false, alpha: false }}
      camera={{ position: [0, 0, 0], fov: 45 }}
      pixelRatio={1}
      onCreated={({ gl, scene, events }) => {
        scene.background = new THREE.Color(0x111111)
      }}
    >
      {children}
    </Canvas>
  )
}

export default LCanvas
