<template>
  <div class="modal-wrapper modal-overlay">
    <div class="modal">
      <div _ngcontent-ng-c3841248351="" class="modal-container">
        <div _ngcontent-ng-c3841248351="" class="title-modal">
          <p>Меню</p>
          <svg class="cross" @click="varStore.menuHead">
            <use xlink:href="@/assets/icons/close.svg#close"></use>
          </svg>
        </div>
        <div class="content-modal">
          <a v-for="category in catStore.getCategories" :key="category.id" class="cell-modal" href="/category">
            <p>{{ category.name }}</p>
          </a>
          <a class="cell-modal" href="/about">
            <p>О нас</p>
          </a>
          <a class="cell-modal" href="/faq">
            <p>FAQ</p>
          </a>
          <a class="cell-modal" href="/delivery">
            <p>Доставка</p>
          </a>
          <a class="cell-modal" href="/requisites">
            <p>Реквизиты</p>
          </a>
          <a class="cell-modal" href="/contacts">
            <p>Контакты</p>
          </a>
        </div>
      </div>
    </div>
    <!-- <div class="modal-overlay"></div> -->
  </div>
</template>

<script setup>
import { useVarStore } from '@/stores/vars.js'
import { useCategoriesStore } from '@/stores/categories.js'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const varStore = useVarStore()
const catStore = useCategoriesStore()

</script>

<style lang="scss">
@import "@/assets/scss/utils/vars.scss";

.modal {
  min-width: auto;
  width: 100%;
  min-height: auto;
  height: 100vh;
  background-color: rgb(255, 255, 255);
}

.modal-container {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100%;
  padding: 130px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 1240px) {
    max-width: 940px;
  }

  @media (max-width: 980px) {
    max-width: 620px;
  }

  @media (max-width: 680px) {
    max-width: 460px;
    padding: 60px 0;
  }

  @media (max-width: 520px) {
    max-width: 300px;
  }
}

.title-modal {
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: $titleFont;
    font-size: 61px;
    font-weight: 300;
    line-height: 60px;
    text-transform: uppercase;
    color: #48b322;
  }
}

.cross {
  width: 30px;
  height: 30px;
  color: #B3B3B3;
  cursor: pointer;

  &:hover {
    color: #202020;
  }
}

.content-modal {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
}

.cell-modal {
  border: 2px solid black;
  margin: 0 -2px -2px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

  &:hover p {
    color: #48b322;
  }

  p {
    font-family: $titleFont;
    color: black;
    font-size: 14px;
  }

  @media (max-width: 680px) {
    padding: 30px 0;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0006;
  z-index: 99;
}
</style>@/stores/categories.js