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
            title="WhatsApp" class="cell w66">
            <svg class="sm">
              <use xlink:href="@/assets/icons/whatsapp.svg#whatsapp"></use>
            </svg>
          </a>
          <a href="viber://chat?number=%2B79223275348" target="_blank" rel="nofollow" aria-label="Viber" title="Viber"
            class="cell w66">
            <svg class="sm">
              <use xlink:href="@/assets/icons/viber.svg#viber"></use>
            </svg>
          </a>
          <a href="https://t.me/serveramru" target="_blank" rel="nofollow noopener" aria-label="Telegram"
            title="Telegram" class="cell w66">
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
}

.contacts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
}

.horizontal {
  display: flex;
  flex-direction: row;
}
</style>