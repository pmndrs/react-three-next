import { Suspense } from 'react'
import { Environment, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import useStore from '@/helpers/store'
import { A11y } from "@react-three/a11y"

const M = a(MeshDistortMaterial)

const SphereComponent = () => {
  const router = useStore((s) => s.router)
  const { color } = useSpring({
    color: router.route === '/box' ? '#272727' : 'black',
  })
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <A11y
        role="link"
        href="/box"
        actionCall={()=>{
          router.push(`/box`)
        }}
      >
        <Sphere
          args={[1, 32, 32]}
        >
          <M factor={2} color={color} />
        </Sphere>
      </A11y>
      <Environment preset={'studio'} />
    </Suspense>
  )
}

export default SphereComponent
