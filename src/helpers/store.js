import create from 'zustand'

const useStore = create((set, get) => {
  return {
    dom: null,
    router: {},
  }
})

export default useStore
