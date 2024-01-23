'use client'

import { useEffect } from 'react'
import { Canvas, addEffect } from '@react-three/fiber'
import { Preload, View } from '@react-three/drei'
import Lenis from '@studio-freight/lenis'

export default function Scene(props) {
  // Use lenis to control scrolling
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, syncTouch: true })
    const removeEffect = addEffect((time) => lenis.raf(time))
    return () => {
      lenis.destroy()
      removeEffect()
    }
  }, [])
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas shadows {...props} eventSource={document.body} eventPrefix='client'>
      <View.Port />
      <Preload all />
    </Canvas>
  )
}
