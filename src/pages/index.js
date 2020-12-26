import useStore from '@/helpers/store'
import MyBox from '@/components/canvas/MyBox/MyBox'
// import { Helmet } from 'react-helmet'

const BoxesDom = () => {
  return (
    <h1 className='absolute z-10 w-full p-2 mx-auto text-3xl text-center text-gray-900 dark:text-gray-100'>
      R3F Next Starter - Click on a box to navigate
    </h1>
  )
}

const Dom = () => {
  return (
    <>
      {/* <Helmet title={'Welcome'} /> */}
      <BoxesDom />
    </>
  )
}

const BoxGroup = () => {
  return (
    <group position={[0, 0, -20]}>
      <MyBox position={[10, 0, -5]} />
      <MyBox position={[-10, 0, -5]} />
      <MyBox position={[0, 10, 0]} />
      <MyBox position={[0, -5, 5]} />
    </group>
  )
}

const Page = () => {
  useStore.setState({ loading: false })
  return (
    <>
      <BoxGroup r3f />
      <Dom />
    </>
  )
}

export default Page
