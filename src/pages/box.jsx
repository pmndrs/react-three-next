import Instructions from '@/components/dom/Instructions'
import dynamic from 'next/dynamic'

const Box = dynamic(() => import('@/components/canvas/Box'), { ssr: false })

export default function Page(props) {
  return (
    <Instructions>
      This is the /box route. Click on the box to navigate back. The canvas was not unmounted between route changes,
      only its contents. If you want scene contents to persist, put them into @/components/canvas/Canvas.
    </Instructions>
  )
}

Page.canvas = (props) => <Box route='/' />

export async function getStaticProps() {
  return { props: { title: 'Box' } }
}
