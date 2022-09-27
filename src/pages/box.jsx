import Instructions from '@/components/dom/Instructions'
import dynamic from 'next/dynamic'

const Box = dynamic(() => import('@/components/canvas/Box'), { ssr: false })

export default function Page(props) {
  return <Instructions />
}

Page.canvas = (props) => <Box route='/' />

export async function getStaticProps() {
  return { props: { title: 'Box' } }
}
