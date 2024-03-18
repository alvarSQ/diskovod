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
<!-- табличный хэдер -->
  <header v-else>
    <div class="header">
      <div class="container">
        <div class="header_table">
          <div class="first_column cell">
            <h1 class="logo">SERVE<span class="grin">RAM</span>RU</h1>
            <p class="fS14">
              Оригинальные серверные<br>комплектующие
            </p>
          </div>
          <div class="second_column fS14">
            <div  class="first_row">
            <div class="cell">
              Серверные SSD накопители
            </div>
            <div class="cell">
                Оперативная память
            </div>
            <div class="cell">
                Системы хранения данных
            </div>
            </div>

            <div  class="second_row">
            <div class="cell">
              О нас
            </div>
            <div class="cell">
                FAQ
            </div>
            <div class="cell">
                Доставка
            </div>
            <div class="cell">
              Реквизиты
            </div>
            <div class="cell">
                Контакты
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>
