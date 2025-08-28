<template>
  <div
    class="bg-surface-medium border-stroke-subtle group active:bg-stroke-subtle flex h-[50px] w-[50px] items-center justify-center rounded-full border-[7px] transition-colors duration-200 active:border-none"
  >
    <BaseIcon
      :name="icon"
      class="fill-primary group-hover:fill-surface-alt group-active:fill-primary transition-colors duration-200"
    />
  </div>
</template>

<script setup lang="ts">
import type { IconNames } from '@/components/components.types';
import BaseIcon from '@/components/icons/BaseIcon.vue';
import type { PropType } from 'vue';

defineProps({
  icon: {
    type: String as PropType<IconNames>,
    required: true,
  },
});
</script>
