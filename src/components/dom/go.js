import Link from 'next/link'

const Go = () => {
  return (
    <Link href='/box' as={`/box`}>
      <button className='absolute z-20 p-2 m-2 text-white focus:outline-none focus:ring'>
        Next page
      </button>
    </Link>
  )
}

export default Go
