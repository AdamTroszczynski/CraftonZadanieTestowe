<template>
  <section :id="id" ref="sectionRef"><slot /></section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, type PropType } from 'vue';
import { useGlobalStore, type NavbarSections } from '@/stores/globalStore';

const props = defineProps({
  id: {
    type: String as PropType<NavbarSections>,
    required: true,
  },
});

const sectionRef = ref(null);
const globalStore = useGlobalStore();

let observer: IntersectionObserver | null = null;

/**
 * Set observer to section and set activeSection
 */
onMounted(() => {
  observer = new IntersectionObserver(
    (items) => {
      items.forEach((el) => {
        if (el.isIntersecting) {
          globalStore.activeSection = props.id;
        }
      });
    },
    { threshold: 0.7 },
  );

  if (sectionRef.value) observer.observe(sectionRef.value);
});

// Disconnect observer
onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>
