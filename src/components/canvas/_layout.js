import { Suspense } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import * as THREE from 'three'
// import { ContactShadows } from '@react-three/drei'
// import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import useDarkMode from 'use-dark-mode'

const Rig = () => {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 2, mouse.y * 1, camera.position.z),
      0.02
    )
  )
}

const CanvasTemplateAdds = () => {
  const darkMode = useDarkMode()

  return (
    <>
      <fog attach='fog' args={[darkMode ? 0x111827 : 0xf9fafb, 60, 70]} />
      <ambientLight
        color={new THREE.Color(darkMode ? 0x111827 : 0xf9fafb)}
        intensity={0.5}
      />
      {/* <directionalLight castShadow position={[2.5, 12, 12]} intensity={1} /> */}
      {/* <ContactShadows
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -8, 0]}
        opacity={0.75}
        width={140}
        height={140}
        blur={1}
        far={9}
      /> */}
      {/* <EffectComposer>
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={0.4} />
      </EffectComposer> */}
      <Rig />
    </>
  )
}

const LCanvas = ({ children }) => {
  const darkMode = useDarkMode()

  return (
    <Canvas
      concurrent
      colorManagement
      style={{
        position: 'absolute',
        top: 0,
      }}
      gl={{
        powerPreference: 'high-performance',
        antialias: false,
        stencil: false,
        depth: false,
        alpha: false,
      }}
      camera={{ position: [0, 0, 0], near: 5, far: 100 }}
      pixelRatio={1}
      onCreated={({ gl, scene }) => {
        // scene.background =
        gl.setClearColor(new THREE.Color(darkMode ? 0x111827 : 0xf9fafb))
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
