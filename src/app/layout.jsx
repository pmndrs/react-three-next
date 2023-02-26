import Scene from '@/components/canvas/Scene'
import '@/styles/index.css'

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>Next.js + Three.js</title>
      </head>
      <body>
        <div className='absolute top-0 left-0 z-10 h-screen w-screen overflow-hidden bg-zinc-900 text-gray-50'>
          {children}
          <Scene />
        </div>
      </body>
    </html>
  )
}
