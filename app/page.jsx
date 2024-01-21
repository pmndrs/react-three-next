'use client'

import dynamic from 'next/dynamic'
import { Suspense, useRef, useEffect, useState } from 'react'
import { Center, Html, OrbitControls, Environment } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Canvas, useFrame } from '@react-three/fiber';
import ButtonContext from '@/components/dom/ButtonContext';
import Panel from '@/components/dom/Panel'
import { GizmoHelper, GizmoViewport } from '@react-three/drei';


const Palace = dynamic(() => import('@/components/palace/Palace').then((mod) => mod.Palace), { ssr: false })
// const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
//   ssr: false,
//   loading: () => (
//     <div className='flex h-96 w-full flex-col items-center justify-center'>
//       <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
//         <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
//         <path
//           className='opacity-75'
//           fill='currentColor'
//           d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
//         />
//       </svg>
//     </div>
//   ),
// })
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
// const Panel = dynamic(() => import('@/components/dom/Panel').then((mod) => mod.Panel), { ssr: false })

export default function Page() {
  const meshRef = useRef(); // Create a ref
  const controlsRef = useRef();
  const [isButtonOn, setButtonOn] = useState(true);

  const toggleButton = () => {
    setButtonOn(!isButtonOn);
  };

  return (
    <div className='flex h-full w-full items-center justify-center'> {/* Simplified wrapper */}
      <ButtonContext.Provider value={{ isButtonOn, toggleButton }}>
        <div className='h-full w-full text-center'> {/* Removed redundant className */}
          {/* <View className='flex h-full w-full items-center justify-center'> */}
          <Canvas>
            <Physics timeStep="vary">
              <Suspense fallback={null}>
                <Environment preset="warehouse" />
                <Palace controlsRef={controlsRef} />
                <Common color={"#343434"} />
                <OrbitControls ref={controlsRef} />
              </Suspense>
            </Physics>
            <GizmoHelper
              align="bottom-right" // position of the gizmo
              margin={[80, 80]} // margin from the edge of the canvas
              onUpdate={() => null} // required prop, but can be a no-op
            >
              <GizmoViewport
                axisColors={["red", "green", "blue"]} // colors of the axes
                labelColor="white" // color of the labels
              />
            </GizmoHelper>
          </Canvas>
        </div>
        <Panel />
      </ButtonContext.Provider>
    </div >
  );
}