'use client'

import { useRef } from 'react'
import Scene from '@/components/canvas/Scene'

const Layout = ({ children }) => {
  const ref = useRef()

  return (
    <div ref={ref} className='absolute top-0 left-0 z-10 h-screen w-screen overflow-hidden bg-zinc-900 text-gray-50'>
      {children}
      <Scene
        style={{
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix='client'
      />
    </div>
  )
}

export { Layout }
