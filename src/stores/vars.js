import { defineStore } from 'pinia'

export const useVarStore = defineStore('vars', {
  state: () => ({
    isModal: false,
    isFetching: true,
    isError: false
  }),
  getters: {
    getIsModal: state => state.isModal

  },
  actions: {
    menuHead() { this.isModal = !this.isModal }
  }
})