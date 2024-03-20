<template>
  <header v-if="0">
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="oneLine">
            <h1 class="logo">SERVE<span class="grin">RAM</span>RU</h1>
            <p class="fS14">
              Оригинальные серверные<br>комплектующие
            </p>
          </div>
          <p class="logo">Меню</p>
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
