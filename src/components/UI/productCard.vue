<template>
    <div class="table4">
        <div class="column">
            <div class="cell4">
                <div class="imageProduct" style="background-image: url(&quot;undefined&quot;);">
                </div>
            </div>
            <div class="cell4">
                <p class="titleProduct">
                    <slot name="title"></slot>
                </p>
                <p class="price padTop18">
                    <slot name="price"></slot>
                </p>
            </div>
            <div class="cell4 padd20 moorButton">
                <p class="text4">В корзину</p>
                <svg class="sm grin opacity">
                    <use xlink:href="@/assets/icons/plus.svg#plus"></use>
                </svg>
            </div>
            <a class="cell4 padd20 moorButton" href="#" @click="prod">
                <p class="text4">Подробнее</p>
                <svg class="sm grin opacity">
                    <use xlink:href="@/assets/icons/arrow.svg#arrow"></use>
                </svg>
            </a>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const prod = () => {
    router.push('product')
}
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars.scss";

.table4 {
    display: flex;
    width: 100%;
}

.moorButton {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: relative;

    &:hover .opacity {
        opacity: 1;
        transform: translate(-20%);
    }
}

.column {
    display: flex;
    width: 100%;
    flex-direction: column;
}

.cell4 {
    border: 2px solid white;
    margin: 0 -2px -2px 0;
    padding: 30px 20px;
}

.imageProduct {
    width: 100%;
    height: 86px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.titleProduct {
    font-family: $titleFont;
    font-size: 20px;
    font-weight: 300;
    line-height: 22px;
    min-height: 66px;
    overflow: hidden;
}

.price {
    font-family: $titleFont;
    color: #48b322;
    font-size: 22px;
}

.text4 {
    font-family: $titleFont;
    font-size: 22px;
    font-weight: 300;
    line-height: 22px;
    color: white;
    user-select: none;
    -webkit-user-select: none;
}
</style>