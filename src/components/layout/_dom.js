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
    
    <div className='absolute top-0 left-0 w-screen h-screen overflow-hidden dom' {...events}>
      <Header />
      {dom}
      <h1 className='absolute z-20 w-full text-xs tracking-wider text-center text-gray-100 md:mt-56 mt-28 top-1/2 sm:subpixel-antialiased md:antialiased'>
        REACT THREE NEXT STARTER
      </h1>
      <div className='absolute p-2 m-2 right-4 z-20'>
        <Badge />
      </div>
    </div>
  )
}

export default Dom
