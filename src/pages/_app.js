import LCanvas from '@/components/canvas/_layout'
import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect, Children } from 'react'
import Preload from '@/components/loading/loading'
import { Helmet } from 'react-helmet'
import { helmet } from '../config'

import '../assets/styles/globals.css'

function SplitApp({ canvas, dom }) {
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
  let comp = [...Component().props.children]
  let r3fArr = []
  let compArr = []

  Children.forEach(comp, (child) => {
    child.props.r3f ? r3fArr.push(child) : compArr.push(child)
  })

  useEffect(() => {
    useStore.setState({ router: router })
  }, [router])

  return r3fArr.length > 0 ? (
    <SplitApp canvas={r3fArr} dom={compArr} />
  ) : (
    <Component {...pageProps} />
  )
}

export default MyApp
