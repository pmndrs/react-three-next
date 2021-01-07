import useStore from '@/helpers/store'

const Dom = ({ dom }) => {
  const events = useStore((state) => state.events)
  return (
    <div
      className='absolute top-0 bottom-0 left-0 right-0 z-20 dom'
      {...events}
    >
      {dom}
    </div>
  )
}

export default Dom
