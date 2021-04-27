export default function Instructions() {
  return (
    <div
      className='absolute top-8 left-1/2 text-gray-50 px-4 py-2 rounded-xl max-w-lg shadow-xl transform -translate-x-1/2'
      style={{ backgroundColor: 'rgb(27, 30, 40)' }}
    >
      <p className='mb-8'>
        This is a minimal starter for Nextjs + Threejs. A11y is included to
        provide a basic layer of accessibility. If you click on the cube it will
        navigate to a dummy '/box' page.
      </p>
      <pre>
        Step 1 - <span style={{ color: 'rgb(84, 90, 114)' }}>update:</span>
        <bold style={{ color: 'rgb(249, 196, 232)' }}>
          {' '}
          src/pages/index.tsx{' '}
        </bold>
        <br />
        Step 2 - <span style={{ color: 'rgb(84, 90, 114)' }}>update:</span>
        <bold style={{ color: 'rgb(249, 196, 232)' }}>
          {' '}
          @/components/canvas/Box.jsx{' '}
        </bold>
        <br />
        Step 3 - <span style={{ color: 'rgb(84, 90, 114)' }}>delete:</span>
        <bold style={{ color: 'rgb(249, 196, 232)' }}> src/pages/box.jsx </bold>
        <br />
        Step 4 -{' '}
        <span style={{ color: 'rgb(84, 90, 114)' }}>update header:</span>
        <bold style={{ color: 'rgb(249, 196, 232)' }}> src/config.js </bold>
        <br />
        Step 5 - <span style={{ color: 'rgb(84, 90, 114)' }}>delete:</span>
        <bold style={{ color: 'rgb(249, 196, 232)' }}>
          {' '}
          @components/dom/instructions.jsx
        </bold>
      </pre>
    </div>
  )
}
