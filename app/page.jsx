import { Logo, Dog, Duck } from '@/components/canvas/Examples'
import { Common, View } from '@/components/canvas/View'

export default function Page() {
  return (
    <>
      <div class='mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row  lg:w-4/5'>
        {/* jumbo */}
        <div class='flex w-full flex-col items-start justify-center text-center md:w-2/5 md:text-left'>
          <p class='w-full uppercase'>Next + React Three Fiber</p>
          <h1 class='my-4 text-5xl font-bold leading-tight'>Next 3D Starter</h1>
          <p class='mb-8 text-2xl leading-normal'>A minimalist starter for React, React-three-fiber and Threejs.</p>
        </div>

        <div class='mb-12 w-full py-6 text-center md:w-3/5'>
          <View className='flex h-96 w-full flex-col items-center justify-center'>
            <Logo route='/blob' scale={0.6} position={[0, 0, 0]} />
            <Common />
          </View>
        </div>
      </div>

      <div class='mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row  lg:w-4/5'>
        {/* first row */}
        <div class='relative h-48 w-full p-6 sm:w-1/2 md:my-12 md:mb-40'>
          <h3 class='mb-3 text-3xl font-bold leading-none text-gray-800'>Events are propagated</h3>
          <p class='mb-8 text-gray-600'>Drag, scroll, pinch, and rotate the canvas to explore the 3D scene.</p>
        </div>
        <div class='relative my-12 h-48 w-full p-6 sm:w-1/2 md:mb-40'>
          <View orbit className='relative h-full  sm:h-48 sm:w-full'>
            <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
            <Common color={'lightpink'} />
          </View>
        </div>
        {/* second row */}
        <div class='relative my-12 h-48 w-full p-6 sm:w-1/2 md:mb-40'>
          <View orbit className='relative h-full  animate-bounce sm:h-48 sm:w-full'>
            <Duck route='/blob' scale={2} position={[0, -1.6, 0]} />
            <Common color={'lightblue'} />
          </View>
        </div>
        <div class='w-full p-6 sm:w-1/2'>
          <h3 class='mb-3 text-3xl font-bold leading-none text-gray-800'>Dom and 3D are synchronized</h3>
          <p class='mb-8 text-gray-600'>
            3D Divs are renderer through the View component. It uses gl.scissor to cut the viewport into segments. You
            tie a view to a tracking div which then controls the position and bounds of the viewport. This allows you to
            have multiple views with a single, performant canvas. These views will follow their tracking elements,
            scroll along, resize, etc.
          </p>
        </div>
      </div>
    </>
  )
}
