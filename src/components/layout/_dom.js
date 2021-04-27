import useStore from '@/helpers/store'
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
      className='absolute top-0 left-0 w-screen h-screen overflow-hidden dom'
      {...events}
    >
      <Header />
      {dom}
    </div>
  )
}

export default Dom
