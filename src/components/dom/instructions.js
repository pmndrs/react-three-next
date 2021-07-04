export default function Instructions() {
  return (
    <div
      className='absolute max-w-lg px-4 py-2 text-sm shadow-xl pointer-events-none select-none md:text-base top-8 left-1/2 text-gray-50 rounded-xl transform -translate-x-1/2'
      style={{
        backgroundColor: 'rgb(27, 30, 40)',
        maxWidth: 'calc(100% - 28px)',
      }}
    >
      <p className='mb-8'>
        This is a minimal starter for Nextjs + Threejs. A11y is included to
        provide a basic accessibility layer. If you click on the cube it will
        navigate to the `/box` page.
      </p>
      <div className='tracking-wider'>
        Step 1 - <span style={{ color: 'rgb(84, 90, 114)' }}>update:</span>
        <bold style={{ color: 'rgb(249, 196, 232)' }}> @/pages/index.tsx </bold>
        <br />
        Step 2 - <span style={{ color: 'rgb(84, 90, 114)' }}>update:</span>
        <bold style={{ color: 'rgb(249, 196, 232)' }}>
          {' '}
          @/components/canvas/Box.jsx{' '}
        </bold>
        <br />
        Step 3 - <span style={{ color: 'rgb(84, 90, 114)' }}>delete:</span>
        <bold style={{ color: 'rgb(249, 196, 232)' }}> @/pages/box.jsx </bold>
        <br />
        Step 4 -{' '}
        <span style={{ color: 'rgb(84, 90, 114)' }}>update header:</span>
        <bold style={{ color: 'rgb(249, 196, 232)' }}> @/config.js </bold>
        <br />
        Step 5 - <span style={{ color: 'rgb(84, 90, 114)' }}>delete:</span>
        <bold style={{ color: 'rgb(249, 196, 232)' }}>
          {' '}
          @/components/dom/instructions.jsx
        </bold>
      </div>
    </div>
  )
}
