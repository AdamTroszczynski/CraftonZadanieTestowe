<template>
  <section>
    <InvestmentsSlider :slides="slides" />
  </section>
</template>
<script setup lang="ts">
import InvestmentsSlider from '@/widgets/InvestmentsSlider.vue';

const slides = [
  {
    imgSrc: '/photo.webp',
    location: 'Poznań 20-300',
    header: 'Poznań Park',
    description:
      'Poznań Park to kameralne osiedle nowoczesnych domów, które harmonijnie łączy komfort życia z bliskością natury. Położone zaledwie 10 minut od centrum Poznania, oferuje ciszę i zieleń bez kompromisów – z łatwym dostępem do miejskich udogodnień.',
    link: '',
  },
  {
    imgSrc: '/photo.webp',
    location: 'Poznań 20-300',
    header: 'Poznań Park',
    description:
      'Poznań Park to kameralne osiedle nowoczesnych domów, które harmonijnie łączy komfort życia z bliskością natury. Położone zaledwie 10 minut od centrum Poznania, oferuje ciszę i zieleń bez kompromisów – z łatwym dostępem do miejskich udogodnień.',
    link: '',
  },
];
</script>
