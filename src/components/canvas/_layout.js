import { Suspense } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import * as THREE from 'three'
import { ContactShadows } from '@react-three/drei'
import { EdgeDetectionMode } from 'postprocessing'
import { EffectComposer, SMAA } from '@react-three/postprocessing'

const Rig = () => {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.02))
}

const CanvasTemplateAdds = () => {
  return (
    <>
      <fog attach='fog' args={['white', 60, 70]} />
      <ambientLight intensity={0.8} />
      <directionalLight castShadow position={[2.5, 12, 12]} intensity={1} />
      <ContactShadows
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -8, 0]}
        opacity={0.75}
        width={140}
        height={140}
        blur={1}
        far={9}
      />
      <EffectComposer multisampling={0}>
        <SMAA edgeDetectionMode={EdgeDetectionMode.DEPTH} />
      </EffectComposer>
      <Rig />
    </>
  )
}

const LCanvas = ({ children }) => {
  return (
    <Canvas
      concurrent
      colorManagement
      style={{
        position: 'absolute',
        top: 0,
      }}
      gl={{ powerPreference: 'high-performance', antialias: false, stencil: false, depth: false, alpha: false }}
      camera={{ position: [0, 0, 0], near: 5, far: 100 }}
      pixelRatio={1}
      onCreated={({ gl, scene }) => {
        // gl.toneMappingExposure = 1.5
        scene.background = new THREE.Color(0xffffff)
      }}
    >
      <Suspense fallback={null}>
        <CanvasTemplateAdds />
      </Suspense>
      {children}
    </Canvas>
  )
}

export default LCanvas
