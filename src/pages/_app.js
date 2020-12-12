import LCanvas from '@/components/canvas/_layout'
import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect, Children } from 'react'
import Preload from '@/components/loading/loading'
import { Helmet } from 'react-helmet'
import { helmet } from '../config'

import '../assets/styles/globals.css'

function SplitApp({ canvas, dom, items }) {
  return (
    <>
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
  let r3fArr = []

  comp = [...Component().props.children]

  Children.forEach(comp, (child) => {
    if (child.props.r3f) {
      r3fArr = r3fArr.concat(comp.splice(child, 1))
    }
  })

  items = [
    {
      id: router.route,
      component: comp[0],
      pageProps,
    },
  ]

  useEffect(() => {
    useStore.setState({ router: router })
  }, [router])

  return r3fArr.length > 0 ? (
    <SplitApp canvas={r3fArr} dom={comp} items={items} />
  ) : (
    <Component {...pageProps} />
  )
}

export default MyApp
