import Instructions from '@/components/dom/Instructions'
import dynamic from 'next/dynamic'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const DOM = () => {
  return (
    // Step 5 - delete Instructions components
    <Instructions />
  )
}

const Page = () => {
  return (
    <>
      <DOM />
    </>
  )
}
Page.r3f = (
  <>
    <Box route='/' />
  </>
)

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Box',
    },
  }
}
