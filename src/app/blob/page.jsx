'use client'

import Blob from '@/components/canvas/Blob'
import Instructions from '@/components/dom/Instructions'
import { r3f } from '@/helpers/global'

export default function Page({ params }) {
  return (
    <div>
      <Instructions>
        This is the <span className='text-green-200'>/blob</span> route. Click on the blob to navigate back. The canvas
        was not unmounted between route changes, only its contents. If you want scene contents to persist, put them into{' '}
        <span className='text-green-200'>@/components/canvas/Scene</span>.
      </Instructions>
      <r3f.In>
        <Blob route='/' position-y={-0.75} />
      </r3f.In>
    </div>
  )
}
