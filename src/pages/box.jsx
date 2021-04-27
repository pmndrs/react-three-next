import Instructions from '@/components/dom/instructions'
import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const Page = () => {
  useStore.setState({ title: 'Box' })
  return (
    <>
      <Box r3f route='/' />
      <Instructions />
    </>
  )
}

export default Page
