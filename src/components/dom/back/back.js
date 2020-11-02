import useStore from '@/helpers/store'
import './back.scss'

function BackButton() {
  const router = useStore((state) => state.router)

  return (
    <div
      href='/'
      as={`/`}
      onClick={() => {
        // useStore.setState({ loading: true })
        router.push(`/`)
      }}
    >
      <button className='back-btn'>⬅ Back</button>
    </div>
  )
}

export default BackButton
