import { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'
import { Box } from '@react-three/drei'
import LDom from '@/components/dom/_layout'
import useStore from '@/helpers/store'

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

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <Box
      args={[1, 1, 1]}
      ref={mesh}
      scale={hovered ? [6, 6, 6] : [5, 5, 5]}
      onClick={() => {
        router.push(`/birds`)
      }}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      {...props}
    >
      <meshStandardMaterial attach='material' color={hovered ? '#2b6c76' : '#720b23'} />
    </Box>
  )
}

const BoxesCanvas = ({ router }) => {
  return (
    <group position={[0, 0, -35]}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <MyBox position={[10, 0, 0]} />
      <MyBox position={[-10, 0, 0]} />
      <MyBox position={[0, 10, 0]} />
      <MyBox position={[0, -10, 0]} />
    </group>
  )
}

const BoxesDom = () => {
  return <h1>Click on a Box to navigate</h1>
}

const Index = () => {
  return (
    <>
      <LDom>
        <BoxesDom />
      </LDom>
      {/* todo replace with zustand  */}

      <BoxesCanvas />
    </>
  )
}

export default Index
