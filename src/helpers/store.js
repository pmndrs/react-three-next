import create from 'zustand'

const useStore = create(() => {
  return {
    router: {},
    dom: null,
  }
})

export default useStore
