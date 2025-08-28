<template>
  <SectionRef
    id="tutorials"
    class="3xl:px-18 3xl:pb-18 1075:flex-row 1075:gap-7 flex flex-col items-center justify-center gap-13 px-11 pb-11 2xl:gap-13 2xl:px-16 2xl:pb-16"
  >
    <TutorialCard
      img-src="/photos/tutorial_1.webp"
      text="Jak kupić nieruchomość i nie zwariować? Przewodnik dla początkujących."
    />
    <TutorialCard
      img-src="/photos/tutorial_2.webp"
      text="Czym różni się inwestycja w nieruchomość od zwykłego zakupu?"
    />
    <TutorialCard
      img-src="/photos/tutorial_3.webp"
      text="5 technologii, które powinny mieć nowoczesne domy w 2025 roku."
    />
  </SectionRef>
</template>

<script setup lang="ts">
import TutorialCard from '@/views/mainView/components/TutorialCard.vue';
import SectionRef from '@/widgets/SectionRef.vue';
</script>
