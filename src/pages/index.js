import { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'
import Dom from '@/components/dom/container'
import useStore from '@/helpers/store'
import { a, useSpring } from '@react-spring/three'

// export async function getStaticProps(context) {
//   return {
//     props: {
//       canvas: true,
//     },
//   }
// }

const MyBox = (props) => {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  const router = useStore((state) => state.router)

  const { scale } = useSpring({ scale: hovered ? 7 : 5, from: { scale: 5 } })

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    }
  })

  return (
    <a.mesh
      ref={mesh}
      scale={scale.to((s) => [s, s, s])}
      onClick={() => {
        router.push(`/birds`)
      }}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      {...props}
    >
      <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial attach='material' color={hovered ? '#87ceeb' : '#333333'} />
    </a.mesh>
  )
}

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
