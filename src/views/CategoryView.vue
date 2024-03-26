<template>
  <div class="wrapper-category">
    <div class="bg-category"></div>
    <div style="padding-top: 170px;"></div>
    <div style="margin-top: 20px; position: relative; height: auto;"></div>
    <div class="container-category" v-if="hasCategory">
      <div class="title-category">{{ category.name }}</div>
      <div class="content-category">

        <form class="filters">
          <div class="sort">
            <CustomSelect :options="['Порядок: по умолчанию', 'Сначала дешевые', 'Сначала дорогие', 'Новые']"
              :default="'Порядок: по умолчанию'" />
          </div>
          <div>
            <div class="filter">
              <p class="filter-title">Производитель</p>
              <div class="params">
                <div class="checkbox-row">
                  <label>
                    <input type="checkbox" class="ng-untouched ng-pristine ng-valid">
                    <span class="custom-checkbox"></span>
                    <span> Huawei </span>
                  </label>
                </div>
                <div class="checkbox-row">
                  <label>
                    <input type="checkbox" class="ng-untouched ng-pristine ng-valid">
                    <span class="custom-checkbox"></span>
                    <span> Samsung </span>
                  </label>
                </div>
              </div>
            </div>
            <div class="filter">
              <p class="filter-title">Объем</p>
              <div class="params">
                <div class="checkbox-row">
                  <label>
                    <input type="checkbox" class="ng-untouched ng-pristine ng-valid">
                    <span class="custom-checkbox"></span>
                    <span> 16 ГБ </span>
                  </label>
                </div>
                <div class="checkbox-row">
                  <label>
                    <input type="checkbox" class="ng-untouched ng-pristine ng-valid">
                    <span class="custom-checkbox"></span>
                    <span> 17 ГБ </span>
                  </label>
                </div>
                <div class="checkbox-row">
                  <label>
                    <input type="checkbox" class="ng-untouched ng-pristine ng-valid">
                    <span class="custom-checkbox"></span>
                    <span> 32 ГБ </span>
                  </label>
                </div>
              </div>
            </div>
            <div class="filter">
              <p class="filter-title">Тип памяти</p>
              <div class="params">
                <div class="checkbox-row">
                  <label>
                    <input type="checkbox" class="ng-untouched ng-pristine ng-valid">
                    <span class="custom-checkbox"></span>
                    <span> DDR3 LRDIMM </span>
                  </label>
                </div>
                <div class="checkbox-row">
                  <label>
                    <input type="checkbox" class="ng-untouched ng-pristine ng-valid">
                    <span class="custom-checkbox"></span>
                    <span> DDR3 RDIMM </span>
                  </label>
                </div>
                <div class="checkbox-row">
                  <label>
                    <input type="checkbox" class="ng-untouched ng-pristine ng-valid">
                    <span class="custom-checkbox"></span>
                    <span> DDR4 RDIMM </span>
                  </label>
                </div>
              </div>
            </div>
            <div class="filter">
              <p class="filter-title">Совместимость</p>
              <div class="params">
                <div class="checkbox-row">
                  <label>
                    <input type="checkbox" class="ng-untouched ng-pristine ng-valid">
                    <span class="custom-checkbox"></span>
                    <span> HPE </span>
                  </label>
                </div>
                <div class="checkbox-row">
                  <label>
                    <input type="checkbox" class="ng-untouched ng-pristine ng-valid">
                    <span class="custom-checkbox"></span>
                    <span> Lenovo </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="products-category">
          <ProductCard v-for="product in prodStore.getProductsCategory" :key="product.id">
            <template v-slot:title>
              {{ product.name }}
            </template>
            <template v-slot:price>
              {{ product.offers ? `${product.offers[0].price_value.toLocaleString('ru-RU')} р.` : 'нет в наличии' }}
            </template>
          </ProductCard>

        </div>
      </div>
    </div>
    <notFound v-else />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ProductCard from '@/components/UI/productCard.vue'
import CustomSelect from '@/components/UI/custom-select.vue'
import notFound from '@/views/notFound.vue'
import { useRoute, useRouter } from 'vue-router'
import { useVarStore } from '@/stores/vars.js'
import { useCategoriesStore } from '@/stores/categories.js'
import { useProductsStore } from '@/stores/products.js'
const varStore = useVarStore()
const catStore = useCategoriesStore()
const prodStore = useProductsStore()

const router = useRouter()
const route = useRoute()

// const goProduct = () => {
//     router.push({ name: 'product', params: { slug: question.value.id + 1 } })
// }

const slug = computed(() => route.params.slug)
const category = computed(() => catStore.getCategoryBySlug(slug.value))
const hasCategory = computed(() => category.value !== undefined)

prodStore.loadProducts('?category=', slug.value, hasCategory.value)

</script>

<style lang="scss">
@import "@/assets/scss/utils/vars.scss";

.wrapper-category {
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  min-height: 100vh;
}

.bg-category {
  position: absolute;
  top: -800px;
  left: 50%;
  transform: translate(-50%);
  width: 1284px;
  height: 1752px;
  background-image: url("@/assets/img/ellipse.png");
  background-size: cover;
  background-position: center;
}

.container-category {
  position: relative;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding-bottom: 130px;
  z-index: 1;

  @media (max-width: 1240px) {
    max-width: 940px;
  }

  @media (max-width: 980px) {
    max-width: 620px;
  }

  @media (max-width: 680px) {
    max-width: 460px;
  }

  @media (max-width: 520px) {
    max-width: 300px;
  }
}

.title-category {
  font-family: $titleFont;
  color: #48b322;
  font-size: 60px;
  font-weight: 300;
  line-height: 60px;
  text-transform: uppercase;
  padding: 130px 0 60px;

  @media (max-width: 680px) {
    font-size: 40px;
    line-height: 44px;
    padding: 40px 0;
  }
}

.content-category {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 40px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
}

.filters {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sort {
  position: relative;
  margin: 0 -2px -2px 0;
}

.ng-select {
  position: relative;
  display: block;
  box-sizing: border-box;
}

.ng-select-container {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  width: 100%;
  border: 2px solid white;
  outline: none;
  padding: 20px 30px 20px 22px;
  color: white;
  height: auto;
  border-radius: 0;
}

.ng-value-container {
  padding-left: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex: 1;
  align-items: center;
}

.ng-value {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ng-input {
  position: absolute;
  width: 100%;
  top: 5px;
  left: 0;
  padding-left: 10px;
  padding-right: 50px;

  input {
    box-sizing: content-box;
    background: none transparent;
    border: 0 none;
    box-shadow: none;
    outline: none;
    padding: 0;
    cursor: default;
    width: 100%;
  }
}

.ng-clear-wrapper {
  cursor: pointer;
  position: relative;
  width: 17px;
  -webkit-user-select: none;
  user-select: none;
}

.ng-clear {
  display: inline-block;
  font-size: 18px;
  line-height: 1;
  pointer-events: none;
}

.ng-arrow-wrapper {
  cursor: pointer;
  position: relative;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
  width: 25px;
  padding-right: 5px;
}

.ng-arrow {
  top: -2px;
  border-color: transparent transparent #999;
  border-width: 0 5px 5px;
  pointer-events: none;
  display: inline-block;
  height: 0;
  width: 0;
  position: relative;
}

.ng-dropdown-panel {
  border: 2px solid #48b322;
  top: auto;
  bottom: 3px;
  transform: translateY(100%);
  border-radius: 0;
}

.scroll-host {
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  display: block;
  height: auto;
  box-sizing: border-box;
  max-height: 240px;
}

.ng-option {
  background-color: black;
  color: white;
  padding: 20px;
  transition: .2s all;
  border-radius: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.filter {
  border: 2px solid white;
  margin: 0 -2px -2px 0;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.filter-title {
  color: #48b322;
  font-family: $titleFont;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
}

.params {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.checkbox-row {
  display: flex;
  gap: 5px;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input[type=checkbox] {
    display: none;
  }
}

.custom-checkbox {
  margin-right: 5px;
  width: 20px;
  height: 20px;
  border: 2px solid #B3B3B3;
  background-color: black;
  display: inline-block;
  position: relative;
}

input[type=checkbox]:checked+.custom-checkbox {
  border: 2px solid white;
}

input[type=checkbox]:checked+.custom-checkbox:after {
  content: url("@/assets/icons/check.svg");
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.products-category {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
}
</style>