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
      <button className='back-btn'>
        <svg className='back-icn' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 627 438'>
          <path
            stroke='null'
            d='M364 17h0a39 39 0 000 55l106 107H48c-22 0-39 18-39 39h0c0 21 17 39 39 39h422L364 364a39 39 0 000 55h0c15 15 39 15 55 0l200-201L419 17a39 39 0 00-55 0z'
          />
        </svg>
        <p>Back</p>
      </button>
    </div>
  )
}

export default BackButton
