import Dom from '@/components/dom/container'
import useStore from '@/helpers/store'
import MyBox from '@/components/canvas/MyBox/MyBox'
import { Helmet } from 'react-helmet'

const BoxesCanvas = () => {
  return (
    <group position={[0, 0, -20]}>
      <MyBox position={[10, 0, -5]} />
      <MyBox position={[-10, 0, -5]} />
      <MyBox position={[0, 10, 0]} />
      <MyBox position={[0, -5, 5]} />
    </group>
  )
}

const BoxesDom = () => {
  return <h1>R3F Starter - Click on a box to navigate</h1>
}

const Index = () => {
  useStore.setState({ loading: false })

  return (
    <>
      <Dom>
        <Helmet title={'Welcome'} />
        <BoxesDom />
      </Dom>
      <BoxesCanvas />
    </>
  )
}

export default Index
