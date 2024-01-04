'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { KeyboardControls, Html } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Canvas } from '@react-three/fiber'

/**
 * Keyboard control preset
 */
const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
  // Optional animation key map
  { name: "action1", keys: ["1"] },
  { name: "action2", keys: ["2"] },
  { name: "action3", keys: ["3"] },
  { name: "action4", keys: ["KeyF"] },
];

const Room = dynamic(() => import('@/components/canvas/Objects').then((mod) => mod.Room), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <div className='flex h-full w-full items-center justify-center'> {/* Simplified wrapper */}
      <div className='h-full w-full text-center'> {/* Removed redundant className */}
        {/* <View className='flex h-full w-full items-center justify-center'> */}
        <Canvas>
            <Physics timeStep="vary">
            <Suspense fallback={null}>

              <KeyboardControls map={keyboardMap}>
                <Ecctrl
                  debug
                  animated
                  followLight
                  springK={2}
                  dampingC={0.2}
                  camCollision={true}
                  fallingGravityScale={0.1}
                  autoBalanceSpringK={1.2}
                  autoBalanceDampingC={0.04}
                  autoBalanceSpringOnY={0.7}
                  autoBalanceDampingOnY={0.05}
                  position={[0, 80, 0]}>
                    <Capsule />
                </Ecctrl>
              </KeyboardControls>
              <Room scale={0.6} position={[0, -10, 0]} />
              <Common />
              </Suspense>

            </Physics>
        {/* </View> */}
        </Canvas>
      </div>
    </div>
  );
}

function Capsule() {
  return (
    <group>
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial color='orange' />
      </mesh>
    </group>
  )
}