import useStore from '@/helpers/store'
import Link from 'next/link'

function BackButton() {
  return (
    <Link href='/' as={`/`}>
      <button className='focus:outline-none focus:ring absolute z-20 p-2 rounded-full m-2 py-3 px-6 font-bold bg-gray-700 text-gray-50 dark:bg-gray-50 dark:text-gray-700'>
        ⬅ <span className='px-1'>Back</span>
      </button>
    </Link>
  )
}

export default BackButton
