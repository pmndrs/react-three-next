'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Three } from '@/helpers/components/Three'

const defaultTarget = new THREE.Vector3()

export function ViewSync({ track }) {
  const { get, set } = useThree()
  useFrame(() => {
    if (!track.current) return
    const rect = track.current.getBoundingClientRect()
    if (!rect || rect.width === 0 || rect.height === 0) return
    const { size, camera, viewport } = get()
    if (rect.width !== size.width || rect.height !== size.height || rect.top !== size.top || rect.left !== size.left) {
      const newSize = { width: rect.width, height: rect.height, top: rect.top, left: rect.left }
      if (!camera.manual) {
        if (camera.isOrthographicCamera) {
          camera.left = newSize.width / -2
          camera.right = newSize.width / 2
          camera.top = newSize.height / 2
          camera.bottom = newSize.height / -2
        } else {
          camera.aspect = newSize.width / newSize.height
        }
        camera.updateProjectionMatrix()
        camera.updateMatrixWorld()
      }
      const newVp = viewport.getCurrentViewport(camera, defaultTarget, newSize)
      set({
        size: newSize,
        viewport: {
          ...viewport,
          ...newVp,
        },
      })
    }
  }, -1)
  return null
}

export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)

const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          <ViewSync track={localRef} />
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
