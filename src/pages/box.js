import BackButton from '@/components/dom/back'
import useStore from '@/helpers/store'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Badge } from '@pmndrs/branding'

let Box = null
if (process.env.NODE_ENV === 'production') {
  Box = dynamic(() => import('@/components/canvas/Box'), {
    ssr: false,
  })
} else {
  Box = require('@/components/canvas/Box').default
}

const Dom = () => {
  return (
    <div>
      <Head>
        <title>Box</title>
      </Head>
      <BackButton />
      <div className='absolute bottom-2 right-2 z-index-30'>
        <Badge />
      </div>
    </div>
  )
}

const Page = () => {
  useStore.setState({ loading: false })
  return (
    <>
      <Box r3f />
      <Dom />
    </>
  )
}

export default Page
