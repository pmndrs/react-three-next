import dynamic from 'next/dynamic'
// import { OrbitControls } from '@react-three/drei'
import Dom from '@/components/dom/container'
import { Suspense } from 'react'
import BackButton from '@/components/dom/back/back'
import useStore from '@/helpers/store'
// import Bird from "../components/Bird";

const Bird = dynamic(() => import('../components/canvas/Bird'), { ssr: false })

const Birds = () => {
  return new Array(5).fill().map((_, i) => {
    const x = (7.5 + Math.random() * 15) * (Math.round(Math.random()) ? -1 : 1)
    const y = -7.5 + Math.random() * 5
    const z = -2.5 + Math.random() * 5
    const bird = ['stork', 'parrot', 'flamingo'][Math.round(Math.random() * 2)]
    let speed = bird === 'stork' ? 0.5 : bird === 'flamingo' ? 2 : 5
    let factor =
      bird === 'stork' ? 0.5 + Math.random() : bird === 'flamingo' ? 0.25 + Math.random() : 1 + Math.random() - 0.5

    return (
      <Bird
        key={i}
        position={[x, y, z]}
        rotation={[0, x > 0 ? Math.PI : 0, 0]}
        speed={speed}
        factor={factor}
        url={`/glb/${bird}.glb`}
      />
    )
  })
}

const BirdsCanvas = () => {
  return (
    <group position={[0, 0, -25]}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={null}>
        <Birds />
      </Suspense>
    </group>
  )
}

const BoxesDom = () => {
  return (
    <div>
      <BackButton />
      <h1>BIRDS DOM</h1>
    </div>
  )
}

const BirdsPage = () => {
  useStore.setState({ loading: false })

  return (
    <>
      <Dom>
        <BoxesDom />
      </Dom>
      <BirdsCanvas />
    </>
  )
}

export default BirdsPage
