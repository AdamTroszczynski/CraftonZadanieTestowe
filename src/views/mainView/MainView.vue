<template>
  <TheNavbar />
  <div class="max-w-[1440px]">
    <HeroSection />
    <TextInvestmentsSection />
    <SliderSection />
    <TextTutorialsSection />
    <TutorialsSection />
    <TutorialsButtonSection />
    <ContactSection />
  </div>
  <TheFooter />
</template>

<script setup lang="ts">
import TheNavbar from '@/widgets/TheNavbar.vue';
import TheFooter from '@/widgets/TheFooter.vue';
import HeroSection from '@/views/mainView/sections/HeroSection.vue';
import TextInvestmentsSection from '@/views/mainView/sections/TextInvestmentsSection.vue';
import SliderSection from '@/views/mainView/sections/SliderSection.vue';
import TextTutorialsSection from '@/views/mainView/sections/TextTutorialsSection.vue';
import TutorialsSection from '@/views/mainView/sections/TutorialsSection.vue';
import TutorialsButtonSection from '@/views/mainView/sections/TutorialsButtonSection.vue';
import ContactSection from '@/views/mainView/sections/ContactSection.vue';
</script>
