<template>
  <div
    class="border-stroke flex flex-col overflow-hidden rounded-lg border lg:flex-row-reverse xl:gap-13"
  >
    <img :src="imgSrc" :alt="header" class="object-cover lg:w-[55%] xl:object-fill 2xl:w-[738px]" />
    <div class="flex flex-col gap-5 p-10 xl:justify-end xl:p-14">
      <span class="text-dark d-headline-h5 flex items-center gap-5 xl:mt-11">
        <InteractiveIcon icon="location" />{{ location }}
      </span>
      <h2 class="text-dark d-headline-h2">{{ header }}</h2>
      <p class="d-body-regular-l text-text">
        {{ description }}
      </p>
      <div class="pt-8 lg:pt-13">
        <BaseButton :is-blue="true" icon="arrow">Poznaj szczegóły</BaseButton>
      </div>
      <div class="flex items-center justify-center gap-5 lg:justify-start lg:pt-15">
        <button
          @click="emit('prevClick')"
          class="border-dark flex h-[53px] w-[53px] cursor-pointer items-center justify-center rounded-full border"
          :class="isFirstSlide ? 'opacity-20' : ''"
        >
          <BaseIcon name="slideArrow" color="dark" class="rotate-180" />
        </button>
        <button
          @click="emit('nextClick')"
          class="border-dark flex h-[53px] w-[53px] cursor-pointer items-center justify-center rounded-full border"
          :class="isLastSlide ? 'opacity-20' : ''"
        >
          <BaseIcon name="slideArrow" color="dark" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/icons/BaseIcon.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import InteractiveIcon from '@/components/icons/InteractiveIcon.vue';
defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isFirstSlide: {
    type: Boolean,
    default: true,
  },
  isLastSlide: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  nextClick: [];
  prevClick: [];
}>();
</script>
