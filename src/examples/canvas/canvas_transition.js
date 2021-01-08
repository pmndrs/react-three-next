import { Transition } from 'react-spring'
import { a, config } from '@react-spring/three'

export const CanvasTransition = ({ items, canvas }) => {
  return (
    <Transition
      items={items}
      keys={(item) => item.id}
      from={{
        position: [0, 0, -20],
        rotation: [0, Math.PI, 0],
        scale: [0, 0, 0],
      }}
      enter={{ position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] }}
      leave={{
        position: [0, 0, -10],
        rotation: [0, -Math.PI, 0],
        scale: [0, 0, 0],
      }}
      config={() => (n) => n !== 'scale' && config.slow}
    >
      {(styles, { pageProps, Component }) => (
        <a.group {...styles} {...pageProps}>
          {canvas}
        </a.group>
      )}
    </Transition>
  )
}
