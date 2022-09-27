export default function Instructions({ children }) {
  return (
    <div
      className='absolute max-w-lg px-10 py-8 text-sm bg-zinc-800 rounded-lg shadow-xl md:text-base top-16 left-1/2 transform -translate-x-1/2'
      style={{ maxWidth: 'calc(100% - 28px)' }}>
      <p className='hidden mb-8 md:block'>{children}</p>
      <div className='tracking-wider'>
        Update your header in <span className='text-green-200'> @/config </span>
        <br />
        The layout is set in <span className='text-green-200'>@/pages/_app</span>
        <br />
        The canvas is configured in <span className='text-green-200'>@/components/canvas/Scene</span>
        <br />
        Update your index component in <span className='text-green-200'>@/pages/index</span>
        <br />
        Delete placeholder pages <span className='text-red-200'> @/pages/blob</span>
        <br />
        Delete <span className='text-red-200'> @/components/dom/Instructions</span>
        <br />
        Delete <span className='text-red-200'> @/components/canvas/Blob</span> &{' '}
        <span className='text-red-200'>/Logo</span>
      </div>
    </div>
  )
}
