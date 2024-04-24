import { defineStore } from 'pinia'
import { useVarStore } from '@/stores/vars.js'
import axios from 'axios'

const URL_PRODUCTS = "https://diskovod.com/api/products";
const URL_PRODUCT = "https://diskovod.com/api/product/";

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: null,
    product: null,
    productsPromo: null,
  }),
  getters: {
    getProducts: state => state.products,
    getProduct: state => state.product,
    getProductsPromo: state => state.productsPromo,
  },
  actions: {    
    async loadProducts(queryParameters) {
      const varStore = useVarStore()
      try {
        const response = await axios.get(URL_PRODUCTS, { params: queryParameters })
        queryParameters.toString() === 'promo=osobye-predlozheniya' ? this.productsPromo = response.data : this.products = response.data
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

