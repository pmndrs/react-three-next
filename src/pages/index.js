import useStore from '@/helpers/store'
import Head from 'next/head'
import { Badge } from '@pmndrs/branding'
import Go from '@/components/dom/go'
import dynamic from 'next/dynamic'

const Sphere = dynamic(() => import('@/components/canvas/Sphere'), {
  ssr: false,
})

const Dom = () => {
  return (
    <>
      <Head>
        <title>Sphere</title>
      </Head>
      <Go />
      <div className='absolute bottom-2 right-2 z-index-30'>
        <Badge />
      </div>
    </>
  )
}

const Page = () => {
  return (
    <>
      <Sphere r3f />
      <Dom />
    </>
  )
}

export default Page
