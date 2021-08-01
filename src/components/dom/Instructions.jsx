export default function Instructions() {
  return (
    <div
      className='absolute max-w-lg px-4 py-2 text-sm shadow-xl pointer-events-none select-none md:text-base top-8 left-1/2 text-gray-50 transform -translate-x-1/2'
      style={{
        backgroundColor: 'rgb(27, 30, 40)',
        maxWidth: 'calc(100% - 28px)',
      }}
    >
      <p className='hidden mb-8 md:block'>
        This is a minimal starter for Nextjs + Threejs. Click on the cube to
        navigate to the `/box` page. OrbitControls is enabled by default.
      </p>
      <div className='tracking-wider'>
        Step 1 - <span style={{ color: 'rgb(84, 90, 114)' }}>update:</span>
        <span style={{ color: 'rgb(249, 196, 232)' }}> @/pages/index </span>
        <br />
        Step 2 - <span style={{ color: 'rgb(84, 90, 114)' }}>update:</span>
        <span style={{ color: 'rgb(249, 196, 232)' }}>
          {' '}
          @/components/canvas/Box{' '}
        </span>
        <br />
        Step 3 - <span style={{ color: 'rgb(84, 90, 114)' }}>delete:</span>
        <span style={{ color: 'rgb(249, 196, 232)' }}> @/pages/box </span>
        <br />
        Step 4 -{' '}
        <span style={{ color: 'rgb(84, 90, 114)' }}>update header:</span>
        <span style={{ color: 'rgb(249, 196, 232)' }}> @/config </span>
        <br />
        Step 5 - <span style={{ color: 'rgb(84, 90, 114)' }}>delete:</span>
        <span style={{ color: 'rgb(249, 196, 232)' }}>
          {' '}
          @/components/dom/Instructions
        </span>
      </div>
    </div>
  )
}
