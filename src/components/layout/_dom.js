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
    <div className='absolute top-0 left-0 right-0 z-20 dom' {...events}>
      <Header />
      {dom}
      <h1 className='absolute w-full text-xs tracking-wider text-center text-white text-gray-100 md:mt-56 mt-28 top-1/2 sm:subpixel-antialiased md:antialiased'>
        REACT THREE NEXT STARTER
      </h1>
      <div className='absolute bottom-4 right-4 z-index-30'>
        <Badge />
      </div>
    </div>
  )
}

export default Dom
