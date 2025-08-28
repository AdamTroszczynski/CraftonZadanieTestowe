<template>
  <a
    class="xl:d-headline-h5 d-headline-h4 hover:text-text active:stroke-on-dark flex cursor-pointer items-center uppercase"
    :href="link"
    :class="isActive ? 'text-primary' : 'text-dark'"
    data-test="LinkButtonRoot"
  >
    <slot />
    <BaseIcon v-if="withArrow" name="navArrow" data-test="LinkButtonIcon" />
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
  link: {
    type: String,
    required: false,
  },
});
</script>
