import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';

export type NavbarSections = 'home' | 'investments' | 'tutorials' | 'contact';

export const useGlobalStore = defineStore('globalstore', () => {
  const activeSection: Ref<NavbarSections> = ref('home');

  return { activeSection };
});
