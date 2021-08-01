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
        <span style={{ color: 'rgb(249, 196, 232)' }}> @/pages/index.jsx </span>
        <br />
        Step 2 - <span style={{ color: 'rgb(84, 90, 114)' }}>update:</span>
        <span style={{ color: 'rgb(249, 196, 232)' }}>
          {' '}
          @/components/canvas/Box.jsx{' '}
        </span>
        <br />
        Step 3 - <span style={{ color: 'rgb(84, 90, 114)' }}>delete:</span>
        <span style={{ color: 'rgb(249, 196, 232)' }}> @/pages/box.jsx </span>
        <br />
        Step 4 -{' '}
        <span style={{ color: 'rgb(84, 90, 114)' }}>update header:</span>
        <span style={{ color: 'rgb(249, 196, 232)' }}> @/config.jsx </span>
        <br />
        Step 5 - <span style={{ color: 'rgb(84, 90, 114)' }}>delete:</span>
        <span style={{ color: 'rgb(249, 196, 232)' }}>
          {' '}
          @/components/dom/Instructions.jsx
        </span>
      </div>
    </div>
  )
}
