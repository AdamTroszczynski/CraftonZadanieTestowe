<template>
  <label
    class="d-headline-h6 flex w-full flex-col gap-5 uppercase"
    :class="isDisabled ? 'text-stroke-on-dark' : 'text-text'"
    data-test="BaseInputLabel"
  >
    {{ label }}
    <input
      v-if="!isTextarea"
      v-model="value"
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="isDisabled"
      class="d-body-regular-l rounded-sm border bg-white p-6 focus:outline-none"
      :class="setInputClasses"
      data-test="BaseInputRoot"
    />
    <textarea
      v-else
      v-model="value"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :disabled="isDisabled"
      class="d-body-regular-l min-h-[152px] rounded-sm border bg-white p-6 focus:outline-none"
      :class="setInputClasses"
      data-test="BaseInputTextarea"
    ></textarea>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isTextarea: {
    type: Boolean,
    default: false,
  },
});

const { value, errorMessage } = useField<string>(props.name);

/**
 * Set input classes based on props
 * @returns { string } Tailwind classes
 */
const setInputClasses = computed<string>(() => {
  return [
    props.isDisabled
      ? 'text-surface-medium border-stroke-light'
      : 'border-stroke text-text placeholder:text-text focus:border-primary focus:text-dark focus:placeholder:text-dark',
    errorMessage.value && '!border-error !placeholder:text-error !bg-error/10',
  ]
    .filter(Boolean)
    .join(' ');
});
</script>
