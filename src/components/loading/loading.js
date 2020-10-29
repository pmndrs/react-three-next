import React, { useEffect } from 'react'
import { useSpring, a } from 'react-spring'
import { useProgress } from '@react-three/drei'
import useStore from '@/helpers/store'
import './loading.scss'

function ProgressRing({ radius, stroke, progress }) {
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke='black'
        fill='white'
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset, rotate: '-90deg', transformOrigin: 'center' }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  )
}

function Progress() {
  const progress = useProgress((state) => state.progress)

  useEffect(() => {
    useStore.setState({ loading: progress !== 100 })
  }, [progress])

  return <PreloadRing></PreloadRing>
}

function PreloadRing() {
  const progress = useProgress((state) => state.progress)

  return <ProgressRing radius={48} stroke={3} progress={progress}></ProgressRing>
}

function Preload() {
  const show = useStore((state) => state.loading)
  const { opacity, transform } = useSpring({
    to: { opacity: show ? 1 : 0 },
    from: { opacity: 0 },
  })
  const progress = useProgress((state) => state.progress)

  return (
    <a.div style={{ opacity: opacity, transform: transform }} className={`loader`}>
      <Progress />
      <span>{Math.round(progress * 10) / 10}</span>
    </a.div>
  )
}

export default Preload
