import { expect, it, describe } from 'vitest';
import { type VueWrapper, type DOMWrapper, mount } from '@vue/test-utils';
import BaseInput from '@/components/inputs/BaseInput.vue';

describe('BaseInput.vue', (): void => {
  let component: VueWrapper;

  const createComponent = (config = {}): void => {
    component = mount(BaseInput, config);
  };

  const findRoot = (): DOMWrapper<Element> => component.find('[data-test="BaseInputRoot"]');

  const findLabel = (): DOMWrapper<Element> => component.find('[data-test="BaseInputLabel"]');

  const findTextarea = (): DOMWrapper<Element> => component.find('[data-test="BaseInputTextarea"]');

  describe('Props', (): void => {
    it('should set type based on props.type', (): void => {
      // Given
      createComponent({ props: { name: 'testName', type: 'email' } });

      // When
      const rootElement = findRoot();

      // Then
      expect(rootElement.attributes()['type']).toBe('email');
    });

    it('should set name based on props.name', (): void => {
      // Given
      createComponent({ props: { name: 'testName' } });

      // When
      const rootElement = findRoot();

      // Then
      expect(rootElement.attributes()['name']).toBe('testName');
    });

    it('should set id based on props.id', (): void => {
      // Given
      createComponent({ props: { name: 'testName', id: 'testId' } });

      // When
      const rootElement = findRoot();

      // Then
      expect(rootElement.attributes()['id']).toBe('testId');
    });

    it('should set placeholder based on props.placeholder', (): void => {
      // Given
      createComponent({ props: { name: 'testName', placeholder: 'testPlaceholder' } });

      // When
      const rootElement = findRoot();

      // Then
      expect(rootElement.attributes()['placeholder']).toBe('testPlaceholder');
    });

    it('should render label based on props.label', (): void => {
      // Given
      createComponent({ props: { name: 'testName', label: 'testLabel' } });

      // When
      const labelElement = findLabel();

      // Then
      expect(labelElement.text()).contain('testLabel');
    });

    it('should render label based on props.label', (): void => {
      // Given
      createComponent({ props: { name: 'testName', label: 'testLabel' } });

      // When
      const labelElement = findLabel();

      // Then
      expect(labelElement.text()).contain('testLabel');
    });

    it('should set classes based on props.isDisabled', (): void => {
      // Given
      createComponent({ props: { name: 'testName', isDisabled: true } });

      // When
      const rootElement = findRoot();
      const labelElement = findLabel();

      // Then
      expect(rootElement.classes()).contain('text-surface-medium');
      expect(rootElement.classes()).contain('border-stroke-light');
      expect(labelElement.classes()).contain('text-stroke-on-dark');
    });

    it('should render only textarea instead of input when props.isTextarea is true', (): void => {
      // Given
      createComponent({ props: { name: 'testName', isTextarea: true } });

      // When
      const rootElement = findRoot();
      const textarea = findTextarea();

      // Then
      expect(rootElement.exists()).toBe(false);
      expect(textarea.exists()).toBe(true);
    });

    it('should NOT render textarea instead of input when props.isTextarea is false', (): void => {
      // Given
      createComponent({ props: { name: 'testName', isTextarea: false } });

      // When
      const rootElement = findRoot();
      const textarea = findTextarea();

      // Then
      expect(rootElement.exists()).toBe(true);
      expect(textarea.exists()).toBe(false);
    });
  });
});
