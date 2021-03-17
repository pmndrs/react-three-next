import { Suspense } from 'react'
import { Environment, MeshDistortMaterial } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry'
import { extend } from 'react-three-fiber'
import useStore from '@/helpers/store'
import { A11y, useA11y, useUserPreferences } from '@react-three/a11y'

const M = a(MeshDistortMaterial)
extend({ RoundedBoxGeometry })

const RoundedDarkBox = () => {
  const { a11yPrefersState } = useUserPreferences()
  const a11y = useA11y()
  const { color } = useSpring({
    color: a11y.focus || a11y.hover ? '#494949' : '#272727',
  })
  return (
    <mesh rotation={[45, 45, 45]}>
      <roundedBoxGeometry args={[1.5, 1.5, 1.5, 10, 0.1]} />
      <M
        distort={a11yPrefersState.prefersReducedMotion ? 0 : 0.4}
        color={color}
      />
    </mesh>
  )
}

const BoxComponent = () => {
  const router = useStore((s) => s.router)
  return (
    <Suspense fallback={null}>
      <A11y
        role='link'
        href='/'
        actionCall={() => {
          router.push(`/`)
        }}
      >
        <RoundedDarkBox />
      </A11y>
      <Environment preset={'studio'} />
    </Suspense>
  )
}
export default BoxComponent
