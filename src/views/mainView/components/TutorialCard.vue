<template>
  <div
    class="border-stroke xl:max-w-auto flex w-full max-w-[580px] flex-col gap-10 rounded-md border bg-white p-11"
  >
    <img
      :src="imgSrc"
      :alt="text"
      class="max-h-[280px] min-h-[280px] rounded-sm object-cover xl:max-h-[222px] xl:min-h-[222px]"
      data-test="TutorialCardImg"
    />
    <h4
      class="d-headline-h4 text-dark mt-10 uppercase xl:max-w-[328px]"
      data-test="TutorialCardText"
    >
      {{ text }}
    </h4>
    <div class="flex pt-13">
      <BaseButton :is-white="true">Przejdź do artykułu</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';

defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: '',
  },
});
</script>
