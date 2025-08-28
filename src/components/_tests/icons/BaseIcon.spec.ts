import { expect, it, describe } from 'vitest';
import { type VueWrapper, type DOMWrapper, mount } from '@vue/test-utils';
import BaseIcon from '@/components/icons/BaseIcon.vue';

describe('BaseIcon.vue', (): void => {
  let component: VueWrapper;

  const createComponent = (config = {}): void => {
    component = mount(BaseIcon, config);
  };

  const findRoot = (): DOMWrapper<Element> => component.find('[data-test="BaseIconRoot"]');

  describe('Props', (): void => {
    it('should set icon color based on props.color', (): void => {
      // Given
      createComponent({ props: { name: 'arrow', color: 'dark' } });

      // When
      const rootElement = findRoot();

      // Then
      expect(rootElement.classes()).toContain('fill-dark');
    });
  });
});
