<template>
  <Swiper
    ref="swiperElement"
    class="3xl:!px-17 !px-10 2xl:!px-15"
    :slides-per-view="1"
    :space-between="24"
    :breakpoints="{
      1280: { spaceBetween: 56 },
      1440: { spaceBetween: 80 },
    }"
    @swiper="setSwiper"
  >
    <SwiperSlide
      v-for="slide in slides"
      :key="slide.header"
      class="swiper-slide border-stroke flex flex-col gap-10 overflow-hidden rounded-lg border"
    >
      <img :src="slide.imgSrc" :alt="slide.header" />
      <div class="flex flex-col gap-5 p-10">
        <span class="text-dark d-headline-h5 flex items-center gap-5"
          ><BaseIcon name="location" />{{ slide.location }}</span
        >
        <h2 class="text-dark d-headline-h2">{{ slide.header }}</h2>
        <p class="d-body-regular-l text-text">
          {{ slide.description }}
        </p>
        <div class="pt-7">
          <BaseButton :is-blue="true" icon="arrow">Poznaj szczegóły</BaseButton>
        </div>
        <div class="flex items-center justify-center gap-5">
          <button
            @click="swiperElement?.slidePrev()"
            class="border-dark flex h-[53px] w-[53px] items-center justify-center rounded-full border"
            :class="isFirstSlide ? 'opacity-20' : ''"
          >
            <BaseIcon name="slideArrow" color="dark" class="rotate-180" />
          </button>
          <button
            @click="swiperElement?.slideNext()"
            class="border-dark flex h-[53px] w-[53px] items-center justify-center rounded-full border"
            :class="isLastSlide ? 'opacity-20' : ''"
          >
            <BaseIcon name="slideArrow" color="dark" />
          </button>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/icons/BaseIcon.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import { SwiperSlide, Swiper } from 'swiper/vue';
import type { Swiper as SwiperType } from 'swiper';
import { computed, ref, type Ref } from 'vue';

type Slide = {
  imgSrc: string;
  location: string;
  header: string;
  description: string;
  link: string;
};

const swiperElement: Ref<SwiperType | null> = ref(null);

const props = defineProps({
  slides: {
    type: Array<Slide>,
    required: true,
  },
});

const isFirstSlide = computed<boolean>(() => {
  return swiperElement.value?.activeIndex === 0;
});

const isLastSlide = computed<boolean>(() => {
  return swiperElement.value?.activeIndex === props.slides.length - 1;
});

const setSwiper = (swiper: SwiperType) => {
  swiperElement.value = swiper;
};
</script>
