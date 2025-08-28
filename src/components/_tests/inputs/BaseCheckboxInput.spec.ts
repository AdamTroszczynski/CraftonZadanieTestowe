import { expect, it, describe } from 'vitest';
import { type VueWrapper, type DOMWrapper, mount } from '@vue/test-utils';
import CheckboxInput from '@/components/inputs/CheckboxInput.vue';

describe('CheckboxInput.vue', (): void => {
  let component: VueWrapper;

  const createComponent = (config = {}): void => {
    component = mount(CheckboxInput, config);
  };

  const findRoot = (): DOMWrapper<Element> => component.find('[data-test="CheckboxInputRoot"]');

  describe('Props', (): void => {
    it('should set id based on props.id', (): void => {
      // Given
      createComponent({ props: { name: 'testName', id: 'testId' } });

      // When
      const rootElement = findRoot();

      // Then
      expect(rootElement.attributes()['id']).toBe('testId');
    });

    it('should set name based on props.name', (): void => {
      // Given
      createComponent({ props: { name: 'testName' } });

      // When
      const rootElement = findRoot();

      // Then
      expect(rootElement.attributes()['name']).toBe('testName');
    });
  });
});
