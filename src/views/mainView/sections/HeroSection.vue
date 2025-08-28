<template>
  <section class="3xl:p-18 flex flex-col gap-10 px-11 py-16 2xl:px-16">
    <h1
      class="d-headline-h1 text-dark lg:d-headline-h1-hero max-w-[1038px] text-center uppercase lg:text-start"
    >
      Twój klucz do lepszej przyszłości
    </h1>
    <p class="d-body-regular-xl text-text max-w-[648px] text-center xl:text-start">
      W RealEstate nieruchomości to coś więcej niż tylko budynki - to miejsca, w których powstają
      historie, rozwijają się biznesy i spełniają marzenia.
    </p>
    <div class="flex flex-col gap-10 py-5 lg:flex-row">
      <BaseButton :is-blue="true" icon="arrow">Nasze inwestycje</BaseButton>
      <BaseButton :is-white="true">Poznajmy się</BaseButton>
    </div>
  </section>
</template>
<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
</script>
