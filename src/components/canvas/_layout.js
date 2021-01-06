import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import * as THREE from 'three'
import useDarkMode from 'use-dark-mode'
import Effects from '@/components/canvas/_effects'
import { Perf } from 'r3f-perf'
// import dynamic from 'next/dynamic'
// const Effects = dynamic(() => import('@/components/canvas/_effects'), {
//   ssr: false,
// })

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
        antialias: true,
        stencil: false,
        depth: false,
        alpha: false,
      }}
      camera={{ position: [0, 0, 0], near: 5, far: 100 }}
      pixelRatio={1}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(new THREE.Color(darkMode ? 0x111827 : 0xf9fafb))
      }}
    >
      <Suspense fallback={null}>
        <Effects />
      </Suspense>
      <Perf openByDefault trackGPU={true} />
      {children}
    </Canvas>
  )
}

export default LCanvas
