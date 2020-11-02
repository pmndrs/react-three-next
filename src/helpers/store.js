import { createRef } from 'react'
import create from 'zustand'

const useStore = create((set, get) => {
  return {
    loading: false,
    dom: null,
    router: {},
    updateRoute: (router) => {
      // pre-loading events here ?
      set({ router })
    },
  }
})

export const useStaticStore = {
  router: createRef(),
}

export default useStore
