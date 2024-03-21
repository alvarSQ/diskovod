<template>
  <header v-if="0">
    <div class="navbar">
      <div class="black_nav">
        <div class="container padd30">
          <div class="navbar-content">
            <div class="oneLine">
              <a href="#">
                <p class="logo">SERVE<span class="grin">RAM</span>RU</p>
              </a>
              <p class="text_logo">
                Оригинальные серверные<br>комплектующие
              </p>
            </div>
            <p class="logo">Меню</p>
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
</script>

<style lang="scss">
.black_nav {
  background-color: #000000e6;
  width: 100%;
}
</style>