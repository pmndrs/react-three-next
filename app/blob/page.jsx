import { Blob } from '@/components/canvas/Blob'
import { Instructions } from '@/components/dom/Instructions'
import { Three } from '@/helpers/components/Three'

export const metadata = {
  title: 'Next.js + Three.js | Blob',
  description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
}

// This is rendered server side
export default function Page() {
  return (
    <div>
      <Instructions>
        This is the <span className='text-green-200'>/blob</span> route. Click on the blob to navigate back. The canvas
        was not unmounted between route changes, only its contents. If you want scene contents to persist, put them into{' '}
        <span className='text-green-200'>src/components/canvas/Scene</span>.
      </Instructions>
      <Three>
        <Blob route='/' position-y={-0.75} />
      </Three>
    </div>
  )
}
