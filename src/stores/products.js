import { defineStore } from 'pinia'
import { useVarStore } from '@/stores/vars.js'
import axios from 'axios'

const URL_PRODUCTS = "https://diskovod.pro/api/products";
const URL_PRODUCT = "https://diskovod.pro/api/product/";

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: null,
    product: null,
  }),
  getters: {
    getProducts: state => state.products,
    getProduct: state => state.product,
  },
  actions: {    
    async loadProducts(queryParameters) {
      const varStore = useVarStore()
      try {
        const response = await axios.get(URL_PRODUCTS, { params: queryParameters } )
        this.products = response.data
      } catch (e) {
        varStore.isError = e
      }
    },
    async loadProduct(slug) {
      const varStore = useVarStore()
      try {
        const response = await axios.get(`${URL_PRODUCT}${slug}`)
        this.product = response.data
      } catch (e) {
        varStore.isError = e
      }
    }
  },
})
