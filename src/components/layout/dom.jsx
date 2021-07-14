import useStore from '@/helpers/store'
import { useLayoutEffect, useRef } from 'react'

const Dom = ({ children }) => {
  const ref = useRef(null)
  useLayoutEffect(() => {
    useStore.setState({ dom: ref })
  }, [])
  return (
    <div
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom'
      ref={ref}
    >
      {children}
    </div>
  )
}

export default Dom
