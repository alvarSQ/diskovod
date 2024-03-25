import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'
import { useVarStore } from '@/stores/vars.js'

const URL = "https://diskovod.com/api/products";

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: null,
  }),
  getters: {
    getProducts: state => state.products
  },
  actions: {
    async loadProducts() {
      const varStore = useVarStore()
      const { isFetching, error, data } = await useFetch(URL).json()
      varStore.isFetching = isFetching.value
      this.products = data.value
    }
  }
})