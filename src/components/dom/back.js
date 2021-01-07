import Link from 'next/link'

const BackButton = () => {
  return (
    <Link href='/' as={`/`}>
      <span className='absolute z-20 p-2 m-2 focus:outline-none focus:ring text-black-900'>
        Back
      </span>
    </Link>
  )
}

export default BackButton
