<template>
  <div class="wrapper4">
    <div class="bg4"></div>
    <div class="content4">
      <p class="ptitle">Специальные предложения</p>
      <div class="products">
        <ProductCard>
          <template v-slot:title>
            Модуль памяти Samsung 16 ГБ DDR3 M393B2G70DB0-CMA
          </template>
          <template v-slot:price>
            9 800 р.
          </template>
        </ProductCard>
        <ProductCard>
          <template v-slot:title>
            Модуль памяти Samsung 16 ГБ DDR3 M393B2G70DB0-CK0Q2
          </template>
          <template v-slot:price>
            1 750 р.
          </template>
        </ProductCard>
        <ProductCard>
          <template v-slot:title>
            Модуль памяти Samsung 32 ГБ DDR3 M386B4G70DM0-CMA4Q
          </template>
          <template v-slot:price>
            3 980 р.
          </template>
        </ProductCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/UI/productCard.vue'

</script>

<style lang="scss">
.wrapper4 {
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 10px;
  background-color: black;
}

.bg4 {
  position: absolute;
  top: -900px;
  left: -40px;
  transform: translate(-50%);
  transform: rotate(45deg);
  width: 1284px;
  height: 1752px;
  background-image: url("@/assets/img/ellipse.png");
  background-size: cover;
  background-position: center;
}

.content4 {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 170px;
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 70px;
  gap: 40px;
}
</style>
>
