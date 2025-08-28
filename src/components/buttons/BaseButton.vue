<template>
  <button
    class="d-headline-h5 flex w-full cursor-pointer items-center justify-center gap-5 rounded-full uppercase duration-300 xl:w-auto"
    :class="setClasses"
  >
    <slot />
    <BaseIcon v-if="icon" :name="icon" :color="isBlue ? 'white' : 'dark'" />
  </button>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type { IconNames } from '@/components/components.types';
import BaseIcon from '../icons/BaseIcon.vue';

const props = defineProps({
  isBlue: {
    type: Boolean,
    default: false,
  },
  isWhite: {
    type: Boolean,
    default: false,
  },
  isSmaller: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String as PropType<IconNames>,
    required: false,
  },
});

/**
 * Set tailwind classes based on props
 * @returns { string } tailwind classes
 */
const setClasses = computed<string>(() => {
  return [
    props.isBlue &&
      'bg-primary text-white hover:bg-primary-hovered hover:text-surface-subtle active:bg-primary-clicked active:text-surface-subtle',
    props.isWhite &&
      'bg-surface-light text-dark border border-stroke hover:text-on-dark active:border-surface-medium active:text-surface-medium',
    props.isSmaller ? 'px-9 py-7' : 'xl:px-12 xl:py-9 py-7',
  ]
    .filter(Boolean)
    .join(' ');
});
</script>
