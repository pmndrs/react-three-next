import '../assets/scss/index.scss'
import LCanvas from '@/components/canvas/_layout'
import { Provider } from 'jotai'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <div id='_dom'></div>
      <LCanvas>
        <Component {...pageProps} />
      </LCanvas>
    </Provider>
  )
}

export default MyApp
