import React, { useEffect } from 'react'
import { useSpring, a } from 'react-spring'
import { useProgress } from '@react-three/drei'
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
  const { opacity, transform } = useSpring({
    to: { opacity: show ? 1 : 0 },
    from: { opacity: 0 },
  })
  const progress = useProgress((state) => state.progress)

  return (
    <a.div
      style={{ opacity: opacity, transform: transform }}
      className='loader'
    >
      <div className='pointer-events-none absolute w-full h-full mx-auto flex items-center justify-center flex-col z-20'>
        <Progress />
        <span className='text-gray-800 dark:text-gray-50'>
          {Math.round(progress * 10) / 10}
        </span>
      </div>
    </a.div>
  )
}

export default Preload
