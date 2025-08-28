<template>
  <SectionRef id="investments">
    <InvestmentsSlider :slides="slides" />
  </SectionRef>
</template>
<script setup lang="ts">
import InvestmentsSlider from '@/views/mainView/widgets/InvestmentsSlider.vue';
import SectionRef from '@/widgets/SectionRef.vue';

const slides = [
  {
    imgSrc: '/photos/slidePhoto.webp',
    location: 'Poznań 20-300',
    header: 'Poznań Park',
    description:
      'Poznań Park to kameralne osiedle nowoczesnych domów, które harmonijnie łączy komfort życia z bliskością natury. Położone zaledwie 10 minut od centrum Poznania, oferuje ciszę i zieleń bez kompromisów – z łatwym dostępem do miejskich udogodnień.',
    link: '',
  },
  {
    imgSrc: '/photos/slidePhoto.webp',
    location: 'Poznań 20-300',
    header: 'Poznań Park',
    description:
      'Poznań Park to kameralne osiedle nowoczesnych domów, które harmonijnie łączy komfort życia z bliskością natury. Położone zaledwie 10 minut od centrum Poznania, oferuje ciszę i zieleń bez kompromisów – z łatwym dostępem do miejskich udogodnień.',
    link: '',
  },
];
</script>
