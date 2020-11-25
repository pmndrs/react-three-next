import '../assets/scss/index.scss'
import LCanvas from '@/components/canvas/_layout'
import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import Preload from '@/components/loading/loading'
import { Transition, animated } from 'react-spring'
import { a, config } from '@react-spring/three'
import { Helmet } from 'react-helmet'
import { helmet } from '../config'

function SplitApp({ canvas, dom, items }) {
  return (
    <>
      <Helmet {...helmet} />
      {dom && (
        <Transition
          items={items}
          keys={(item) => item.id}
          from={{ opacity: 0, transform: `scale(0)` }}
          initial={{ opacity: 0, transform: 'scale(0)' }}
          enter={{ opacity: 1, transform: `scale(1)` }}
          leave={{ opacity: 0, position: 'absolute', top: 0, transform: `scale(0)` }}
          config={() => (n) => n !== 'scale' && config.slow}
        >
          {(styles) => (
            <animated.div style={{ ...styles, width: '100%', top: 0, left: 0 }} className='dom'>
              {dom}
            </animated.div>
          )}
        </Transition>
      )}

      <LCanvas>
        {canvas && (
          <Transition
            items={items}
            keys={(item) => item.id}
            from={{ position: [0, 0, -20], rotation: [0, Math.PI, 0], scale: [0, 0, 0] }}
            enter={{ position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] }}
            leave={{ position: [0, 0, -10], rotation: [0, -Math.PI, 0], scale: [0, 0, 0] }}
            config={() => (n) => n !== 'scale' && config.slow}
          >
            {(styles, { pageProps, Component }) => (
              <a.group {...styles} {...pageProps}>
                {canvas}
              </a.group>
            )}
          </Transition>
        )}
      </LCanvas>
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
