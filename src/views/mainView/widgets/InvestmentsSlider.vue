<template>
  <Swiper
    ref="swiperElement"
    class="3xl:!px-18 !px-11 2xl:!px-16"
    :slides-per-view="1"
    :space-between="24"
    :breakpoints="{
      1280: { spaceBetween: 56 },
      1440: { spaceBetween: 80 },
    }"
    @swiper="setSwiper"
  >
    <SwiperSlide v-for="slide in slides" :key="slide.header" class="swiper-slide">
      <SliderCard
        :img-src="slide.imgSrc"
        :header="slide.header"
        :description="slide.description"
        :location="slide.location"
        :is-first-slide="isFirstSlide"
        :is-last-slide="isLastSlide"
        @next-click="swiperElement?.slideNext()"
        @prev-click="swiperElement?.slidePrev()"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import SliderCard from '@/views/mainView/components/SliderCard.vue';
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

/**
 * Check if slide is first
 * @returns { boolean } Slide is first
 */
const isFirstSlide = computed<boolean>(() => {
  return swiperElement.value?.activeIndex === 0;
});

/**
 * Check if slide is last
 * @returns { boolean } Slide is last
 */
const isLastSlide = computed<boolean>(() => {
  return swiperElement.value?.activeIndex === props.slides.length - 1;
});

/**
 * Save swiper instance to variable
 * @param {SwiperType} swiper Swiper instance
 */
const setSwiper = (swiper: SwiperType) => {
  swiperElement.value = swiper;
};
</script>
