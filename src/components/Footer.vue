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
        <div class="horizontal">
          <a href="https://wa.me/79223275348" target="_blank" rel="nofollow noopener" aria-label="WhatsApp"
            title="WhatsApp" class="cell_social">
            <svg class="sm">
              <use xlink:href="@/assets/icons/whatsapp.svg#whatsapp"></use>
            </svg>
          </a>
          <a href="viber://chat?number=%2B79223275348" target="_blank" rel="nofollow" aria-label="Viber" title="Viber"
            class="cell_social">
            <svg class="sm">
              <use xlink:href="@/assets/icons/viber.svg#viber"></use>
            </svg>
          </a>
          <a href="https://t.me/serveramru" target="_blank" rel="nofollow noopener" aria-label="Telegram"
            title="Telegram" class="cell_social">
            <svg class="sm">
              <use xlink:href="@/assets/icons/telegram.svg#telegram"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import MenuTable from '@/components/UI/menuTable.vue'
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
}

.cell_social {
  border: 2px solid white;
  margin: 0 -2px -2px 0;
  width: 66px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover .sm {
    fill: #48b322;
  }
  @media (max-width: 980px) {
      width: 100%;
    }
}

</style>