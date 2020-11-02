import useStore from '@/helpers/store'
import './back.scss'
import Link from 'next/link'

function BackButton() {
  return (
    <Link href='/' as={`/`}>
      <button className='back-btn'>⬅ Back</button>
    </Link>
  )
}

export default BackButton
