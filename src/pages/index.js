import useStore from '@/helpers/store'
import MyBox from '@/components/canvas/MyBox/MyBox'
import { Helmet } from 'react-helmet'

const BoxesDom = () => {
  return <h1>R3F Next Starter - Click on a box to navigate</h1>
}

const Dom = () => {
  return (
    <>
      <Helmet title={'Welcome'} />
      <BoxesDom />
    </>
  )
}

const Canvas = () => {
  return (
    <group position={[0, 0, -20]}>
      <MyBox position={[10, 0, -5]} />
      <MyBox position={[-10, 0, -5]} />
      <MyBox position={[0, 10, 0]} />
      <MyBox position={[0, -5, 5]} />
    </group>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      r3f: true,
    },
  }
}

// canvas is required and dom is optional
const Page = () => {
  useStore.setState({ loading: false })
  return (
    <>
      <Canvas />
      <Dom />
    </>
  )
}

export default Page
