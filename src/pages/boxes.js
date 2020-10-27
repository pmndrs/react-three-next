import { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'
import { OrbitControls, Box } from '@react-three/drei'
import LDom from '@/components/dom/_layout'

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
  const [active, setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <Box
      args={[1, 1, 1]}
      ref={mesh}
      scale={active ? [6, 6, 6] : [5, 5, 5]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      {...props}
    >
      <meshStandardMaterial attach='material' color={hovered ? '#2b6c76' : '#720b23'} />
    </Box>
  )
}

const BoxesCanvas = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <MyBox position={[10, 0, 0]} />
      <MyBox position={[-10, 0, 0]} />
      <MyBox position={[0, 10, 0]} />
      <MyBox position={[0, -10, 0]} />
      <OrbitControls />
    </>
  )
}

const BoxesDom = () => {
  return <h1>BOXES DOM</h1>
}

const BoxesPage = () => {
  return (
    <>
      <BoxesCanvas />
      <LDom>
        <BoxesDom />
      </LDom>
    </>
  )
}

export default BoxesPage
