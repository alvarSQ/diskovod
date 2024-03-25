<template>
  <header v-if="isHeader">
    <div class="navbar">
      <div class="black_nav">
        <div class="container padd30">
          <div class="navbar-content">
            <div class="oneLine">
              <a href="#" @click="home">
                <p class="logo">SERVE<span class="grin">RAM</span>RU</p>
              </a>
              <p class="text_logo">
                Оригинальные серверные<br>комплектующие
              </p>
            </div>
            <p class="logo" @click="varStore.menuHead">Меню</p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <header v-else>
    <div class="header">
      <div class="container">
        <MenuTable />
      </div>
    </div>
  </header>
</template>

<script setup>
import MenuTable from '@/components/UI/menuTable.vue'
import { ref } from 'vue'
import { useVarStore } from '@/stores/vars.js'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const varStore = useVarStore()

const home = () => {
  router.push('/')
}

const isHeader = ref(false)

window.addEventListener('scroll', function () {
  if (window.scrollY > 176) {
    isHeader.value = true
  }
  else {
    isHeader.value = false
  }

});
</script>

<style lang="scss">
.black_nav {
  background-color: #000000e6;
  width: 100%;
}
</style>@/stores/categories.js