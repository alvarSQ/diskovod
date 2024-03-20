<template>
  <div class="container3">
    <div class="content">
      <p class="ptitle">Широкий ассортимент продукции</p>
      <!--  -->
      <div class="grid-container">
        <div class="logoCo">
          <svg class="lg">
            <use xlink:href="@/assets/icons/Hewlett_Packard_Enterprise_logo.svg#Hewlett_Packard_Enterprise_logo"></use>
          </svg>
        </div>
        <div class="logoCo">
          <svg class="lg">
            <use xlink:href="@/assets/icons/Dell_Logo.svg#Dell_Logo"></use>
          </svg>
        </div>
        <div class="logoCo">
          <svg class="lg">
            <use xlink:href="@/assets/icons/IBM_logo.svg#IBM_logo"></use>
          </svg>
        </div>
        <div class="logoCo">
          <svg class="lg">
            <use xlink:href="@/assets/icons/Intel_logo.svg#Intel_logo"></use>
          </svg>
        </div>
        <div class="logoCo">
          <svg class="lg">
            <use xlink:href="@/assets/icons/Huawei_logo.svg#Huawei_logo"></use>
          </svg>
        </div>
        <div class="logoCo">
          <svg class="lg">
            <use xlink:href="@/assets/icons/Micron_Technology_logo.svg#Micron_Technology_logo"></use>
          </svg>
        </div>
        <div class="logoCo">
          <svg class="lg">
            <use xlink:href="@/assets/icons/Kingston_logo.svg#Kingston_logo"></use>
          </svg>
        </div>
        <div class="logoCo">
          <svg class="lg">
            <use xlink:href="@/assets/icons/SK_Hynix_logo.svg#SK_Hynix_logo"></use>
          </svg>
        </div>
        <div class="logoCo">
          <svg class="lg">
            <use xlink:href="@/assets/icons/Samsung_Logo.svg#Samsung_Logo"></use>
          </svg>
        </div>
        <p>
          Мы&nbsp;работаем с&nbsp;ведущими производителями, чтобы предложить нашим
          клиентам самые современные и&nbsp;надежные решения для их&nbsp;потребностей.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container3 {
  width: 100%;
  background: black;
  opacity: 1;
  border-top: 2px solid #48b322;
  border-bottom: 2px solid #48b322;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 170px 0;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
  padding-top: 60px;
  p {
    font-size: 16px;
    grid-column: span 2;
  }
}

.logoCo {
  background-color: #202020;
  width: 100%;
  height: 111px;
  position: relative;
}

.lg {
  width: 160px;
  height: 160px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>
>
