import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import BackButton from '@/components/dom/back'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const Page = () => {
  useStore.setState({ title: 'Box' })
  return (
    <>
      <Box r3f />
      <BackButton />
    </>
  )
}

export default Page
