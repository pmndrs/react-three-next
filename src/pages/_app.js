import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect, Children } from 'react'
import Preload from '@/components/loading/loading'
import Header from '../config'
import '../assets/styles/globals.css'
import dynamic from 'next/dynamic'
import Dom from '@/components/dom/_dom'

let LCanvas = null
if (process.env.NODE_ENV === 'production') {
  LCanvas = dynamic(() => import('@/components/canvas/_canvas'), {
    ssr: false,
  })
} else {
  LCanvas = require('@/components/canvas/_canvas').default
}

function SplitApp({ canvas, dom }) {
  return (
    <>
      <Header />
      {dom && <Dom dom={dom} />}
      <LCanvas>{canvas && <group>{canvas}</group>}</LCanvas>
      <Preload />
    </>
  )
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const lang = router.pathname.startsWith('/jp') ? 'jp' : 'en'
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  let r3fArr = []
  let compArr = []
  Children.forEach(Component().props.children, (child) => {
    if (child.props && child.props.r3f) {
      r3fArr.push(child)
    } else {
      compArr.push(child)
    }
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
