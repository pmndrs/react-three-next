import Link from 'next/link'

const BackButton = () => {
  return (
    <Link href='/' as={`/`}>
      <a className='absolute z-20 p-2 m-2 text-white focus:outline-none focus:ring'>
        Previous page
      </a>
    </Link>
  )
}

export default BackButton
