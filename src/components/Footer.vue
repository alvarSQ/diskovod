<template>
  <footer class="footer">
    <div class="footer_wrapper">
      <MenuTable />
      <div class="contacts">
        <div class="cell">
          <a href="tel:84956424417">+74956424417</a>
        </div>
        <div class="cell">
          <a href="tel:89265170406">+79265170406</a>
        </div>
        <div class="cell">
          <a href="mailto:sales@serveram.ru">sales@serveram.ru</a>
        </div>
          <BlockSocialIcon class="horizontal" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import MenuTable from '@/components/UI/menuTable.vue'
import BlockSocialIcon from '@/components/UI/blockSocialIcon.vue'
</script>

<style lang="scss">
footer {
  padding-bottom: 46px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.footer_wrapper {
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1240px) {
    max-width: 940px;
  }

  @media (max-width: 980px) {
    max-width: 620px;
  }
}

.contacts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 65px);
  }
}

.horizontal {
  display: flex;
  flex-direction: row;
  .cell_social {
    @media (max-width: 980px) {
        width: 100%;
      }
  }
}

</style>