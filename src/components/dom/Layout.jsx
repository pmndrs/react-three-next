const Layout = ({ children }) => {
  return (
    <div className='absolute top-0 left-0 z-10 h-screen w-screen overflow-hidden bg-zinc-900 text-gray-50'>
      {children}
    </div>
  )
}

export { Layout }
