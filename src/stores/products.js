import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'
import { useVarStore } from '@/stores/vars.js'

const URL = "https://diskovod.com/api/product";

export const useProductsStore = defineStore('products', {
  state: () => ({
    product: null,
    productsCategory: null,
    productsPromo: null,
  }),
  getters: {
    getProduct: state => state.product,
    getProductsPromo: state => state.productsPromo,
    getProductsCategory: state => state.productsCategory,    
  },
  actions: {
    async loadProducts(str = '', slug = '', has = true) {
      const varStore = useVarStore()
      if (has) {
        const { isFetching, error, data } = await useFetch(`${URL}${str}${slug}`).json()
        if (str === 's?promo=') {
          this.productsPromo = data.value.items
        }
        else if (str === 's?category=') {
          this.productsCategory = data.value.items
        }
        else {
          this.product = data.value
        }
        varStore.isError = error
      }
    },
  }
})