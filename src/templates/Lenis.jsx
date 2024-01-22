'use client'

import { addEffect } from '@react-three/fiber'
import ReactLenis from '@studio-freight/react-lenis'
import { useEffect, useRef } from 'react'

export function Lenis({ children, ...props }) {
  const lenisRef = useRef()

  useEffect(() => {
    const remove = addEffect((t) => {
      lenisRef.current?.raf(t)
    })

    return remove
  }, [])

  return (
    <ReactLenis
      {...props}
      autoRaf={false}
      ref={(node) => {
        lenisRef.current = node?.lenis
      }}
    >
      {children}
    </ReactLenis>
  )
}
