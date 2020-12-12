import LCanvas from '@/components/canvas/_layout'
import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect } from 'react'
import Preload from '@/components/loading/loading'
import { Helmet } from 'react-helmet'
import { helmet } from '../config'
import deepFilter from '../helpers/deepFilter'

import '../assets/styles/globals.css'

function SplitApp({ canvas, dom, items }) {
  return (
    <>
      {/* todo : debug r3f that throw an error here -- >
     {deepFilter(canvas, (item) => () => {
      console.log(item)
      })} */}
      <Helmet {...helmet} />
      {dom && <div className='dom mx-auto'>{dom}</div>}
      <LCanvas>{canvas && <group>{canvas}</group>}</LCanvas>
      <Preload />
    </>
  )
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  let comp = null
  let items = null
  if (pageProps.r3f) {
    // children 0 must be canvas and children is optional dom
    comp = Component().props.children

    items = [
      {
        id: router.route,
        component: comp[0],
        pageProps,
      },
    ]
  }
  useEffect(() => {
    useStore.setState({ router: router })
  }, [router])

  return pageProps.r3f ? (
    <SplitApp canvas={comp[0] || comp} dom={comp[1]} items={items} />
  ) : (
    <Component {...pageProps} />
  )
}

export default MyApp
