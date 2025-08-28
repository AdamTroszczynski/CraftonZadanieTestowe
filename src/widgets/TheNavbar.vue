<template>
  <header class="relative w-full">
    <div
      class="border-stroke-light 3xl:px-17 relative z-30 flex items-center justify-between border-b bg-white px-10 py-7 xl:py-8 2xl:px-15"
    >
      <LogoIcon />
      <nav aria-label="desktopNavigation" class="3xl:gap-11 hidden gap-6 xl:flex 2xl:gap-10">
        <LinkButton>Home</LinkButton>
        <LinkButton :with-arrow="true">O nas</LinkButton>
        <LinkButton :with-arrow="true">Nasze Inwestycje</LinkButton>
        <LinkButton>Poradnik</LinkButton>
        <LinkButton>Wynajmij</LinkButton>
      </nav>

      <BaseButton :is-blue="true" :is-smaller="true" icon="arrow" class="hidden xl:flex"
        >Kontakt</BaseButton
      >

      <button @click="isMenuOpen = !isMenuOpen" class="xl:hidden">
        <BaseIcon name="menu" :width="21" :height="18" color="dark" />
      </button>
    </div>

    <nav
      aria-label="mobileNavigation"
      class="shadow-base absolute right-0 left-0 z-10 flex w-full flex-col gap-9 bg-white px-10 py-9 transition-transform duration-500 ease-in-out xl:hidden"
      :class="isMenuOpen ? 'translate-y-0' : '-translate-y-[400px]'"
    >
      <div class="flex flex-col gap-6">
        <LinkButton>Home</LinkButton>
        <LinkButton :with-arrow="true">O nas</LinkButton>
        <LinkButton :with-arrow="true">Nasze Inwestycje</LinkButton>
        <LinkButton>Poradnik</LinkButton>
        <LinkButton>Wynajmij</LinkButton>
      </div>
      <div class="w-full">
        <BaseButton :is-blue="true">
          kontakt <BaseIcon name="arrow" color="white" class="rotate-45" :width="20" :height="20" />
        </BaseButton>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import LogoIcon from '@/components/icons/LogoIcon.vue';
import BaseIcon from '@/components/icons/BaseIcon.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import LinkButton from '@/components/buttons/LinkButton.vue';
import { ref, type Ref } from 'vue';

const isMenuOpen: Ref<boolean> = ref(false);
</script>
