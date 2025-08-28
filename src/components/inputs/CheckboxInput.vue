<template>
  <label class="d-body-regular-xs flex gap-4" :class="errorMessage ? 'text-error' : 'text-text'">
    <input
      v-model="value"
      :name="name"
      :id="id"
      type="checkbox"
      class="peer hidden"
      data-test="CheckboxInputRoot"
    />
    <span
      class="border-surface-medium peer-checked:border-primary after:border-surface-medium peer-checked:after:bg-primary peer-checked:after:border-primary relative flex max-h-10 min-h-10 max-w-10 min-w-10 items-center justify-center rounded-full border duration-200 after:absolute after:h-5 after:w-5 after:rounded-full after:border"
    >
    </span>
    <slot />
  </label>
</template>
<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  id: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
});

const { value, errorMessage } = useField(props.name);
</script>
