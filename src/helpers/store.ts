import create from 'zustand'

const useStore = create((set) => {
  return {
    router: {},
    dom: null,
  }
})

export default useStore
