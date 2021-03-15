import { Suspense } from 'react'
import { Environment, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import useStore from '@/helpers/store'
import { A11y, useA11y, useUserPreferences } from "@react-three/a11y"

const M = a(MeshDistortMaterial)

const DarkSphere = () => {
  const { a11yPrefersState } = useUserPreferences()
  const a11y = useA11y()
  const { color } = useSpring({
    color: a11y.focus || a11y.hover ? '#272727' : 'black',
  })
  return (
    <Sphere
      args={[1, 32, 32]}
    >
      <M distort={a11yPrefersState.prefersReducedMotion ? 0 : 0.4} color={color} />
    </Sphere>
  )
}

const SphereComponent = () => {
  const router = useStore((s) => s.router)
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
        <DarkSphere />
      </A11y>
      <Environment preset={'studio'} />
    </Suspense>
  )
}

export default SphereComponent
