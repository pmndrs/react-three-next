import { HtmlStatic } from '@/helpers/HtmlStatic'
import useStore from '@/helpers/store'
import { animated, Transition } from 'react-spring'
import { Helmet } from 'react-helmet'

import { helmet } from '../../config'

const Dom = ({ children }) => {
  const dom = useStore((state) => state.dom)
  const items = useStore((state) => state.items)

  return (
    <HtmlStatic fullscreen portal={dom}>
      <Helmet {...helmet} />
      <Transition
        items={items}
        keys={(item) => item.id}
        from={{ opacity: 0, transform: `scale(0)` }}
        initial={{ opacity: 0, transform: 'scale(0)' }}
        enter={{ opacity: 1, transform: `scale(1)` }}
        leave={{ opacity: 0, position: 'absolute', top: 0, transform: `scale(0)` }}
      >
        {(styles, { pageProps, Component }) => (
          <animated.div style={{ ...styles, width: '100%' }}>{children}</animated.div>
        )}
      </Transition>
    </HtmlStatic>
  )
}

export default Dom
