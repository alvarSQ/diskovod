import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'
import { useVarStore } from '@/stores/vars.js'

const URL = "https://diskovod.com/api/categories";

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: null,
  }),
  getters: {
    getCategories: state => state.categories,
    getCategoryBySlug: state => slug => state.categories.find(el => el.slug === slug),
  },
  actions: {
    async loadCategories() {
      const varStore = useVarStore()
      const { isFetching, error, data } = await useFetch(URL).json()
      varStore.isFetching = isFetching.value
      this.categories = data.value
      varStore.isError = error.value
    }
  }
})