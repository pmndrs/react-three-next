import useStore from '@/helpers/store'
import Link from 'next/link'

function BackButton() {
  return (
    <Link href='/' as={`/`}>
      <button className='absolute z-20 p-2 px-6 py-3 m-2 font-bold bg-gray-700 rounded-full focus:outline-none focus:ring text-gray-50 dark:bg-gray-50 dark:text-gray-700'>
        ⬅ <span className='px-1'>Back</span>
      </button>
    </Link>
  )
}

export default BackButton
