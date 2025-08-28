import { expect, it, describe } from 'vitest';
import { type VueWrapper, type DOMWrapper, mount } from '@vue/test-utils';
import LinkButton from '@/components/buttons/LinkButton.vue';

describe('LinkButton.vue', (): void => {
  let component: VueWrapper;

  const createComponent = (config = {}): void => {
    component = mount(LinkButton, config);
  };

  const findRoot = (): DOMWrapper<Element> => component.find('[data-test="LinkButtonRoot"]');

  const findIcon = (): DOMWrapper<Element> => component.find('[data-test="LinkButtonIcon"]');

  describe('Props', (): void => {
    it('should set tailwind classes when props.isActive is true', (): void => {
      // Given
      createComponent({ props: { isActive: true } });

      // When
      const rootElement = findRoot();

      // Then
      expect(rootElement.classes()).toContain('text-primary');
      expect(rootElement.classes()).not.toContain('text-dark');
    });
  });

  it('should set href based on props.link', (): void => {
    // Given
    createComponent({ props: { link: 'testLink' } });

    // When
    const rootElement = findRoot();

    // Then
    expect(rootElement.attributes()['href']).toBe('testLink');
  });

  it('should render icon when props.withArrow is true', (): void => {
    // Given
    createComponent({ props: { withArrow: true } });

    // When
    const iconElement = findIcon();

    // Then
    expect(iconElement.exists()).toBe(true);
  });

  it('should NOT render icon when props.withArrow is false', (): void => {
    // Given
    createComponent({ props: { withArrow: false } });

    // When
    const iconElement = findIcon();

    // Then
    expect(iconElement.exists()).toBe(false);
  });
});
