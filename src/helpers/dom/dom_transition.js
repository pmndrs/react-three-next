import { animated, config, Transition } from 'react-spring'

export const DomTransition = ({ items, dom }) => {
  return (
    <Transition
      items={items}
      keys={(item) => item.id}
      from={{ opacity: 0, transform: `scale(0)` }}
      initial={{ opacity: 0, transform: 'scale(0)' }}
      enter={{ opacity: 1, transform: `scale(1)` }}
      leave={{
        opacity: 0,
        position: 'absolute',
        top: 0,
        transform: `scale(0)`,
      }}
      config={() => (n) => n !== 'scale' && config.slow}
    >
      {(styles) => (
        <animated.div
          style={{ ...styles, width: '100%', top: 0, left: 0 }}
          className='dom'
        >
          {dom}
        </animated.div>
      )}
    </Transition>
  )
}
