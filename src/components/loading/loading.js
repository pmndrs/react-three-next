import React, { useEffect } from 'react'
// import { useSpring, a } from 'react-spring'
import { useProgress } from '@react-three/drei/useProgress'
import useStore from '@/helpers/store'

function ProgressRing({ radius, stroke, progress }) {
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className='fill-current text-gray-50 dark:text-gray-800'
    >
      <circle
        stroke='white'
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{
          strokeDashoffset,
          rotate: '-90deg',
          transformOrigin: 'center',
        }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  )
}

function Progress() {
  const { active, progress } = useProgress()

  useEffect(() => {
    useStore.setState({ loading: progress !== 100 && active })
  }, [progress, active])

  return <PreloadRing></PreloadRing>
}

function PreloadRing() {
  const progress = useProgress((state) => state.progress)

  return (
    <ProgressRing radius={48} stroke={3} progress={progress}></ProgressRing>
  )
}

function Preload() {
  const show = useStore((state) => state.loading)
  // const { opacity, transform } = useSpring({
  //   to: { opacity: show ? 1 : 0 },
  //   from: { opacity: 0 },
  // })
  const progress = useProgress((state) => state.progress)

  return (
    <div
      style={{ opacity: show ? 1 : 0 }}
      className='absolute z-40 flex flex-col items-center justify-center w-full h-full mx-auto pointer-events-none'
    >
      <Progress />
      <span className='text-gray-800 dark:text-gray-50'>
        {Math.round(progress * 10) / 10}
      </span>
    </div>
  )
}

export default Preload
