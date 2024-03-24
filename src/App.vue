<template>
  <div class="wrapper">    
    <Header />
    <RouterView />
    <Footer />
    <ModalMenu v-if="varStore.getIsModal" />
  </div>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ModalMenu from '@/components/UI/modalMenu.vue'
import { useVarStore } from '@/stores/vars.js'
const varStore = useVarStore()
</script>

