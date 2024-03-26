import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'
import { useVarStore } from '@/stores/vars.js'

const URL = "https://diskovod.com/api/products";

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: null,
    productsCategory: null,
    productsPromo: null,
  }),
  getters: {
    getProducts: state => state.products,
    getProductsPromo: state => state.productsPromo,
    getProductsCategory: state => state.productsCategory,
  },
  actions: {
    async loadProducts(str, slug, has = true) {
      const varStore = useVarStore()
      if (has) {
        const { isFetching, error, data } = await useFetch(`${URL}${str}${slug}`).json()
        varStore.isFetching = isFetching.value
        if (str === '?promo=') {
          this.productsPromo = data.value.items
        }
        if (str === '?category=') {
          this.productsCategory = data.value.items
        }
      }
    }
  }
})