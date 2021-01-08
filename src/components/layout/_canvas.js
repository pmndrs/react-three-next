import { Canvas } from 'react-three-fiber'
import { Perf } from 'r3f-perf'
import useStore from '@/helpers/store'
import { OrbitControls } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'

const Bg = () => {
  const router = useStore((state) => state.router)
  const { bg } = useSpring({
    bg: router && router.route !== '/box' ? 0 : 0x17 / 255,
  })
  return <a.color attach='background' r={bg} g={bg} b={bg} />
}
const LCanvas = ({ children }) => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={({ events }) => {
        useStore.setState({ events })
      }}
    >
      <Bg />
      <Perf openByDefault trackGPU={true} />
      <OrbitControls />
      {children}
    </Canvas>
  )
}

export default LCanvas
