import useStore from '@/helpers/store'
import { Badge } from '@pmndrs/branding'
import Head from 'next/head'

const Header = () => {
  const title = useStore((s) => s.title)
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
const Dom = ({ dom }) => {
  const events = useStore((s) => s.events)
  return (
    <div
      className='absolute top-0 bottom-0 left-0 right-0 z-20 dom'
      {...events}
    >
      <Header />
      {dom}
      <div className='absolute bottom-2 right-2 z-index-30'>
        <Badge />
      </div>
    </div>
  )
}

export default Dom
