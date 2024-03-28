<template>
  <template v-if="!varStore.isError">
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
              <div class="filter" :class="{ 'disp-none': propert.values_count === 0 }"
                v-for="propert in prodStore.getProductsCategory.properties" :key="propert.id">
                <p class="filter-title">{{ propert.name }}</p>
                <div class="params">
                  <div class="checkbox-row" v-for="val in propert.values" :key="val">
                    <label>
                      <input :type="propert.filter_type" :value="val" @change="inputProp">
                      <span class="custom-checkbox"></span>
                      <span> {{ val }} {{ propert.measure }} </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div class="products-category">
            <ProductCard v-for="product in prodStore.getProductsCategory.items" :key="product.id"
              :productSlug="product.slug">
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

    </div>
  </template>
  <notFound v-else />
</template>

<script setup>
import { ref, watch, computed } from 'vue'
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


const slug = computed(() => route.params.slug)
const category = computed(() => catStore.getCategoryBySlug(slug.value))
const hasCategory = ref(false)

const inputProp = (e) => {
  console.log(e.target.checked)
  console.log(e.target._value)
}


prodStore.loadProducts('s?category=', slug.value)

watch(
  () => prodStore.getProductsCategory,
  () => {
    hasCategory.value = true
  },
  { deep: true }
)

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
