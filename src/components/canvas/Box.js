import { Suspense } from 'react'
import { Environment, MeshDistortMaterial } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry'
import { extend } from 'react-three-fiber'
import useStore from '@/helpers/store'

const M = a(MeshDistortMaterial)
extend({ RoundedBoxGeometry })

const BoxComponent = () => {
  const router = useStore((s) => s.router)
  const { color } = useSpring({
    color: router.route !== '/box' ? 'black' : '#272727',
  })
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <mesh
        rotation={[45, 45, 45]}
        onClick={() => {
          router.push(`/`)
        }}
      >
        <roundedBoxGeometry args={[1.5, 1.5, 1.5, 10, 0.1]} />
        <M factor={3} color={color} />
      </mesh>
      <Environment preset={'studio'} />
    </Suspense>
  )
}
export default BoxComponent
