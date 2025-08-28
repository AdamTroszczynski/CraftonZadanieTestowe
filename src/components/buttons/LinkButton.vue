<template>
  <a
    class="xl:d-headline-h5 d-headline-h4 text-dark hover:text-text active:stroke-on-dark flex cursor-pointer items-center uppercase"
    :class="isActive ? 'text-primary' : 'text-dark'"
  >
    <slot />
    <BaseIcon v-if="withArrow" name="navArrow" />
  </a>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/icons/BaseIcon.vue';

defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  withArrow: {
    type: Boolean,
    default: false,
  },
});
</script>
