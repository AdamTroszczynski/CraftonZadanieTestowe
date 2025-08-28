<template>
  <header class="relative w-full">
    <div
      class="border-stroke-light 3xl:px-18 relative z-30 flex items-center justify-between border-b bg-white px-11 py-8 xl:py-9 2xl:px-16"
    >
      <LogoIcon />
      <nav aria-label="desktopNavigation" class="3xl:gap-12 hidden gap-7 xl:flex 2xl:gap-11">
        <LinkButton>Home</LinkButton>
        <LinkButton :with-arrow="true">O nas</LinkButton>
        <LinkButton :with-arrow="true">Nasze Inwestycje</LinkButton>
        <LinkButton>Poradnik</LinkButton>
        <LinkButton>Wynajmij</LinkButton>
      </nav>

      <BaseButton :is-blue="true" :is-smaller="true" icon="arrow" class="hidden xl:flex">
        Kontakt
      </BaseButton>

      <button @click="isMenuOpen = !isMenuOpen" class="xl:hidden">
        <BaseIcon name="menu" :width="21" :height="18" color="dark" />
      </button>
    </div>

    <nav
      aria-label="mobileNavigation"
      class="shadow-base absolute right-0 left-0 z-10 flex w-full flex-col gap-10 bg-white px-11 py-10 transition-transform duration-500 ease-in-out xl:hidden"
      :class="isMenuOpen ? 'translate-y-0' : '-translate-y-[400px]'"
    >
      <div class="flex flex-col gap-7">
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
