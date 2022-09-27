export default function Instructions({ children }) {
  return (
    <div
      className='absolute max-w-lg px-10 py-8 text-sm bg-zinc-800 rounded-lg shadow-xl md:text-base top-16 left-1/2 text-gray-50 transform -translate-x-1/2'
      style={{ maxWidth: 'calc(100% - 28px)' }}>
      <p className='hidden mb-8 md:block'>{children}</p>
      <div className='tracking-wider'>
        Step 1 - <span className='text-green-200'>update:</span>
        <span className='text-red-200'> @/pages/index </span>
        <br />
        Step 2 - <span className='text-green-200'>update:</span>
        <span className='text-red-200'>@/components/canvas/Shader/Shader</span>
        <br />
        Step 3 - <span className='text-green-200'>delete:</span>
        <span className='text-red-200'> @/pages/box </span>
        <br />
        Step 4 - <span className='text-green-200'>update header:</span>
        <span className='text-red-200'> @/config </span>
        <br />
        Step 5 - <span className='text-green-200'>delete:</span>
        <span className='text-red-200'> @/components/dom/Instructions</span>
      </div>
    </div>
  )
}
