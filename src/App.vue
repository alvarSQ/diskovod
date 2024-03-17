<template>
  <div class="wrapper">
    <div class="image"></div>
      <Header />
      <div class="wrapper-content">
        <div class="container">
          <RouterView />
        </div>
      </div>
      <Footer />    
  </div>  
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>