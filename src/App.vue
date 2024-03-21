<template>
  <div class="wrapper">
    <div class="image"></div>
    <Header />
    <!-- <div class="wrapper-content"> -->

    <RouterView />

    <!-- </div> -->
    <Footer />
    <ModalMenu v-if="0" />
  </div>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ModalMenu from '@/components/UI/modalMenu.vue'
</script>