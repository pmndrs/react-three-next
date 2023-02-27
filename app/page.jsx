import Logo from '@/components/canvas/Logo'
import Instructions from '@/components/dom/Instructions'
import { Three } from '@/helpers/components/Three'

export default function Page() {
  return (
    <>
      <Instructions>
        This is a minimal starter for Nextjs + React-three-fiber and Threejs. Click on the{' '}
        <span className='text-cyan-200'>atoms nucleus</span> to navigate to the{' '}
        <span className='text-green-200'>/blob</span> page. OrbitControls are enabled by default.
      </Instructions>

      <Three>
        <Logo route='/blob' scale={0.5} position-y={-1} />
      </Three>
    </>
  )
}
