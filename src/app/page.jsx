'use client'

import Logo from '@/components/canvas/Logo'
import Instructions from '@/components/dom/Instructions'
import { r3f } from '@/helpers/global'

export default function Page() {
  return (
    <>
      <Instructions>
        This is a minimal starter for Nextjs + React-three-fiber and Threejs. Click on the{' '}
        <span className='text-cyan-200'>atoms nucleus</span> to navigate to the{' '}
        <span className='text-green-200'>/blob</span> page. OrbitControls are enabled by default.
      </Instructions>
      <r3f.In>
        <Logo route='/blob' scale={0.5} position-y={-1} />
      </r3f.In>
    </>
  )
}
