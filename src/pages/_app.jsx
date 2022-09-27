import { useRef } from 'react'
import Header from '@/config'
import '@/styles/index.css'
import dynamic from 'next/dynamic'

const Canvas = dynamic(() => import('@/components/canvas/Canvas'), { ssr: true })

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()
  return (
    <>
      <Header title={pageProps.title} />
      <div ref={ref} className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom bg-zinc-900'>
        <Component {...pageProps} />
        {Component?.canvas && (
          <Canvas eventSource={ref} eventPrefix='client'>
            {Component.canvas(pageProps)}
          </Canvas>
        )}
      </div>
    </>
  )
}
