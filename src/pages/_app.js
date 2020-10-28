import '../assets/scss/index.scss'
import LCanvas from '@/components/canvas/_layout'
import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import Preload from '@/components/loading/loading'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const dom = useRef()

  useEffect(() => {
    useStore.setState({ router: router })
  }, [router])

  useEffect(() => {
    useStore.setState({ dom: dom.current })
  }, [dom])

  return (
    <>
      <div ref={dom} id='_dom'></div>
      <LCanvas>
        <Component {...pageProps} />
      </LCanvas>
      <Preload />
    </>
  )
}

export default MyApp
