<template>
  <div class="menu_table">
    <div class="first_column cell">
      <a href="#">
        <p class="logo">SERVE<span class="grin">RAM</span>RU</p>
      </a>
      <p class="fS14">
        Оригинальные серверные<br>комплектующие
      </p>
    </div>
    <div class="second_column fS14">
      <div class="first_row">
        <a class="cell" href="#">
          <p>Серверные SSD накопители</p>
        </a>
        <a class="cell" href="#">
          <p>Оперативная память</p>
        </a>
        <a class="cell" href="#">
          <p>Системы хранения данных</p>
        </a>
      </div>
      <div class="second_row">
        <a class="cell" href="#">
          <p>О нас</p>
        </a>
        <a class="cell" href="#">
          <p>FAQ</p>
        </a>
        <a class="cell" href="#">
          <p>Доставка</p>
        </a>
        <a class="cell" href="#">
          <p>Реквизиты</p>
        </a>
        <a class="cell" href="#">
          <p>Контакты</p>
        </a>
      </div>
    </div>
    <div class="cell dispNone">
      <p>Меню</p>
    </div>
  </div>
</template>

<script setup>

</script>


<style lang="scss">
@import "@/assets/scss/utils/vars.scss";

.menu_table {
  display: grid;
  grid-template-columns: 1fr 1.8fr auto;
  grid-template-rows: auto;
  width: 1200px;
}

.first_row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 65px;
}

.second_row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 65px;
}

.cell {
  border: 2px solid white;
  margin: 0 -2px -2px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: $titleFont;
  font-size: 14px;
  color: white;

  a {
    color: white;
  }
}

.first_column {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  display: flex;
  gap: 25px;
}

.logo {
  font-size: 26px;
  font-family: $titleFont;
  color: white;
  cursor: pointer;

  &:hover {
    color: #48b322;
  }
}

.dispNone {
  display: none;
}
</style>

