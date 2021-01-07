import Link from 'next/link'

const Go = () => {
  return (
    <Link href='/box' as={`/box`}>
      <span className='absolute z-20 p-2 m-2 text-white focus:outline-none focus:ring'>
        Go
      </span>
    </Link>
  )
}

export default Go
