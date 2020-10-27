import create from 'zustand'

const useStore = create((set, get) => {
  return {
    router: {},
    updateRoute: (router) => {
      console.log(router)
      // pre-loading events here ?
      set({ router })
    },
  }
})

export default useStore
