import { Suspense } from 'react'
import Dom from '@/components/dom/container'
import useStore from '@/helpers/store'
import MyBox from '@/components/canvas/MyBox/MyBox'

// export async function getStaticProps(context) {
//   return {
//     props: {
//       canvas: true,
//     },
//   }
// }
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
  return <h1>Click on a Box to navigate</h1>
}

const Index = () => {
  useStore.setState({ loading: false })

  return (
    <>
      <Dom>
        <BoxesDom />
      </Dom>
      <BoxesCanvas />
    </>
  )
}

export default Index
