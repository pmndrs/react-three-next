import '../assets/scss/index.scss'
import LCanvas from '@/components/canvas/_layout'
import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const updateRoute = useStore((state) => state.updateRoute)

  useEffect(() => {
    updateRoute(router)
  }, [updateRoute, router])

  return (
    <>
      <div id='_dom'></div>
      <LCanvas>
        <Component {...pageProps} />
      </LCanvas>
    </>
  )
}

export default MyApp
