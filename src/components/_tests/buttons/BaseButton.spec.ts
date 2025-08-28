import { expect, it, describe } from 'vitest';
import { type VueWrapper, type DOMWrapper, mount } from '@vue/test-utils';
import BaseButton from '@/components/buttons/BaseButton.vue';

describe('BaseButton.vue', (): void => {
  let component: VueWrapper;

  const createComponent = (config = {}): void => {
    component = mount(BaseButton, config);
  };

  const findRoot = (): DOMWrapper<Element> => component.find('[data-test="BaseButtonRoot"]');

  const findIcon = (): DOMWrapper<Element> => component.find('[data-test="BaseButtonIcon"]');

  describe('Props', (): void => {
    it('should set tailwind classes when props.isBlue is true', (): void => {
      // Given
      createComponent({ props: { isBlue: true } });

      // When
      const rootElement = findRoot();

      // Then
      expect(rootElement.classes()).toContain('bg-primary');
      expect(rootElement.classes()).toContain('text-white');
    });
  });

  it('should set tailwind classes when props.isWhite is true', (): void => {
    // Given
    createComponent({ props: { isWhite: true } });

    // When
    const rootElement = findRoot();

    // Then
    expect(rootElement.classes()).toContain('bg-surface-light');
    expect(rootElement.classes()).toContain('text-dark');
  });

  it('should set tailwind classes when props.isSmaller is true', (): void => {
    // Given
    createComponent({ props: { isSmaller: true } });

    // When
    const rootElement = findRoot();

    // Then
    expect(rootElement.classes()).toContain('px-10');
    expect(rootElement.classes()).toContain('py-8');
  });

  it('should set tailwind classes when props.isSmaller is false', (): void => {
    // Given
    createComponent({ props: { isSmaller: false } });

    // When
    const rootElement = findRoot();

    // Then
    expect(rootElement.classes()).toContain('xl:py-10');
    expect(rootElement.classes()).toContain('xl:px-13');
  });

  it('should render icon when props.icon is true', (): void => {
    // Given
    createComponent({ props: { icon: 'arrow' } });

    // When
    const iconElement = findIcon();

    // Then
    expect(iconElement.exists()).toBe(true);
  });
});
