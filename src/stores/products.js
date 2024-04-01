import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'
import { useVarStore } from '@/stores/vars.js'

const URL = "https://diskovod.com/api/product";

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: null,
  }),
  getters: {
    getProducts: state => state.products,
  },
  actions: {
    async loadProducts(slug) {
      const varStore = useVarStore()
      const { isFetching, error, data } = await useFetch(`${URL}${slug}`).json()
      this.products = data.value
      varStore.isError = error
    }
  },
})